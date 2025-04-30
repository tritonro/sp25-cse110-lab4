#Part 2
##Rosario Ortiz, A17471382 

![JavaScript code snippet for question 1 ](images/lab4-part1b-q1.png)

1. At line 12, "3" will be printed to the console. Contrary to what we might expect, the iterator variable `i` is accessible outside the loop because `var` is not block scoped. Since the argument `prices` is a list of length 3 when we call `discountPrices()`, the loop runs until `i` is incremented to 3. 

    ![JavaScript code snippet for question 2](images/lab4-part1b-q2.png)

2. At line 13, this function will print "150" to the console. Since `var`s tolerate redeclarations, `discountedPrice` simply takes on its most recently assigned value. The last iteration assigns`discountedPrice` the value `prices[2] * discount`, which equals 300 * 0.5, or 150. 
   
   ![JavaScript code snippet for question 3](images/lab4-part1b-q3.png)
3. At line 14, "150" is printed. During the last iteration of the `for` loop, `finalPrice` is assigned the value `Math.round(discountedPrice * 100) /100`. We know `discountedPrice` is the integer "150", so these operations change nothing. 
   ![JavaScript code snippet for question 4](images/lab4-part1b-q4.png)
4. This function returns `[50, 100, 150]`. The variable returned, `discounted` is declared as an empty list. In each iteration of the `for` loop, `price[i] * 0.5` is rounded and pushed to the end of the list, yielding this result.  
    ![JavaScript code snippet for question 5](images/lab4-part1b-q5.png)
5. At line 12, an error will be thrown. The variable `i` is declared using the `let` keyword within a `for` loop. As such, `i` only exists within the scope of that loop. When we attempt to print it to console from outside the loop, its value is inaccessible. 
   ![JavaScript code snippet for question 6](images/lab4-part1b-q6.png)
6. Prior to line 13, an error will be thrown. The variable `discountedPrice` is declared using the `let` keyword within a `for` loop. `let` variables cannot be redeclared, so the function will throw an error on the second loop iteration. 
   ![JavaScript code snippet for question 7](images/lab4-part1b-q7.png)
7. Prior to line 14, an error will be thrown. The variable `discountedPrice` is declared using the `let` keyword within a `for` loop. `let` variables cannot be redeclared, so the function will throw an error on the second loop iteration.
   ![JavaScript code snippet for question 8](images/lab4-part1b-q8.png)
8. This function will throw an error. The variable `discountedPrice` is declared using the `let` keyword within a `for` loop. `let` variables cannot be redeclared, so the function will throw an error on the second loop iteration.
   ![JavaScript code snippet for question 9](images/lab4-part1b-q9.png)
9. At line 11, an error will be thrown. The variable `i` is declared using the `let` keyword within a `for` loop. As such, `i` only exists within the scope of that loop. When we attempt to print it to console from outside the loop, its value is inaccessible. 
    ![JavaScript code snippet for question 10](images/lab4-part1b-q10.png)
10. At line 12, "3" will be printed to the console. This is because `length` is assigned to the value "3" as a constant variable in the function scope. As line 12 is in the function, `const length` will still be accessible. 
    
   ![JavaScript code snippet for question 11](images/lab4-part1b-q11.png)

11. This function returns `[50, 100, 150]`. Although the variable `discounted`, is declared as a `const`, we are allowed to manipulate it as long as it is not reassigned. Since we push the discounted prices (half of the prices in the input list), within the for loop, this is what is returned. 

![JavaScript code snippet for question 12](images/lab4-part1b-q12.png)

12. Given the above Object, write the notation for:  (These should be in your part2.md)
    - Accessing the value of the name property in the student object
      - `student.name`
    - Accessing the value of the Grad Year property in the student object
      - `student["Grad Year"]`
    - Calling the function for the greeting property in the student object.
      - `student.greeting()`
    - Accessing the name property of the object in the Favorite Teacher property in student
      - `student["Favorite Teacher"].name`
    - Access index zero in the array of the courseLoad property of the student object
      - `student.courseLoad[0]`