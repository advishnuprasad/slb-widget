require 'test_helper'

class WidgetsControllerTest < ActionController::TestCase
  setup do
    @widget = widgets(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:widgets)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create widget" do
    assert_difference('Widget.count') do
      post :create, widget: { email_id: @widget.email_id, license_key: @widget.license_key, message: @widget.message, name: @widget.name, screenshot_url: @widget.screenshot_url, subject: @widget.subject, user_id: @widget.user_id }
    end

    assert_redirected_to widget_path(assigns(:widget))
  end

  test "should show widget" do
    get :show, id: @widget
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @widget
    assert_response :success
  end

  test "should update widget" do
    put :update, id: @widget, widget: { email_id: @widget.email_id, license_key: @widget.license_key, message: @widget.message, name: @widget.name, screenshot_url: @widget.screenshot_url, subject: @widget.subject, user_id: @widget.user_id }
    assert_redirected_to widget_path(assigns(:widget))
  end

  test "should destroy widget" do
    assert_difference('Widget.count', -1) do
      delete :destroy, id: @widget
    end

    assert_redirected_to widgets_path
  end
end
