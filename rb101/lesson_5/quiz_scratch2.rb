customer_orders = [
  {
    customer_id: 12,
    customer_name: 'Emma Lopez',
    orders: [
      { order_fulfilled: true, order_value: 135.99 },
      { order_fulfilled: true, order_value: 289.49 },
      { order_fulfilled: false, order_value: 58.00 }
    ]
  },
  {
    customer_id: 32,
    customer_name: 'Michael Richards',
    orders: [
      { order_fulfilled: true, order_value: 120.00 },
      { order_fulfilled: false, order_value: 85.65 }
    ]
  },
  # rest of data...
]

# we have the above dataset, and we want to be able to pull data like so
all_orders =[
  {customer_id: 12, customer_name: 'Emma Lopez', total_order_value: 483.48},
  {customer_id: 32, customer_name: 'Michael Richards', total_order_value: 205.65},
  # rest of data
]

fulfilled_orders =[
  {customer_id: 12, customer_name: 'Emma Lopez', order_value: 425.48},
  {customer_id: 32, customer_name: 'Michael Richards', order_value: 120.00},
  # rest of data
]

# how can we do this for the all_orders array?
# possible answers. 

# 1
all_orders = customer_orders.map do |customer|
  {
    customer_id: customer[:customer_id],
    customer_name: customer[:customer_name]
  }
end
# end result of this loop is that all_orders contains an array of hashes holding 
# our customer IDs and customer names
# reduce returns an object formed by a block to which each value is passed.
# so the reduce statement gets us our total
customer_orders.each_with_index do |data, index|
  order_value = data[:orders].reduce(0) do |total, order|
    total + order[:order_value]
  end

  all_orders[index][:total_order_value] = order_value
end
# this will work. we can assume that hte index of all_orders and customer_orders are the same
# for each customer because all_orders was build from customer_orders. 

# 2 
# inject and reduce are the same thing, so this gives us the correct total.
# this should work also. returns a hash with all the proper values. 
all_orders = customer_orders.map do |customer_data|
  order_value = customer_data[:orders].inject(0) do |total, order_data|
    total + order_data[:order_value]
  end

  {
    customer_id: customer_data[:customer_id],
    customer_name: customer_data[:customer_name],
    total_order_value: order_value
  }
end

# 3
# this will do what we need
all_orders = []

customer_orders.each do |customer_data|
  customer_total_orders = {
    customer_id: customer_data[:customer_id],
    customer_name: customer_data[:customer_name],
    total_order_value: 0
  }

  customer_data[:orders].each do |order|
    customer_total_orders[:total_order_value] += order[:order_value]
  end

  all_orders << customer_total_orders
end

# 4
all_orders = []

customer_orders.each do |customer_data|
  # so this is a nested array?
  cust_arr = [
    [:customer_id, customer_data[:customer_id]],
    [:customer_name, customer_data[:customer_name]],
    [:total_order_value]
  ]


  order_value = 0
  customer_data[:orders].each do |order|
    order_value += order[:order_value]
  end
  # and we're indexing it wrong here. This array doesn't have a second index
  # we'd need cust_arr[0][2]
  cust_arr[2] << order_value

  all_orders << cust_arr
end