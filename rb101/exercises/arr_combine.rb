# https://launchschool.com/exercises/1ba11514
# in = two arrays
# out = one array with all the unique values of each array. 

def merge(arr1, arr2)
  (arr1 + arr2).uniq
end

p merge([1,3,5], [3,6,9])
p merge(['1','a','b','r'],['1','y','o','0'])

# how did LS do it? 
# they used the Array#| method, which pretty much does exactly what we need done here
# arr1 | arr2