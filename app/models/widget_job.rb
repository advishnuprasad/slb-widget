class WidgetJob < Struct.new(:widget_id)
  def perform
    p Widget.find(self.widget_id).regenerate_styles!
  end
end