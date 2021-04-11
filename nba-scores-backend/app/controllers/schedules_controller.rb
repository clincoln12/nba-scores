class SchedulesController < ApplicationController
  def show
    # return entire schedule for the upcoming 7 days (including today)
    date_range = Date.today.in_time_zone('America/New_York').beginning_of_day..(Date.today + 6.days).in_time_zone('America/New_York').end_of_day
   
    games = Game.where(game_time: date_range)

    games_by_date = {}

    games.each do |g|
      game_date = g.game_time.to_date.in_time_zone('America/New_York')
      key = game_date.strftime('%Y-%m-%d')

      if games_by_date.key?(key)
        games_by_date[key] << g
      else
        games_by_date[key] = [g]
      end
    end

    render json: games_by_date
  end
end