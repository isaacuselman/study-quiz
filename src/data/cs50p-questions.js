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
    { q: "What is the relationship between a function and an argument?", options: ["An argument is a function that calls another function in sequence", "An argument is an input to a function that influences its behavior", "A function is a type of argument passed to other functions", "Arguments and functions are the same thing in Python"], answer: 1 },
    { q: "What is a 'side effect' in programming?", options: ["A bug caused by a function modifying shared state", "Something visible or audible that a function produces, like printing to the screen", "An unused return value that wastes computation time", "A variable that changes unexpectedly due to a scoping error"], answer: 1 },
    { q: "What is the difference between a return value and a side effect?", options: ["They are the same thing expressed in different terminology", "A return value is handed back to the caller; a side effect is something observable like output to the screen", "A side effect is faster to produce than a return value", "Return values only work with strings, not other types"], answer: 1 },
    { q: "What is the difference between a 'parameter' and an 'argument'?", options: ["Parameters are in the function definition; arguments are the actual values passed when calling it", "They are completely unrelated concepts in programming", "Arguments are in the definition; parameters are the values passed in", "Parameters are only used for string-type inputs to functions"], answer: 0 },

    // Variables & assignment
    { q: "What does the = sign mean in Python?", options: ["It tests whether two values are equal to each other", "It assigns the value on the right to the variable on the left", "It compares the types of two different values", "It creates a constant that cannot be changed later"], answer: 1 },
    { q: "Why can't you just put a variable name inside quotes in a print statement to print its value?", options: ["Python doesn't allow variable names to appear inside print calls", "Anything inside quotes is treated as literal text, not as a variable reference", "You need to use single quotes instead of double quotes for variables", "It only works with numeric variables, not string variables"], answer: 1 },
    { q: "What does 'scope' mean in Python?", options: ["The speed at which a variable is accessed from memory", "The region of code where a variable exists and can be used", "How large a value a variable can hold before overflowing", "Whether a variable is classified as a string or integer type"], answer: 1 },
    { q: "If you define a variable inside function A, can function B access it directly?", options: ["Yes, all variables are automatically global in Python", "No — it only exists within function A's scope", "Only if both functions are defined in the same source file", "Only if the variable holds a string value, not a number"], answer: 1 },

    // Strings & string methods
    { q: "What does the + operator do when used between two strings?", options: ["Adds their lengths together as an integer result", "Concatenates (joins) them into one string", "Compares them alphabetically and returns the first one", "Throws an error because + only works with numbers"], answer: 1 },
    { q: "What does an f-string (f\"...\") allow you to do?", options: ["Make strings execute faster at runtime", "Embed variable values directly inside a string using curly braces", "Convert strings to floats for mathematical operations", "Format strings as valid filenames on the operating system"], answer: 1 },
    { q: "What does the .strip() method do to a string?", options: ["Removes all spaces from throughout the entire string", "Removes whitespace from the beginning and end only", "Converts every character in the string to lowercase", "Splits the string into a list at each whitespace boundary"], answer: 1 },
    { q: "What is the difference between .capitalize() and .title()?", options: ["They do the same thing to the string's capitalization", ".capitalize() uppercases only the first letter of the string; .title() uppercases the first letter of every word", ".title() only works correctly on proper name strings", ".capitalize() also works on numeric string representations"], answer: 1 },
    { q: "You can chain multiple string methods like name.strip().title(). What happens?", options: ["Only the last method in the chain actually runs", "Each method runs on the result of the previous one, left to right", "It throws a syntax error because chaining is invalid", "They run in a random order determined at runtime"], answer: 1 },
    { q: "What does the backslash (\\) do inside a string?", options: ["Ends the string at that position immediately", "Acts as an escape character, giving special meaning to the next character", "Divides the string into two separate substrings", "Comments out the rest of the line after it appears"], answer: 1 },

    // Input function
    { q: "The input() function always returns what type of data?", options: ["An integer if the user types digits", "A float if the user types a decimal number", "A string", "Whatever type the user intended to enter"], answer: 2 },
    { q: "If a user types '2' in response to input(), and you add it to '3' with +, what do you get?", options: ["5, because Python auto-converts numeric strings", "23", "An error because the types are incompatible", "2.3 as a float concatenation result"], answer: 1 },

    // Type conversion
    { q: "Why is int() needed when doing math with user input?", options: ["input() returns strings, and you can't do arithmetic on strings", "int() makes the program execute faster at runtime", "Python requires explicit casting for all arithmetic operations", "It's optional but recommended for code readability purposes"], answer: 0 },
    { q: "What does int('cat') do?", options: ["Returns 0 as a default fallback value", "Returns the length of the string as an integer", "Raises an error because 'cat' can't be converted to an integer", "Returns None to signal the conversion failed"], answer: 2 },
    { q: "What does float() do that int() does not?", options: ["It works with negative numbers as well as positive ones", "It preserves the decimal portion of a number", "It converts strings to numbers for use in expressions", "It rounds the result automatically to the nearest whole number"], answer: 1 },

    // Print function parameters
    { q: "What does the 'end' parameter of print() control?", options: ["Which argument in the call prints last in the output", "What character is appended after the printed output (default: newline)", "When the program terminates after printing is done", "The final value returned by the print function call"], answer: 1 },
    { q: "What does the 'sep' parameter of print() control?", options: ["Whether arguments print on separate lines or together", "What character is placed between multiple arguments (default: space)", "The separator between consecutive function calls in a script", "Nothing — it's deprecated and no longer has any effect"], answer: 1 },
    { q: "If you call print('a', 'b', 'c'), what appears by default?", options: ["abc", "a b c", "a, b, c", "'a' 'b' 'c'"], answer: 1 },
    { q: "How do you make two consecutive print() calls output on the same line?", options: ["Use print() only once with all values together", "Set end='' on the first print call to suppress the automatic newline", "Use a comma instead of making two separate print calls", "It's not possible to control where print places its output"], answer: 1 },

    // Named vs positional parameters
    { q: "What is a 'positional' parameter?", options: ["A parameter that has a default value assigned to it", "A parameter whose meaning is determined by its position in the argument list", "A parameter that must always be named explicitly in the call", "A parameter that only accepts integer values as arguments"], answer: 1 },
    { q: "What is a 'named' (keyword) parameter?", options: ["A parameter you refer to by name when calling the function, like end='\\n'", "A parameter that must always come first in the argument list", "A variable with a long descriptive name used as a parameter", "A parameter that specifies the name of the function being called"], answer: 0 },

    // Defining your own functions
    { q: "What does the 'def' keyword do?", options: ["Deletes a function from the current namespace", "Defines (creates) a new function", "Defers execution of the next line to a later time", "Declares a new variable in the current scope"], answer: 1 },
    { q: "Why must you call main() at the bottom of your file if you define it at the top?", options: ["Python requires main() to be the last function called in every program", "Defining a function doesn't execute it — you must explicitly call it", "main() only works when placed at the very end of a Python file", "It's just a style convention with no actual functional impact at all"], answer: 1 },
    { q: "What problem does defining a main() function solve for code organization?", options: ["It makes the code run significantly faster at execution time", "It lets you put your main logic at the top and helper functions below, since nothing runs until main() is called at the end", "It's required by Python syntax for all programs to be valid", "It prevents scope errors between local and global variables"], answer: 1 },
    { q: "What does the 'return' keyword do inside a function?", options: ["Prints a value to the screen for the user to see", "Hands a value back to the caller so it can be used elsewhere", "Ends the entire program and exits to the terminal", "Restarts the function from its first line of code"], answer: 1 },
    { q: "What happens if you define a function that uses return but you never store or use the returned value?", options: ["Python throws an error about the unused return value", "The value is computed and then discarded — nothing happens with it", "It prints the returned value automatically to the screen", "The program crashes with an unhandled exception error"], answer: 1 },
    { q: "How do you give a parameter a default value?", options: ["def hello(to := 'world')", "def hello(to = 'world')", "def hello(to, default='world')", "You can't — all parameters are always required"], answer: 1 },

    // Integers & floats
    { q: "Why can't a float represent every possible decimal number perfectly?", options: ["Floats are slower than ints and sacrifice precision for speed", "Computers have finite memory, so precision is limited", "Python doesn't fully support float operations natively", "Floats only store up to 2 decimal places of precision"], answer: 1 },
    { q: "What does round(n) do when called with one argument?", options: ["Rounds to exactly 2 decimal places", "Rounds to the nearest integer", "Truncates the decimal portion completely", "Returns the absolute value of the number"], answer: 1 },
    { q: "What does the ':,' inside an f-string like f\"{z:,}\" do?", options: ["Adds a currency symbol before the number", "Formats the number with commas as thousands separators", "Rounds to the nearest comma-separated value grouping", "Converts the variable z to a string representation"], answer: 1 },
    { q: "What does ** do in Python (e.g., n ** 2)?", options: ["Performs standard multiplication on the two values", "Raises n to the power of 2", "Finds the square root of the left operand", "Repeats the string representation of n twice"], answer: 1 },

    // Nesting & readability trade-offs
    { q: "What is the risk of nesting too many function calls in a single line like print(int(input('x?')) + int(input('y?')))?", options: ["It won't compile because Python limits nesting depth", "It reduces readability and makes debugging harder", "It's slower than writing the same logic on multiple lines", "There is no risk — shorter code is always objectively better"], answer: 1 },
    { q: "When is it reasonable to combine multiple operations on one line?", options: ["Always — fewer lines of code is always better design", "Never — each operation needs its own separate line for clarity", "When the line stays readable and the logic is straightforward", "Only when using f-strings to format output values"], answer: 2 },
  ]
},

