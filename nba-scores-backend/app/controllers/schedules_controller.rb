class SchedulesController < ApplicationController
  def show
    # return entire schedule for the upcoming 7 days (including today)
    games_by_date = {}

    7.times do |x|
      date = (Date.today + x.days).in_time_zone('America/New_York')
      games = Game.where(game_time: date.all_day)
    
      game_attributes = games.select(:id, :game_time, :home_team_score, :away_team_score, :status, :home_team_id, :away_team_id)

      games = game_attributes.map do |g|
        home_team = g.home_team.attributes.slice('full_name', 'logo')
        away_team = g.away_team.attributes.slice('full_name', 'logo')
  
        g.attributes.merge({ home_team: home_team, away_team: away_team })
      end

      games_by_date[date.strftime('%Y-%m-%d')] = games
    end
    
    render json: games_by_date
  end
end