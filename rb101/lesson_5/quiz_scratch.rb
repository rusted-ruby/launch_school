order_data = [
  {customer_id: 12, customer_name: 'Emma Lopez', order_id: 351, order_date: '12/04/16', order_fulfilled: true, order_value: 135.99},
  {customer_id: 12, customer_name: 'Emma Lopez', order_id: 383, order_date: '12/04/16', order_fulfilled: true, order_value: 289.49},
  {customer_id: 12, customer_name: 'Emma Lopez', order_id: 392, order_date: '01/10/17', order_fulfilled: false, order_value: 58.00},
  {customer_id: 32, customer_name: 'Michael Richards', order_id: 241, order_date: '11/10/16', order_fulfilled: true, order_value: 120.00},
  {customer_id: 32, customer_name: 'Michael Richards', order_id: 395, order_date: '01/10/17', order_fulfilled: false, order_value: 85.65},
  # rest of data...
]

# need to converet the data from the above format to the below format.

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

#what do you need to do to make that happen?
=begin
so you start with an array of hahses, one element per transaction.
you want to order the data to be an array of hashes, one element per customer
The hashes have a key for orders. The :orders valu is an array of sub hashes containing transaction info

How can we create this new data structure? 
=end

# possible solutions 
# 4
customer_orders = order_data.map do |row|
  {
    customer_id: row[:customer_id],
    customer_name: row[:customer_name],
    # this won't work because we're just overwriting the orders value with a new array
    # each time instead of populating all the transactions
    orders: [
      {
        order_fulfilled: row[:order_fulfilled],
        order_value: row[:order_value]
      }
    ]
  }
end

# 3
customer_orders = {}

order_data.each do |row|
  if customer_orders.key?(row[:customer_id])
    customer_orders[row[:customer_id]][:orders] << {
      order_fulfilled: row[:order_fulfilled],
      order_value: row[:order_value]
    }
  else
    customer_orders[row[:customer_id]] = {
      customer_id: row[:customer_id],
      customer_name: row[:customer_name],
      orders: [
        {
          order_fulfilled: row[:order_fulfilled],
          order_value: row[:order_value]
        }
      ]
    }
  end
end
# this creates a hash of form
# {customer_id => {:customer_id => customer_id, :customer_name => name, :orders => [array of orders]}}
# so calling .values on that will work.
#this returns an array containing all the values in customer_orders
# so this strategy could work...?
customer_orders = customer_orders.values

# 2 
temp_orders = {}

order_data.each do |row|
  temp_orders[row[:customer_id]] = {
      customer_name: row[:customer_name],
      customer_id: row[:customer_id],
      orders: [
        {
          order_fulfilled: row[:order_fulfilled],
          order_value: row[:order_value]
        }
      ]
    }
end
=begin 
what does the above code do? creates a hash of form
{customer_id => {:customer_name => name, :customer_id => customer_id, :orders => order array}}
this one won'd work though for each row, it overwrites the order array. 
=end
customer_orders = temp_orders.values

#1
customer_orders = {}

order_data.each do |row|
  if customer_orders.key?(row[:customer_id])
    customer_orders[row[:customer_id]][:orders] << [
      row[:order_fulfilled],
      row[:order_value]
    ]
  else
    customer_orders[row[:customer_id]] = {
      customer_id: row[:customer_id],
      customer_name: row[:customer_name],
      orders: [
        [
          row[:order_fulfilled],
          row[:order_value]
        ]
      ]
    }
  end
end
=begin
So what does this one do? creates a hash with form
{customer_id => :customer_id => customer_id, :customer_name => name, :orders => array?}
This one won't work because its creating new arrays inside the :orders key. We want an 
array of hashes, not an array of nested arrays. 
=end
customer_orders = customer_orders.values