// ─── LECTURE 1 ───────────────────────────────────────────────────────
{
  course: "CS50P",
  title: "CS50P Week 1: Conditionals",
  questions: [
    // Boolean expressions & comparison operators
    { q: "Why does Python use == for equality instead of =?", options: ["It's an arbitrary syntax choice with no technical reason", "= is already used for assignment, so == distinguishes comparison from assignment", "== is faster to evaluate than a single equals sign", "= only works with strings so == was added for numbers"], answer: 1 },
    { q: "What does the != operator represent?", options: ["Assignment negation applied to a variable", "Not equal to", "Logical NOT applied to a single expression", "Bitwise inversion of the operand's value"], answer: 1 },
    { q: "What is a boolean expression?", options: ["Any expression that involves mathematical operations", "A question that evaluates to true or false", "A variable declaration that stores text values", "A function that returns a formatted string"], answer: 1 },

    // if / elif / else control flow
    { q: "What is wrong with using three independent 'if' statements for mutually exclusive conditions?", options: ["It causes syntax errors in the Python interpreter", "All three questions are evaluated even after finding a true answer — wasteful and potentially buggy", "Python doesn't allow multiple if statements in a row", "It uses significantly more memory than alternatives"], answer: 1 },
    { q: "What does 'elif' allow you to do that a second 'if' does not?", options: ["Ask more complex questions using nested logic", "Skip evaluation if a previous condition was already true", "Use different comparison operators in the check", "Return values directly from conditional branches"], answer: 1 },
    { q: "When should you use 'else' instead of a final 'elif'?", options: ["When you want the code to execute faster overall", "When the remaining case is the only logical possibility and doesn't need an explicit check", "When else and elif are interchangeable in that context", "Only when there are exactly two conditions to handle"], answer: 1 },
    { q: "If you use 'if score >= 90' followed by 'if score >= 80' (not elif), and score is 95, what happens?", options: ["Only the first block runs because 90 is higher", "Both blocks run, because each 'if' is evaluated independently", "The program crashes due to a logic conflict", "Only the second block runs since it comes last"], answer: 1 },
    { q: "What does the colon at the end of an 'if' line signify?", options: ["It's optional decoration for readability purposes", "It marks the beginning of the indented block that belongs to that condition", "It ends the condition and returns the result", "It separates the condition from the variable name"], answer: 1 },
    { q: "What happens if you don't indent the line after an 'if' statement in Python?", options: ["Python auto-indents it during the compilation step", "The program will not work — Python requires indentation to define blocks", "It runs but silently ignores the condition entirely", "It only matters for readability, not for execution"], answer: 1 },

    // or / and keywords
    { q: "What does the 'or' keyword do between two boolean expressions?", options: ["Runs both associated blocks of code sequentially", "Evaluates to true if at least one of the expressions is true", "Combines two variables into a single new variable", "Checks whether both expressions evaluate to false"], answer: 1 },
    { q: "What does the 'and' keyword do between two boolean expressions?", options: ["Evaluates to true only if both expressions are true", "Evaluates to true if either expression is true", "Assigns both values to a variable simultaneously", "It behaves identically to the 'or' keyword"], answer: 0 },
    { q: "In the grade program, why can you simplify 'if score >= 90 and score <= 100' to just 'if score >= 90' when using elif?", options: ["Python ignores the upper bound check automatically in chains", "The elif chain already ruled out higher values, so the upper bound is implicit", "You can't simplify it — both conditions are always required", "Scores above 100 don't exist in Python's integer system"], answer: 1 },
    { q: "In Python, which expression is equivalent to '90 <= score and score <= 100'?", options: ["90 <= score <= 100", "score between 90 and 100", "score in range(90, 100)", "90 < score > 100"], answer: 0 },

    // Modulo operator
    { q: "What does the % (modulo) operator return?", options: ["The quotient of the division operation", "The remainder after dividing one number by another", "A percentage of the given value", "The absolute value of the operand"], answer: 1 },
    { q: "What is the value of 7 % 3?", options: ["2", "3", "1", "0"], answer: 2 },
    { q: "How can you determine if a number is even using the modulo operator?", options: ["n % 2 == 2", "n % 2 == 0", "n % 0 == 2", "n / 2 == 0"], answer: 1 },

    // Boolean return values & function design
    { q: "What type does a function like 'is_even' return?", options: ["An int value such as 0 or 1", "A bool (True or False)", "A string like 'even' or 'odd'", "None by default in all cases"], answer: 1 },
    { q: "In Python, boolean values True and False must be written how?", options: ["All lowercase: true, false", "All uppercase: TRUE, FALSE", "Capital first letter: True, False", "Any capitalization works fine"], answer: 2 },
    { q: "Why can 'return n % 2 == 0' replace an entire if/else block that returns True or False?", options: ["It's a Python shortcut that doesn't work in other contexts", "The expression itself evaluates to True or False, so wrapping it in if/else is redundant", "It returns the remainder instead of a boolean value", "It only works for even/odd checks and nothing else"], answer: 1 },
    { q: "What is the Pythonic one-liner equivalent of 'if n % 2 == 0: return True else: return False'?", options: ["return True if n % 2 == 0 else False", "return n % 2", "if n % 2 == 0 then True", "return (True, False)[n % 2]"], answer: 0 },
    { q: "If a boolean expression already evaluates to True or False, what is the most concise way to return it?", options: ["Wrap it in an if/else block for clarity", "Use a match statement to handle it", "Return the expression directly", "Convert it to an int first then return"], answer: 2 },

    // Flow chart / control flow reasoning
    { q: "In a flowchart, what shape represents a decision (boolean question)?", options: ["Rectangle", "Oval", "Diamond", "Circle"], answer: 2 },
    { q: "In a flowchart of an if/elif/else chain, what happens after a true branch executes its action?", options: ["It continues checking all remaining conditions afterward", "It goes directly to stop — remaining conditions are skipped", "It loops back to the first condition to recheck it", "It raises an exception and halts the flowchart"], answer: 1 },
    { q: "What is the maximum number of questions evaluated in an if/elif/else chain with 3 conditions?", options: ["Always exactly 3 regardless of input values", "1 (best case) to 2 (worst case, since else needs no question)", "Exactly 2, because else handles the rest automatically", "It depends entirely on the variable type being checked"], answer: 1 },

    // match/case
    { q: "What keyword introduces the catch-all (default) case in a match statement?", options: ["default", "else", "case _:", "otherwise"], answer: 2 },
    { q: "How do you match multiple values in a single case (e.g., Harry or Hermione)?", options: ["case 'Harry', 'Hermione':", "case 'Harry' or 'Hermione':", "case 'Harry' | 'Hermione':", "case ['Harry', 'Hermione']:"], answer: 2 },
    { q: "What happens if no case matches and there is no underscore catch-all?", options: ["Python raises an error and halts execution", "Nothing — the match block is silently skipped", "It matches the first case as a default fallback", "The program crashes with an unhandled exception"], answer: 1 },
    { q: "Unlike switch statements in C or Java, Python's match/case does NOT require what keyword?", options: ["case", "default", "break", "return"], answer: 2 },

    // Design thinking
    { q: "Why is reducing the number of questions a program asks considered better design?", options: ["It makes the code shorter, which is always the priority", "Fewer checks means less chance of bugs, better readability, and (at scale) better performance", "Python charges per condition evaluated in the interpreter", "It only matters for interviews and coding assessments"], answer: 1 },
    { q: "What does 'pythonic' mean?", options: ["Code that only runs in the Python interpreter", "Code that follows Python community conventions for clean, idiomatic expression", "Code that uses no external libraries at all", "Code written directly by Python's original creator"], answer: 1 },
  ],
},

// ─── LECTURE 2 ───────────────────────────────────────────────────────
{
  course: "CS50P",
  title: "CS50P Week 2: Loops",
  questions: [
    // While loops & counting
    { q: "What is the fundamental risk of a while loop whose condition never becomes false?", options: ["It crashes immediately with a runtime error", "It runs forever (infinite loop)", "It skips the loop body entirely each time", "It throws a syntax error before running"], answer: 1 },
    { q: "In 'while i != 0', if i starts at 3 and is never modified, what happens?", options: ["The loop runs exactly 3 times then stops", "The loop never executes any iterations", "The loop runs forever", "Python raises an error about the condition"], answer: 2 },
    { q: "What does Ctrl+C do when a program is stuck in an infinite loop?", options: ["Copies the output to the clipboard", "Interrupts/kills the running process", "Closes the terminal window entirely", "Restarts the program from the beginning"], answer: 1 },
    { q: "Why do most programmers start counting at 0 instead of 1?", options: ["It's significantly faster for the CPU to process", "It's a convention with practical benefits in indexing and ranges", "Python requires starting all loops at zero", "It prevents infinite loops from occurring"], answer: 1 },
    { q: "What does 'i += 1' do compared to 'i = i + 1'?", options: ["It's faster at runtime due to optimization", "Exactly the same thing — it's just shorter syntax", "It increments the variable by 2 instead of 1", "It only works inside loops, not elsewhere"], answer: 1 },
    { q: "If you loop 'while i < 3' starting from i = 0, how many times does the body execute?", options: ["2", "3", "4", "It depends on what's in the body"], answer: 1 },

    // For loops & range
    { q: "What does 'for i in [0, 1, 2]' do?", options: ["Creates a list and then immediately ignores it", "Assigns i to each value in the list sequentially, executing the body each time", "Runs the body once with i set to the whole list itself", "Checks whether i is already present in the list"], answer: 1 },
    { q: "Why is 'for i in [0, 1, 2, ..., 999999]' a bad way to loop a million times?", options: ["It's too slow for the Python interpreter to handle", "You'd have to manually type out every number", "Python can't handle lists that large in memory", "for loops only work with small lists under 1000"], answer: 1 },
    { q: "What does range(3) return?", options: ["The list [1, 2, 3]", "A sequence of values 0, 1, 2", "The integer number 3", "The list [0, 1, 2, 3]"], answer: 1 },
    { q: "What is the pythonic convention when a loop variable is never used in the body?", options: ["Name it 'unused' to signal intent", "Name it '_' (underscore)", "Delete it after the loop completes", "Leave it unnamed in the definition"], answer: 1 },
    { q: "What does 'print(\"meow\" * 3)' output?", options: ["meow meow meow (with spaces between)", "meowmeowmeow (concatenated)", "An error — you can't multiply strings by integers", "meow\\nmeow\\nmeow (on separate lines)"], answer: 1 },

    // Break, continue, and input validation
    { q: "What does 'break' do inside a loop?", options: ["Pauses the loop temporarily until resumed", "Exits the innermost enclosing loop immediately", "Skips to the next iteration of the loop", "Ends the entire program immediately"], answer: 1 },
    { q: "What does 'continue' do inside a loop?", options: ["Exits the loop entirely and moves on", "Goes back to the top of the loop, skipping the rest of the current iteration", "Continues execution to the next function call", "Resumes from a previously set breakpoint"], answer: 1 },
    { q: "Why is 'while True' used as a pattern for input validation?", options: ["It's the only way to get input from the user", "It deliberately creates a loop that repeats until you explicitly break out when input is valid", "It runs faster than a conditional while loop would", "Python requires it for the input() function to work"], answer: 1 },
    { q: "What is the difference between using 'break' and 'return' inside a loop within a function?", options: ["They're identical in behavior and effect", "break exits the loop but stays in the function; return exits the function entirely and can hand back a value", "return only works inside the main() function", "break also returns a value to the caller"], answer: 1 },

    // Lists
    { q: "What do square brackets signify in Python?", options: ["A dictionary data structure", "A tuple data structure", "A list", "A function call expression"], answer: 2 },
    { q: "If students = ['Hermione', 'Harry', 'Ron'], what is students[0]?", options: ["Harry", "Hermione", "Ron", "An error — lists start at 1"], answer: 1 },
    { q: "What does 'for student in students' do when students is a list?", options: ["Sets student to the index of each element in order", "Sets student to each element in the list sequentially", "Creates a copy of the list in a new variable", "Sorts the list alphabetically then iterates over it"], answer: 1 },
    { q: "What does len() return when given a list?", options: ["The memory size of the list in bytes", "The number of elements in the list", "The index of the last element in the list", "The largest value stored in the list"], answer: 1 },
    { q: "If students has 3 elements, what does range(len(students)) produce?", options: ["0, 1, 2, 3", "1, 2, 3", "0, 1, 2", "The students themselves"], answer: 2 },
    { q: "Why would you use 'for i in range(len(students))' instead of 'for student in students'?", options: ["It's always considered better practice overall", "When you need access to the numeric index (e.g., for numbering or positional logic)", "It runs faster due to compiler optimizations", "The simpler form doesn't work with string elements"], answer: 1 },

    // Dictionaries
    { q: "What data structure associates keys with values in Python?", options: ["A list", "A tuple", "A dictionary", "A set"], answer: 2 },
    { q: "What do curly braces signify when defining a data structure in Python (not an f-string)?", options: ["A list of elements", "A dictionary (or set)", "A tuple of values", "A function body block"], answer: 1 },
    { q: "Given students = {'Hermione': 'Gryffindor', 'Draco': 'Slytherin'}, what does students['Hermione'] return?", options: ["'Hermione'", "'Gryffindor'", "0", "True"], answer: 1 },
    { q: "When you iterate over a dictionary with 'for student in students', what does the variable receive?", options: ["The values associated with each key", "The keys", "Tuples of (key, value) pairs each iteration", "The indices 0, 1, 2... for each entry"], answer: 1 },
    { q: "Why is a dictionary preferable to two parallel lists for associating students with houses?", options: ["Dictionaries use significantly less memory than two lists", "The association is explicit in one structure instead of relying on matching indices across separate lists", "Dictionaries are faster to iterate through than lists are", "You can't store strings in lists so dicts are required"], answer: 1 },
    { q: "What does the Python keyword 'None' represent?", options: ["The numeric value zero", "An empty string with no characters", "The boolean value False", "The deliberate absence of a value"], answer: 3 },

    // Lists of dictionaries
    { q: "In a list of dictionaries like [{'name': 'Harry', 'house': 'Gryffindor'}, ...], how do you access Harry's house while iterating?", options: ["student.house", "student['house']", "students['house']", "student[1]"], answer: 1 },
    { q: "Why would you use a list of dictionaries instead of a single dictionary mapping names to houses?", options: ["It's always the better approach regardless of context", "When each item has multiple attributes (name, house, patronus) rather than just one value per key", "Lists are faster than dictionaries for lookups and iteration", "Single dictionaries can't store string values as entries"], answer: 1 },

    // Nested loops & 2D output
    { q: "When printing a 3×3 grid, why do you need a loop inside a loop?", options: ["Python requires nested loops for all print() calls", "One loop handles rows (vertical), the inner loop handles columns (horizontal) within each row", "Nested loops are faster than a single loop overall", "You don't — one loop is always sufficient for grids"], answer: 1 },
    { q: "Inside a nested loop printing a grid, why pass end='' to print() for each brick?", options: ["To prevent errors from occurring during output", "To keep the cursor on the same line so bricks appear side by side in a row", "To add extra spacing between each character printed", "It's required syntax whenever you use nested loops"], answer: 1 },
    { q: "After the inner loop finishes one row of bricks, why call print() with no arguments?", options: ["To flush the output buffer to the terminal", "To move the cursor to the next line before starting the next row", "To reset the loop counter back to zero for reuse", "It's optional — just a style choice with no real effect"], answer: 1 },
    { q: "How can 'print(\"#\" * size)' replace an inner loop when printing a row of bricks?", options: ["It can't — loops are always needed for printing rows", "String multiplication repeats the character, producing the same output as looping and printing one at a time", "It only works for single characters, not longer strings", "It's faster but produces slightly different formatted output"], answer: 1 },

    // Abstraction & function design
    { q: "What is the main benefit of defining a print_row() function even if it's only one line?", options: ["It runs faster than inline code would", "It creates a named abstraction — the caller understands *what* happens without knowing *how*", "Python requires functions for all printing operations", "It saves memory by reducing variable allocations"], answer: 1 },
    { q: "If you change print_column's implementation from a loop to string multiplication, what must stay the same for callers?", options: ["The internal variable names used in the function", "The function name, parameters, and behavior — the interface", "The number of lines of code inside the function body", "Nothing — callers always need updating after changes"], answer: 1 },
  ],
},

