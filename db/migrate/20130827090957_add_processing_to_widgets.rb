class AddProcessingToWidgets < ActiveRecord::Migration
  def change
    add_column :widgets, :processing, :boolean
  end
end
