class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :comment
      t.string :username
      t.references :team, null: false, foreign_key: true
    end
  end
end