// ─── LECTURE 3 ───────────────────────────────────────────────────────
{
  course: "CS50P",
  title: "CS50P Week 3: Exceptions",
  questions: [
    // Syntax errors vs runtime errors
    { q: "What is the key difference between a syntax error and a runtime error?", options: ["Syntax errors are generally harder to fix than runtime errors", "Syntax errors prevent the program from running at all; runtime errors occur while the program is executing", "Runtime errors are caused by the compiler during code analysis", "There is no meaningful difference between the two error types"], answer: 1 },
    { q: "Can you use try/except to catch a syntax error?", options: ["Yes, just like any other type of error", "Only if you use a special interpreter flag", "No — syntax errors must be fixed in the code before the program can run", "Yes, but only in Python version 3.10 and above"], answer: 2 },

    // Value errors & the int() function
    { q: "What happens when you pass the string 'cat' to Python's int() function?", options: ["It returns 0 as a default fallback value", "It returns None to indicate a failed conversion", "It raises a ValueError", "It silently ignores the input and continues"], answer: 2 },
    { q: "In 'x = int(input(...))', if int() raises a ValueError, does x get assigned a value?", options: ["Yes, x becomes None as a default placeholder", "Yes, x keeps its previous value from before the line", "No — the error interrupts the assignment before the left side executes", "No — x is set to 0 as a safe default by Python"], answer: 2 },
    { q: "Why is adding a print statement like 'please type a number' an insufficient solution to bad user input?", options: ["It causes a syntax error when the input is wrong", "Users might not read or follow instructions, so the program can still crash", "Print statements slow down the program noticeably", "It actually is the best solution for handling input"], answer: 1 },

    // try / except basics
    { q: "What does the 'try' keyword tell Python to do?", options: ["Run the indented code and, if an exception occurs, jump to the except block instead of crashing", "Repeat the code until it works without errors", "Test the code without actually executing any of it", "Compile the code before running it for safety"], answer: 0 },
    { q: "Why is it bad practice to write a bare 'except' that catches all exceptions without specifying a type?", options: ["It's not valid Python syntax and will cause errors", "It can hide other bugs because you don't know what went wrong", "It makes the program significantly slower at runtime", "It only catches ValueErrors anyway despite the broad syntax"], answer: 1 },
    { q: "Why should you minimize the number of lines inside a try block?", options: ["Python limits try blocks to 3 lines of code maximum", "You should only try the lines that might actually raise the exception you're catching", "More lines make the program run slower during execution", "It's purely a style preference with no practical impact at all"], answer: 1 },

    // The else clause in try/except
    { q: "When does the else block execute in a try/except/else structure?", options: ["Always, after both try and except run", "Only when an exception is raised during try", "Only when the try block succeeds without raising an exception", "Only on the second attempt through the block"], answer: 2 },
    { q: "You move 'print(x)' outside and below a try/except block (unindented). The user types 'cat'. What happens?", options: ["It prints 'cat' as a string value", "It prints nothing and moves to the next line", "A NameError occurs because x was never successfully assigned", "A ValueError occurs again at the print statement"], answer: 2 },
    { q: "Why does the NameError happen in that scenario?", options: ["Python deletes variables after a try block ends", "The ValueError interrupted the assignment, so x was never defined", "print() doesn't work outside of try blocks in Python", "x went out of scope when the try block finished"], answer: 1 },

    // Loops with try/except
    { q: "What is the purpose of wrapping try/except inside a 'while True' loop?", options: ["It makes the code run faster during execution", "It re-prompts the user until they provide valid input instead of quitting on the first error", "It's required syntax for try/except to work correctly", "It catches more types of errors than try alone"], answer: 1 },
    { q: "In a while True loop with try/except, what does 'break' do when placed after a successful conversion?", options: ["Exits the entire program and returns to terminal", "Exits the loop so the program can continue", "Restarts the loop from the beginning of the block", "Raises an exception to signal completion of work"], answer: 1 },
    { q: "If you put the print statement inside the loop but never use break, what happens?", options: ["The program crashes with an unhandled error", "It prints the result once and then exits cleanly", "It loops forever, printing and re-prompting on every iteration", "It prints nothing and waits for more user input"], answer: 2 },

    // return vs break
    { q: "If you're inside a loop within a function, what does 'return x' do compared to 'break'?", options: ["They're identical in behavior and outcome", "return exits the function and gives back a value; break only exits the loop", "break exits the function entirely; return only exits the loop", "return is only valid inside the main() function"], answer: 1 },
    { q: "Why can 'return' replace 'break' followed by 'return' when they're adjacent?", options: ["It's a Python compiler optimization that merges them", "return already breaks out of the loop AND returns the value — doing both at once", "They actually can't be combined into a single statement", "break is deprecated in modern versions of Python"], answer: 1 },

    // pass keyword
    { q: "What does the 'pass' keyword do inside an except block?", options: ["It re-raises the exception to the calling code", "It does nothing — the exception is caught but silently ignored", "It prints a default error message to the console", "It skips the current iteration of the enclosing loop"], answer: 1 },
    { q: "When might you use 'pass' in an except block instead of printing an error message?", options: ["When you want the program to crash gracefully with a traceback", "When you want to silently retry by staying in the loop without telling the user what went wrong", "When the error is a syntax error that can be recovered from", "You should never use pass because it hides all exceptions"], answer: 1 },

    // Function design & abstraction
    { q: "Why is it good practice to extract the input-validation loop into a separate function like get_int()?", options: ["It makes the code run faster overall in execution", "It abstracts away the retry logic so main() stays clean and the function is reusable", "Python requires all input calls to be inside a function", "It prevents all possible errors from ever occurring"], answer: 1 },
    { q: "Why should get_int() accept a 'prompt' parameter instead of hard-coding 'What's x?'?", options: ["Hard-coded strings cause syntax errors in Python", "It makes the function reusable — the caller decides what message to show", "Parameters make functions run faster at execution time", "It's required by Python's official PEP 8 style guide"], answer: 1 },
    { q: "In get_int(), why is it unnecessary to define a variable x if you immediately return the converted value?", options: ["Variables aren't allowed inside helper functions", "You can return int(input(...)) directly — the intermediate variable adds a line without adding clarity", "It would cause a NameError when accessed later", "Python automatically optimizes the variable away at runtime"], answer: 1 },

    // Pythonic philosophy
    { q: "What is the 'Pythonic' approach to handling potentially invalid input?", options: ["Check every possible condition with if/elif/else first", "Try the operation and handle the exception if it fails", "Always convert input to strings first before processing", "Require the user to specify the data type in advance"], answer: 1 },
    { q: "A caller uses get_int() which handles ValueError internally with 'pass'. Does the caller know an error occurred?", options: ["Yes, through a system variable that tracks exceptions", "Yes, get_int() returns None on error to signal the issue", "No — the error is fully handled inside get_int() and hidden from the caller", "Yes, Python logs it automatically to a system error stream"], answer: 2 },

    // Order of operations & assignment
    { q: "In 'x = int(input(...))', which function executes first?", options: ["int() processes the conversion first", "The assignment (=) runs before the functions", "input()", "They all execute simultaneously in parallel"], answer: 2 },
    { q: "In that same line, if int() raises an error, what happens to the assignment to x?", options: ["x gets assigned None as a placeholder value", "x gets assigned 0 as a safe default integer", "The assignment never happens — the error occurs before the value reaches the left side of =", "x keeps whatever value it had before the line ran"], answer: 2 },

    // Error messages
    { q: "What does 'unterminated string literal' mean?", options: ["A variable name is too long for Python to parse", "You started a string with a quote but never closed it", "The program ran out of memory while processing strings", "A string contains illegal characters that can't be encoded"], answer: 1 },
    { q: "What does 'invalid literal for int() with base 10' mean?", options: ["The number is too large for Python to store as an int", "You passed a value to int() that can't be converted to a decimal integer", "The integer overflowed its maximum allowed bit width", "Base 10 is not supported and you must use binary"], answer: 1 },
  ],
},

