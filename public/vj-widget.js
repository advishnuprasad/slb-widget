  var jq = document.createElement("script");
  jq.type = "text/javascript";
  jq.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js";
  document.getElementsByTagName('head')[0].appendChild(jq);
  var script = 'http://html2canvas.hertzen.com/build/html2canvas.js';
  var NewScript1 = document.createElement("script");
  NewScript1.type = "text/javascript";
  NewScript1.src = script
  document.getElementsByTagName('head')[0].appendChild(NewScript1);
  if(jq.readyState) {
    // For old versions of IE
    jq.onreadystatechange = function() {
        if(this.readyState == 'complete' || this.readyState == 'loaded') {
            // do something...
        }
    }
} else {
    // Other browsers
    jq.onload = function() {
    $('body').append("<div id='widget-box'></div>");
    var temp = '<div id="widget-header1" class="widget-header1 loaded" style="background-color: rgb(20, 20, 102); bottom: 0px; overflow: hidden; line-height: 1px; height: 30px; border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; list-style: none; padding: 0px 0px 0px 5px; font-size: 11px; text-rendering: optimizelegibility; color: rgb(255, 255, 255); font-family: "lucida grande", tahoma, verdana, arial, sans-serif; z-index: 2147483638; text-align: left; right: 0px; margin-right: 6px;">    <span style="padding-top:15px;padding-left:15px;font-family:lucida grande, tahoma, verdana, arial, sans-serif;font-weight:bold;font-size:11px;vertical-align: middle;display: inline;" class="chat_Bubble" id="clickdesk_notification_text">Online -Strata Widget</span>    </div><div id="widget_body"><form accept-charset="UTF-8" action="/widgets" class="new_widget" id="new_widget" method="post"><div style="margin-left:20px;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="ANQhVtMXyVZzxsa0kIp2hziGMCJtttWGU0MnvlbYSnw="></div>   <div class="field">    <label for="widget_email_id">Email</label> <input id="widget_email_id" name="widget[email_id]" size="30" style="width:95%" type="text">  </div>  <div class="field">    <label for="widget_name">Name</label>    <input id="widget_name" name="widget[name]" size="30" style="width:95%" type="text">  </div>  <div class="field">    <label for="widget_message">Message</label>    <textarea cols="40" id="widget_message" name="widget[message]" rows="3" style="width:95%"></textarea>  </div>  <div class="actions">    <input name="commit" type="submit" value="Submit">  </div> </form></div>'
    $('#widget-box').html(temp);
    $('#new_widget').on('submit',function(event){
        var attr = $(this).serialize();
        var key = '205109003'
        event.preventDefault();
        $('#widget_body').hide();
        $('#clickdesk_notification_text').html('Online -Strata Widget <br/> Submitting....');
        $('#clickdesk_notification_text').hide();
        html2canvas(document.body, {
          onrendered: function(canvas) {
            html = canvas.toDataURL("image/png");
            $('#clickdesk_notification_text').show();
              $.ajax({
                  type: "POST",
                  url: 'http://nameless-castle-6198.herokuapp.com/widgets.json',
                  data: {base_64 : html, attr : attr, license_key : key}
                }).done(function(result){
                  $('#clickdesk_notification_text').html('Online -Strata Widget <br/> Submitted');
                });
          }
        });
    });
    $('#widget_body').css({'padding-left' : '20px', 'border-bottom':' 1px solid #141466','border-left':' 1px solid #141466','border-right':' 1px solid #141466','display':' block','padding':' 5px 5px 10px 5px','text-align':' left','z-index':' 10000','position':'relative','background-color': '#FFFFFF'});
    $('#widget-box').css({'width':'250px', 'position':'absolute', 'border':'1', 'bottom':'0','right':'0','padding':'10px', 'cursor':'pointer'});
    }
}