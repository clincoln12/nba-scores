class Team < ApplicationRecord
  has_many :home_games, foreign_key: :home_team_id, class_name: 'Game'
  has_many :away_games, foreign_key: :away_team_id, class_name: 'Game'

  def all_games_with_team_data
    home_games_with_team_data = home_games.map(&:attributes_with_team_data)
    away_games_with_team_data = away_games.map(&:attributes_with_team_data)

    games = home_games_with_team_data + away_games_with_team_data

    games.sort_by do |g|
      g['game_time'].to_datetime
    end
  end
end
