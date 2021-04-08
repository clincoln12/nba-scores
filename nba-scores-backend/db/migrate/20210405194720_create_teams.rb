class CreateTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :teams do |t|
      t.string :full_name
      t.string :short_name
      t.string :logo
      t.integer :api_team_id

      t.timestamps
    end
  end
end
