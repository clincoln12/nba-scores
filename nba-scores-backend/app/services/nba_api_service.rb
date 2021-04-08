class NbaApiService
  API_URL = 'https://api-nba-v1.p.rapidapi.com'

  def seed(year)
    # Get all teams available + all games for a year, and create a representation of them in our own database
    conn = connection("games/seasonYear/#{year}")
    response = conn.get

    parsed_response = JSON.parse(response.body)

    games = parsed_response['api']['games']

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