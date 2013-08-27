class WidgetMailer < ActionMailer::Base
  helper :application
  default :from => 'mc@justbooksclc.com'
  default :template_path => 'mailers/widgets'

  def send_issue(widget)
    @widget = Widget.find(widget)
    mail(:to => 'vishnu.prasad@strata.co.in', :subject => "hi")
  end
end