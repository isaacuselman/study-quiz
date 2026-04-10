// ╔══════════════════════════════════════════════════════════════════╗
// ║  CS50P (Introduction to Programming with Python) lectures       ║
// ╚══════════════════════════════════════════════════════════════════╝

export const CS50P_LECTURES = [

// ─── LECTURE 0 ───────────────────────────────────────────────────────
{
  course: "CS50P",
  title: "CS50P Week 0: Functions & Variables",
  questions: [
    // Functions & arguments
    { q: "What is the relationship between a function and an argument?", options: ["An argument is a function that calls another function", "An argument is an input to a function that influences its behavior", "A function is a type of argument", "Arguments and functions are the same thing"], answer: 1 },
    { q: "What is a 'side effect' in programming?", options: ["A bug caused by a function", "Something visible or audible that a function produces, like printing to the screen", "An unused return value", "A variable that changes unexpectedly"], answer: 1 },
    { q: "What is the difference between a return value and a side effect?", options: ["They are the same thing", "A return value is handed back to the caller; a side effect is something observable like output to the screen", "A side effect is faster than a return value", "Return values only work with strings"], answer: 1 },
    { q: "What is the difference between a 'parameter' and an 'argument'?", options: ["Parameters are in the function definition; arguments are the actual values passed when calling it", "They are completely unrelated concepts", "Arguments are in the definition; parameters are passed in", "Parameters are only for strings"], answer: 0 },

    // Variables & assignment
    { q: "What does the = sign mean in Python?", options: ["It tests whether two values are equal", "It assigns the value on the right to the variable on the left", "It compares types", "It creates a constant"], answer: 1 },
    { q: "Why can't you just put a variable name inside quotes in a print statement to print its value?", options: ["Python doesn't allow variable names in print", "Anything inside quotes is treated as literal text, not as a variable reference", "You need to use single quotes instead", "It only works with numbers"], answer: 1 },
    { q: "What does 'scope' mean in Python?", options: ["The speed at which a variable is accessed", "The region of code where a variable exists and can be used", "How large a value a variable can hold", "Whether a variable is a string or integer"], answer: 1 },
    { q: "If you define a variable inside function A, can function B access it directly?", options: ["Yes, all variables are global", "No — it only exists within function A's scope", "Only if both functions are in the same file", "Only if the variable is a string"], answer: 1 },

    // Strings & string methods
    { q: "What does the + operator do when used between two strings?", options: ["Adds their lengths", "Concatenates (joins) them into one string", "Compares them alphabetically", "Throws an error"], answer: 1 },
    { q: "What does an f-string (f\"...\") allow you to do?", options: ["Make strings run faster", "Embed variable values directly inside a string using curly braces", "Convert strings to floats", "Format strings as filenames"], answer: 1 },
    { q: "What does the .strip() method do to a string?", options: ["Removes all spaces from the string", "Removes whitespace from the beginning and end only", "Converts the string to lowercase", "Splits the string into a list"], answer: 1 },
    { q: "What is the difference between .capitalize() and .title()?", options: ["They do the same thing", ".capitalize() uppercases only the first letter of the string; .title() uppercases the first letter of every word", ".title() only works on names", ".capitalize() works on numbers too"], answer: 1 },
    { q: "You can chain multiple string methods like name.strip().title(). What happens?", options: ["Only the last method runs", "Each method runs on the result of the previous one, left to right", "It throws a syntax error", "They run in random order"], answer: 1 },
    { q: "What does the backslash (\\) do inside a string?", options: ["Ends the string", "Acts as an escape character, giving special meaning to the next character", "Divides two substrings", "Comments out the rest of the line"], answer: 1 },

    // Input function
    { q: "The input() function always returns what type of data?", options: ["An integer", "A float", "A string", "Whatever type the user intended"], answer: 2 },
    { q: "If a user types '2' in response to input(), and you add it to '3' with +, what do you get?", options: ["5", "23", "An error", "2.3"], answer: 1 },

    // Type conversion
    { q: "Why is int() needed when doing math with user input?", options: ["input() returns strings, and you can't do arithmetic on strings", "int() makes the program faster", "Python requires explicit casting for all operations", "It's optional but recommended"], answer: 0 },
    { q: "What does int('cat') do?", options: ["Returns 0", "Returns the length of the string", "Raises an error because 'cat' can't be converted to an integer", "Returns None"], answer: 2 },
    { q: "What does float() do that int() does not?", options: ["It works with negative numbers", "It preserves the decimal portion of a number", "It converts strings to numbers", "It rounds automatically"], answer: 1 },

    // Print function parameters
    { q: "What does the 'end' parameter of print() control?", options: ["Which argument prints last", "What character is appended after the printed output (default: newline)", "When the program terminates", "The final value returned"], answer: 1 },
    { q: "What does the 'sep' parameter of print() control?", options: ["Whether to print on separate lines", "What character is placed between multiple arguments (default: space)", "The separator between function calls", "Nothing — it's deprecated"], answer: 1 },
    { q: "If you call print('a', 'b', 'c'), what appears by default?", options: ["abc", "a b c", "a, b, c", "'a' 'b' 'c'"], answer: 1 },
    { q: "How do you make two consecutive print() calls output on the same line?", options: ["Use print() only once", "Set end='' on the first print call to suppress the automatic newline", "Use a comma instead of two print calls", "It's not possible"], answer: 1 },

    // Named vs positional parameters
    { q: "What is a 'positional' parameter?", options: ["A parameter with a default value", "A parameter whose meaning is determined by its position in the argument list", "A parameter that must be named explicitly", "A parameter that only accepts integers"], answer: 1 },
    { q: "What is a 'named' (keyword) parameter?", options: ["A parameter you refer to by name when calling the function, like end='\\n'", "A parameter that must come first", "A variable with a long name", "A parameter that names the function"], answer: 0 },

    // Defining your own functions
    { q: "What does the 'def' keyword do?", options: ["Deletes a function", "Defines (creates) a new function", "Defers execution to later", "Declares a variable"], answer: 1 },
    { q: "Why must you call main() at the bottom of your file if you define it at the top?", options: ["Python requires main() to be called last", "Defining a function doesn't execute it — you must explicitly call it", "main() only works at the end of a file", "It's just a style convention with no functional impact"], answer: 1 },
    { q: "What problem does defining a main() function solve for code organization?", options: ["It makes the code run faster", "It lets you put your main logic at the top and helper functions below, since nothing runs until main() is called at the end", "It's required by Python syntax", "It prevents scope errors"], answer: 1 },
    { q: "What does the 'return' keyword do inside a function?", options: ["Prints a value to the screen", "Hands a value back to the caller so it can be used elsewhere", "Ends the program", "Restarts the function"], answer: 1 },
    { q: "What happens if you define a function that uses return but you never store or use the returned value?", options: ["Python throws an error", "The value is computed and then discarded — nothing happens with it", "It prints automatically", "The program crashes"], answer: 1 },
    { q: "How do you give a parameter a default value?", options: ["def hello(to := 'world')", "def hello(to = 'world')", "def hello(to, default='world')", "You can't — all parameters are required"], answer: 1 },

    // Integers & floats
    { q: "Why can't a float represent every possible decimal number perfectly?", options: ["Floats are slower than ints", "Computers have finite memory, so precision is limited", "Python doesn't fully support floats", "Floats only go to 2 decimal places"], answer: 1 },
    { q: "What does round(n) do when called with one argument?", options: ["Rounds to 2 decimal places", "Rounds to the nearest integer", "Truncates the decimal", "Returns the absolute value"], answer: 1 },
    { q: "What does the ':,' inside an f-string like f\"{z:,}\" do?", options: ["Adds a currency symbol", "Formats the number with commas as thousands separators", "Rounds to the nearest comma-separated value", "Converts z to a string"], answer: 1 },
    { q: "What does ** do in Python (e.g., n ** 2)?", options: ["Multiplication", "Raises n to the power of 2", "Finds the square root", "Repeats n twice"], answer: 1 },

    // Nesting & readability trade-offs
    { q: "What is the risk of nesting too many function calls in a single line like print(int(input('x?')) + int(input('y?')))?", options: ["It won't compile", "It reduces readability and makes debugging harder", "It's slower than multiple lines", "There is no risk — shorter is always better"], answer: 1 },
    { q: "When is it reasonable to combine multiple operations on one line?", options: ["Always — fewer lines is always better", "Never — each operation needs its own line", "When the line stays readable and the logic is straightforward", "Only when using f-strings"], answer: 2 },
  ]
},

// ─── LECTURE 1 ───────────────────────────────────────────────────────
{
  course: "CS50P",
  title: "CS50P Week 1: Conditionals",
  questions: [
    // Boolean expressions & comparison operators
    { q: "Why does Python use == for equality instead of =?", options: ["It's arbitrary syntax", "= is already used for assignment, so == distinguishes comparison from assignment", "== is faster to evaluate", "= only works with strings"], answer: 1 },
    { q: "What does the != operator represent?", options: ["Assignment negation", "Not equal to", "Logical NOT", "Bitwise inversion"], answer: 1 },
    { q: "What is a boolean expression?", options: ["Any expression involving math", "A question that evaluates to true or false", "A variable declaration", "A function that returns a string"], answer: 1 },

    // if / elif / else control flow
    { q: "What is wrong with using three independent 'if' statements for mutually exclusive conditions?", options: ["It causes syntax errors", "All three questions are evaluated even after finding a true answer — wasteful and potentially buggy", "Python doesn't allow multiple if statements", "It uses more memory"], answer: 1 },
    { q: "What does 'elif' allow you to do that a second 'if' does not?", options: ["Ask more complex questions", "Skip evaluation if a previous condition was already true", "Use different comparison operators", "Return values from conditions"], answer: 1 },
    { q: "When should you use 'else' instead of a final 'elif'?", options: ["When you want faster code", "When the remaining case is the only logical possibility and doesn't need an explicit check", "Else and elif are interchangeable", "Only when there are exactly two conditions"], answer: 1 },
    { q: "If you use 'if score >= 90' followed by 'if score >= 80' (not elif), and score is 95, what happens?", options: ["Only the first block runs", "Both blocks run, because each 'if' is evaluated independently", "The program crashes", "Only the second block runs"], answer: 1 },
    { q: "What does the colon at the end of an 'if' line signify?", options: ["It's optional decoration", "It marks the beginning of the indented block that belongs to that condition", "It ends the condition", "It separates the condition from the variable"], answer: 1 },
    { q: "What happens if you don't indent the line after an 'if' statement in Python?", options: ["Python auto-indents it", "The program will not work — Python requires indentation to define blocks", "It runs but ignores the condition", "It only matters for readability"], answer: 1 },

    // or / and keywords
    { q: "What does the 'or' keyword do between two boolean expressions?", options: ["Runs both blocks of code", "Evaluates to true if at least one of the expressions is true", "Combines two variables into one", "Checks if both are false"], answer: 1 },
    { q: "What does the 'and' keyword do between two boolean expressions?", options: ["Evaluates to true only if both expressions are true", "Evaluates to true if either is true", "Assigns both values simultaneously", "It's the same as 'or'"], answer: 0 },
    { q: "In the grade program, why can you simplify 'if score >= 90 and score <= 100' to just 'if score >= 90' when using elif?", options: ["Python ignores the upper bound automatically", "The elif chain already ruled out higher values, so the upper bound is implicit", "You can't — both are required", "Scores above 100 don't exist"], answer: 1 },
    { q: "In Python, which expression is equivalent to '90 <= score and score <= 100'?", options: ["90 <= score <= 100", "score between 90 and 100", "score in range(90, 100)", "90 < score > 100"], answer: 0 },

    // Modulo operator
    { q: "What does the % (modulo) operator return?", options: ["The quotient of division", "The remainder after dividing one number by another", "A percentage of the value", "The absolute value"], answer: 1 },
    { q: "What is the value of 7 % 3?", options: ["2", "3", "1", "0"], answer: 2 },
    { q: "How can you determine if a number is even using the modulo operator?", options: ["n % 2 == 2", "n % 2 == 0", "n % 0 == 2", "n / 2 == 0"], answer: 1 },

    // Boolean return values & function design
    { q: "What type does a function like 'is_even' return?", options: ["An int (0 or 1)", "A bool (True or False)", "A string ('even' or 'odd')", "None"], answer: 1 },
    { q: "In Python, boolean values True and False must be written how?", options: ["All lowercase: true, false", "All uppercase: TRUE, FALSE", "Capital first letter: True, False", "Any capitalization works"], answer: 2 },
    { q: "Why can 'return n % 2 == 0' replace an entire if/else block that returns True or False?", options: ["It's a Python shortcut that doesn't work in other contexts", "The expression itself evaluates to True or False, so wrapping it in if/else is redundant", "It returns the remainder instead of a boolean", "It only works for even/odd checks"], answer: 1 },
    { q: "What is the Pythonic one-liner equivalent of 'if n % 2 == 0: return True else: return False'?", options: ["return True if n % 2 == 0 else False", "return n % 2", "if n % 2 == 0 then True", "return (True, False)[n % 2]"], answer: 0 },
    { q: "If a boolean expression already evaluates to True or False, what is the most concise way to return it?", options: ["Wrap it in an if/else", "Use a match statement", "Return the expression directly", "Convert it to an int first"], answer: 2 },

    // Flow chart / control flow reasoning
    { q: "In a flowchart, what shape represents a decision (boolean question)?", options: ["Rectangle", "Oval", "Diamond", "Circle"], answer: 2 },
    { q: "In a flowchart of an if/elif/else chain, what happens after a true branch executes its action?", options: ["It continues checking remaining conditions", "It goes directly to stop — remaining conditions are skipped", "It loops back to the first condition", "It raises an exception"], answer: 1 },
    { q: "What is the maximum number of questions evaluated in an if/elif/else chain with 3 conditions?", options: ["Always 3", "1 (best case) to 2 (worst case, since else needs no question)", "Exactly 2", "It depends on the variable type"], answer: 1 },

    // match/case
    { q: "What keyword introduces the catch-all (default) case in a match statement?", options: ["default", "else", "case _:", "otherwise"], answer: 2 },
    { q: "How do you match multiple values in a single case (e.g., Harry or Hermione)?", options: ["case 'Harry', 'Hermione':", "case 'Harry' or 'Hermione':", "case 'Harry' | 'Hermione':", "case ['Harry', 'Hermione']:"], answer: 2 },
    { q: "What happens if no case matches and there is no underscore catch-all?", options: ["Python raises an error", "Nothing — the match block is silently skipped", "It matches the first case by default", "The program crashes"], answer: 1 },
    { q: "Unlike switch statements in C or Java, Python's match/case does NOT require what keyword?", options: ["case", "default", "break", "return"], answer: 2 },

    // Design thinking
    { q: "Why is reducing the number of questions a program asks considered better design?", options: ["It makes the code shorter, which is always better", "Fewer checks means less chance of bugs, better readability, and (at scale) better performance", "Python charges per condition evaluated", "It only matters for interviews"], answer: 1 },
    { q: "What does 'pythonic' mean?", options: ["Code that only runs in Python", "Code that follows Python community conventions for clean, idiomatic expression", "Code that uses no libraries", "Code written by Python's creator"], answer: 1 },
  ],
},

// ─── LECTURE 2 ───────────────────────────────────────────────────────
{
  course: "CS50P",
  title: "CS50P Week 2: Loops",
  questions: [
    // While loops & counting
    { q: "What is the fundamental risk of a while loop whose condition never becomes false?", options: ["It crashes immediately", "It runs forever (infinite loop)", "It skips the loop body", "It throws a syntax error"], answer: 1 },
    { q: "In 'while i != 0', if i starts at 3 and is never modified, what happens?", options: ["The loop runs 3 times", "The loop never executes", "The loop runs forever", "Python raises an error"], answer: 2 },
    { q: "What does Ctrl+C do when a program is stuck in an infinite loop?", options: ["Copies the output", "Interrupts/kills the running process", "Closes the terminal", "Restarts the program"], answer: 1 },
    { q: "Why do most programmers start counting at 0 instead of 1?", options: ["It's faster for the CPU", "It's a convention with practical benefits in indexing and ranges", "Python requires it", "It prevents infinite loops"], answer: 1 },
    { q: "What does 'i += 1' do compared to 'i = i + 1'?", options: ["It's faster at runtime", "Exactly the same thing — it's just shorter syntax", "It increments by 2", "It only works inside loops"], answer: 1 },
    { q: "If you loop 'while i < 3' starting from i = 0, how many times does the body execute?", options: ["2", "3", "4", "It depends on what's in the body"], answer: 1 },

    // For loops & range
    { q: "What does 'for i in [0, 1, 2]' do?", options: ["Creates a list and ignores it", "Assigns i to each value in the list sequentially, executing the body each time", "Runs the body once with i set to the list itself", "Checks if i is in the list"], answer: 1 },
    { q: "Why is 'for i in [0, 1, 2, ..., 999999]' a bad way to loop a million times?", options: ["It's too slow", "You'd have to manually type out every number", "Python can't handle lists that large", "for loops only work with small lists"], answer: 1 },
    { q: "What does range(3) return?", options: ["The list [1, 2, 3]", "A sequence of values 0, 1, 2", "The number 3", "The list [0, 1, 2, 3]"], answer: 1 },
    { q: "What is the pythonic convention when a loop variable is never used in the body?", options: ["Name it 'unused'", "Name it '_' (underscore)", "Delete it after the loop", "Leave it unnamed"], answer: 1 },
    { q: "What does 'print(\"meow\" * 3)' output?", options: ["meow meow meow (with spaces)", "meowmeowmeow (concatenated)", "An error — you can't multiply strings", "meow\\nmeow\\nmeow"], answer: 1 },

    // Break, continue, and input validation
    { q: "What does 'break' do inside a loop?", options: ["Pauses the loop temporarily", "Exits the innermost enclosing loop immediately", "Skips to the next iteration", "Ends the entire program"], answer: 1 },
    { q: "What does 'continue' do inside a loop?", options: ["Exits the loop", "Goes back to the top of the loop, skipping the rest of the current iteration", "Continues to the next function", "Resumes from a breakpoint"], answer: 1 },
    { q: "Why is 'while True' used as a pattern for input validation?", options: ["It's the only way to get input", "It deliberately creates a loop that repeats until you explicitly break out when input is valid", "It runs faster than a conditional loop", "Python requires it for input()"], answer: 1 },
    { q: "What is the difference between using 'break' and 'return' inside a loop within a function?", options: ["They're identical", "break exits the loop but stays in the function; return exits the function entirely and can hand back a value", "return only works in main()", "break also returns a value"], answer: 1 },

    // Lists
    { q: "What do square brackets signify in Python?", options: ["A dictionary", "A tuple", "A list", "A function call"], answer: 2 },
    { q: "If students = ['Hermione', 'Harry', 'Ron'], what is students[0]?", options: ["Harry", "Hermione", "Ron", "An error — lists start at 1"], answer: 1 },
    { q: "What does 'for student in students' do when students is a list?", options: ["Sets student to the index of each element", "Sets student to each element in the list sequentially", "Creates a copy of the list", "Sorts the list alphabetically"], answer: 1 },
    { q: "What does len() return when given a list?", options: ["The memory size in bytes", "The number of elements in the list", "The index of the last element", "The largest value in the list"], answer: 1 },
    { q: "If students has 3 elements, what does range(len(students)) produce?", options: ["0, 1, 2, 3", "1, 2, 3", "0, 1, 2", "The students themselves"], answer: 2 },
    { q: "Why would you use 'for i in range(len(students))' instead of 'for student in students'?", options: ["It's always better practice", "When you need access to the numeric index (e.g., for numbering or positional logic)", "It runs faster", "The simpler form doesn't work with strings"], answer: 1 },

    // Dictionaries
    { q: "What data structure associates keys with values in Python?", options: ["A list", "A tuple", "A dictionary", "A set"], answer: 2 },
    { q: "What do curly braces signify when defining a data structure in Python (not an f-string)?", options: ["A list", "A dictionary (or set)", "A tuple", "A function body"], answer: 1 },
    { q: "Given students = {'Hermione': 'Gryffindor', 'Draco': 'Slytherin'}, what does students['Hermione'] return?", options: ["'Hermione'", "'Gryffindor'", "0", "True"], answer: 1 },
    { q: "When you iterate over a dictionary with 'for student in students', what does the variable receive?", options: ["The values", "The keys", "Tuples of (key, value)", "The indices 0, 1, 2..."], answer: 1 },
    { q: "Why is a dictionary preferable to two parallel lists for associating students with houses?", options: ["Dictionaries use less memory", "The association is explicit in one structure instead of relying on matching indices across separate lists", "Dictionaries are faster to iterate", "You can't store strings in lists"], answer: 1 },
    { q: "What does the Python keyword 'None' represent?", options: ["Zero", "An empty string", "False", "The deliberate absence of a value"], answer: 3 },

    // Lists of dictionaries
    { q: "In a list of dictionaries like [{'name': 'Harry', 'house': 'Gryffindor'}, ...], how do you access Harry's house while iterating?", options: ["student.house", "student['house']", "students['house']", "student[1]"], answer: 1 },
    { q: "Why would you use a list of dictionaries instead of a single dictionary mapping names to houses?", options: ["It's always better", "When each item has multiple attributes (name, house, patronus) rather than just one value per key", "Lists are faster than dictionaries", "Single dictionaries can't store strings"], answer: 1 },

    // Nested loops & 2D output
    { q: "When printing a 3×3 grid, why do you need a loop inside a loop?", options: ["Python requires it for print()", "One loop handles rows (vertical), the inner loop handles columns (horizontal) within each row", "Nested loops are faster", "You don't — one loop is sufficient"], answer: 1 },
    { q: "Inside a nested loop printing a grid, why pass end='' to print() for each brick?", options: ["To prevent errors", "To keep the cursor on the same line so bricks appear side by side in a row", "To add extra spacing", "It's required syntax for nested loops"], answer: 1 },
    { q: "After the inner loop finishes one row of bricks, why call print() with no arguments?", options: ["To flush the output buffer", "To move the cursor to the next line before starting the next row", "To reset the loop counter", "It's optional — just a style choice"], answer: 1 },
    { q: "How can 'print(\"#\" * size)' replace an inner loop when printing a row of bricks?", options: ["It can't — loops are always needed", "String multiplication repeats the character, producing the same output as looping and printing one at a time", "It only works for single characters", "It's faster but produces different output"], answer: 1 },

    // Abstraction & function design
    { q: "What is the main benefit of defining a print_row() function even if it's only one line?", options: ["It runs faster", "It creates a named abstraction — the caller understands *what* happens without knowing *how*", "Python requires functions for printing", "It saves memory"], answer: 1 },
    { q: "If you change print_column's implementation from a loop to string multiplication, what must stay the same for callers?", options: ["The internal variable names", "The function name, parameters, and behavior — the interface", "The number of lines of code", "Nothing — callers always need updating"], answer: 1 },
  ],
},

// ─── LECTURE 3 ───────────────────────────────────────────────────────
{
  course: "CS50P",
  title: "CS50P Week 3: Exceptions",
  questions: [
    // Syntax errors vs runtime errors
    { q: "What is the key difference between a syntax error and a runtime error?", options: ["Syntax errors are harder to fix", "Syntax errors prevent the program from running at all; runtime errors occur while the program is executing", "Runtime errors are caused by the compiler", "There is no meaningful difference"], answer: 1 },
    { q: "Can you use try/except to catch a syntax error?", options: ["Yes, just like any other error", "Only if you use a special flag", "No — syntax errors must be fixed in the code before the program can run", "Yes, but only in Python 3.10+"], answer: 2 },

    // Value errors & the int() function
    { q: "What happens when you pass the string 'cat' to Python's int() function?", options: ["It returns 0", "It returns None", "It raises a ValueError", "It silently ignores the input"], answer: 2 },
    { q: "In 'x = int(input(...))', if int() raises a ValueError, does x get assigned a value?", options: ["Yes, x becomes None", "Yes, x keeps its previous value", "No — the error interrupts the assignment before the left side executes", "No — x is set to 0 as a default"], answer: 2 },
    { q: "Why is adding a print statement like 'please type a number' an insufficient solution to bad user input?", options: ["It causes a syntax error", "Users might not read or follow instructions, so the program can still crash", "Print statements slow down the program", "It actually is the best solution"], answer: 1 },

    // try / except basics
    { q: "What does the 'try' keyword tell Python to do?", options: ["Run the indented code and, if an exception occurs, jump to the except block instead of crashing", "Repeat the code until it works", "Test the code without actually executing it", "Compile the code before running it"], answer: 0 },
    { q: "Why is it bad practice to write a bare 'except' that catches all exceptions without specifying a type?", options: ["It's not valid Python syntax", "It can hide other bugs because you don't know what went wrong", "It makes the program slower", "It only catches ValueErrors anyway"], answer: 1 },
    { q: "Why should you minimize the number of lines inside a try block?", options: ["Python limits try blocks to 3 lines", "You should only try the lines that might actually raise the exception you're catching", "More lines make the program slower", "It's purely a style preference with no practical impact"], answer: 1 },

    // The else clause in try/except
    { q: "When does the else block execute in a try/except/else structure?", options: ["Always, after try and except", "Only when an exception is raised", "Only when the try block succeeds without raising an exception", "Only on the second attempt"], answer: 2 },
    { q: "You move 'print(x)' outside and below a try/except block (unindented). The user types 'cat'. What happens?", options: ["It prints 'cat'", "It prints nothing", "A NameError occurs because x was never successfully assigned", "A ValueError occurs again"], answer: 2 },
    { q: "Why does the NameError happen in that scenario?", options: ["Python deletes variables after a try block", "The ValueError interrupted the assignment, so x was never defined", "print() doesn't work outside of try blocks", "x went out of scope"], answer: 1 },

    // Loops with try/except
    { q: "What is the purpose of wrapping try/except inside a 'while True' loop?", options: ["It makes the code run faster", "It re-prompts the user until they provide valid input instead of quitting on the first error", "It's required syntax for try/except to work", "It catches more types of errors"], answer: 1 },
    { q: "In a while True loop with try/except, what does 'break' do when placed after a successful conversion?", options: ["Exits the entire program", "Exits the loop so the program can continue", "Restarts the loop", "Raises an exception"], answer: 1 },
    { q: "If you put the print statement inside the loop but never use break, what happens?", options: ["The program crashes", "It prints the result once and exits", "It loops forever, printing and re-prompting on every iteration", "It prints nothing"], answer: 2 },

    // return vs break
    { q: "If you're inside a loop within a function, what does 'return x' do compared to 'break'?", options: ["They're identical", "return exits the function and gives back a value; break only exits the loop", "break exits the function; return only exits the loop", "return is only for main()"], answer: 1 },
    { q: "Why can 'return' replace 'break' followed by 'return' when they're adjacent?", options: ["It's a Python compiler optimization", "return already breaks out of the loop AND returns the value — doing both at once", "They actually can't be combined", "break is deprecated in Python"], answer: 1 },

    // pass keyword
    { q: "What does the 'pass' keyword do inside an except block?", options: ["It re-raises the exception", "It does nothing — the exception is caught but silently ignored", "It prints a default error message", "It skips the current iteration of a loop"], answer: 1 },
    { q: "When might you use 'pass' in an except block instead of printing an error message?", options: ["When you want the program to crash gracefully", "When you want to silently retry by staying in the loop without telling the user what went wrong", "When the error is a syntax error", "You should never use pass"], answer: 1 },

    // Function design & abstraction
    { q: "Why is it good practice to extract the input-validation loop into a separate function like get_int()?", options: ["It makes the code run faster", "It abstracts away the retry logic so main() stays clean and the function is reusable", "Python requires input to be inside a function", "It prevents all possible errors"], answer: 1 },
    { q: "Why should get_int() accept a 'prompt' parameter instead of hard-coding 'What's x?'?", options: ["Hard-coded strings cause syntax errors", "It makes the function reusable — the caller decides what message to show", "Parameters make functions faster", "It's required by Python's style guide"], answer: 1 },
    { q: "In get_int(), why is it unnecessary to define a variable x if you immediately return the converted value?", options: ["Variables aren't allowed in functions", "You can return int(input(...)) directly — the intermediate variable adds a line without adding clarity", "It would cause a NameError", "Python automatically optimizes it away"], answer: 1 },

    // Pythonic philosophy
    { q: "What is the 'Pythonic' approach to handling potentially invalid input?", options: ["Check every possible condition with if/elif/else before acting", "Try the operation and handle the exception if it fails", "Always convert input to strings first", "Require the user to specify the data type"], answer: 1 },
    { q: "A caller uses get_int() which handles ValueError internally with 'pass'. Does the caller know an error occurred?", options: ["Yes, through a system variable", "Yes, get_int() returns None on error", "No — the error is fully handled inside get_int() and hidden from the caller", "Yes, Python logs it automatically"], answer: 2 },

    // Order of operations & assignment
    { q: "In 'x = int(input(...))', which function executes first?", options: ["int()", "The assignment (=)", "input()", "They execute simultaneously"], answer: 2 },
    { q: "In that same line, if int() raises an error, what happens to the assignment to x?", options: ["x gets assigned None", "x gets assigned 0", "The assignment never happens — the error occurs before the value reaches the left side of =", "x keeps whatever value it had before"], answer: 2 },

    // Error messages
    { q: "What does 'unterminated string literal' mean?", options: ["A variable name is too long", "You started a string with a quote but never closed it", "The program ran out of memory", "A string contains illegal characters"], answer: 1 },
    { q: "What does 'invalid literal for int() with base 10' mean?", options: ["The number is too large", "You passed a value to int() that can't be converted to a decimal integer", "The integer overflowed", "base 10 is not supported"], answer: 1 },
  ],
},

// ─── LECTURE 4 ───────────────────────────────────────────────────────
{
  course: "CS50P",
  title: "CS50P Week 4: Libraries",
  questions: [
    // Modules & imports
    { q: "What is a module in Python?", options: ["A type of variable", "A library with one or more functions or features", "A built-in data type", "A testing framework"], answer: 1 },
    { q: "What problem does factoring code into a library solve?", options: ["It makes code run faster", "It eliminates copying and pasting the same code across projects", "It reduces memory usage", "It prevents syntax errors"], answer: 1 },
    { q: "What is the difference between 'import random' and 'from random import choice'?", options: ["There is no difference", "The first gives access to all functions via random.X; the second loads choice directly into your namespace", "The second is faster", "The first only imports one function"], answer: 1 },
    { q: "What is the risk of using 'from random import choice' instead of 'import random'?", options: ["It's slower", "If you define your own variable or function called 'choice', it will collide with the imported one", "It doesn't work in all Python versions", "It imports the entire module anyway"], answer: 1 },
    { q: "When you write 'import random', where does Python find the random module?", options: ["It downloads it from the internet", "It's a file (random.py) installed alongside the Python interpreter", "It's built into the print function", "It generates it at runtime"], answer: 1 },

    // random module
    { q: "What does random.choice do when given a list of 3 items?", options: ["Returns all three in random order", "Returns one item with equal probability (1/3 each)", "Returns the first item", "Returns a random number between 1 and 3"], answer: 1 },
    { q: "What does random.shuffle do differently from most functions we've seen?", options: ["It returns a new list", "It modifies the list in place rather than returning a new value", "It only works with numbers", "It requires two arguments"], answer: 1 },
    { q: "You call random.randint(1, 10). Which values are possible?", options: ["1 through 9", "0 through 10", "1 through 10 inclusive", "0 through 9"], answer: 2 },

    // sys.argv & command line arguments
    { q: "What does sys.argv contain?", options: ["The number of lines in your program", "A list of all words typed at the command line, including the filename", "The system's environment variables", "The return value of main()"], answer: 1 },
    { q: "If you run 'python name.py David', what is sys.argv[0]?", options: ["python", "David", "name.py", "0"], answer: 2 },
    { q: "If you run 'python name.py' with no additional arguments and your code accesses sys.argv[1], what happens?", options: ["It returns None", "It returns an empty string", "An IndexError exception is raised", "The program silently exits"], answer: 2 },
    { q: "What are two ways to handle missing command line arguments?", options: ["try/except for IndexError, or check len(sys.argv) before accessing", "Use input() as backup, or crash gracefully", "Call sys.fix(), or restart the program", "There is only one way: try/except"], answer: 0 },
    { q: "Why might you prefer checking len(sys.argv) with if/elif/else over try/except?", options: ["It's faster", "You can give more specific error messages (too few vs. too many)", "try/except doesn't work with sys.argv", "There's no reason to prefer one over the other"], answer: 1 },
    { q: "What does sys.exit() do?", options: ["Logs out of the computer", "Terminates the program immediately, optionally printing a message", "Exits the current function", "Closes the terminal window"], answer: 1 },
    { q: "Why can't you use 'break' instead of sys.exit() to stop a program?", options: ["break is deprecated", "break only exits loops, not the entire program", "break requires an argument", "You can — they're interchangeable"], answer: 1 },

    // Slicing
    { q: "What does sys.argv[1:] return?", options: ["The first element only", "All elements except the first (the filename)", "The last element", "A copy of the entire list"], answer: 1 },
    { q: "In list slicing, what does a negative index like [-1] mean?", options: ["The first element", "An error", "Counting from the end of the list", "Remove the last element"], answer: 2 },

    // Packages & pip
    { q: "What is pip?", options: ["A Python IDE", "A package manager that installs third-party libraries", "A built-in Python function", "A type of Python file"], answer: 1 },
    { q: "What is the difference between a module that comes with Python and a package you install with pip?", options: ["There is no difference after installation", "Modules are built-in; packages are third-party and must be installed separately", "Packages are faster", "Modules can't be imported"], answer: 1 },
    { q: "After running 'pip install cowsay', what can you then do in your code?", options: ["Nothing — pip only downloads documentation", "import cowsay and call its functions", "cowsay runs automatically", "You must restart Python first"], answer: 1 },

    // APIs & JSON
    { q: "What is an API in the context of web services?", options: ["A Python file format", "A mechanism to access data on someone else's server programmatically", "A type of database", "A graphical user interface"], answer: 1 },
    { q: "What does the requests library do?", options: ["Prompts the user for input", "Makes HTTP requests to URLs, like a browser would", "Manages file permissions", "Sends emails"], answer: 1 },
    { q: "What is JSON?", options: ["A Python-only data format", "A language-agnostic text format using key-value pairs, curly braces, and square brackets", "A type of database", "A compression algorithm"], answer: 1 },
    { q: "When you call response.json() in Python, what type of object do you get back?", options: ["A string", "A Python dictionary", "A JSON file on disk", "A list of tuples"], answer: 1 },
    { q: "Why did the lecture use json.dumps() with indent=2?", options: ["To compress the data", "To pretty-print the JSON response in a human-readable format", "To convert it to a CSV", "To encrypt the data"], answer: 1 },
    { q: "In the iTunes API response, the 'results' key contains what type of value?", options: ["A single string", "A list of dictionaries, each representing a song", "An integer count", "Another URL"], answer: 1 },

    // Creating your own modules
    { q: "If you create a file called helpers.py with a function greet(), how do you use it from another file?", options: ["Just call greet() directly", "from helpers import greet", "import greet from helpers", "You can't import your own files"], answer: 1 },
    { q: "You have sayings.py with main() called at the bottom. When another file does 'from sayings import hello', what happens?", options: ["Only hello is loaded; main is not called", "Python reads the whole file top-to-bottom, so main() also runs", "An import error occurs", "Python skips the main function automatically"], answer: 1 },
    { q: "What does 'if __name__ == \"__main__\"' prevent?", options: ["Syntax errors", "The main function from running when the file is imported by another file", "Other files from accessing your functions", "Variables from leaking into global scope"], answer: 1 },
    { q: "When is __name__ set to '__main__'?", options: ["Always", "Only when the file is run directly from the command line, not when imported", "Only when imported", "Only inside functions"], answer: 1 },

    // Design reasoning
    { q: "Why might you prefer command line arguments over calling input() for every value?", options: ["input() is deprecated", "Command line arguments are faster for repeated use and enable automation", "input() doesn't work in Python 3", "There's no practical difference"], answer: 1 },
    { q: "A JSON response contains nested dictionaries. To get the track name, you write result['trackName']. Where does the key name 'trackName' come from?", options: ["You choose it yourself", "Python generates it automatically", "The API developer defined it — you must match their key names exactly", "It's a Python reserved word"], answer: 2 },
  ],
},

// ─── LECTURE 5 ───────────────────────────────────────────────────────
{
  course: "CS50P",
  title: "CS50P Week 5: Unit Tests",
  questions: [
    // Why test & testing philosophy
    { q: "Why is manually testing your program by running it with sample inputs insufficient?", options: ["It's too slow for the computer", "You might forget to test important corner cases and can't easily repeat tests", "Manual testing only works on small programs", "Python doesn't support manual testing"], answer: 1 },
    { q: "What is a 'unit test'?", options: ["A test of the entire program end-to-end", "A test of an individual function or small piece of code", "A test that only runs once", "A test written by someone other than the author"], answer: 1 },
    { q: "Why is it bad practice to put all your logic in main instead of separate functions?", options: ["main runs slower than other functions", "Separate functions are easier to test because they have defined inputs and outputs", "Python limits main to 50 lines", "It causes import errors"], answer: 1 },

    // Test file conventions
    { q: "What is the conventional naming pattern for a file that tests calculator.py?", options: ["check_calculator.py", "test_calculator.py", "calculator_test_suite.py", "verify_calculator.py"], answer: 1 },
    { q: "Why do we add 'if __name__ == \"__main__\"' before calling main in calculator.py?", options: ["It makes the program run faster", "It prevents main from executing when we import functions from the file", "It's required Python syntax", "It enables debugging mode"], answer: 1 },
    { q: "If you want to test a function called 'square', what is the conventional test function name?", options: ["check_square", "square_verify", "test_square", "validate_square"], answer: 2 },

    // Assert keyword
    { q: "What does the 'assert' keyword do when the expression is True?", options: ["Prints 'passed'", "Returns True", "Nothing — execution continues silently", "Logs the result to a file"], answer: 2 },
    { q: "What happens when an assert statement's expression evaluates to False?", options: ["The program prints 'False'", "An AssertionError is raised", "The line is skipped", "Python retries the expression"], answer: 1 },
    { q: "What is the advantage of 'assert square(2) == 4' over an if-statement that checks the same thing?", options: ["Assert is faster at runtime", "It's less code — you skip the if/print boilerplate", "Assert catches more types of bugs", "There is no advantage"], answer: 1 },

    // Corner cases & test design
    { q: "Why did testing only square(2) fail to catch the bug where n*n was replaced with n+n?", options: ["2 is too small to test", "Because 2+2 == 2*2, so the bug is invisible for that input", "Assert doesn't work with the number 2", "The test file had a syntax error"], answer: 1 },
    { q: "When testing a mathematical function like square, which set of inputs best covers corner cases?", options: ["Only positive integers", "Only large numbers", "Positive, negative, and zero", "Random floating-point values"], answer: 2 },
    { q: "Why should you keep individual test functions simple and short?", options: ["Python limits test functions to 10 lines", "Complex tests might themselves contain bugs, and you don't want to write tests for your tests", "Simple tests run faster", "pytest rejects long functions"], answer: 1 },

    // pytest basics
    { q: "What is pytest?", options: ["A built-in Python keyword", "A third-party testing framework that automates running and reporting tests", "A Python IDE", "A type checker for Python"], answer: 1 },
    { q: "How do you install pytest?", options: ["It comes pre-installed with Python", "import pytest at the top of your file", "pip install pytest", "download it from python.org"], answer: 2 },
    { q: "How do you run tests with pytest?", options: ["python test_calculator.py", "pytest test_calculator.py", "python -m test test_calculator.py", "run test_calculator.py"], answer: 1 },
    { q: "When using pytest, do you need to write your own main function, try/except blocks, or print statements in the test file?", options: ["Yes, all three are required", "You need main but not try/except", "No — pytest handles all of that automatically", "You still need try/except but not main"], answer: 2 },

    // pytest output & multiple test functions
    { q: "In pytest output, what does a dot (.) represent?", options: ["A skipped test", "A passed test", "A warning", "An incomplete test"], answer: 1 },
    { q: "In pytest output, what does F represent?", options: ["Fixed", "Fatal error", "Failed test", "Finished"], answer: 2 },
    { q: "If you put all five assertions in one test function and the second one fails, what happens to assertions 3-5?", options: ["They still run", "They are skipped — the function stops at the first failure", "They run but results are hidden", "They are moved to a separate report"], answer: 1 },
    { q: "Why is splitting tests into test_positive, test_negative, and test_zero better than one big test_square function?", options: ["It's required by pytest", "Each function runs independently, so a failure in one doesn't prevent the others from providing clues", "Smaller functions use less memory", "pytest only supports functions with one assert"], answer: 1 },

    // Testing exceptions with pytest.raises
    { q: "How do you test that a function raises a specific exception (e.g., TypeError)?", options: ["assert square('cat') == TypeError", "Use try/except in your test", "Use 'with pytest.raises(TypeError):' then call the function", "You cannot test for exceptions"], answer: 2 },
    { q: "To use pytest.raises, what must you import?", options: ["from pytest import raises", "import pytest (then use pytest.raises)", "import assert", "from exceptions import raises"], answer: 1 },

    // Return values vs side effects
    { q: "Why can't you use 'assert hello('David') == \"Hello, David\"' if hello() uses print instead of return?", options: ["print is not allowed in tested functions", "print produces a side effect but returns None, so the comparison fails", "Strings can't be compared with ==", "assert doesn't work with string functions"], answer: 1 },
    { q: "What change makes a function that prints its result more testable?", options: ["Add a try/except around the print", "Replace print with return and let the caller handle printing", "Use f-strings instead of concatenation", "Add type hints to the function"], answer: 1 },
    { q: "What is a 'side effect' in the context of functions?", options: ["A bug caused by the function", "An observable behavior like printing to screen, rather than returning a value", "A variable that changes type", "An unused import"], answer: 1 },

    // Organizing tests in folders
    { q: "What special file must exist inside a test folder for Python to treat it as a package?", options: ["setup.py", "__init__.py", "config.py", "__main__.py"], answer: 1 },
    { q: "What happens when you run 'pytest test/' where test/ is a folder?", options: ["It runs only the first test file", "It searches the folder and runs all test files it finds", "It fails because pytest only accepts single files", "It creates new test files automatically"], answer: 1 },
    { q: "The __init__.py file inside a test folder can be:", options: ["Only a configuration file with specific required content", "Empty — its presence alone signals the folder is a package", "A copy of the module being tested", "A list of all test functions"], answer: 1 },

    // Testability & design
    { q: "What makes a function 'testable' in the unit-testing sense?", options: ["It has no parameters", "It has well-defined inputs (parameters) and outputs (return values)", "It uses only built-in types", "It is fewer than 10 lines long"], answer: 1 },
    { q: "If your main function handles user input and your square function handles math, which should your test file focus on?", options: ["main, because that's where errors start", "Both equally", "square, because it has defined inputs/outputs independent of user interaction", "Neither — test the whole program end-to-end"], answer: 2 },
  ],
},

// ─── LECTURE 6 ───────────────────────────────────────────────────────
{
  course: "CS50P",
  title: "CS50P Week 6: File I/O",
  questions: [
    // File modes & persistence
    { q: "What happens to data stored in variables when a Python program exits?", options: ["It's saved automatically", "It's lost — variables exist only in memory", "It's cached for next run", "It depends on the variable type"], answer: 1 },
    { q: "What does open('file.txt', 'w') do if file.txt already exists?", options: ["Appends to the existing file", "Raises a FileExistsError", "Overwrites the file with a new empty one", "Opens it read-only"], answer: 2 },
    { q: "What is the difference between 'w' and 'a' mode in open()?", options: ["'w' is faster than 'a'", "'w' recreates the file each time; 'a' adds to the end", "'a' sorts the content; 'w' does not", "There is no difference"], answer: 1 },
    { q: "If you open a file in read mode, what happens if you try to write to it?", options: ["It silently fails", "It raises an error", "It works but doesn't save", "It creates a backup first"], answer: 1 },
    { q: "What is the default mode if you call open('file.txt') without a second argument?", options: ["Write ('w')", "Append ('a')", "Read ('r')", "Read-write ('r+')"], answer: 2 },

    // The 'with' statement
    { q: "What problem does the 'with' keyword solve when working with files?", options: ["It makes files read faster", "It automatically closes the file when the block ends, preventing you from forgetting", "It encrypts the file contents", "It locks the file so other programs can't access it"], answer: 1 },
    { q: "What happens to the file when code execution leaves a 'with' block?", options: ["Nothing — you must call close() manually", "The file is automatically closed", "The file is deleted", "The variable becomes None"], answer: 1 },

    // write() vs print()
    { q: "How does file.write() differ from print() regarding line endings?", options: ["write() adds a newline automatically; print() does not", "print() adds a newline automatically; write() does not", "Both add newlines automatically", "Neither adds newlines"], answer: 1 },
    { q: "You write three names to a file using write() without adding '\\n'. What does the file look like?", options: ["Three names on separate lines", "All three names concatenated on one line", "Only the last name appears", "An error is raised"], answer: 1 },

    // Reading files
    { q: "What does the readlines() method return?", options: ["A single string of all content", "A list of lines, each still containing its newline character", "A dictionary of line numbers to lines", "An integer count of lines"], answer: 1 },
    { q: "What does 'for line in file' do in Python?", options: ["Reads the entire file into memory at once", "Iterates over each line in the file one at a time", "Searches for a specific line", "Counts the number of lines"], answer: 1 },
    { q: "After reading a file, you see extra blank lines in your output. What is the most likely cause?", options: ["The file is corrupted", "Both the file's newlines and print()'s automatic newline are producing double spacing", "Python adds blank lines by default", "The terminal is misconfigured"], answer: 1 },
    { q: "What does rstrip() do when called on a line read from a file?", options: ["Removes leading whitespace", "Removes trailing whitespace including the newline character", "Reverses the string", "Splits the string on whitespace"], answer: 1 },

    // Sorting file data
    { q: "Why can't you sort and print lines in a single pass through a file?", options: ["Python doesn't support sorting strings", "You need all the data in memory before you can determine the correct order", "Files are already sorted by the OS", "Sorting requires a database"], answer: 1 },
    { q: "What does sorted() return when given a list?", options: ["None — it sorts in place", "A new sorted list, leaving the original unchanged", "A dictionary of sorted values", "A tuple"], answer: 1 },
    { q: "How do you reverse the sort order using sorted()?", options: ["sorted(list, order='desc')", "sorted(list, reverse=True)", "list.sort().reverse()", "sorted(list, direction=-1)"], answer: 1 },

    // CSV fundamentals
    { q: "What does CSV stand for?", options: ["Coded String Values", "Comma Separated Values", "Column Sorted Variables", "Character Sequenced Vectors"], answer: 1 },
    { q: "You split a CSV line on commas, but one field contains 'number four, privet drive'. What goes wrong?", options: ["Nothing — split handles quoted fields", "split() breaks the address into two separate values, corrupting your data", "The comma is automatically escaped", "Python raises a ValueError"], answer: 1 },
    { q: "Why should you use Python's csv module instead of manually splitting on commas?", options: ["It's faster at reading files", "It handles edge cases like commas inside quoted fields", "It's required by Python syntax", "It compresses the file automatically"], answer: 1 },

    // csv.reader vs csv.DictReader
    { q: "What data type does csv.reader return for each row?", options: ["A dictionary", "A list of strings", "A tuple", "A single concatenated string"], answer: 1 },
    { q: "What does csv.DictReader use as dictionary keys for each row?", options: ["The row number", "The values from the first row (header) of the CSV", "Integer indices starting at 0", "You must specify keys manually"], answer: 1 },
    { q: "If someone reorders the columns in your CSV file, which reader approach keeps working without code changes?", options: ["csv.reader with index-based access", "csv.DictReader with named column access", "Both break equally", "Neither — you must rewrite the file"], answer: 1 },
    { q: "What must a CSV file have in its first row for DictReader to work automatically?", options: ["A row count", "A header row with column names", "A version number", "Nothing special — it always works"], answer: 1 },

    // csv.writer and csv.DictWriter
    { q: "When using csv.writer, how do you specify the values for one row?", options: ["As a dictionary", "As a list passed to writerow()", "As keyword arguments", "As a formatted string"], answer: 1 },
    { q: "What does csv.writer automatically do if a value contains a comma?", options: ["Escapes it with a backslash", "Wraps the value in quotes", "Removes the comma", "Raises an error"], answer: 1 },
    { q: "What extra argument does csv.DictWriter require that csv.writer does not?", options: ["A file encoding", "fieldnames — a list of column names", "A row count", "A delimiter character"], answer: 1 },

    // Sorting lists of dictionaries
    { q: "Why can't sorted() directly sort a list of dictionaries without additional information?", options: ["Dictionaries can't be compared — sorted doesn't know which key to use for ordering", "Dictionaries are immutable", "sorted() only works on strings", "It can — no extra info is needed"], answer: 0 },
    { q: "What does the 'key' parameter in sorted() expect?", options: ["A string naming the sort column", "A function that extracts the comparison value from each element", "A boolean for ascending/descending", "An integer index"], answer: 1 },
    { q: "What is a lambda function?", options: ["A function that runs in parallel", "An anonymous function defined inline without a name", "A function that only works with lists", "A function imported from the lambda module"], answer: 1 },
    { q: "Given students as a list of dicts, what does sorted(students, key=lambda s: s['name']) do?", options: ["Filters students by name", "Returns a new list of students sorted alphabetically by their 'name' value", "Modifies each student's name", "Groups students by name"], answer: 1 },
    { q: "Why do you pass 'get_name' to sorted() without parentheses (key=get_name, not key=get_name())?", options: ["It's a syntax error to include parentheses", "You're passing the function itself so sorted can call it repeatedly, not calling it once yourself", "Parentheses would reverse the sort", "There's no difference"], answer: 1 },

    // Unpacking
    { q: "What does 'name, home = line.split(\",\")' do?", options: ["Creates a list with two elements", "Unpacks the two values returned by split into separate variables simultaneously", "Joins name and home into one string", "Raises an error if there aren't exactly two values"], answer: 1 },

    // Binary files & Pillow
    { q: "What is the fundamental difference between a text file and a binary file?", options: ["Text files are smaller", "Text files store human-readable characters; binary files store raw bytes for any data type", "Binary files can't be opened in Python", "There is no real difference"], answer: 1 },
    { q: "In sys.argv, what is always stored at index 0?", options: ["The first command-line argument", "The name of the program itself", "The Python version", "The current directory"], answer: 1 },
    { q: "What does sys.argv[1:] give you?", options: ["The first argument only", "All command-line arguments except the program name", "The last argument only", "An error if there are no arguments"], answer: 1 },
  ],
},

// ─── LECTURE 7 ───────────────────────────────────────────────────────
{
  course: "CS50P",
  title: "CS50P Week 7: Regular Expressions",
  questions: [
    // Core concept: what regular expressions are
    { q: "What is a regular expression (regex)?", options: ["A Python data type", "A pattern used to match, validate, or extract data from strings", "A function that formats strings", "A type of loop for iterating over characters"], answer: 1 },

    // re.search basics
    { q: "What does re.search() return if the pattern is NOT found in the string?", options: ["An empty string", "False", "None", "It raises an exception"], answer: 2 },
    { q: "What two required arguments does re.search() take?", options: ["A string and a filename", "A pattern and a string to search", "Two strings to compare", "A pattern and a replacement"], answer: 1 },

    // . * + ?
    { q: "In a regex, what does a single dot (.) represent?", options: ["A literal period", "Any single character except a newline", "The end of the pattern", "A whitespace character"], answer: 1 },
    { q: "What is the difference between * and + in a regex?", options: ["* means one or more; + means zero or more", "* means zero or more; + means one or more", "They are identical", "* is greedy; + is lazy"], answer: 1 },
    { q: "Why does the pattern '.*@.*' match a string with ONLY an @ sign and nothing else?", options: ["The @ counts as a wildcard", "* means zero or more, so no characters on either side is acceptable", "The dot matches the @ itself", "It's a bug in Python's re library"], answer: 1 },
    { q: "What does ? mean after a character or group in a regex?", options: ["Match any character", "The preceding element is optional (zero or one)", "Repeat the preceding element forever", "Negate the preceding element"], answer: 1 },

    // Escaping with backslash
    { q: "How do you match a literal period in a regex, rather than 'any character'?", options: ["Use two periods (..)", "Use \\. (backslash before the dot)", "Surround it in square brackets like [.]", "Both B and C work"], answer: 3 },
    { q: "Why should you prefix a regex string with r (e.g., r\"pattern\") in Python?", options: ["It makes the regex run faster", "It tells Python to treat backslashes literally, avoiding misinterpretation as escape sequences", "It's required syntax — regex won't work without it", "It enables case-insensitive matching"], answer: 1 },

    // Anchors: ^ and $
    { q: "What does the ^ symbol mean at the START of a regex pattern?", options: ["Match any character", "Match the start of the string", "Negate the pattern", "Match a literal caret character"], answer: 1 },
    { q: "What does $ at the END of a regex pattern mean?", options: ["Match a currency value", "Match the end of the string", "The pattern is optional", "Escape the last character"], answer: 1 },
    { q: "Without ^ and $, what happens if the user types 'my email is malan@harvard.edu.' into a validator using re.search?", options: ["It fails because there are extra words", "It matches, because re.search finds the pattern anywhere in the string", "It throws an error", "It only matches the email portion and ignores the rest"], answer: 1 },

    // Character sets and complements
    { q: "What does [abc] mean in a regex?", options: ["Match the literal string 'abc'", "Match any one character that is a, b, or c", "Match anything except a, b, or c", "Match a followed by b followed by c"], answer: 1 },
    { q: "What does [^@] mean inside a regex?", options: ["Match @ at the start of a string", "Match any single character EXCEPT @", "Match a literal ^ followed by @", "Match the @ sign optionally"], answer: 1 },
    { q: "How do you specify a range of lowercase letters in a character set?", options: ["[a, b, c, ... z]", "[a-z]", "[lowercase]", "\\a-z"], answer: 1 },

    // Shorthand character classes
    { q: "What does \\w match in a regex?", options: ["Whitespace only", "Any word character: letters, digits, and underscore", "Only lowercase letters", "Any character including special symbols"], answer: 1 },
    { q: "What is the relationship between \\w and [a-zA-Z0-9_]?", options: ["They are unrelated", "They match the same set of characters", "\\w matches more characters", "\\w excludes underscores"], answer: 1 },
    { q: "What does \\d match?", options: ["Any digit 0-9", "Any non-digit", "The letter d", "A decimal point"], answer: 0 },
    { q: "What does a CAPITAL letter shorthand like \\D or \\W represent?", options: ["The same thing but case-insensitive", "The complement — everything the lowercase version does NOT match", "An error — capitals aren't valid", "A literal backslash followed by the letter"], answer: 1 },

    // Flags
    { q: "What does re.IGNORECASE do when passed as a flag to re.search?", options: ["Ignores whitespace in the pattern", "Treats uppercase and lowercase letters as equivalent when matching", "Makes the search return only lowercase results", "Disables special character interpretation"], answer: 1 },
    { q: "Why might you use re.IGNORECASE instead of calling .lower() on the input?", options: ["It's faster", "It validates without modifying the original string", "lower() doesn't work on email addresses", "There is no practical difference"], answer: 1 },

    // Groups and capturing
    { q: "What do parentheses () do in a regex when used with re.search?", options: ["They are literal characters to match", "They group and CAPTURE the matched text, accessible via .group()", "They make the pattern optional", "They negate the enclosed pattern"], answer: 1 },
    { q: "If a regex has two sets of capturing parentheses, what does matches.group(1) return?", options: ["The entire matched string", "The text matched by the first set of parentheses", "The text matched by the second set of parentheses", "Both groups combined"], answer: 1 },
    { q: "Why does group numbering start at 1 instead of 0 for captured groups?", options: ["It's a Python convention for all sequences", "Group 0 is reserved for the entire matched string", "It's arbitrary with no reason", "Group 0 represents the pattern itself"], answer: 1 },
    { q: "What does (?:...) do compared to (...)?", options: ["It captures more aggressively", "It groups without capturing — the match isn't stored as a group", "It makes the group optional", "It's invalid syntax"], answer: 1 },
    { q: "You have the regex r'^(\\w+), (\\w+)$' and input 'Malan, David'. What is group(2)?", options: ["Malan", "David", "Malan, David", "None"], answer: 1 },

    // re.sub
    { q: "What does re.sub() do?", options: ["Searches for a pattern", "Substitutes (replaces) all occurrences of a pattern in a string with a replacement", "Splits a string by a pattern", "Submits the regex for compilation"], answer: 1 },
    { q: "re.sub(r'https?://twitter\\.com/', '', url) — what does this produce if url is 'https://twitter.com/davidjmalan'?", options: ["https://twitter.com/", "davidjmalan", "twitter.com/davidjmalan", "An error"], answer: 1 },

    // The walrus operator
    { q: "What does the := (walrus) operator allow you to do?", options: ["Compare two values", "Assign a value and test it in the same expression (e.g., in an if statement)", "Define a constant", "Create a regular expression"], answer: 1 },

    // Finite state machines (conceptual)
    { q: "When re.search processes a regex, what computational model does it use internally?", options: ["A recursive descent parser", "A finite state machine (non-deterministic finite automaton)", "A binary search tree", "A hash table lookup"], answer: 1 },
    { q: "In a finite state machine diagram for a regex, what does a 'double circle' state represent?", options: ["An error state", "The start state", "An accept state — the input is valid if the machine ends here", "A state that loops forever"], answer: 2 },

    // Practical design wisdom
    { q: "Why is it a bad idea to write a long, complex regex all at once?", options: ["Python limits regex length", "Mistakes are extremely hard to find — incremental building and testing is more effective", "Long regexes are slower", "It's fine — there's no disadvantage"], answer: 1 },
    { q: "Instead of writing your own regex to validate email addresses, what does the lecture recommend?", options: ["Use a simpler check like looking for @", "Copy the official RFC regex exactly", "Use a well-tested third-party library", "Don't validate email addresses at all"], answer: 2 },
    { q: "What is the practical difference between re.search, re.match, and re.fullmatch?", options: ["They are identical", "search checks anywhere in the string; match anchors at the start; fullmatch anchors at both start and end", "match is faster than search", "fullmatch only works with \\w patterns"], answer: 1 },

    // | (or) operator
    { q: "What does the vertical bar | mean in a regex?", options: ["Logical AND", "Logical OR — match the pattern on the left or the right", "Pipe the output to another regex", "Escape the next character"], answer: 1 },
    { q: "To match '.com' OR '.edu' at the end of a domain, which regex fragment works?", options: ["\\.(com)(edu)", "\\.(com|edu)", "\\.com.edu", "\\.[com,edu]"], answer: 1 },

    // Common pitfalls
    { q: "You use the pattern r'.+@.+\\.edu$' but forget the ^ anchor. What's the consequence?", options: ["It won't compile", "A string like 'my email is malan@harvard.edu' will pass validation", "It will only match .edu domains", "Nothing — $ alone is sufficient"], answer: 1 },
    { q: "You write r'https://twitter\\.com/' but the user pastes an http:// URL. Why does it fail?", options: ["http is not a valid protocol", "The regex requires the 's' literally — you need to make it optional with s?", "re.search automatically handles both", "The backslash breaks the URL"], answer: 1 },
  ],
},

// ─── LECTURE 8 ───────────────────────────────────────────────────────
{
  course: "CS50P",
  title: "CS50P Week 8: Object-Oriented Programming",
  questions: [
    // Classes & objects fundamentals
    { q: "What is a class in Python?", options: ["A function that returns multiple values", "A blueprint for creating your own data type", "A built-in module for organizing code", "A type of dictionary with methods"], answer: 1 },
    { q: "What is the relationship between a class and an object?", options: ["They are the same thing", "A class is a specific instance of an object", "An object is a specific instance created from a class", "Objects contain classes"], answer: 2 },
    { q: "What does 'instantiation' mean?", options: ["Defining a class", "Importing a module", "Creating an object from a class", "Calling a method on an object"], answer: 2 },

    // Tuples, lists, dicts as return strategies
    { q: "What makes a tuple different from a list?", options: ["Tuples can only hold strings", "Tuples are immutable — you cannot change their values after creation", "Tuples are faster but otherwise identical", "Tuples must contain exactly two elements"], answer: 1 },
    { q: "If you try to assign a new value to an index in a tuple, what happens?", options: ["It silently fails", "A TypeError is raised", "It works but prints a warning", "The tuple converts to a list"], answer: 1 },
    { q: "What is the main advantage of a dictionary over a tuple for storing structured data?", options: ["Dictionaries are immutable", "You access values by meaningful keys instead of numeric indices", "Dictionaries use less memory", "Dictionaries are faster"], answer: 1 },
    { q: "When you return name, house with a comma in Python, what are you actually returning?", options: ["Two separate values", "A single tuple containing both values", "A list", "A dictionary"], answer: 1 },

    // __init__ method
    { q: "What is the purpose of the __init__ method?", options: ["To print the object", "To delete the object from memory", "To initialize an object's attributes when it is first created", "To define the class name"], answer: 2 },
    { q: "Why does __init__ take 'self' as its first parameter?", options: ["It's optional but conventional", "So you can access and store data inside the current object being created", "It refers to the class, not the object", "It's required for Python to parse the function"], answer: 1 },
    { q: "When you write Student('Harry', 'Gryffindor'), who calls __init__?", options: ["You call it explicitly", "Python calls it automatically when the object is constructed", "The print function calls it", "It's never called — it runs at import time"], answer: 1 },
    { q: "If __init__ takes self, name, and house, how many arguments does the programmer pass when creating the object?", options: ["Three", "Two — Python passes self automatically", "One", "It depends on the class"], answer: 1 },

    // Instance variables & dot notation
    { q: "What does self.name = name do inside __init__?", options: ["Creates a local variable called name", "Stores the value of name inside the current object as an instance variable", "Creates a class variable shared by all objects", "Assigns name to the class itself"], answer: 1 },
    { q: "How do you access an instance variable called 'house' on an object called 'student'?", options: ["student['house']", "student.house", "student->house", "house(student)"], answer: 1 },

    // __str__ method
    { q: "If you print an object that has no __str__ method defined, what do you see?", options: ["An empty string", "The object's class name and memory address", "A TypeError", "The object's __init__ arguments"], answer: 1 },
    { q: "What is the purpose of __str__?", options: ["To initialize the object", "To define how the object is represented as a string for display", "To compare two objects", "To convert the object to an integer"], answer: 1 },
    { q: "The __str__ method is called automatically when you pass an object to which function?", options: ["len()", "type()", "print()", "input()"], answer: 2 },

    // raise and error checking in classes
    { q: "Why is sys.exit() a poor choice for handling invalid input inside __init__?", options: ["It doesn't actually stop the program", "It's too extreme — it kills the entire program instead of signaling a catchable error", "It only works on Linux", "It requires importing os"], answer: 1 },
    { q: "What does the 'raise' keyword do?", options: ["Catches an exception", "Creates and signals an exception that can be caught elsewhere with try/except", "Prints an error message", "Exits the program"], answer: 1 },
    { q: "Why is validating data inside __init__ better than validating it in a separate function?", options: ["It runs faster", "It keeps all validation logic encapsulated with the class it protects", "Python requires it", "It uses less memory"], answer: 1 },

    // Properties, getters, setters
    { q: "What problem do properties (getters/setters) solve that __init__ validation alone does not?", options: ["They make the code shorter", "They prevent someone from changing an attribute to an invalid value after the object is created", "They allow the object to be printed", "They make the object immutable"], answer: 1 },
    { q: "What does the @property decorator do when placed above a method?", options: ["Makes the method private", "Defines it as a getter — code that runs when the attribute is accessed", "Prevents the method from being called", "Converts the method to a class method"], answer: 1 },
    { q: "Why must the underlying instance variable use a different name (e.g., _house) than the property (house)?", options: ["Python style guidelines require it", "To avoid infinite recursion — the property and the variable would collide otherwise", "Underscores make variables faster", "It's optional but looks cleaner"], answer: 1 },
    { q: "In __init__, writing self.house = house (without underscore) triggers what?", options: ["Direct assignment to the instance variable", "The setter method, which includes validation", "A NameError", "Nothing — it's ignored"], answer: 1 },
    { q: "In Python, can a determined programmer still bypass a property and set _house directly?", options: ["No — properties make attributes truly private", "Yes — Python relies on convention, not enforcement, for access control", "Only if they import a special module", "Only in debug mode"], answer: 1 },

    // Class methods & class variables
    { q: "What distinguishes a class method from an instance method?", options: ["Class methods are faster", "Class methods belong to the class itself and don't require an object to be created first", "Class methods can't access any variables", "There is no difference"], answer: 1 },
    { q: "What is the conventional name for the first parameter of a class method?", options: ["self", "this", "cls", "class"], answer: 2 },
    { q: "Why can't the first parameter of a class method be called 'class'?", options: ["It would be too long", "'class' is a reserved keyword in Python", "It would conflict with self", "Convention forbids it"], answer: 1 },
    { q: "A variable defined directly inside a class body (not inside any method) is called what?", options: ["A local variable", "An instance variable", "A class variable — shared across all instances", "A global variable"], answer: 2 },
    { q: "Why would you use a class method like Student.get() instead of a standalone function get_student()?", options: ["It runs faster", "It keeps student-related functionality encapsulated inside the Student class", "Python requires it", "It uses less memory"], answer: 1 },

    // Inheritance
    { q: "What does it mean for class Student to inherit from class Wizard?", options: ["Student replaces Wizard", "Student gets a copy of Wizard's source code", "Student automatically gains all of Wizard's methods and attributes", "Wizard becomes an instance of Student"], answer: 2 },
    { q: "What does super().__init__(name) do inside a subclass's __init__?", options: ["Creates a new parent object", "Calls the parent class's __init__ to handle the shared initialization logic", "Deletes the parent class", "Overrides the parent class entirely"], answer: 1 },
    { q: "What problem does inheritance solve?", options: ["It makes code run faster", "It eliminates duplicated code when multiple classes share common attributes or behavior", "It prevents bugs", "It is required to use classes"], answer: 1 },

    // Operator overloading
    { q: "What is operator overloading?", options: ["Using too many operators in one expression", "Defining custom behavior for operators like + on your own classes", "A syntax error", "Renaming built-in operators"], answer: 1 },
    { q: "Which special method lets you define what + does for your class?", options: ["__str__", "__init__", "__add__", "__plus__"], answer: 2 },
    { q: "In __add__(self, other), what do self and other represent?", options: ["The class and the method", "The left operand and the right operand of the + sign", "Two copies of the same object", "The old value and the new value"], answer: 1 },
    { q: "When you write potter + weasley and both are Vault objects, what must __add__ return?", options: ["Nothing — it modifies potter in place", "A new Vault object containing the combined values", "A dictionary", "An integer"], answer: 1 },

    // Built-in types are classes
    { q: "What does type(50) reveal?", options: ["'number'", "'integer'", "class 'int' — showing that int is a class", "'50'"], answer: 2 },
    { q: "When you call 'hello'.lower(), what are you doing in OOP terms?", options: ["Calling a standalone function", "Calling an instance method on a str object", "Calling a class method", "Using operator overloading"], answer: 1 },
    { q: "Why did Python's authors make int, str, list, and dict lowercase even though they're classes?", options: ["They aren't actually classes", "Convention for built-in types — user-defined classes should use CapitalCase", "Lowercase classes are faster", "It was a mistake they can't fix"], answer: 1 },
  ],
},

// ─── LECTURE 9 ───────────────────────────────────────────────────────
{
  course: "CS50P",
  title: "CS50P Week 9: Et Cetera",
  questions: [
    // Sets
    { q: "What property distinguishes a set from a list in Python?", options: ["Sets are ordered", "Sets automatically eliminate duplicates", "Sets are faster to iterate", "Sets can only hold strings"], answer: 1 },
    { q: "To add an element to a set, which method do you use?", options: ["append()", "insert()", "add()", "push()"], answer: 2 },
    { q: "If you add a string to a set that differs only in capitalization from an existing entry, what happens?", options: ["The set ignores it as a duplicate", "Both versions are stored as distinct elements", "The set raises a ValueError", "The newer version replaces the older one"], answer: 1 },

    // Global variables & scope
    { q: "What happens if you try to modify a global variable inside a function without the global keyword?", options: ["It works fine", "Python creates a local variable instead, causing an UnboundLocalError if read before assignment", "Python silently ignores the change", "It raises a SyntaxError"], answer: 1 },
    { q: "What does the 'global' keyword do inside a function?", options: ["Creates a new global variable", "Tells Python the variable refers to one defined outside all functions, allowing modification", "Makes the variable immutable", "Exports the variable to other modules"], answer: 1 },
    { q: "Why is using global variables generally discouraged?", options: ["They use more memory", "They make it unclear where state is stored and modified, especially as programs grow", "Python runs them slower", "They can't be used with classes"], answer: 1 },
    { q: "If you define a variable both globally and locally with the same name, what happens inside the function?", options: ["Python throws a naming conflict error", "The local variable shadows the global — changes affect only the local copy", "The global variable is overwritten", "Both variables are accessible simultaneously"], answer: 1 },
    { q: "Why doesn't passing a global variable as a function argument let the function modify the original?", options: ["Arguments are read-only", "The function receives its own local copy of the value, not a reference to the global", "Python prohibits this pattern", "It does work — this is the recommended approach"], answer: 1 },

    // OOP as alternative to globals
    { q: "How does using a class with instance variables solve the global variable problem?", options: ["Classes automatically declare variables as global", "Instance variables are accessible to all methods via self, avoiding the need for global state", "Classes run in a separate memory space", "They don't — it's purely a style preference"], answer: 1 },
    { q: "What does the @property decorator allow you to do that a plain instance variable does not?", options: ["Store larger values", "Control read/write access — e.g., allow reading but prevent direct assignment", "Make the variable global", "Automatically type-check assignments"], answer: 1 },

    // Constants
    { q: "How does Python enforce that a variable declared in ALL_CAPS is constant?", options: ["It raises an error if you try to change it", "It marks the variable as read-only in memory", "It doesn't — ALL_CAPS is a convention only, not enforced by the language", "The compiler optimizes it away"], answer: 2 },
    { q: "What is the purpose of defining a class variable in ALL_CAPS inside a class?", options: ["It makes the variable accessible outside the class", "It signals to other programmers that this value should not be changed", "It improves performance", "It prevents subclasses from overriding it"], answer: 1 },

    // Type hints
    { q: "What effect do type hints have when you run a Python program?", options: ["Python enforces them and throws errors on mismatches", "None — Python ignores type hints at runtime", "They make the program run faster", "They automatically convert types"], answer: 1 },
    { q: "What does 'n: int' mean in a function signature like 'def meow(n: int)'?", options: ["n is converted to int automatically", "It's a hint that n should be an int, but Python won't enforce it", "n can only be assigned once", "It creates a new int object"], answer: 1 },
    { q: "What does the arrow notation '-> str' mean in 'def meow(n: int) -> str'?", options: ["The function takes a string argument", "The function returns a value of type str", "The function prints a string", "The function converts its input to str"], answer: 1 },
    { q: "What is the purpose of a tool like mypy?", options: ["It runs Python programs faster", "It analyzes your code before runtime to check that type hints are consistent with actual usage", "It converts Python to a statically typed language", "It auto-generates type hints for you"], answer: 1 },
    { q: "If a function does not explicitly return a value, what does Python implicitly return?", options: ["0", "An empty string", "None", "False"], answer: 2 },
    { q: "Why would mypy flag 'number: int = input(\"What's n? \")'?", options: ["input() is deprecated", "input() returns a str, but the variable is annotated as int — a type mismatch", "You can't annotate local variables", "mypy doesn't understand the input function"], answer: 1 },

    // argparse
    { q: "What problem does argparse solve compared to manually parsing sys.argv?", options: ["It makes programs run faster", "It handles argument ordering, type conversion, defaults, and help text automatically", "It encrypts command-line arguments", "It limits the number of arguments a user can pass"], answer: 1 },
    { q: "What does running a program with -h or --help typically show when using argparse?", options: ["The program's source code", "Auto-generated usage information describing available arguments", "A list of all installed Python packages", "Debug output"], answer: 1 },
    { q: "If you add type=int to an argparse argument, what happens when the user passes a non-integer?", options: ["Python silently ignores the argument", "argparse automatically displays an error message and exits", "The value is stored as a string instead", "The program crashes with a traceback"], answer: 1 },
    { q: "What is the convention for single-letter vs. full-word command-line flags?", options: ["Single letters use --, words use -", "Single letters use one dash (-n), full words use two dashes (--number)", "There is no convention", "Single letters are for required args, words for optional"], answer: 1 },

    // Unpacking
    { q: "What does the * operator do when placed before a list being passed to a function?", options: ["Multiplies all elements together", "Unpacks the list so each element is passed as a separate positional argument", "Creates a copy of the list", "Reverses the list"], answer: 1 },
    { q: "What does ** do when placed before a dictionary being passed to a function?", options: ["Squares all values", "Unpacks the dictionary so each key-value pair becomes a named argument", "Merges it with another dictionary", "Converts it to a list of tuples"], answer: 1 },
    { q: "If a function expects 3 arguments and you unpack a list of 4 elements with *, what happens?", options: ["The fourth element is silently ignored", "A TypeError — too many arguments were given", "The last argument receives a list of the extras", "Python assigns the extra to a variable called _"], answer: 1 },

    // *args and **kwargs
    { q: "What does *args in a function definition allow?", options: ["Exactly one argument of any type", "A variable number of positional arguments, collected into a tuple", "A variable number of named arguments", "Arguments that must be integers"], answer: 1 },
    { q: "What does **kwargs in a function definition allow?", options: ["A variable number of positional arguments", "A variable number of keyword arguments, collected into a dictionary", "Two required arguments", "Arguments passed by reference"], answer: 1 },
    { q: "In print(*objects, sep=' ', end='\\n'), what does the * before objects indicate?", options: ["objects is a pointer", "print accepts a variable number of positional arguments", "objects must be a list", "The output will be formatted"], answer: 1 },

    // map, filter, list/dict comprehensions
    { q: "What does the map() function do?", options: ["Creates a dictionary from two lists", "Applies a given function to every element of a sequence and returns the results", "Filters elements based on a condition", "Sorts a list in place"], answer: 1 },
    { q: "What does filter() expect its first argument to do?", options: ["Transform each element", "Return True or False to decide whether each element is included", "Sort the elements", "Count the elements"], answer: 1 },
    { q: "What is a list comprehension?", options: ["A way to document a list", "A concise syntax using [] to construct a new list from a loop (and optional condition) in one expression", "A method that lists all attributes of an object", "A debugging tool for lists"], answer: 1 },
    { q: "What distinguishes a dictionary comprehension from a list comprehension syntactically?", options: ["Dictionary comprehensions use parentheses", "Dictionary comprehensions use curly braces {} and specify key: value pairs", "There is no difference", "Dictionary comprehensions require the dict() function"], answer: 1 },
    { q: "In '[word.upper() for word in words if len(word) > 3]', what does the 'if' clause do?", options: ["Raises an error for short words", "Filters — only words longer than 3 characters are included in the result", "Transforms words shorter than 3 characters", "It's invalid syntax"], answer: 1 },

    // enumerate
    { q: "What does enumerate() give you that a plain 'for x in list' loop does not?", options: ["The ability to modify elements", "Both the index and the value on each iteration", "Automatic sorting", "Faster execution"], answer: 1 },

    // Generators & yield
    { q: "What problem does yield solve compared to building a huge list and returning it all at once?", options: ["It makes the code shorter", "It generates values one at a time, avoiding the memory cost of storing everything at once", "It runs the loop in parallel", "It caches results to disk"], answer: 1 },
    { q: "What is the key behavioral difference between return and yield inside a loop?", options: ["return is faster", "return exits the function immediately; yield pauses it, returning one value while remembering where it left off", "yield exits the function; return pauses it", "There is no difference inside a loop"], answer: 1 },
    { q: "What is the term for the object that yield returns?", options: ["A list", "An iterator (or generator)", "A coroutine", "A thread"], answer: 1 },
    { q: "If a function uses yield instead of return, can you still loop over its output with a for loop?", options: ["No — you must call next() manually", "Yes — the for loop consumes the iterator one value at a time", "Only if you convert it to a list first", "Only with a while loop"], answer: 1 },

    // Docstrings
    { q: "Where does a docstring go relative to the function it documents?", options: ["Above the function definition", "Below the function, after all code", "Inside the function, as the first statement, using triple quotes", "In a separate .txt file"], answer: 2 },
    { q: "What is the practical benefit of using docstrings over regular # comments for functions?", options: ["They run faster", "Tools can automatically extract them to generate documentation (web pages, PDFs)", "They prevent bugs", "They are required by Python"], answer: 1 },
  ],
},

];
