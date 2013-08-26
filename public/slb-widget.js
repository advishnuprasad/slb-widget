  var jq = document.createElement("script");
  jq.type = "text/javascript";
  jq.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js";
  document.getElementsByTagName('head')[0].appendChild(jq);
  var script = 'https://s3.amazonaws.com/dev.justbooksclc.com/sd_widget/html2canvas.js';
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
  }
  else {
    // Other browsers
    jq.onload = function() {
    $('body').append("<div id='widget-box'></div>");
    $('#widget-box').css({'z-index': '12345', 'width':'250px', 'position':'fixed', 'bottom':'0','right':'0','padding':'10px', 'cursor':'pointer'});
    var temp = '<div id="widget-header" class="widget-header loaded" style="background-color: rgb(92, 145, 62); bottom: 0px; overflow: hidden; line-height: 1px; height: 20px; border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; list-style: none; padding: 15px 0px 0px 5px; font-size: 11px; text-rendering: optimizelegibility; color: rgb(255, 255, 255); font-family: "lucida grande", tahoma, verdana, arial, sans-serif; z-index: 2147483638; text-align: left; right: 0px; margin-right: 6px;">    <span style="padding-top:15px;padding-left:15px;font-family:lucida grande, tahoma, verdana, arial, sans-serif;font-weight:bold;font-size:11px;vertical-align: middle;display: inline;">Report Issue</span>    </div>';
    temp += '<div id="widget-body" style = ""><form accept-charset="UTF-8" action="#" class="new_widget" id="new_widget" method="post"><div style="margin-left:20px;padding:0;display:inline"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="ANQhVtMXyVZzxsa0kIp2hziGMCJtttWGU0MnvlbYSnw="></div>   <div class="field">    <label for="widget_email_id">Email</label> <input id="widget_email_id" name="widget[email_id]" size="30" style="width:95%" type="text">  </div>  <div class="field">    <label for="widget_name">Name</label>    <input id="widget_name" name="widget[name]" size="30" style="width:95%" type="text">  </div>  <div class="field">    <label for="widget_message">Message</label>    <textarea cols="40" id="widget_message" name="widget[message]" rows="3" style="width:95%"></textarea>  <input type="checkbox" id="attach_screenshot" name="screenshot">Attach Screenshot</input><br></div>  <div class="actions">    <input name="commit" type="submit" value="Report Issue">  </div> </form></div>'
    $('#widget-box').html(temp);
    $('#widget-body').append("<br><div id='widget-result' style='display:none'>Submitting...</div>");
    $('#new_widget').on('submit',function(event){
      $('#widget-result').show()
      var attr = $(this).serialize();
      var key = $('#slb-widget').attr('license_key');
      event.preventDefault();
      $('#widget-box').hide();
      if($("#attach_screenshot").prop('checked') !== undefined){
        html2canvas(document.body, {
        onrendered: function(canvas) {
          $('#widget-box').show();
          html = canvas.toDataURL("image/png");
          $('#widget-result').show();
            $.ajax({
                type: "POST",
                url: 'http://nameless-castle-6198.herokuapp.com/widgets.json',
                crossDomain:true,
                dataType: 'json',
                data: {base_64 : html, attr : attr, license_key : key}
              }).done(function(result){
                $('#widget-result').html('Submitted. Thank You');
                $('#widget-body').slideToggle('slow');
              });
          }
        });
      }
      else{
        $('#widget-box').show();
        $('#widget-result').show();
        $.ajax({
          type: "POST",
          url: 'http://nameless-castle-6198.herokuapp.com/widgets.json',
          crossDomain:true,
          dataType: 'json',
          data: {attr : attr, license_key : key}
          }).done(function(result){
            $('#widget-result').html('Submitted. Thank You');
            $('#widget-body').slideToggle('slow');
          });
        }
    });
    $('#widget-header').on('click', function(){
      $('#widget-body').slideToggle();
    });
    $('#widget-body').css({'padding-left' : '20px', 'border-bottom':' 1px solid green','border-left':' 1px solid green','border-right':' 1px solid green','display':'none','padding':' 5px 5px 10px 5px','text-align':' left','z-index':' 10000','position':'relative','background-color': '#FFFFFF'});
    }
  }