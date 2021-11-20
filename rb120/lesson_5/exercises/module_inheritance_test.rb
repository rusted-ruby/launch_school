module Testable

end

class Pliers
  include Testable
end
p Pliers.ancestors
p Testable.ancestors