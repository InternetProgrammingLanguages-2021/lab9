require "test_helper"

class ChunksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get chunks_index_url
    assert_response :success
  end
end
