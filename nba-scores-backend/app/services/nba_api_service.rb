class NbaApiService
  API_URL = 'https://api-nba-v1.p.rapidapi.com'

  def process_and_refresh_all_games_in_database
    games = get_all_games_in_season(2020)

    db_all_unfinished_games = Game.all.where.not(status: 'Finished')
    # Limit the search to unfinished games and make only one database call
    # To be more efficient

    games.each do |g|
      puts "Checking game with id #{g['gameId']}"

      db_game = db_all_unfinished_games.find_by(api_game_id: g['gameId'])

      puts 'Game is not in unfinished games.' unless db_game
      next unless db_game

      puts "Now processing unfinished game #{g['gameId']}"

      unless db_game.home_team_score == g['hTeam']['score']['points'] ||
        db_game.away_team_score == g['vTeam']['score']['points'] ||
        db_game.status == g['statusGame']

        db_game.update({
          home_team_score: g['hTeam']['score']['points'],
          away_team_score: g['vTeam']['score']['points'],
          status: g['statusGame']
        })
      end
    end
  end

  def get_all_games_in_season(year)
    conn = connection("games/seasonYear/#{year}")
    response = conn.get

    parsed_response = JSON.parse(response.body)

    games = parsed_response['api']['games']
  end

  def seed(year)
    # Get all teams available + all games for a year, and create a representation of them in our own database
    games = get_all_games_in_season(year)

    seed_database_from_api_response(games)
  end

  def seed_database_from_api_response(games)
    games.each do |g|
      unless home_team = Team.find_by(short_name: g['hTeam']['shortName'])
        home_team = Team.create({
          full_name: g['hTeam']['fullName'],
          short_name: g['hTeam']['shortName'],
          logo: g['hTeam']['logo'],
          api_team_id: g['hTeam']['teamId'],
        })
      end

      unless away_team = Team.find_by(short_name: g['vTeam']['shortName'])
        away_team = Team.create({
          full_name: g['vTeam']['fullName'],
          short_name: g['vTeam']['shortName'],
          logo: g['vTeam']['logo'],
          api_team_id: g['vTeam']['teamId'],
        })
      end

      Game.create({
        game_time: g['startTimeUTC'].to_time,
        home_team_id: home_team.id,
        away_team_id: away_team.id,
        home_team_score: g['hTeam']['score']['points'],
        away_team_score: g['vTeam']['score']['points'],
        api_game_id: g['gameId'],
        status: g['statusGame']
      })
    end
  end

  def connection(path)
    conn = Faraday.new("#{API_URL}/#{path}") do |c|
      c.headers["x-rapidapi-key"] = "#{Rails.application.credentials.nba_api_key}"
      c.headers["x-rapidapi-host"] = "api-nba-v1.p.rapidapi.com"
    end
  end
end