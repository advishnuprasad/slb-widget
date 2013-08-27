# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130827061216) do

  create_table "widgets", :force => true do |t|
    t.integer  "license_key"
    t.integer  "user_id"
    t.string   "email_id"
    t.string   "name"
    t.string   "subject"
    t.text     "message"
    t.string   "screenshot_url"
    t.datetime "created_at",              :null => false
    t.datetime "updated_at",              :null => false
    t.string   "screenshot_file_name"
    t.string   "screenshot_content_type"
    t.integer  "screenshot_file_size"
    t.datetime "screenshot_updated_at"
    t.text     "general_info"
  end

end
