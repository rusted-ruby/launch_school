class SecretFile
  attr_reader :data

  def initialize(secret_data)
    @data = secret_data
    @log = SecurityLogger.new.create_log_entry
  end
end

class SecurityLogger
  def create_log_entry
    puts "new log entry created!"
  end
end

secrets = SecretFile.new("can you keep a secret?")

# need to make it so that any access to data generates a log entry. 
# what's a better way of doing this? - see below

# store an instance of SecurityLogger in a secret file object. Then, implement a custom getter 
# method to create a log entry each time the data is accessed. 

class SecretFile
  def initialize(secret_data)
    @data = secret_data
    @log = SecurityLogger.new
  end

  def data
    @log.create_log_entry
    @data
  end
end

class SecurityLogger
  def create_log_entry
    puts "new log entry created!"
  end
end

secret = SecretFile.new("can you keep a secret?")
secret.data