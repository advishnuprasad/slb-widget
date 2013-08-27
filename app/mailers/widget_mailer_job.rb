class WidgetMailerJob < Struct.new(:widget_id)
  def perform
    WidgetMailer.send_issue(widget_id).deliver
  end
end