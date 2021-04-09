class GamesController < ApplicationController
  before_action :set_game, only: [:show, :update, :destroy]
  before_action :set_cors_headers

  # GET /games
  def index
    if params[:date]
      @games = Game.where(game_time: Date.today.in_time_zone('America/New_York').all_day)
    else
      @games = Game.all
    end

    render json: @games
  end

  # GET /games/1
  def show
    render json: @game
  end

  # POST /games
  def create
    @game = Game.new(game_params)

    if @game.save
      render json: @game, status: :created, location: @game
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /games/1
  def update
    if @game.update(game_params)
      render json: @game
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  # DELETE /games/1
  def destroy
    @game.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_game
      @game = Game.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def game_params
      params.require(:game).permit(:game_time, :home_team_id, :away_team_id, :home_team_score, :away_team_score, :api_game_id, :status)
    end

    def set_cors_headers
      response.set_header "Access-Control-Allow-Origin", origin
    end
  
    def origin
      request.headers["Origin"] || "*"
    end
end
