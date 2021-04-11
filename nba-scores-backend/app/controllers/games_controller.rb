class GamesController < ApplicationController
  before_action :set_cors_headers

  def index
    if params[:date]
      games = Game.where(game_time: params[:date].to_date.in_time_zone('America/New_York').all_day)
      
      return render json: games.map(&:attributes_with_team_data)

    elsif params[:team_id]
      team = Team.find(params[:team_id])
      games = team.all_games_with_team_data

      return render json: { team: team, games: games }
    end

    render json: { error: true }
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
