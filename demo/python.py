from __future__ import print_function

import time

def fib(n):
  if n < 2: return n
  return fib(n - 1) + fib(n - 2)

start = time.perf_counter()
for i in range(0, 5):
  print(fib(30))
print("elapsed: " + str(time.perf_counter() - start) + "s") 

class SomeClass:
    def create_arr(self): # An instance method
        self.arr = []
    
    def insert_to_arr(self, value):  #An instance method
        self.arr.append(value)
        
    @classmethod
    def class_method(cls):
        print("the class method was called")
