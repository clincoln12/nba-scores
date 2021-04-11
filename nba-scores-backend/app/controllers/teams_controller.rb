class TeamsController < ApplicationController
  before_action :set_team, only: [:show]
  
  def show
    render json: @team
  end

  private
    def set_team
      @team = Team.find(params[:id])
    end
end
