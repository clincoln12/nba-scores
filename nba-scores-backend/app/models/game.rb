class Game < ApplicationRecord
  belongs_to :home_team, class_name: 'Team'
  belongs_to :away_team, class_name: 'Team'

  def attributes_with_team_data
    home_team_data = home_team.attributes.slice('short_name', 'full_name', 'logo')
    away_team_data = away_team.attributes.slice('short_name', 'full_name', 'logo')

    self.attributes.merge({ home_team: home_team_data, away_team: away_team_data })
  end
end
