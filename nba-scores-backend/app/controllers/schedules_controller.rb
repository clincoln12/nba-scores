class SchedulesController < ApplicationController
  def show
    # return entire schedule for the upcoming 7 days (including today)
    date_range = Date.today.in_time_zone('America/New_York').beginning_of_day..(Date.today + 6.days).in_time_zone('America/New_York').end_of_day
   
    render json: Game.where(game_time: date_range)
  end
end