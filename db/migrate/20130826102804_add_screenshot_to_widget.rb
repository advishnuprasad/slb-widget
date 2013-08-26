class AddScreenshotToWidget < ActiveRecord::Migration
  def change
    add_attachment :widgets, :screenshot
  end
end
