class GamesController < ApplicationController
  before_action :set_cors_headers

  def index
    if params[:date]
      games = Game.where(game_time: params[:date].to_date.in_time_zone('America/New_York').all_day)

      games.select(:id, :game_time, :home_team_score, :away_team_score, :status, :home_team_id, :away_team_id)

      @games = games.map do |g|
        home_team = g.home_team.attributes.slice('short_name', 'logo')
        away_team = g.away_team.attributes.slice('short_name', 'logo')

        g.attributes.merge({ home_team: home_team, away_team: away_team })
      end
    else
      @games = Game.all
    end

    render json: @games
  end
 
  def update
    api_service = NbaApiService.new
    
    if params[:id] == 'all'
      begin 
        api_service.process_and_refresh_all_games_in_database
        render json: { success: true }
      rescue
        render json: { error: true }
      end
    else 
      render json: { error: 'We do not currently support updating individual games.' }
    end
  end

  private

  def set_cors_headers
    response.set_header "Access-Control-Allow-Origin", origin
  end
  
  def origin
    request.headers["Origin"] || "*"
  end
end