// ─── LECTURE 4 ───────────────────────────────────────────────────────
{
  course: "CS50P",
  title: "CS50P Week 4: Libraries",
  questions: [
    // Modules & imports
    { q: "What is a module in Python?", options: ["A type of variable used for storage", "A library with one or more functions or features", "A built-in data type like int or str", "A testing framework for unit tests"], answer: 1 },
    { q: "What problem does factoring code into a library solve?", options: ["It makes code run faster at execution time", "It eliminates copying and pasting the same code across projects", "It reduces memory usage during program execution", "It prevents syntax errors from occurring in code"], answer: 1 },
    { q: "What is the difference between 'import random' and 'from random import choice'?", options: ["There is no practical difference between them", "The first gives access to all functions via random.X; the second loads choice directly into your namespace", "The second is faster to execute at runtime", "The first only imports one function from the module"], answer: 1 },
    { q: "What is the risk of using 'from random import choice' instead of 'import random'?", options: ["It's slower to import and execute than the alternative", "If you define your own variable or function called 'choice', it will collide with the imported one", "It doesn't work in all Python versions or platforms", "It imports the entire module anyway despite the syntax"], answer: 1 },
    { q: "When you write 'import random', where does Python find the random module?", options: ["It downloads it from the internet automatically", "It's a file (random.py) installed alongside the Python interpreter", "It's built into the print function as a sub-feature", "It generates the module dynamically at runtime"], answer: 1 },

    // random module
    { q: "What does random.choice do when given a list of 3 items?", options: ["Returns all three items in a random order", "Returns one item with equal probability (1/3 each)", "Returns the first item in the list every time", "Returns a random number between 1 and 3 instead"], answer: 1 },
    { q: "What does random.shuffle do differently from most functions we've seen?", options: ["It returns a new list with the elements reordered", "It modifies the list in place rather than returning a new value", "It only works with numbers, not other data types", "It requires two arguments to specify the range"], answer: 1 },
    { q: "You call random.randint(1, 10). Which values are possible?", options: ["1 through 9 only", "0 through 10 inclusive", "1 through 10 inclusive", "0 through 9 only"], answer: 2 },

    // sys.argv & command line arguments
    { q: "What does sys.argv contain?", options: ["The number of lines in your program's source code", "A list of all words typed at the command line, including the filename", "The system's environment variables and their values", "The return value of the main() function call"], answer: 1 },
    { q: "If you run 'python name.py David', what is sys.argv[0]?", options: ["python", "David", "name.py", "0"], answer: 2 },
    { q: "If you run 'python name.py' with no additional arguments and your code accesses sys.argv[1], what happens?", options: ["It returns None as a default placeholder", "It returns an empty string with no characters", "An IndexError exception is raised", "The program silently exits without any output"], answer: 2 },
    { q: "What are two ways to handle missing command line arguments?", options: ["try/except for IndexError, or check len(sys.argv) before accessing", "Use input() as a backup prompt, or crash gracefully with a message", "Call sys.fix() to auto-repair, or restart the program from scratch", "There is only one way: try/except handles all argument issues"], answer: 0 },
    { q: "Why might you prefer checking len(sys.argv) with if/elif/else over try/except?", options: ["It's faster to execute at runtime overall", "You can give more specific error messages (too few vs. too many)", "try/except doesn't work with sys.argv at all", "There's no reason to prefer one approach over the other"], answer: 1 },
    { q: "What does sys.exit() do?", options: ["Logs the user out of the computer entirely", "Terminates the program immediately, optionally printing a message", "Exits the current function and returns to the caller", "Closes the terminal window and all running processes"], answer: 1 },
    { q: "Why can't you use 'break' instead of sys.exit() to stop a program?", options: ["break is deprecated in modern Python versions", "break only exits loops, not the entire program", "break requires a numerical argument to work properly", "You can use them interchangeably in all contexts"], answer: 1 },

    // Slicing
    { q: "What does sys.argv[1:] return?", options: ["The first element only from the list", "All elements except the first (the filename)", "The last element only from the list", "A copy of the entire list unchanged"], answer: 1 },
    { q: "In list slicing, what does a negative index like [-1] mean?", options: ["The first element of the list", "An error that halts execution", "Counting from the end of the list", "Remove the last element from the list"], answer: 2 },

    // Packages & pip
    { q: "What is pip?", options: ["A Python integrated development environment", "A package manager that installs third-party libraries", "A built-in Python function for package handling", "A type of Python file used for configuration"], answer: 1 },
    { q: "What is the difference between a module that comes with Python and a package you install with pip?", options: ["There is no difference after installation is complete", "Modules are built-in; packages are third-party and must be installed separately", "Packages are faster to import and execute at runtime", "Modules can't be imported into your own Python files"], answer: 1 },
    { q: "After running 'pip install cowsay', what can you then do in your code?", options: ["Nothing — pip only downloads the documentation files", "import cowsay and call its functions", "cowsay runs automatically without any import needed", "You must restart the Python interpreter before using it"], answer: 1 },

    // APIs & JSON
    { q: "What is an API in the context of web services?", options: ["A Python-specific file format for data storage", "A mechanism to access data on someone else's server programmatically", "A type of database that stores web page content", "A graphical user interface for building web apps"], answer: 1 },
    { q: "What does the requests library do?", options: ["Prompts the user for keyboard input", "Makes HTTP requests to URLs, like a browser would", "Manages file permissions on the system", "Sends emails through a Python interface"], answer: 1 },
    { q: "What is JSON?", options: ["A Python-only data format for serialization", "A language-agnostic text format using key-value pairs, curly braces, and square brackets", "A type of database for storing structured records", "A compression algorithm for reducing file sizes"], answer: 1 },
    { q: "When you call response.json() in Python, what type of object do you get back?", options: ["A raw string of the JSON text content", "A Python dictionary", "A JSON file saved to disk automatically", "A list of tuples with key-value pairs"], answer: 1 },
    { q: "Why did the lecture use json.dumps() with indent=2?", options: ["To compress the data into a smaller representation", "To pretty-print the JSON response in a human-readable format", "To convert it to a CSV file for spreadsheet use", "To encrypt the data before displaying it onscreen"], answer: 1 },
    { q: "In the iTunes API response, the 'results' key contains what type of value?", options: ["A single string with all the song titles combined", "A list of dictionaries, each representing a song", "An integer count of the number of total results", "Another URL pointing to the full data download"], answer: 1 },

    // Creating your own modules
    { q: "If you create a file called helpers.py with a function greet(), how do you use it from another file?", options: ["Just call greet() directly without importing", "from helpers import greet", "import greet from helpers", "You can't import your own files in Python"], answer: 1 },
    { q: "You have sayings.py with main() called at the bottom. When another file does 'from sayings import hello', what happens?", options: ["Only hello is loaded; main is not called at all", "Python reads the whole file top-to-bottom, so main() also runs", "An import error occurs because main blocks the import", "Python skips the main function automatically during import"], answer: 1 },
    { q: "What does 'if __name__ == \"__main__\"' prevent?", options: ["Syntax errors from occurring in the module code", "The main function from running when the file is imported by another file", "Other files from accessing your defined functions at all", "Variables from leaking into the global scope of other modules"], answer: 1 },
    { q: "When is __name__ set to '__main__'?", options: ["Always, regardless of how the file is used", "Only when the file is run directly from the command line, not when imported", "Only when the file is imported by another module", "Only inside functions that are defined in the module"], answer: 1 },

    // Design reasoning
    { q: "Why might you prefer command line arguments over calling input() for every value?", options: ["input() is deprecated in modern Python releases", "Command line arguments are faster for repeated use and enable automation", "input() doesn't work in Python 3 or later versions", "There's no practical difference between the two approaches"], answer: 1 },
    { q: "A JSON response contains nested dictionaries. To get the track name, you write result['trackName']. Where does the key name 'trackName' come from?", options: ["You choose it yourself when writing your code", "Python generates it automatically from the response data", "The API developer defined it — you must match their key names exactly", "It's a Python reserved word for media-related API calls"], answer: 2 },
  ],
},

