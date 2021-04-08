class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.datetime :game_time
      t.integer :home_team_id
      t.integer :away_team_id
      t.string :home_team_score
      t.string :away_team_score
      t.integer :api_game_id
      t.string :status

      t.timestamps
    end
  end
end
