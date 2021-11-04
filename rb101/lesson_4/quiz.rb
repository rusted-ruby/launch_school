# what is this code doing?
# let's comment it to get to the bottom of this

mailing_campaign_leads = [
  {name: 'Emma Lopez', email: 'emma.lopez@some_mail.com', days_since_login: 423, mailing_list: true},
  {name: 'mike richards', email: 'michael.richards@some_mail.com', days_since_login: 23, mailing_list: false},
  {name: 'JANE WILLIAMS', email: 'jane_w95@my_mail.com', days_since_login: 16, mailing_list: true},
  {name: 'Ash Patel', email: 'ash_patel@my_mail.com', days_since_login: 22, mailing_list: true}
]

counter = 0
# first loop - capitalize each of the names, then replace them = transformation
loop do
  break if counter == mailing_campaign_leads.size # returns the size of the array
  full_name = mailing_campaign_leads[counter][:name]
  names = full_name.split #array of first and last name

  names_counter = 0
  #capitalize each of the names - transformation
  loop do
    break if names_counter == names.size
    name = names[names_counter]
    names[names_counter] = name.capitalize
    names_counter += 1
  end


  capitalized_full_name = names.join(' ')
  mailing_campaign_leads[counter][:name] = capitalized_full_name

  counter += 1
end

usable_leads = []
counter = 0
#second loop - populate a new array based on conditions in the current array = selection
loop do
  break if counter == mailing_campaign_leads.size
  last_login = mailing_campaign_leads[counter][:days_since_login]
  subscribed_to_list = mailing_campaign_leads[counter][:mailing_list]

  if last_login < 60 && subscribed_to_list
    usable_leads << mailing_campaign_leads[counter]
  end

  counter += 1
end