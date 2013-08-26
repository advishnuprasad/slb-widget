class CreateWidgets < ActiveRecord::Migration
  def change
    create_table :widgets do |t|
      t.integer :license_key
      t.integer :user_id
      t.string :email_id
      t.string :name
      t.string :subject
      t.text :message
      t.string :screenshot_url

      t.timestamps
    end
  end
end