// ─── LECTURE 5 ───────────────────────────────────────────────────────
{
  course: "CS50P",
  title: "CS50P Week 5: Unit Tests",
  questions: [
    // Why test & testing philosophy
    { q: "Why is manually testing your program by running it with sample inputs insufficient?", options: ["It's too slow for the computer to process efficiently", "You might forget to test important corner cases and can't easily repeat tests", "Manual testing only works on small programs under 100 lines", "Python doesn't support manual testing of any programs"], answer: 1 },
    { q: "What is a 'unit test'?", options: ["A test of the entire program from start to finish", "A test of an individual function or small piece of code", "A test that only runs once and then is discarded", "A test written by someone other than the code author"], answer: 1 },
    { q: "Why is it bad practice to put all your logic in main instead of separate functions?", options: ["main runs slower than other functions in Python", "Separate functions are easier to test because they have defined inputs and outputs", "Python limits the main function to only 50 lines of code", "It causes import errors when other files use the module"], answer: 1 },

    // Test file conventions
    { q: "What is the conventional naming pattern for a file that tests calculator.py?", options: ["check_calculator.py", "test_calculator.py", "calculator_test_suite.py", "verify_calculator.py"], answer: 1 },
    { q: "Why do we add 'if __name__ == \"__main__\"' before calling main in calculator.py?", options: ["It makes the program run faster during testing", "It prevents main from executing when we import functions from the file", "It's required Python syntax for all module files", "It enables debugging mode for the test runner"], answer: 1 },
    { q: "If you want to test a function called 'square', what is the conventional test function name?", options: ["check_square", "square_verify", "test_square", "validate_square"], answer: 2 },

    // Assert keyword
    { q: "What does the 'assert' keyword do when the expression is True?", options: ["Prints 'passed' to the console output", "Returns True to the calling function", "Nothing — execution continues silently", "Logs the result to a file on disk"], answer: 2 },
    { q: "What happens when an assert statement's expression evaluates to False?", options: ["The program prints 'False' to the terminal", "An AssertionError is raised", "The line is skipped and execution continues", "Python retries the expression automatically"], answer: 1 },
    { q: "What is the advantage of 'assert square(2) == 4' over an if-statement that checks the same thing?", options: ["Assert is faster at runtime than if-statements", "It's less code — you skip the if/print boilerplate", "Assert catches more types of bugs than if-checks do", "There is no advantage to using assert over if"], answer: 1 },

    // Corner cases & test design
    { q: "Why did testing only square(2) fail to catch the bug where n*n was replaced with n+n?", options: ["2 is too small to test with reliably", "Because 2+2 == 2*2, so the bug is invisible for that input", "Assert doesn't work with the number 2 as input", "The test file had a syntax error that masked the bug"], answer: 1 },
    { q: "When testing a mathematical function like square, which set of inputs best covers corner cases?", options: ["Only positive integers above zero", "Only large numbers in the thousands range", "Positive, negative, and zero", "Random floating-point values each run"], answer: 2 },
    { q: "Why should you keep individual test functions simple and short?", options: ["Python limits test functions to a maximum of 10 lines", "Complex tests might themselves contain bugs, and you don't want to write tests for your tests", "Simple tests run faster than longer ones in the test runner", "pytest rejects long functions and will not execute them"], answer: 1 },

    // pytest basics
    { q: "What is pytest?", options: ["A built-in Python keyword for testing assertions", "A third-party testing framework that automates running and reporting tests", "A Python IDE designed specifically for test-driven development", "A type checker for Python that validates annotations"], answer: 1 },
    { q: "How do you install pytest?", options: ["It comes pre-installed with Python by default", "import pytest at the top of your file to activate it", "pip install pytest", "download it from python.org as a separate installer"], answer: 2 },
    { q: "How do you run tests with pytest?", options: ["python test_calculator.py", "pytest test_calculator.py", "python -m test test_calculator.py", "run test_calculator.py"], answer: 1 },
    { q: "When using pytest, do you need to write your own main function, try/except blocks, or print statements in the test file?", options: ["Yes, all three are required by the framework", "You need main but not try/except for it to work", "No — pytest handles all of that automatically", "You still need try/except but not a main function"], answer: 2 },

    // pytest output & multiple test functions
    { q: "In pytest output, what does a dot (.) represent?", options: ["A skipped test case", "A passed test", "A warning about the test", "An incomplete test that timed out"], answer: 1 },
    { q: "In pytest output, what does F represent?", options: ["Fixed", "Fatal error", "Failed test", "Finished"], answer: 2 },
    { q: "If you put all five assertions in one test function and the second one fails, what happens to assertions 3-5?", options: ["They still run and report their own results", "They are skipped — the function stops at the first failure", "They run but their results are hidden from the output", "They are moved to a separate report for later review"], answer: 1 },
    { q: "Why is splitting tests into test_positive, test_negative, and test_zero better than one big test_square function?", options: ["It's required by pytest to have separate test functions", "Each function runs independently, so a failure in one doesn't prevent the others from providing clues", "Smaller functions use less memory during test execution", "pytest only supports functions with one assert statement each"], answer: 1 },

    // Testing exceptions with pytest.raises
    { q: "How do you test that a function raises a specific exception (e.g., TypeError)?", options: ["assert square('cat') == TypeError as the expected result", "Use try/except in your test function to catch the error", "Use 'with pytest.raises(TypeError):' then call the function", "You cannot test for exceptions using any testing framework"], answer: 2 },
    { q: "To use pytest.raises, what must you import?", options: ["from pytest import raises directly into the namespace", "import pytest (then use pytest.raises)", "import assert from the standard library modules", "from exceptions import raises as a utility function"], answer: 1 },

    // Return values vs side effects
    { q: "Why can't you use 'assert hello('David') == \"Hello, David\"' if hello() uses print instead of return?", options: ["print is not allowed inside functions that are tested", "print produces a side effect but returns None, so the comparison fails", "Strings can't be compared with == in assert statements", "assert doesn't work with functions that handle strings"], answer: 1 },
    { q: "What change makes a function that prints its result more testable?", options: ["Add a try/except block around the print statement", "Replace print with return and let the caller handle printing", "Use f-strings instead of string concatenation throughout", "Add type hints to the function signature and parameters"], answer: 1 },
    { q: "What is a 'side effect' in the context of functions?", options: ["A bug caused by the function's internal logic", "An observable behavior like printing to screen, rather than returning a value", "A variable that unexpectedly changes type during execution", "An unused import that wastes memory in the program"], answer: 1 },

    // Organizing tests in folders
    { q: "What special file must exist inside a test folder for Python to treat it as a package?", options: ["setup.py", "__init__.py", "config.py", "__main__.py"], answer: 1 },
    { q: "What happens when you run 'pytest test/' where test/ is a folder?", options: ["It runs only the first test file it encounters", "It searches the folder and runs all test files it finds", "It fails because pytest only accepts single file arguments", "It creates new test files automatically in the folder"], answer: 1 },
    { q: "The __init__.py file inside a test folder can be:", options: ["Only a configuration file with specific required content inside", "Empty — its presence alone signals the folder is a package", "A copy of the module being tested for reference purposes", "A list of all test functions that need to be discovered"], answer: 1 },

    // Testability & design
    { q: "What makes a function 'testable' in the unit-testing sense?", options: ["It has no parameters and no dependencies", "It has well-defined inputs (parameters) and outputs (return values)", "It uses only built-in types like int and str", "It is fewer than 10 lines long in total"], answer: 1 },
    { q: "If your main function handles user input and your square function handles math, which should your test file focus on?", options: ["main, because that's where most errors start", "Both equally, since all code should be tested the same way", "square, because it has defined inputs/outputs independent of user interaction", "Neither — test the whole program end-to-end as one unit"], answer: 2 },
  ],
},

// ─── LECTURE 6 ───────────────────────────────────────────────────────
{
  course: "CS50P",
  title: "CS50P Week 6: File I/O",
  questions: [
    // File modes & persistence
    { q: "What happens to data stored in variables when a Python program exits?", options: ["It's saved automatically to a temp file", "It's lost — variables exist only in memory", "It's cached for the next run of the program", "It depends on the variable type being stored"], answer: 1 },
    { q: "What does open('file.txt', 'w') do if file.txt already exists?", options: ["Appends to the existing file contents", "Raises a FileExistsError exception", "Overwrites the file with a new empty one", "Opens it in read-only mode instead"], answer: 2 },
    { q: "What is the difference between 'w' and 'a' mode in open()?", options: ["'w' is faster than 'a' for writing data", "'w' recreates the file each time; 'a' adds to the end", "'a' sorts the content alphabetically; 'w' does not", "There is no difference between the two modes"], answer: 1 },
    { q: "If you open a file in read mode, what happens if you try to write to it?", options: ["It silently fails without any notification", "It raises an error", "It works but doesn't save changes to disk", "It creates a backup copy of the file first"], answer: 1 },
    { q: "What is the default mode if you call open('file.txt') without a second argument?", options: ["Write ('w')", "Append ('a')", "Read ('r')", "Read-write ('r+')"], answer: 2 },

    // The 'with' statement
    { q: "What problem does the 'with' keyword solve when working with files?", options: ["It makes files read faster during large operations", "It automatically closes the file when the block ends, preventing you from forgetting", "It encrypts the file contents before writing them out", "It locks the file so other programs can't access it simultaneously"], answer: 1 },
    { q: "What happens to the file when code execution leaves a 'with' block?", options: ["Nothing — you must call close() manually yourself", "The file is automatically closed", "The file is deleted from the filesystem entirely", "The variable becomes None and the data is lost"], answer: 1 },

    // write() vs print()
    { q: "How does file.write() differ from print() regarding line endings?", options: ["write() adds a newline automatically; print() does not add one", "print() adds a newline automatically; write() does not", "Both add newlines automatically after each call to them", "Neither adds newlines and you must always add them yourself"], answer: 1 },
    { q: "You write three names to a file using write() without adding '\\n'. What does the file look like?", options: ["Three names on separate lines as expected", "All three names concatenated on one line", "Only the last name appears, overwriting the others", "An error is raised because newlines are required"], answer: 1 },

    // Reading files
    { q: "What does the readlines() method return?", options: ["A single string of all the file's content combined", "A list of lines, each still containing its newline character", "A dictionary mapping line numbers to their text content", "An integer count of the total number of lines"], answer: 1 },
    { q: "What does 'for line in file' do in Python?", options: ["Reads the entire file into memory at once as a block", "Iterates over each line in the file one at a time", "Searches for a specific line matching a pattern", "Counts the number of lines in the file object"], answer: 1 },
    { q: "After reading a file, you see extra blank lines in your output. What is the most likely cause?", options: ["The file is corrupted and contains extra null bytes", "Both the file's newlines and print()'s automatic newline are producing double spacing", "Python adds blank lines by default when printing to the console", "The terminal is misconfigured and inserting extra line breaks"], answer: 1 },
    { q: "What does rstrip() do when called on a line read from a file?", options: ["Removes leading whitespace from the left side", "Removes trailing whitespace including the newline character", "Reverses the string from end to beginning", "Splits the string on whitespace into a list of words"], answer: 1 },

    // Sorting file data
    { q: "Why can't you sort and print lines in a single pass through a file?", options: ["Python doesn't support sorting strings from files", "You need all the data in memory before you can determine the correct order", "Files are already sorted by the operating system automatically", "Sorting requires a database connection to process the data"], answer: 1 },
    { q: "What does sorted() return when given a list?", options: ["None — it sorts the list in place and returns nothing", "A new sorted list, leaving the original unchanged", "A dictionary of sorted values with index keys for each", "A tuple containing the sorted elements from the list"], answer: 1 },
    { q: "How do you reverse the sort order using sorted()?", options: ["sorted(list, order='desc')", "sorted(list, reverse=True)", "list.sort().reverse()", "sorted(list, direction=-1)"], answer: 1 },

    // CSV fundamentals
    { q: "What does CSV stand for?", options: ["Coded String Values", "Comma Separated Values", "Column Sorted Variables", "Character Sequenced Vectors"], answer: 1 },
    { q: "You split a CSV line on commas, but one field contains 'number four, privet drive'. What goes wrong?", options: ["Nothing — split handles quoted fields correctly on its own", "split() breaks the address into two separate values, corrupting your data", "The comma is automatically escaped by Python before splitting", "Python raises a ValueError because the field count is wrong"], answer: 1 },
    { q: "Why should you use Python's csv module instead of manually splitting on commas?", options: ["It's faster at reading files from the disk into memory", "It handles edge cases like commas inside quoted fields", "It's required by Python syntax for processing CSV data files", "It compresses the file automatically to save disk space"], answer: 1 },

    // csv.reader vs csv.DictReader
    { q: "What data type does csv.reader return for each row?", options: ["A dictionary with column headers as keys", "A list of strings", "A tuple of the field values", "A single concatenated string of all fields"], answer: 1 },
    { q: "What does csv.DictReader use as dictionary keys for each row?", options: ["The row number as an integer index value", "The values from the first row (header) of the CSV", "Integer indices starting at 0 for each column", "You must specify keys manually in the constructor"], answer: 1 },
    { q: "If someone reorders the columns in your CSV file, which reader approach keeps working without code changes?", options: ["csv.reader with index-based access to each field", "csv.DictReader with named column access", "Both break equally when columns are rearranged", "Neither — you must rewrite the file to match"], answer: 1 },
    { q: "What must a CSV file have in its first row for DictReader to work automatically?", options: ["A row count indicating the number of data rows", "A header row with column names", "A version number for the CSV format being used", "Nothing special — it always works regardless of content"], answer: 1 },

    // csv.writer and csv.DictWriter
    { q: "When using csv.writer, how do you specify the values for one row?", options: ["As a dictionary with column name keys", "As a list passed to writerow()", "As keyword arguments to the write function", "As a formatted string with commas between values"], answer: 1 },
    { q: "What does csv.writer automatically do if a value contains a comma?", options: ["Escapes it with a backslash character", "Wraps the value in quotes", "Removes the comma from the value", "Raises an error about invalid field data"], answer: 1 },
    { q: "What extra argument does csv.DictWriter require that csv.writer does not?", options: ["A file encoding for the output stream", "fieldnames — a list of column names", "A row count for the expected data entries", "A delimiter character to separate the fields"], answer: 1 },

    // Sorting lists of dictionaries
    { q: "Why can't sorted() directly sort a list of dictionaries without additional information?", options: ["Dictionaries can't be compared — sorted doesn't know which key to use for ordering", "Dictionaries are immutable and cannot be rearranged in a list", "sorted() only works on strings and numbers, not complex types", "It can sort them — no extra information is needed at all"], answer: 0 },
    { q: "What does the 'key' parameter in sorted() expect?", options: ["A string naming the sort column to use for ordering", "A function that extracts the comparison value from each element", "A boolean for choosing ascending or descending order", "An integer index pointing to the sort position in each item"], answer: 1 },
    { q: "What is a lambda function?", options: ["A function that runs in parallel with other code", "An anonymous function defined inline without a name", "A function that only works with lists and tuples", "A function imported from the lambda standard module"], answer: 1 },
    { q: "Given students as a list of dicts, what does sorted(students, key=lambda s: s['name']) do?", options: ["Filters students by name to remove duplicates", "Returns a new list of students sorted alphabetically by their 'name' value", "Modifies each student's name to be uppercase", "Groups students by name into sublists of matches"], answer: 1 },
    { q: "Why do you pass 'get_name' to sorted() without parentheses (key=get_name, not key=get_name())?", options: ["It's a syntax error to include parentheses in that context", "You're passing the function itself so sorted can call it repeatedly, not calling it once yourself", "Parentheses would reverse the sort order unexpectedly", "There's no difference between the two forms at all"], answer: 1 },

    // Unpacking
    { q: "What does 'name, home = line.split(\",\")' do?", options: ["Creates a list with two elements named name and home", "Unpacks the two values returned by split into separate variables simultaneously", "Joins name and home into one combined string variable", "Raises an error if there aren't exactly two comma-separated values"], answer: 1 },

    // Binary files & Pillow
    { q: "What is the fundamental difference between a text file and a binary file?", options: ["Text files are smaller in size on disk than binary files", "Text files store human-readable characters; binary files store raw bytes for any data type", "Binary files can't be opened or processed in Python directly", "There is no real difference between the two file formats"], answer: 1 },
    { q: "In sys.argv, what is always stored at index 0?", options: ["The first command-line argument provided by the user", "The name of the program itself", "The Python version currently being used to run the program", "The current working directory as a string path"], answer: 1 },
    { q: "What does sys.argv[1:] give you?", options: ["The first argument only from the command line", "All command-line arguments except the program name", "The last argument only from the list of arguments", "An error if there are no additional arguments provided"], answer: 1 },
  ],
},

