require "test_helper"

class ChunksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get chunks_index_url
    assert_response :success
  end

  test "error without query" do
    get chunks_index_url, as: :json
    assert_response :success
    assert_equal 'application/json', @response.media_type
    assert_includes @response.body, 'error'
  end

  test "consumes query" do
    get "#{chunks_index_url}?q=1,2,3", as: :json
    assert_response :success
    assert_equal 'application/json', @response.media_type
    data = JSON.parse(@response.body)
    assert_equal [1, 2, 3], data['input']
    assert_equal [[1, 2, 3]], data['chunks']
    assert_equal [1, 2, 3], data['max_length']
  end

  test "complex_query" do
    get "#{chunks_index_url}?q=3,4,1,2,3,2", as: :json
    assert_response :success
    assert_equal 'application/json', @response.media_type
    data = JSON.parse(@response.body)
    assert_equal [3, 4, 1, 2, 3, 2], data['input']
    assert_equal [[3, 4], [1, 2, 3], [2]], data['chunks']
    assert_equal [1, 2, 3], data['max_length']
  end
end
