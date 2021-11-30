def test_method(array)
  yield(array)
end

arr = %w(raven finch hawk eagle)

test_method(arr) { |_, _, *killer_birds| p killer_birds }