// ─── LECTURE 7 ───────────────────────────────────────────────────────
{
  course: "CS50P",
  title: "CS50P Week 7: Regular Expressions",
  questions: [
    // Core concept: what regular expressions are
    { q: "What is a regular expression (regex)?", options: ["A Python data type for storing text patterns", "A pattern used to match, validate, or extract data from strings", "A function that formats strings for output display", "A type of loop for iterating over individual characters"], answer: 1 },

    // re.search basics
    { q: "What does re.search() return if the pattern is NOT found in the string?", options: ["An empty string with no content", "False", "None", "It raises an exception to signal the failure"], answer: 2 },
    { q: "What two required arguments does re.search() take?", options: ["A string and a filename to search in", "A pattern and a string to search", "Two strings to compare against each other", "A pattern and a replacement string for substitution"], answer: 1 },

    // . * + ?
    { q: "In a regex, what does a single dot (.) represent?", options: ["A literal period character in the text", "Any single character except a newline", "The end of the pattern being matched", "A whitespace character like a space or tab"], answer: 1 },
    { q: "What is the difference between * and + in a regex?", options: ["* means one or more; + means zero or more repetitions", "* means zero or more; + means one or more", "They are identical in behavior and meaning", "* is greedy matching; + is lazy matching by default"], answer: 1 },
    { q: "Why does the pattern '.*@.*' match a string with ONLY an @ sign and nothing else?", options: ["The @ counts as a wildcard that matches anything", "* means zero or more, so no characters on either side is acceptable", "The dot matches the @ itself as any character would", "It's a bug in Python's re library that should be fixed"], answer: 1 },
    { q: "What does ? mean after a character or group in a regex?", options: ["Match any character in that position of the string", "The preceding element is optional (zero or one)", "Repeat the preceding element forever until end of string", "Negate the preceding element so it matches the opposite"], answer: 1 },

    // Escaping with backslash
    { q: "How do you match a literal period in a regex, rather than 'any character'?", options: ["Use two periods (..) to indicate a literal", "Use \\. (backslash before the dot)", "Surround it in square brackets like [.]", "Both B and C work"], answer: 3 },
    { q: "Why should you prefix a regex string with r (e.g., r\"pattern\") in Python?", options: ["It makes the regex run faster during matching operations", "It tells Python to treat backslashes literally, avoiding misinterpretation as escape sequences", "It's required syntax — regex won't work at all without it", "It enables case-insensitive matching for the entire pattern"], answer: 1 },

    // Anchors: ^ and $
    { q: "What does the ^ symbol mean at the START of a regex pattern?", options: ["Match any character at the current position", "Match the start of the string", "Negate the entire pattern that follows it", "Match a literal caret character in the text"], answer: 1 },
    { q: "What does $ at the END of a regex pattern mean?", options: ["Match a currency value in the text being searched", "Match the end of the string", "The pattern is optional and may not match at all", "Escape the last character in the pattern expression"], answer: 1 },
    { q: "Without ^ and $, what happens if the user types 'my email is malan@harvard.edu.' into a validator using re.search?", options: ["It fails because there are extra words around the email", "It matches, because re.search finds the pattern anywhere in the string", "It throws an error due to the period at the end of input", "It only matches the email portion and ignores the surrounding text"], answer: 1 },

    // Character sets and complements
    { q: "What does [abc] mean in a regex?", options: ["Match the literal string 'abc' in sequence", "Match any one character that is a, b, or c", "Match anything except the characters a, b, or c", "Match a followed by b followed by c in order"], answer: 1 },
    { q: "What does [^@] mean inside a regex?", options: ["Match @ at the start of a string only", "Match any single character EXCEPT @", "Match a literal ^ followed by the @ character", "Match the @ sign optionally, zero or one time"], answer: 1 },
    { q: "How do you specify a range of lowercase letters in a character set?", options: ["[a, b, c, ... z]", "[a-z]", "[lowercase]", "\\a-z"], answer: 1 },

    // Shorthand character classes
    { q: "What does \\w match in a regex?", options: ["Whitespace characters only such as spaces and tabs", "Any word character: letters, digits, and underscore", "Only lowercase letters from a through z", "Any character including special symbols and punctuation"], answer: 1 },
    { q: "What is the relationship between \\w and [a-zA-Z0-9_]?", options: ["They are unrelated and match different characters", "They match the same set of characters", "\\w matches more characters than the bracket form", "\\w excludes underscores unlike the bracket version"], answer: 1 },
    { q: "What does \\d match?", options: ["Any digit 0-9", "Any non-digit character", "The letter d literally", "A decimal point character"], answer: 0 },
    { q: "What does a CAPITAL letter shorthand like \\D or \\W represent?", options: ["The same thing but with case-insensitive matching enabled", "The complement — everything the lowercase version does NOT match", "An error — capitals aren't valid in regex shorthands", "A literal backslash followed by the uppercase letter"], answer: 1 },

    // Flags
    { q: "What does re.IGNORECASE do when passed as a flag to re.search?", options: ["Ignores whitespace characters in the pattern entirely", "Treats uppercase and lowercase letters as equivalent when matching", "Makes the search return only lowercase versions of results", "Disables special character interpretation in the regex pattern"], answer: 1 },
    { q: "Why might you use re.IGNORECASE instead of calling .lower() on the input?", options: ["It's faster to execute at runtime than .lower() is", "It validates without modifying the original string", "lower() doesn't work on email addresses or URLs", "There is no practical difference between the two approaches"], answer: 1 },

    // Groups and capturing
    { q: "What do parentheses () do in a regex when used with re.search?", options: ["They are literal characters to match in the string", "They group and CAPTURE the matched text, accessible via .group()", "They make the entire enclosed pattern optional to match", "They negate the enclosed pattern so it matches the opposite"], answer: 1 },
    { q: "If a regex has two sets of capturing parentheses, what does matches.group(1) return?", options: ["The entire matched string including all groups", "The text matched by the first set of parentheses", "The text matched by the second set of parentheses", "Both groups combined into a single concatenated string"], answer: 1 },
    { q: "Why does group numbering start at 1 instead of 0 for captured groups?", options: ["It's a Python convention for all sequence types", "Group 0 is reserved for the entire matched string", "It's arbitrary with no technical reason behind it", "Group 0 represents the pattern itself as a raw string"], answer: 1 },
    { q: "What does (?:...) do compared to (...)?", options: ["It captures more aggressively than regular parentheses", "It groups without capturing — the match isn't stored as a group", "It makes the group optional so zero matches are acceptable", "It's invalid syntax that will raise a regex compilation error"], answer: 1 },
    { q: "You have the regex r'^(\\w+), (\\w+)$' and input 'Malan, David'. What is group(2)?", options: ["Malan", "David", "Malan, David", "None"], answer: 1 },

    // re.sub
    { q: "What does re.sub() do?", options: ["Searches for a pattern and returns the match object", "Substitutes (replaces) all occurrences of a pattern in a string with a replacement", "Splits a string by a pattern into a list of parts", "Submits the regex for compilation and optimization"], answer: 1 },
    { q: "re.sub(r'https?://twitter\\.com/', '', url) — what does this produce if url is 'https://twitter.com/davidjmalan'?", options: ["https://twitter.com/", "davidjmalan", "twitter.com/davidjmalan", "An error"], answer: 1 },

    // The walrus operator
    { q: "What does the := (walrus) operator allow you to do?", options: ["Compare two values for deep equality checking", "Assign a value and test it in the same expression (e.g., in an if statement)", "Define a constant that cannot be reassigned later", "Create a regular expression from a string pattern"], answer: 1 },

    // Finite state machines (conceptual)
    { q: "When re.search processes a regex, what computational model does it use internally?", options: ["A recursive descent parser for breaking down expressions", "A finite state machine (non-deterministic finite automaton)", "A binary search tree for efficient character lookups", "A hash table lookup that maps patterns to matches"], answer: 1 },
    { q: "In a finite state machine diagram for a regex, what does a 'double circle' state represent?", options: ["An error state where matching has failed permanently", "The start state where the machine begins processing input", "An accept state — the input is valid if the machine ends here", "A state that loops forever until the input is exhausted"], answer: 2 },

    // Practical design wisdom
    { q: "Why is it a bad idea to write a long, complex regex all at once?", options: ["Python limits regex length to 256 characters maximum", "Mistakes are extremely hard to find — incremental building and testing is more effective", "Long regexes are slower to execute than short ones always", "It's fine — there's no disadvantage to writing them all at once"], answer: 1 },
    { q: "Instead of writing your own regex to validate email addresses, what does the lecture recommend?", options: ["Use a simpler check like just looking for an @ sign", "Copy the official RFC regex specification exactly into your code", "Use a well-tested third-party library", "Don't validate email addresses at all in your application"], answer: 2 },
    { q: "What is the practical difference between re.search, re.match, and re.fullmatch?", options: ["They are identical in behavior and result output", "search checks anywhere in the string; match anchors at the start; fullmatch anchors at both start and end", "match is faster than search due to internal optimizations", "fullmatch only works with \\w word character patterns"], answer: 1 },

    // | (or) operator
    { q: "What does the vertical bar | mean in a regex?", options: ["Logical AND — both sides must match simultaneously", "Logical OR — match the pattern on the left or the right", "Pipe the output to another regex for chaining operations", "Escape the next character in the regex pattern string"], answer: 1 },
    { q: "To match '.com' OR '.edu' at the end of a domain, which regex fragment works?", options: ["\\.(com)(edu)", "\\.(com|edu)", "\\.com.edu", "\\.[com,edu]"], answer: 1 },

    // Common pitfalls
    { q: "You use the pattern r'.+@.+\\.edu$' but forget the ^ anchor. What's the consequence?", options: ["It won't compile and will raise a regex syntax error", "A string like 'my email is malan@harvard.edu' will pass validation", "It will only match .edu domains and nothing else at all", "Nothing — the $ anchor alone is sufficient for validation"], answer: 1 },
    { q: "You write r'https://twitter\\.com/' but the user pastes an http:// URL. Why does it fail?", options: ["http is not a valid protocol for web addresses", "The regex requires the 's' literally — you need to make it optional with s?", "re.search automatically handles both http and https protocols", "The backslash breaks the URL matching in the regex engine"], answer: 1 },
  ],
},

