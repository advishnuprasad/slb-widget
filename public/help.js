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
    $('body').append("<div id='box'>New Box</div>");
    var pol = '<div id="livilyChatButton" class="livilyChatButton loaded" style="background-color: rgb(20, 20, 102); bottom: 0px; overflow: hidden; line-height: 1px; height: 30px; border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; list-style: none; padding: 0px 0px 0px 5px; font-size: 11px; text-rendering: optimizelegibility; color: rgb(255, 255, 255); font-family: "lucida grande", tahoma, verdana, arial, sans-serif; z-index: 2147483638; text-align: left; right: 0px; margin-right: 6px; "><span id="chatWithWhom" style="display: block; font-size: 11px;font-weight:bold;padding-top:6px;"><span id="chat_Bubble" style="*margin-top:1px;width:17px;margin-right:3px;display: inline-block !important;vertical-align: middle;" class="cd-chat-online"></span><span id="spinner_bubble" style="margin:3px;display:none;" class="cd-chat-spinner"></span><span style="font-family:lucida grande, tahoma, verdana, arial, sans-serif;font-weight:bold;font-size:11px;vertical-align: middle;display: inline;" class="chat_Bubble" id="clickdesk_notification_text">Online -Strata Widget</span><span id="max-bubble" style="vertical-align: middle;display: inline-block !important; margin-right:3px;margin-left:3px;" class="cd-max"></span></span></div>'
    var temp = '<form accept-charset="UTF-8" action="/widgets" class="new_widget" id="new_widget" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="ANQhVtMXyVZzxsa0kIp2hziGMCJtttWGU0MnvlbYSnw="></div>   <div class="field">    <label for="widget_email_id">Email</label><br>    <input id="widget_email_id" name="widget[email_id]" size="30" style="width:95%" type="text">  </div>  <div class="field">    <label for="widget_name">Name</label><br>    <input id="widget_name" name="widget[name]" size="30" style="width:95%" type="text">  </div>  <div class="field">    <label for="widget_message">Message</label><br>    <textarea cols="40" id="widget_message" name="widget[message]" rows="3" style="width:95%"></textarea>  </div>  <div class="actions">    <input name="commit" type="submit" value="Submit">  </div> </form>'
    $('#box').html(pol + temp);



    $('#new_widget').on('submit',function(event){
        event.preventDefault();
        html2canvas(document.body , {
          onrendered: function(canvas) {
            html = canvas.toDataURL("image/png");
            $('#my-image').css({'background-image': canvas.toDataURL("image/png")});

              $.ajax({
                  type: "POST",
                  url: 'http://192.168.2.114:4444/widgets.json',
                  data: {base_64: html},
                }).done(function(result){
                  $('#box').html("Created");
                });
          }
        });
    });
    $('#box').css({'border-bottom':' 1px solid #141466','border-left':' 1px solid #141466','border-right':' 1px solid #141466','display':' block','padding':' 5px 2px 10px 0','text-align':' left','z-index':' 10000','position':'relative','background-color': '#FFFFFF', 'position':'absolute', 'border':'1', 'bottom':'0','right':'0','padding':'10px', 'cursor':'pointer'})
    }
}