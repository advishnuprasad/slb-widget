class WidgetsController < ApplicationController
  # GET /widgets
  # GET /widgets.json
  def index
    @widgets = Widget.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @widgets }
    end
  end

  # GET /widgets/1
  # GET /widgets/1.json
  def show
    @widget = Widget.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @widget }
    end
  end

  # GET /widgets/new
  # GET /widgets/new.json
  def new
    @widget = Widget.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @widget }
    end
  end

  # GET /widgets/1/edit
  def edit
    @widget = Widget.find(params[:id])
  end

  # POST /widgets
  # POST /widgets.json
  def create
    headers['Access-Control-Allow-Origin'] = "*"
    params.merge!(Rack::Utils.parse_nested_query(params["attr"]))
    p params
    p
    p
    if Widget::LICENCE_KEYS.include?(params["license_key"])
      params[:widget][:license_key] = params["license_key"]
      data_url = params[:base_64]
      png = Base64.decode64(data_url['data:image/png;base64,'.length .. -1])
      @widget = Widget.new(params[:widget])
      file = File.open('public/screenshot.png', 'wb') do |f|
       f.write(png)
       @widget.screenshot = f
     end
      respond_to do |format|
        if @widget.save
          format.html { redirect_to @widget, notice: 'Widget was successfully created.' }
          format.json { render json: @widget, status: :created, location: @widget }
        else
          format.html { render action: "new" }
          format.json { render json: @widget.errors, status: :unprocessable_entity }
        end
      end
    else
      respond_to do |format|
        format.json { render json: 'Error', status: :unprocessable_entity }
      end
    end
  end

  # PUT /widgets/1
  # PUT /widgets/1.json
  def update
    @widget = Widget.find(params[:id])

    respond_to do |format|
      if @widget.update_attributes(params[:widget])
        format.html { redirect_to @widget, notice: 'Widget was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @widget.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /widgets/1
  # DELETE /widgets/1.json
  def destroy
    @widget = Widget.find(params[:id])
    @widget.destroy

    respond_to do |format|
      format.html { redirect_to widgets_url }
      format.json { head :no_content }
    end
  end
end