// ─── LECTURE 8 ───────────────────────────────────────────────────────
{
  course: "CS50P",
  title: "CS50P Week 8: Object-Oriented Programming",
  questions: [
    // Classes & objects fundamentals
    { q: "What is a class in Python?", options: ["A function that returns multiple values at once", "A blueprint for creating your own data type", "A built-in module for organizing code into sections", "A type of dictionary with methods attached to it"], answer: 1 },
    { q: "What is the relationship between a class and an object?", options: ["They are the same thing in Python", "A class is a specific instance of an object", "An object is a specific instance created from a class", "Objects contain classes inside of them"], answer: 2 },
    { q: "What does 'instantiation' mean?", options: ["Defining a class with its methods and attributes", "Importing a module into the current namespace", "Creating an object from a class", "Calling a method on an existing object instance"], answer: 2 },

    // Tuples, lists, dicts as return strategies
    { q: "What makes a tuple different from a list?", options: ["Tuples can only hold strings as their elements", "Tuples are immutable — you cannot change their values after creation", "Tuples are faster but otherwise identical to lists in every way", "Tuples must contain exactly two elements and no more"], answer: 1 },
    { q: "If you try to assign a new value to an index in a tuple, what happens?", options: ["It silently fails without any notification", "A TypeError is raised", "It works but prints a warning to the console", "The tuple converts to a list automatically"], answer: 1 },
    { q: "What is the main advantage of a dictionary over a tuple for storing structured data?", options: ["Dictionaries are immutable and prevent accidental changes", "You access values by meaningful keys instead of numeric indices", "Dictionaries use less memory than tuples for the same data", "Dictionaries are faster to iterate through than tuples are"], answer: 1 },
    { q: "When you return name, house with a comma in Python, what are you actually returning?", options: ["Two separate values sent back independently", "A single tuple containing both values", "A list with the two values as elements", "A dictionary with name and house as keys"], answer: 1 },

    // __init__ method
    { q: "What is the purpose of the __init__ method?", options: ["To print the object to the console for debugging", "To delete the object from memory when it is no longer needed", "To initialize an object's attributes when it is first created", "To define the class name and its parent classes"], answer: 2 },
    { q: "Why does __init__ take 'self' as its first parameter?", options: ["It's optional but conventional for readability purposes", "So you can access and store data inside the current object being created", "It refers to the class itself, not the individual object", "It's required for Python to parse the function definition correctly"], answer: 1 },
    { q: "When you write Student('Harry', 'Gryffindor'), who calls __init__?", options: ["You call it explicitly with the self argument included", "Python calls it automatically when the object is constructed", "The print function calls it when displaying the new object", "It's never called — it runs at import time when the module loads"], answer: 1 },
    { q: "If __init__ takes self, name, and house, how many arguments does the programmer pass when creating the object?", options: ["Three, including self explicitly", "Two — Python passes self automatically", "One, since the others have defaults", "It depends on the class hierarchy"], answer: 1 },

    // Instance variables & dot notation
    { q: "What does self.name = name do inside __init__?", options: ["Creates a local variable called name inside the method only", "Stores the value of name inside the current object as an instance variable", "Creates a class variable shared by all objects of this class", "Assigns name to the class itself rather than the instance"], answer: 1 },
    { q: "How do you access an instance variable called 'house' on an object called 'student'?", options: ["student['house']", "student.house", "student->house", "house(student)"], answer: 1 },

    // __str__ method
    { q: "If you print an object that has no __str__ method defined, what do you see?", options: ["An empty string with no visible output at all", "The object's class name and memory address", "A TypeError because it can't be printed without __str__", "The object's __init__ arguments listed in order"], answer: 1 },
    { q: "What is the purpose of __str__?", options: ["To initialize the object's attributes and state", "To define how the object is represented as a string for display", "To compare two objects for equality checking", "To convert the object to an integer value"], answer: 1 },
    { q: "The __str__ method is called automatically when you pass an object to which function?", options: ["len()", "type()", "print()", "input()"], answer: 2 },

    // raise and error checking in classes
    { q: "Why is sys.exit() a poor choice for handling invalid input inside __init__?", options: ["It doesn't actually stop the program from continuing", "It's too extreme — it kills the entire program instead of signaling a catchable error", "It only works on Linux and macOS operating systems", "It requires importing the os module as a dependency"], answer: 1 },
    { q: "What does the 'raise' keyword do?", options: ["Catches an exception and handles it in place", "Creates and signals an exception that can be caught elsewhere with try/except", "Prints an error message to the console output", "Exits the program and returns to the terminal"], answer: 1 },
    { q: "Why is validating data inside __init__ better than validating it in a separate function?", options: ["It runs faster than calling a separate function would", "It keeps all validation logic encapsulated with the class it protects", "Python requires all validation to be inside __init__ methods", "It uses less memory than external validation functions do"], answer: 1 },

    // Properties, getters, setters
    { q: "What problem do properties (getters/setters) solve that __init__ validation alone does not?", options: ["They make the code shorter and easier to read overall", "They prevent someone from changing an attribute to an invalid value after the object is created", "They allow the object to be printed using the print function", "They make the object completely immutable after construction"], answer: 1 },
    { q: "What does the @property decorator do when placed above a method?", options: ["Makes the method private and inaccessible from outside", "Defines it as a getter — code that runs when the attribute is accessed", "Prevents the method from being called by external code", "Converts the method to a class method on the class itself"], answer: 1 },
    { q: "Why must the underlying instance variable use a different name (e.g., _house) than the property (house)?", options: ["Python style guidelines require a leading underscore on all variables", "To avoid infinite recursion — the property and the variable would collide otherwise", "Underscores make variables faster to access during execution", "It's optional but looks cleaner and more professional in code"], answer: 1 },
    { q: "In __init__, writing self.house = house (without underscore) triggers what?", options: ["Direct assignment to the instance variable in memory", "The setter method, which includes validation", "A NameError because house is not yet defined at that point", "Nothing — the assignment is ignored by the interpreter"], answer: 1 },
    { q: "In Python, can a determined programmer still bypass a property and set _house directly?", options: ["No — properties make attributes truly private and protected", "Yes — Python relies on convention, not enforcement, for access control", "Only if they import a special module to unlock private access", "Only in debug mode when running with the -d flag enabled"], answer: 1 },

    // Class methods & class variables
    { q: "What distinguishes a class method from an instance method?", options: ["Class methods are faster to execute at runtime overall", "Class methods belong to the class itself and don't require an object to be created first", "Class methods can't access any variables or other methods", "There is no difference between class methods and instance methods"], answer: 1 },
    { q: "What is the conventional name for the first parameter of a class method?", options: ["self", "this", "cls", "class"], answer: 2 },
    { q: "Why can't the first parameter of a class method be called 'class'?", options: ["It would be too long for Python to process", "'class' is a reserved keyword in Python", "It would conflict with self in the same scope", "Convention forbids it but it would technically work"], answer: 1 },
    { q: "A variable defined directly inside a class body (not inside any method) is called what?", options: ["A local variable scoped to the class definition", "An instance variable belonging to each individual object", "A class variable — shared across all instances", "A global variable accessible from anywhere in the program"], answer: 2 },
    { q: "Why would you use a class method like Student.get() instead of a standalone function get_student()?", options: ["It runs faster than a standalone function would", "It keeps student-related functionality encapsulated inside the Student class", "Python requires all factory functions to be class methods", "It uses less memory than a standalone function at runtime"], answer: 1 },

    // Inheritance
    { q: "What does it mean for class Student to inherit from class Wizard?", options: ["Student replaces Wizard and Wizard is deleted", "Student gets a copy of Wizard's source code pasted in", "Student automatically gains all of Wizard's methods and attributes", "Wizard becomes an instance of Student automatically"], answer: 2 },
    { q: "What does super().__init__(name) do inside a subclass's __init__?", options: ["Creates a new parent object in addition to the child object", "Calls the parent class's __init__ to handle the shared initialization logic", "Deletes the parent class from the class hierarchy entirely", "Overrides the parent class entirely with the subclass version"], answer: 1 },
    { q: "What problem does inheritance solve?", options: ["It makes code run faster by reusing compiled methods", "It eliminates duplicated code when multiple classes share common attributes or behavior", "It prevents bugs from occurring in class hierarchies", "It is required to use classes at all in Python programs"], answer: 1 },

    // Operator overloading
    { q: "What is operator overloading?", options: ["Using too many operators in one expression at once", "Defining custom behavior for operators like + on your own classes", "A syntax error caused by conflicting operator definitions", "Renaming built-in operators to use different symbols"], answer: 1 },
    { q: "Which special method lets you define what + does for your class?", options: ["__str__", "__init__", "__add__", "__plus__"], answer: 2 },
    { q: "In __add__(self, other), what do self and other represent?", options: ["The class and the method being called on it", "The left operand and the right operand of the + sign", "Two copies of the same object being merged together", "The old value and the new value being assigned to it"], answer: 1 },
    { q: "When you write potter + weasley and both are Vault objects, what must __add__ return?", options: ["Nothing — it modifies potter in place directly", "A new Vault object containing the combined values", "A dictionary with the merged key-value pairs", "An integer representing the total combined value"], answer: 1 },

    // Built-in types are classes
    { q: "What does type(50) reveal?", options: ["'number'", "'integer'", "class 'int' — showing that int is a class", "'50'"], answer: 2 },
    { q: "When you call 'hello'.lower(), what are you doing in OOP terms?", options: ["Calling a standalone function on a string argument", "Calling an instance method on a str object", "Calling a class method on the str class itself", "Using operator overloading on the string value"], answer: 1 },
    { q: "Why did Python's authors make int, str, list, and dict lowercase even though they're classes?", options: ["They aren't actually classes, they are primitive types", "Convention for built-in types — user-defined classes should use CapitalCase", "Lowercase classes are faster for the interpreter to process", "It was a mistake they can't fix due to backward compatibility"], answer: 1 },
  ],
},

