class Widget < ActiveRecord::Base
  attr_accessible :email_id, :license_key, :message, :name, :screenshot_url, :subject, :user_id
  has_attached_file :screenshot, :convert_options => { :original => '-quality 60' }
  validates_attachment :screenshot, :content_type => { :content_type => /image/ }, :size => { :in => 0..2.megabytes }

  LICENCE_KEYS = ['205109003', '205109058', '205109050', '205109004']
end
