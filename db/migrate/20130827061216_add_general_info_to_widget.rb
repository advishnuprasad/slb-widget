class AddGeneralInfoToWidget < ActiveRecord::Migration
  def change
    add_column :widgets, :general_info, :text
  end
end