// ─── LECTURE 9 ───────────────────────────────────────────────────────
{
  course: "CS50P",
  title: "CS50P Week 9: Et Cetera",
  questions: [
    // Sets
    { q: "What property distinguishes a set from a list in Python?", options: ["Sets are ordered by insertion time like lists are", "Sets automatically eliminate duplicates", "Sets are faster to iterate through than lists overall", "Sets can only hold strings as their elements"], answer: 1 },
    { q: "To add an element to a set, which method do you use?", options: ["append()", "insert()", "add()", "push()"], answer: 2 },
    { q: "If you add a string to a set that differs only in capitalization from an existing entry, what happens?", options: ["The set ignores it as a duplicate because case doesn't matter", "Both versions are stored as distinct elements", "The set raises a ValueError due to the near-duplicate entry", "The newer version replaces the older one in the set"], answer: 1 },

    // Global variables & scope
    { q: "What happens if you try to modify a global variable inside a function without the global keyword?", options: ["It works fine and modifies the global variable directly", "Python creates a local variable instead, causing an UnboundLocalError if read before assignment", "Python silently ignores the change and keeps the original value", "It raises a SyntaxError before the program can even start running"], answer: 1 },
    { q: "What does the 'global' keyword do inside a function?", options: ["Creates a new global variable that didn't exist before", "Tells Python the variable refers to one defined outside all functions, allowing modification", "Makes the variable immutable so it cannot be changed anywhere", "Exports the variable to other modules that import this file"], answer: 1 },
    { q: "Why is using global variables generally discouraged?", options: ["They use more memory than local variables do in Python", "They make it unclear where state is stored and modified, especially as programs grow", "Python runs them slower than local variables during execution", "They can't be used with classes or object-oriented programming"], answer: 1 },
    { q: "If you define a variable both globally and locally with the same name, what happens inside the function?", options: ["Python throws a naming conflict error and stops execution", "The local variable shadows the global — changes affect only the local copy", "The global variable is overwritten with the local value automatically", "Both variables are accessible simultaneously using different syntax"], answer: 1 },
    { q: "Why doesn't passing a global variable as a function argument let the function modify the original?", options: ["Arguments are read-only and cannot be changed inside functions", "The function receives its own local copy of the value, not a reference to the global", "Python prohibits this pattern and raises a TypeError if attempted", "It does work — this is the recommended approach for modifying globals"], answer: 1 },

    // OOP as alternative to globals
    { q: "How does using a class with instance variables solve the global variable problem?", options: ["Classes automatically declare all variables as global internally", "Instance variables are accessible to all methods via self, avoiding the need for global state", "Classes run in a separate memory space from the rest of the program", "They don't solve it — it's purely a style preference with no real benefit"], answer: 1 },
    { q: "What does the @property decorator allow you to do that a plain instance variable does not?", options: ["Store larger values than regular variables can hold", "Control read/write access — e.g., allow reading but prevent direct assignment", "Make the variable global across all instances of the class", "Automatically type-check assignments at runtime with enforcement"], answer: 1 },

    // Constants
    { q: "How does Python enforce that a variable declared in ALL_CAPS is constant?", options: ["It raises an error if you try to change its value", "It marks the variable as read-only in memory automatically", "It doesn't — ALL_CAPS is a convention only, not enforced by the language", "The compiler optimizes it away into an immutable constant"], answer: 2 },
    { q: "What is the purpose of defining a class variable in ALL_CAPS inside a class?", options: ["It makes the variable accessible outside the class by other code", "It signals to other programmers that this value should not be changed", "It improves performance by enabling compiler optimizations on it", "It prevents subclasses from overriding it in their own definitions"], answer: 1 },

    // Type hints
    { q: "What effect do type hints have when you run a Python program?", options: ["Python enforces them and throws errors on type mismatches", "None — Python ignores type hints at runtime", "They make the program run faster by optimizing types", "They automatically convert types to match the annotations"], answer: 1 },
    { q: "What does 'n: int' mean in a function signature like 'def meow(n: int)'?", options: ["n is converted to int automatically before the function runs", "It's a hint that n should be an int, but Python won't enforce it", "n can only be assigned once inside the function body", "It creates a new int object and assigns it to the parameter"], answer: 1 },
    { q: "What does the arrow notation '-> str' mean in 'def meow(n: int) -> str'?", options: ["The function takes a string argument as its first parameter", "The function returns a value of type str", "The function prints a string to the console as output", "The function converts its input to str before processing"], answer: 1 },
    { q: "What is the purpose of a tool like mypy?", options: ["It runs Python programs faster through type-based optimization", "It analyzes your code before runtime to check that type hints are consistent with actual usage", "It converts Python to a statically typed language permanently", "It auto-generates type hints for you based on runtime behavior"], answer: 1 },
    { q: "If a function does not explicitly return a value, what does Python implicitly return?", options: ["0", "An empty string", "None", "False"], answer: 2 },
    { q: "Why would mypy flag 'number: int = input(\"What's n? \")'?", options: ["input() is deprecated in newer Python versions", "input() returns a str, but the variable is annotated as int — a type mismatch", "You can't annotate local variables with type hints", "mypy doesn't understand the input function at all"], answer: 1 },

    // argparse
    { q: "What problem does argparse solve compared to manually parsing sys.argv?", options: ["It makes programs run faster by caching parsed arguments", "It handles argument ordering, type conversion, defaults, and help text automatically", "It encrypts command-line arguments for security purposes", "It limits the number of arguments a user can pass to the program"], answer: 1 },
    { q: "What does running a program with -h or --help typically show when using argparse?", options: ["The program's source code in the terminal window", "Auto-generated usage information describing available arguments", "A list of all installed Python packages on the system", "Debug output showing internal variable states and values"], answer: 1 },
    { q: "If you add type=int to an argparse argument, what happens when the user passes a non-integer?", options: ["Python silently ignores the argument and uses a default", "argparse automatically displays an error message and exits", "The value is stored as a string instead of being converted", "The program crashes with a traceback and full stack trace"], answer: 1 },
    { q: "What is the convention for single-letter vs. full-word command-line flags?", options: ["Single letters use --, full words use a single dash -", "Single letters use one dash (-n), full words use two dashes (--number)", "There is no convention — any format is acceptable for either", "Single letters are for required args, full words for optional ones"], answer: 1 },

    // Unpacking
    { q: "What does the * operator do when placed before a list being passed to a function?", options: ["Multiplies all elements together into a single product", "Unpacks the list so each element is passed as a separate positional argument", "Creates a deep copy of the list in a new variable", "Reverses the list before passing it to the function"], answer: 1 },
    { q: "What does ** do when placed before a dictionary being passed to a function?", options: ["Squares all values in the dictionary entries", "Unpacks the dictionary so each key-value pair becomes a named argument", "Merges it with another dictionary passed as an argument", "Converts it to a list of tuples with key-value pairs"], answer: 1 },
    { q: "If a function expects 3 arguments and you unpack a list of 4 elements with *, what happens?", options: ["The fourth element is silently ignored by the function", "A TypeError — too many arguments were given", "The last argument receives a list of the extra elements", "Python assigns the extra to a variable called _ automatically"], answer: 1 },

    // *args and **kwargs
    { q: "What does *args in a function definition allow?", options: ["Exactly one argument of any type to be passed in", "A variable number of positional arguments, collected into a tuple", "A variable number of named keyword arguments as input", "Arguments that must be integers or numeric types only"], answer: 1 },
    { q: "What does **kwargs in a function definition allow?", options: ["A variable number of positional arguments collected in a tuple", "A variable number of keyword arguments, collected into a dictionary", "Two required arguments that must both be provided", "Arguments passed by reference instead of by value"], answer: 1 },
    { q: "In print(*objects, sep=' ', end='\\n'), what does the * before objects indicate?", options: ["objects is a pointer to a memory address in Python", "print accepts a variable number of positional arguments", "objects must be a list for the function to work properly", "The output will be formatted with special characters added"], answer: 1 },

    // map, filter, list/dict comprehensions
    { q: "What does the map() function do?", options: ["Creates a dictionary from two lists by pairing elements", "Applies a given function to every element of a sequence and returns the results", "Filters elements based on a condition and removes non-matches", "Sorts a list in place without returning a new one"], answer: 1 },
    { q: "What does filter() expect its first argument to do?", options: ["Transform each element into a different value or type", "Return True or False to decide whether each element is included", "Sort the elements into ascending or descending order", "Count the elements that match a given pattern string"], answer: 1 },
    { q: "What is a list comprehension?", options: ["A way to document a list's contents and purpose", "A concise syntax using [] to construct a new list from a loop (and optional condition) in one expression", "A method that lists all attributes of an object for inspection", "A debugging tool for lists that displays their internal state"], answer: 1 },
    { q: "What distinguishes a dictionary comprehension from a list comprehension syntactically?", options: ["Dictionary comprehensions use parentheses instead of brackets", "Dictionary comprehensions use curly braces {} and specify key: value pairs", "There is no difference between the two comprehension forms", "Dictionary comprehensions require the dict() function to work"], answer: 1 },
    { q: "In '[word.upper() for word in words if len(word) > 3]', what does the 'if' clause do?", options: ["Raises an error for short words that don't meet the condition", "Filters — only words longer than 3 characters are included in the result", "Transforms words shorter than 3 characters to uppercase too", "It's invalid syntax and will cause a comprehension error"], answer: 1 },

    // enumerate
    { q: "What does enumerate() give you that a plain 'for x in list' loop does not?", options: ["The ability to modify elements in the original list", "Both the index and the value on each iteration", "Automatic sorting of the list before iteration begins", "Faster execution speed compared to a regular for loop"], answer: 1 },

    // Generators & yield
    { q: "What problem does yield solve compared to building a huge list and returning it all at once?", options: ["It makes the code shorter and easier to read overall", "It generates values one at a time, avoiding the memory cost of storing everything at once", "It runs the loop in parallel across multiple processor cores", "It caches results to disk for persistence between program runs"], answer: 1 },
    { q: "What is the key behavioral difference between return and yield inside a loop?", options: ["return is faster to execute than yield during each iteration", "return exits the function immediately; yield pauses it, returning one value while remembering where it left off", "yield exits the function entirely; return pauses it until called again", "There is no difference between them inside a loop structure"], answer: 1 },
    { q: "What is the term for the object that yield returns?", options: ["A list of all the yielded values collected together", "An iterator (or generator)", "A coroutine running in a separate execution context", "A thread running in parallel with the main program"], answer: 1 },
    { q: "If a function uses yield instead of return, can you still loop over its output with a for loop?", options: ["No — you must call next() manually each time you want a value", "Yes — the for loop consumes the iterator one value at a time", "Only if you convert it to a list first before iterating over it", "Only with a while loop — for loops don't support generators"], answer: 1 },

    // Docstrings
    { q: "Where does a docstring go relative to the function it documents?", options: ["Above the function definition on the preceding line", "Below the function, after all code has been written", "Inside the function, as the first statement, using triple quotes", "In a separate .txt file alongside the Python source code"], answer: 2 },
    { q: "What is the practical benefit of using docstrings over regular # comments for functions?", options: ["They run faster than comments during code execution", "Tools can automatically extract them to generate documentation (web pages, PDFs)", "They prevent bugs from occurring in the documented functions", "They are required by Python for all function definitions"], answer: 1 },
  ],
},

];
