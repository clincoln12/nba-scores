class SchedulesController < ApplicationController
  def show
    # return entire schedule for the upcoming 7 days (including today)
    games_by_date = {}

    7.times do |x|
      date = (Date.today + x.days).in_time_zone('America/New_York')
      games = Game.where(game_time: date.all_day)

      games_by_date[date.strftime('%Y-%m-%d')] = games.map(&:attributes_with_team_data)
    end
    
    render json: games_by_date
  end
end