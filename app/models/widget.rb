class Widget < ActiveRecord::Base
  attr_accessible :email_id, :license_key, :message, :name, :screenshot_url, :subject, :user_id
  has_attached_file :screenshot, :styles => { :normal => "1000x800>" },
                                :convert_options => { :normal => '-quality 90' }
  validates_attachment :screenshot, :content_type => { :content_type => /image/ }, :size => { :in => 0..2.megabytes }
  process_in_background :screenshot
  LICENCE_KEYS = ['205109003', '205109058', '205109050', '205109004']

  # before_screenshot_post_process do |widget|
  #   if widget.screenshot_changed?
  #     widget.processing = true
  #     false # halts processing
  #   end
  # end

  # # ...and perform after save in background
  # after_save do |widget|
  #   if widget.screenshot_changed?
  #     Delayed::Job.enqueue WidgetJob.new(widget.id)
  #   end
  # end

  # # generate styles (downloads original first)
  # def regenerate_styles!
  #   self.screenshot.reprocess!
  #   self.processing = false
  #   self.save(false)
  # end

  # # detect if our screenshot file has changed
  # def screenshot_changed?
  #   self.screenshot_file_size_changed? ||
  #   self.screenshot_file_name_changed? ||
  #   self.screenshot_content_type_changed? ||
  #   self.screenshot_updated_at_changed?
  # end
end
