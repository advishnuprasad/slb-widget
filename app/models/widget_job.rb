class WidgetJob < Struct.new(:widget_id)
  def perform
    Widget.find(self.widget_id).regenerate_styles!
  end
end