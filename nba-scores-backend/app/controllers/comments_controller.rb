class CommentsController < ApplicationController

  def index
    render json: Comment.where(team_id: params[:team_id])
  end

  def create
    puts ' LOOKIE HERE'
    puts params
    # @comment = Comment.create(params[:comment])

    if Comment.create(username: params['userName'], comment: params['comment'], team_id: params['team_id'])
      render json: Comment.where(team_id: params['team_id'])
    else 
      render json: { error: 'Unable to create comment' }
    end
  end
  
  def show
    render json: @comment
  end

  private

  def comment_params
    @comment = Comment.create(params[:comment])
  end

end