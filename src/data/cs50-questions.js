// ╔══════════════════════════════════════════════════════════════════╗
// ║  CS50 (Introduction to Computer Science) lectures               ║
// ╚══════════════════════════════════════════════════════════════════╝

export const CS50_LECTURES = [

// ─── LECTURE 1 ───────────────────────────────────────────────────────
{
  course: "CS50",
  title: "CS50 Week 1: C Fundamentals",
  questions: [
    // Compilation & build process
    { q: "What is the role of a compiler?", options: ["Runs source code line by line", "Converts source code into machine code", "Checks code style", "Manages memory allocation"], answer: 1, explanation: "A compiler translates human-readable source code into machine code (binary) that the CPU can execute directly. This is different from an interpreter, which runs code line by line." },
    { q: "When you change source code, what must you do before running it again?", options: ["Save the file", "Recompile it", "Restart the terminal", "Delete the old binary"], answer: 1 },
    { q: "If compiling produces no output, what does that typically mean?", options: ["The program crashed", "Compilation succeeded", "The file is empty", "You need to install dependencies"], answer: 1 },
    { q: "What is the relationship between 'make hello' and 'hello.c'?", options: ["make runs hello.c directly", "make infers the .c filename and compiles it", "make creates a new file called hello.c", "They are unrelated commands"], answer: 1 },

    // Types & data representation
    { q: "Why does C require you to declare a variable's type (int, float, char)?", options: ["For syntax highlighting", "So the compiler knows how much memory to allocate", "It's optional but recommended", "To make code run faster"], answer: 1 },
    { q: "What is the fundamental difference between an int and a float?", options: ["ints are faster", "floats can represent decimal values, ints cannot", "ints use more memory", "There is no real difference"], answer: 1 },
    { q: "What happens when you divide two integers in C (e.g., 1 / 3)?", options: ["You get 0.333...", "The decimal is truncated — you get 0", "It throws an error", "It rounds to the nearest integer"], answer: 1, explanation: "Integer division in C discards the fractional part entirely (truncation toward zero). To get a decimal result, cast one operand to float first: (float)1 / 3 gives 0.333..." },
    { q: "What is integer overflow?", options: ["Using too many variables", "Storing a value too large for the allocated bits, causing wraparound", "Dividing by zero", "Running out of RAM"], answer: 1 },
    { q: "A 32-bit integer can represent roughly how many distinct values?", options: ["32 thousand", "1 million", "4 billion", "Unlimited"], answer: 2 },
    { q: "What is floating-point imprecision?", options: ["Floats are slower than ints", "Finite bits can't represent all real numbers exactly", "Floats can't be negative", "A bug in C's math library"], answer: 1 },

    // Scope & variables
    { q: "If you declare a variable inside a for loop's braces, where can you use it?", options: ["Anywhere in the file", "Anywhere in the function", "Only inside that loop's braces", "Only on the line it's declared"], answer: 2 },
    { q: "What does 'scope' mean in programming?", options: ["How fast a variable is accessed", "The region of code where a variable exists and is accessible", "The data type of a variable", "Whether a variable is global"], answer: 1 },
    { q: "What does the 'const' keyword signal to the compiler?", options: ["The variable is global", "The value must never be modified after initialization", "The variable is private", "It allocates extra memory"], answer: 1 },

    // Control flow
    { q: "Why is 'else if' preferable to multiple independent 'if' statements for mutually exclusive conditions?", options: ["It's required by C syntax", "It short-circuits — once a condition is true, the rest are skipped", "It uses less memory", "There is no difference"], answer: 1 },
    { q: "What does a do-while loop guarantee that a while loop does not?", options: ["It runs exactly once", "The body executes at least once before the condition is checked", "It can't be infinite", "It's faster"], answer: 1, explanation: "A do-while loop checks its condition after executing the body, so the body always runs at least once. A while loop checks first, so it may never run if the condition is initially false." },
    { q: "In 'for (int i = 0; i < n; i++)', what are the three parts separated by semicolons?", options: ["Declaration, condition, increment", "Input, process, output", "Start, stop, step", "Initialize, execute, terminate"], answer: 0 },
    { q: "What does 'break' do inside a loop?", options: ["Pauses execution", "Exits the loop immediately", "Skips to the next iteration", "Ends the program"], answer: 1 },
    { q: "What does 'continue' do inside a loop?", options: ["Exits the loop", "Restarts the program", "Skips the rest of the current iteration and goes to the next", "Pauses for user input"], answer: 2 },

    // Functions & abstraction
    { q: "What is the main benefit of extracting repeated logic into a function?", options: ["It makes the code longer", "You write it once, use it many times — reducing duplication", "Functions run faster than inline code", "It's required by the compiler"], answer: 1 },
    { q: "What does 'void' mean as a function's return type?", options: ["It returns zero", "It returns a string", "It returns nothing", "It returns a boolean"], answer: 2 },
    { q: "Why does C require a function prototype above main if the function is defined below?", options: ["It's a style choice", "The compiler reads top-to-bottom and needs to know the function exists", "It makes the code run faster", "It's only needed for recursive functions"], answer: 1 },
    { q: "If function A defines variable 'n' and passes it to function B, can B see A's 'n' directly?", options: ["Yes, all variables are global", "No — B receives its own copy via the parameter", "Only if they share a header file", "Only if n is const"], answer: 1 },

    // Terminal & tooling
    { q: "What does Ctrl+C do in a terminal?", options: ["Copies text", "Interrupts/kills the running process", "Clears the screen", "Closes the terminal"], answer: 1 },
    { q: "What does './' before a program name mean when running it?", options: ["Run with admin privileges", "Look in the current directory for this program", "Compile then run", "Run in debug mode"], answer: 1 },
    { q: "What is the purpose of the 'cd' command?", options: ["Compile and deploy", "Change directory", "Create directory", "Copy data"], answer: 1 },
    { q: "What does 'ls' show you?", options: ["Running processes", "Files and folders in the current directory", "System logs", "Environment variables"], answer: 1 },

    // Debugging mindset
    { q: "When a compiler error says 'undeclared identifier', what does it typically mean?", options: ["The variable name is misspelled or not yet defined in scope", "The program has a runtime error", "You forgot a semicolon", "The file doesn't exist"], answer: 0 },
    { q: "Why is it best practice to fix the FIRST compiler error before addressing later ones?", options: ["Later errors don't matter", "One early error can cascade and cause many false errors below it", "The compiler only shows one error at a time", "It's just convention"], answer: 1 },

    // Design principles
    { q: "What are the three axes CS50 uses to evaluate code quality?", options: ["Speed, memory, style", "Correctness, design, style", "Syntax, logic, performance", "Readability, efficiency, testing"], answer: 1 },
    { q: "Why is hard-coding a value in multiple places (like '3' in two loops) considered bad design?", options: ["It causes compiler errors", "If you need to change it, you must find and update every instance", "It uses more memory", "It's fine — there's no problem"], answer: 1 },
  ],
},

// ─── LECTURE 2 ───────────────────────────────────────────────────────
{
  course: "CS50",
  title: "CS50 Week 2: Arrays, Strings & Debugging",
  questions: [
    // Debugging methodology
    { q: "What is the difference between a syntax error and a logical error?", options: ["Syntax errors are harder to find", "Syntax errors prevent compilation; logical errors compile but produce wrong results", "Logical errors crash the program", "There is no meaningful difference"], answer: 1, explanation: "Syntax errors violate the language grammar and are caught by the compiler. Logical errors are valid code that does the wrong thing \u2014 the compiler can't detect them because the code is technically well-formed." },
    { q: "What is the most effective first use of printf when debugging?", options: ["Print 'hello world' to confirm the program runs", "Print the values of variables at key points to see what the program actually has vs. what you expect", "Print the entire source code", "Print error codes"], answer: 1 },
    { q: "What does a breakpoint do in a debugger?", options: ["Permanently stops the program", "Pauses execution at that line so you can inspect variables and step through code", "Marks a line for deletion", "Creates a backup of the program state"], answer: 1 },
    { q: "What is the difference between 'step over' and 'step into' in a debugger?", options: ["Step over skips the line; step into executes it", "Step over executes a function call without entering it; step into enters the function line by line", "They are identical", "Step into only works with main()"], answer: 1 },
    { q: "Why is 'rubber duck debugging' effective?", options: ["Ducks have good pattern recognition", "Explaining the problem aloud forces you to articulate your assumptions, often revealing the flaw", "It's a myth — it doesn't actually work", "The duck asks clarifying questions"], answer: 1 },
    { q: "You add a printf to debug a loop and find i goes 0, 1, 2, 3 when you expected 0, 1, 2. What is the likely bug?", options: ["i starts at the wrong value", "The loop condition allows one extra iteration (e.g., <= instead of <)", "printf is printing wrong values", "The loop body is executing twice per iteration"], answer: 1 },

    // Compilation pipeline
    { q: "What are the four steps that happen when you 'compile' a C program?", options: ["Parse, optimize, link, run", "Preprocessing, compiling, assembling, linking", "Tokenize, analyze, generate, execute", "Read, evaluate, print, loop"], answer: 1 },
    { q: "What does the preprocessing step do?", options: ["Converts C to assembly", "Replaces #include directives with the actual contents of header files", "Links libraries together", "Optimizes the code"], answer: 1 },
    { q: "What does the linking step do?", options: ["Converts assembly to machine code", "Combines your compiled code with library code (e.g., printf's implementation) into one executable", "Checks for syntax errors", "Formats the output file"], answer: 1 },
    { q: "Why can't you typically take a compiled binary from a Mac and run it on a different CPU architecture?", options: ["The file extension is wrong", "Different CPUs use different instruction sets, so the same C code compiles to different machine code", "Mac binaries are encrypted", "You can — binaries are universal"], answer: 1 },
    { q: "What is 'make' actually doing when you type 'make hello'?", options: ["Interpreting hello.c directly", "Running clang with the correct flags and library links so you don't have to type them manually", "Downloading hello from the internet", "Creating a new file called hello.c"], answer: 1 },
    { q: "What does '-lcs50' do when passed to the compiler?", options: ["Sets the language to CS50", "Tells the linker to include the CS50 library's compiled code", "Enables debugging mode", "Changes the output filename"], answer: 1 },

    // Memory model & data types
    { q: "How many bytes does an int typically use on modern systems?", options: ["1", "2", "4", "8"], answer: 2 },
    { q: "How many bytes does a char use?", options: ["1", "2", "4", "It depends on the character"], answer: 0 },
    { q: "What is a 'garbage value' in a variable?", options: ["A value of zero", "Whatever bit pattern was left in that memory from previous use, before you assign a value", "A random number generated by the OS", "An error code from the compiler"], answer: 1 },
    { q: "Why is it important that array elements are stored contiguously in memory?", options: ["It's a compiler requirement with no practical effect", "It allows indexing by arithmetic — element i is at a predictable offset from the start", "It makes the array easier to print", "Arrays wouldn't compile otherwise"], answer: 1 },
    { q: "If you cast an int division to float (e.g., (float) sum / count), what problem does this solve?", options: ["It prevents overflow", "It avoids integer truncation so you get a decimal result", "It makes the code run faster", "It has no effect"], answer: 1 },

    // Strings as arrays & null termination
    { q: "In C, what is a string at the memory level?", options: ["A special data structure", "An array of characters terminated by a null character (\\0)", "A linked list of chars", "A pointer to a file"], answer: 1, explanation: "C has no built-in string type. A 'string' is just a contiguous array of chars in memory, with a special \\0 byte at the end to mark where it stops. Functions like strlen() rely on this sentinel." },
    { q: "What is the null character (\\0) and why does it exist?", options: ["It represents the letter O", "It's a sentinel byte of 8 zero-bits that marks where a string ends in memory", "It separates words within a string", "It's optional padding"], answer: 1 },
    { q: "A string containing 'hi!' takes how many bytes in memory?", options: ["3", "4", "5", "It depends on the system"], answer: 1 },
    { q: "If you index one position past the end of a string (e.g., s[3] on a 3-char string), what value do you find?", options: ["A random character", "The null character (\\0), which is the value 0", "An error is thrown", "The first character of the next variable"], answer: 1 },
    { q: "Why can't you ask a C array for its own length, unlike in Python or Java?", options: ["C arrays are immutable", "C doesn't store the length — you must track it separately or use a sentinel like \\0", "You can, using the .length property", "It's a bug in C"], answer: 1 },
    { q: "How does strlen() determine the length of a string?", options: ["It reads a length field stored with the array", "It counts characters from the start until it hits the null terminator", "It divides total memory by char size", "It's hard-coded at compile time"], answer: 1 },

    // Arrays
    { q: "What does 'int scores[3];' do?", options: ["Creates 3 separate int variables", "Allocates a contiguous block of memory for 3 ints, accessible via scores[0], scores[1], scores[2]", "Creates an int with value 3", "Declares a function that returns 3 ints"], answer: 1 },
    { q: "When passing an array to a function in C, what else must you typically pass?", options: ["The array's memory address", "The length of the array, since C arrays don't know their own size", "A copy of the array", "The data type of the elements"], answer: 1 },
    { q: "Why do arrays in C use 0-based indexing?", options: ["It's arbitrary convention", "The index represents the offset from the start of the array in memory", "It prevents off-by-one errors", "It saves memory"], answer: 1 },

    // Design & efficiency
    { q: "What is wrong with calling strlen(s) in a for loop condition like 'for (int i = 0; i < strlen(s); i++)'?", options: ["strlen doesn't work in loops", "strlen is recalculated every iteration even though the string length doesn't change — wasteful", "It causes an infinite loop", "It's actually fine — the compiler optimizes it away"], answer: 1 },
    { q: "How do you fix the strlen-in-loop inefficiency?", options: ["Use a while loop instead", "Calculate the length once before the loop and store it in a variable", "Use a shorter string", "Call strlen only on even iterations"], answer: 1 },
    { q: "What is a 'magic number' in code and why is it bad?", options: ["A number that causes crashes", "An unexplained literal value hard-coded in multiple places — fragile and unclear", "A number used in encryption", "Any number greater than 100"], answer: 1 },

    // Command line arguments
    { q: "What does 'int main(int argc, string argv[])' allow that 'int main(void)' does not?", options: ["It makes the program faster", "It lets the program accept words typed after its name at the command line", "It enables debugging", "It allows multiple return values"], answer: 1 },
    { q: "If you run './greet David', what is argv[0] and argv[1]?", options: ["argv[0] is 'David', argv[1] is './greet'", "argv[0] is './greet', argv[1] is 'David'", "argv[0] is 'David', argv[1] is null", "argv[0] is 0, argv[1] is 1"], answer: 1 },
    { q: "What does argc contain?", options: ["The number of characters in the command", "The total count of command-line words, including the program name", "The program's exit code", "The number of functions in the program"], answer: 1 },

    // Exit status
    { q: "What does 'return 0' from main signify?", options: ["The program found zero results", "The program completed successfully", "The program had zero errors but may have warnings", "Nothing — it's optional"], answer: 1 },
    { q: "If main returns 1 (or any non-zero value), what does that signal?", options: ["Success with warnings", "An error occurred", "The program needs to restart", "One result was found"], answer: 1 },

    // Character manipulation & ASCII
    { q: "Why can you subtract 32 from a lowercase ASCII letter to get its uppercase equivalent?", options: ["32 is the number of letters in the alphabet", "In ASCII, every lowercase letter is exactly 32 positions above its uppercase counterpart", "It's a coincidence that only works for English", "You can't — this doesn't work"], answer: 1 },
    { q: "What is the advantage of using library functions like toupper() instead of manual ASCII math?", options: ["toupper() is faster", "It handles edge cases (non-letters pass through unchanged) and is more readable", "There is no advantage", "toupper() works with Unicode; subtraction doesn't"], answer: 1 },
    { q: "Why do single quotes ('a') and double quotes (\"a\") mean different things in C?", options: ["They're interchangeable", "Single quotes denote a single char (1 byte); double quotes denote a string (array + null terminator)", "Single quotes are for numbers", "Double quotes are deprecated"], answer: 1 },

    // Reverse engineering & security intuition
    { q: "Why is it impractical to perfectly reverse-engineer source code from a compiled binary?", options: ["Binaries are encrypted", "Different source constructs (for vs while) compile to identical machine code — the original style is lost", "It's illegal to decompile code", "Binaries delete the source on compilation"], answer: 1 },
  ],
},

// ─── PASTE NEW LECTURES BELOW THIS LINE ─────────────────────────────
// Format: { title: "Lecture Name", questions: [ { q, options, answer }, ... ] },

// ─── LECTURE 3 ───────────────────────────────────────────────────────
{
  course: "CS50",
  title: "CS50 Week 3: Algorithms, Sorting, and Recursion",
  questions: [
    // Big O and Asymptotic Notation
    { q: "Why does Big O notation ignore lower-order terms like 'divide by 2' or constant factors?", options: ["They are too small to calculate accurately", "As N grows very large, only the dominant term meaningfully affects the total", "Computers handle constants automatically", "Lower-order terms only matter for negative inputs"], answer: 1, explanation: "Big O describes growth rate as input approaches infinity. At massive N, the difference between N\u00b2 and N\u00b2/2 is insignificant compared to the difference between N\u00b2 and N log N." },
    { q: "An algorithm runs in O(N/2). How would a computer scientist more precisely classify it?", options: ["O(N/2) — the constant matters", "O(1) — it's fast enough to be constant", "O(N) — constants are dropped in Big O notation", "O(log N) — division implies logarithmic behavior"], answer: 2 },
    { q: "What does Omega notation describe that Big O does not?", options: ["Worst-case running time", "Average-case running time", "Best-case (lower bound) running time", "Exact step count"], answer: 2 },
    { q: "When can you use Theta notation to describe an algorithm's running time?", options: ["When the algorithm uses recursion", "When Big O and Omega are the same value", "When the input is already sorted", "When the algorithm runs in constant time"], answer: 1 },
    { q: "Which of the following correctly orders these running times from fastest to slowest as N grows large?", options: ["O(N²), O(N log N), O(N), O(log N), O(1)", "O(1), O(log N), O(N), O(N log N), O(N²)", "O(log N), O(1), O(N), O(N²), O(N log N)", "O(N), O(1), O(log N), O(N log N), O(N²)"], answer: 1 },

    // Linear and Binary Search
    { q: "In the worst case, what is the Big O running time of linear search on an array of N elements?", options: ["O(1)", "O(log N)", "O(N)", "O(N²)"], answer: 2 },
    { q: "What is the Omega (best case) running time of both linear search and binary search?", options: ["Ω(N)", "Ω(log N)", "Ω(N²)", "Ω(1)"], answer: 3 },
    { q: "Why is binary search incorrect to use on an unsorted array?", options: ["It always checks the wrong half", "It requires too much memory", "Decisions to go left or right are based on ordering assumptions that don't hold", "It can only work on arrays of even length"], answer: 2 },
    { q: "In the pseudocode 'for i from 0 to N-1', why N-1 instead of N?", options: ["N-1 avoids checking the middle element twice", "Arrays are 0-indexed, so N elements occupy indices 0 through N-1", "The last element is always already sorted", "It's a convention with no functional reason"], answer: 1 },
    { q: "In binary search on 7 elements, how do you find the middle index?", options: ["7 / 2 = 3.5, round up to 4", "7 / 2 = 3.5, round down to 3", "Always use index 0 first", "Pick randomly between 0 and 6"], answer: 1 },
    { q: "In a linear search implementation, why is this pseudocode wrong: 'for each door: if 50 is here return true; else return false'?", options: ["'return false' should be 'break'", "The else causes immediate false return without checking remaining doors", "You should search from right to left instead", "True should be returned last, not first"], answer: 1 },
    { q: "If you only need to search a dataset once and it is unsorted, what is generally the best approach?", options: ["Sort it first, then use binary search", "Use linear search directly", "Use merge sort then binary search", "Use selection sort then linear search"], answer: 1 },

    // Structs and Data Design
    { q: "What is the main design problem with storing parallel arrays (e.g., names[] and numbers[]) for a phone book?", options: ["Arrays can only store one data type", "The arrays cannot be the same length", "Correctness depends on manually keeping both arrays in sync", "C doesn't support two arrays in the same function"], answer: 2 },
    { q: "What does 'typedef struct' allow you to do in C?", options: ["Import external libraries", "Define a custom data type that groups multiple fields together", "Declare a function with multiple return values", "Resize an array at runtime"], answer: 1 },
    { q: "How do you access the 'name' field of the first element in an array called 'people'?", options: ["people[0]->name", "people.name[0]", "people[0].name", "people->name[0]"], answer: 2 },
    { q: "Why are phone numbers stored as strings rather than integers in C?", options: ["Integers can't be stored in arrays", "Phone numbers may contain non-digit characters like '+' and '-', and leading zeros have no integer value", "String comparison is faster than integer comparison", "C has no integer type large enough for phone numbers"], answer: 1 },

    // String Comparison
    { q: "Why can't you use '==' to compare two strings in C?", options: ["Strings are not declared with 'int', so == doesn't apply", "Strings must be compared character by character; == doesn't do that automatically", "== only works on variables declared in the same scope", "C reserves == for boolean expressions only"], answer: 1 },
    { q: "strcmp() returns 0 when strings are equal and a non-zero value otherwise. Why is a non-zero return value also useful beyond equality checking?", options: ["It tells you the length difference between strings", "It indicates which string comes first alphabetically, enabling sorting", "It reveals how many characters differ between the strings", "It signals a memory allocation error"], answer: 1 },
    { q: "If you forget to '#include <string.h>' before using strcmp(), what happens?", options: ["The program runs but produces garbage output", "The compiler reports an 'undeclared function' error", "The program compiles but crashes at runtime", "strcmp defaults to == behavior"], answer: 1 },

    // Selection Sort
    { q: "What is the core operation that selection sort performs on each pass through the array?", options: ["Swap adjacent elements that are out of order", "Find the smallest remaining element and swap it into position", "Merge two sorted halves", "Divide the array into equal parts"], answer: 1 },
    { q: "What is the Big O running time of selection sort?", options: ["O(N)", "O(N log N)", "O(N²)", "O(log N)"], answer: 2 },
    { q: "Why is selection sort's Omega (best case) also O(N²), even if the array is already sorted?", options: ["It has to re-sort after each swap", "The pseudocode makes no check for whether the array is already sorted", "It needs N² memory to track positions", "Swapping identical elements still counts as steps"], answer: 1 },
    { q: "When selection sort swaps the minimum element into position, why can't it simply insert it and shift others over?", options: ["C doesn't support insertion operations", "Arrays are contiguous in memory with a fixed size; you can't create new space without overwriting something", "Insertion would change the array's length", "The compiler would optimize away the insert"], answer: 1 },

    // Bubble Sort
    { q: "In bubble sort, why does the inner loop run from index 0 to N-2, not N-1?", options: ["The last element is already sorted from a previous pass", "Comparing index i with i+1 would go out of bounds at i = N-1", "The first element is always the largest", "N-1 iterations are needed for the outer loop"], answer: 1 },
    { q: "What optimization can reduce bubble sort's best-case running time from O(N²) to Ω(N)?", options: ["Start from the middle instead of the left", "Track whether any swaps were made; if none, the list is sorted — stop early", "Sort descending first, then ascending", "Skip elements already in their final position"], answer: 1 },
    { q: "After the first full pass of bubble sort, what is guaranteed about the array?", options: ["The smallest element is in the correct position", "The largest element has bubbled to the last position", "All adjacent pairs are now sorted", "The array is half sorted"], answer: 1 },
    { q: "Both selection sort and bubble sort have O(N²) worst-case running time. What makes bubble sort potentially better in practice?", options: ["Bubble sort uses less memory", "Bubble sort can terminate early if no swaps occur, achieving Ω(N) best case", "Bubble sort makes fewer total comparisons", "Bubble sort is easier to parallelize"], answer: 1 },

    // Recursion
    { q: "What is a base case in a recursive function?", options: ["The first call to the function", "A condition that stops the recursion and returns immediately without a recursive call", "A parameter with a default value", "A call to a different function within the recursive one"], answer: 1, explanation: "Without a base case, recursion would continue infinitely (until stack overflow). The base case is the simplest version of the problem that can be answered directly without further recursion." },
    { q: "Why doesn't a well-written recursive function cause an infinite loop?", options: ["Recursion is limited by the compiler to 100 calls", "Each recursive call receives a strictly smaller version of the problem, eventually hitting the base case", "The OS terminates functions that call themselves", "Return statements exit the entire program"], answer: 1 },
    { q: "What error occurs when recursion goes too deep (no base case or base case never reached)?", options: ["Segmentation fault from stack overflow", "Infinite loop displayed in the terminal", "Compiler error at build time", "Variable overflow in the return register"], answer: 0 },
    { q: "In the recursive draw() function for a pyramid of height N, what does the recursive call draw(N-1) accomplish?", options: ["It prints the bottom row first", "It draws the entire pyramid minus the last row, which the current call then adds", "It calculates the total number of hashes needed", "It resets i to 0 for the outer loop"], answer: 1 },
    { q: "A recursive function that calls itself without making the problem smaller will:", options: ["Return the correct answer more slowly", "Run forever or crash due to stack overflow", "Automatically be optimized by the compiler into a loop", "Produce a compile-time error in all cases"], answer: 1 },

    // Merge Sort
    { q: "What is the Big O running time of merge sort?", options: ["O(N²)", "O(N)", "O(N log N)", "O(log N)"], answer: 2 },
    { q: "Why does merge sort require more memory than selection or bubble sort?", options: ["It stores the entire array twice for comparison", "Merging two sorted halves requires a second temporary array to hold the result", "Recursive calls each allocate a full copy of the input", "It needs to store every comparison result"], answer: 1 },
    { q: "During the merge step, how many total comparisons are needed to merge two sorted halves of total size N?", options: ["N²", "N log N", "N", "log N"], answer: 2 },
    { q: "Why does merge sort produce O(N log N) rather than O(N²)?", options: ["It avoids comparing already-sorted elements from previous passes", "It sorts both halves in parallel", "Each element is touched only once per level, and there are log N levels", "It skips elements that are already in the correct position"], answer: 2 },
    { q: "Merge sort is described as Θ(N log N). What does this tell you that just saying O(N log N) does not?", options: ["The algorithm uses recursion", "Both the best and worst case are N log N — it can't do better or worse", "The algorithm is faster than O(N)", "The base case runs in constant time"], answer: 1 },
  ],

},
{
  course: "CS50",
  title: "CS50 Week 4: Memory, Pointers & File I/O",
  questions: [
    // Hexadecimal & memory addresses
    { q: "Why do programmers use hexadecimal notation for memory addresses instead of decimal?", options: ["It uses fewer characters than decimal", "One hex digit represents exactly 4 bits, making byte-level values compact and readable", "Computers store addresses in base-16 internally", "It's required by the C standard"], answer: 1, explanation: "Each hex digit maps to exactly 4 binary bits (a nibble), so two hex digits represent one byte. This makes it easy to read memory values at the byte level \u2014 0xFF = 11111111 in binary = 255 in decimal." },
    { q: "What does the '0x' prefix before a number signify?", options: ["The value is zero", "The number that follows is in hexadecimal notation", "The variable is a pointer", "The value is negative"], answer: 1 },
    { q: "What is 0xFF in decimal?", options: ["15", "16", "255", "256"], answer: 2 },
    { q: "Why can two hex digits represent a full byte (8 bits)?", options: ["Each hex digit represents 8 bits", "Two hex digits can represent values 0–255, which is the same range as 8 bits", "Hex digits are larger than binary digits", "It's a convention with no technical reason"], answer: 1 },

    // The & and * operators
    { q: "What does the '&' (ampersand) operator do when applied to a variable?", options: ["Performs a bitwise AND operation", "Returns the memory address of that variable", "Dereferences the variable", "Declares the variable as a pointer"], answer: 1 },
    { q: "What does the '*' operator mean when used in a variable declaration like 'int *p'?", options: ["Multiply the value by something", "p stores the address of an integer, not an integer itself", "p is a constant integer", "p is a global variable"], answer: 1 },
    { q: "What does the '*' operator mean when used as a prefix on an existing pointer, like '*p'?", options: ["Declare a new pointer", "Multiply p by itself", "Go to the memory address stored in p and access the value there", "Get the address of p"], answer: 2 },
    { q: "If 'int *p = &n', what does '*p' give you?", options: ["The address of p", "The address of n", "The value stored at n's address", "The size of n in bytes"], answer: 2 },

    // Pointers — mental model
    { q: "Why is a pointer on a modern 64-bit system 8 bytes (64 bits) rather than 4?", options: ["64-bit pointers are faster to read", "Modern computers have more than 4GB of RAM, so addresses need more than 32 bits to reach all of it", "4-byte pointers are deprecated in C", "The C standard requires 8-byte pointers"], answer: 1 },
    { q: "What is a pointer, conceptually?", options: ["A copy of a variable's value", "A variable that stores a memory address", "A special integer type with extra range", "A constant that cannot be changed"], answer: 1 },
    { q: "In memory diagrams, why do we draw pointers as arrows rather than showing the raw hex address?", options: ["Arrows are required by C syntax", "The actual address value is usually irrelevant — what matters is which thing it points to", "Hex addresses can't be drawn", "It's a CS50-specific convention"], answer: 1 },

    // Strings as char* (the white lie)
    { q: "What is a C string at the memory level?", options: ["A special built-in type with a stored length", "An array of characters ending with a null terminator, referenced by the address of its first character", "A linked list of characters", "A sequence of integers"], answer: 1 },
    { q: "What has the CS50 'string' type always actually been under the hood?", options: ["int[]", "char[]", "char *", "void *"], answer: 2 },
    { q: "Why doesn't a string variable in C need an ampersand when passed to printf with %s?", options: ["printf doesn't use addresses", "The string variable is already a pointer (address of the first character), so passing it directly is correct", "Strings are passed by value in C", "The compiler adds & automatically"], answer: 1 },
    { q: "If 's' is a char* pointing to \"hi!\", what value does the expression 's + 1' represent?", options: ["The length of the string", "The address of the second character 'i'", "The integer value of 'h' plus 1", "A compile error"], answer: 1 },
    { q: "What is 'pointer arithmetic' and why does adding 1 to a char* move exactly one byte?", options: ["It's undefined behavior", "The compiler scales the offset by the size of the pointed-to type; a char is 1 byte, so +1 moves 1 byte", "It rounds to the nearest word boundary", "Pointers can only be incremented by powers of 2"], answer: 1 },
    { q: "What does array bracket notation like 's[2]' actually translate to in memory terms?", options: ["A hash lookup", "Go to address s + 2 and read the value there — syntactic sugar for *(s + 2)", "A bounds-checked access", "A copy of the element"], answer: 1 },

    // malloc, free & memory layout
    { q: "What does malloc() do?", options: ["Declares a local variable", "Asks the OS for a chunk of heap memory and returns its address, or NULL on failure", "Copies a value into memory", "Frees previously allocated memory"], answer: 1 },
    { q: "What is a memory leak?", options: ["A variable going out of scope", "Allocating memory with malloc and never calling free(), so the program holds memory it no longer uses", "Reading from an uninitialized pointer", "A stack overflow caused by recursion"], answer: 1 },
    { q: "What is the rule of thumb for when you must call free()?", options: ["Every time a function returns", "Only for global variables", "If you malloc'd it, you must free it", "Only if the program runs longer than a few seconds"], answer: 2 },
    { q: "Where in memory does malloc allocate from, and where do local variables live?", options: ["Both live on the stack", "malloc uses the heap; local variables and function frames use the stack", "Both live on the heap", "malloc uses the data segment; locals use registers"], answer: 1 },
    { q: "What happens to the stack frame of a function after it returns?", options: ["It is immediately zeroed out", "It is freed from the heap", "The memory is conceptually reclaimed and may be reused, leaving garbage values", "It persists until the program exits"], answer: 2 },
    { q: "Why can heap overflow and stack overflow collide in a long-running program?", options: ["They share the same allocator", "The heap grows in one direction and the stack in the other; with enough allocations they can meet", "The OS prevents this automatically", "Only the stack can overflow, not the heap"], answer: 1 },

    // NULL and error checking
    { q: "What does NULL represent in C memory terms?", options: ["An uninitialized integer", "Memory address 0x0, reserved so it can serve as a sentinel 'nothing here' value", "The null character \\0", "A pointer to free memory"], answer: 1 },
    { q: "Why should you check if malloc's return value equals NULL before using it?", options: ["malloc always returns NULL on success", "If the system is out of memory, malloc returns NULL, and dereferencing it would access invalid memory", "NULL means the memory is already initialized", "It's only necessary on 32-bit systems"], answer: 1 },
    { q: "What is the difference between the null terminator '\\0' and the pointer value NULL?", options: ["They are identical", "'\\0' is a single zero byte marking the end of a string; NULL is address 0x0 used as a pointer sentinel", "NULL is the null terminator in pointer context", "'\\0' is only used in hexadecimal"], answer: 1 },

    // The copy bug & passing by value vs. reference
    { q: "If you copy a char* string variable with 't = s', what have you actually copied?", options: ["All the characters of the string into new memory", "The address stored in s — both s and t now point to the same characters", "The length of the string", "A null-terminated duplicate"], answer: 1 },
    { q: "Why did the buggy swap function (taking int a, int b) fail to swap the caller's variables?", options: ["C doesn't support swapping", "C passes arguments by value — a and b are copies, so changes to them don't affect the original variables", "The temp variable wasn't large enough", "Integers can't be swapped without pointers"], answer: 1 },
    { q: "What change makes swap() correctly swap the caller's values?", options: ["Return both values from the function", "Change the parameters to int *a, int *b and pass &x, &y at the call site", "Use global variables", "Declare a and b as static"], answer: 1 },
    { q: "After fixing swap to use pointers, the line 'int temp = *a' does what?", options: ["Declares a as a pointer to temp", "Dereferences a to get the value at that address and copies it into temp", "Sets a equal to the address of temp", "Swaps a and b immediately"], answer: 1 },

    // Valgrind & debugging memory
    { q: "What class of bugs does Valgrind help find that a compiler typically won't catch?", options: ["Syntax errors", "Memory errors: invalid reads/writes, uninitialized values, and memory leaks", "Logic errors in algorithms", "Missing semicolons"], answer: 1 },
    { q: "Valgrind reports 'definitely lost: 12 bytes in 1 block' — what caused this?", options: ["A variable went out of scope", "malloc was called but free was never called for that allocation", "An array was indexed out of bounds", "A null pointer was dereferenced"], answer: 1 },
    { q: "What is a garbage value?", options: ["A value explicitly set to zero", "Whatever bit pattern happens to be in a memory location that you haven't initialized yourself", "A value returned by malloc on error", "A negative integer"], answer: 1 },

    // File I/O
    { q: "What does fopen() return?", options: ["The number of bytes in the file", "A FILE* pointer (address of a structure representing the open file), or NULL on error", "The file's contents as a string", "A boolean indicating success"], answer: 1 },
    { q: "What is the difference between opening a file with 'w' vs 'a' mode in fopen?", options: ["'w' reads, 'a' writes", "'w' overwrites from the beginning; 'a' appends without destroying existing contents", "'a' is faster than 'w'", "They are interchangeable"], answer: 1 },
    { q: "Why does fprintf take a FILE* as its first argument when printf does not?", options: ["fprintf is older and uses a different API", "fprintf lets you direct output to a specific file; printf always goes to stdout", "fprintf requires a format string; printf doesn't", "There is no functional difference"], answer: 1 },
    { q: "In the byte-copy loop using fread/fwrite, why is the loop condition 'while fread(...) != 0' rather than checking a byte count?", options: ["fread always returns 0", "fread returns the number of items successfully read; it returns 0 at end-of-file, signaling the loop to stop", "fwrite returns 0 on success", "Byte counts are unreliable across platforms"], answer: 1 },

    // Design & safety
    { q: "Why is using scanf with a char* variable dangerous for reading strings of unknown length?", options: ["scanf doesn't support strings", "You haven't allocated memory for the string, so scanf writes to a garbage address and can corrupt or crash the program", "scanf always truncates input", "char* variables can't hold more than one character"], answer: 1 },
    { q: "What is a buffer overflow?", options: ["Using too much stack memory with recursion", "Writing more data into a fixed-size chunk of memory than it was allocated to hold", "Opening a file that doesn't exist", "Calling malloc more than once"], answer: 1 },
  ],
},
// ─── LECTURE 5 ───────────────────────────────────────────────────────
{
  course: "CS50",
  title: "CS50 Week 5: Data Structures",
  questions: [
    // Abstract data types — stacks & queues
    { q: "What does FIFO mean, and which data structure has this property?", options: ["First In, First Out — a stack", "First In, First Out — a queue", "Last In, First Out — a queue", "Last In, First Out — a stack"], answer: 1, explanation: "A queue processes items in the order they arrive (first in, first out), like a line at a store. A stack is the opposite (LIFO) \u2014 like a stack of trays where you take from the top." },
    { q: "What does LIFO mean, and which data structure has this property?", options: ["Last In, First Out — a queue", "First In, First Out — a stack", "Last In, First Out — a stack", "First In, First Out — a queue"], answer: 2 },
    { q: "What are the two fundamental operations of a queue?", options: ["push and pop", "insert and delete", "enqueue and dequeue", "add and remove"], answer: 2 },
    { q: "What are the two fundamental operations of a stack?", options: ["enqueue and dequeue", "push and pop", "insert and traverse", "malloc and free"], answer: 1 },
    { q: "Why are stacks and queues called 'abstract' data types?", options: ["They can only be implemented in abstract languages like Python", "Their useful properties are defined independently of how they are implemented in memory", "They have no concrete code equivalent", "They exist only in theory and can't be coded"], answer: 1 },
    { q: "What is the core limitation of implementing a queue or stack with a fixed-size array?", options: ["You cannot iterate over it", "You must decide its maximum size at compile time, wasting or running out of memory", "Arrays don't support FIFO ordering", "The enqueue operation becomes O(n)"], answer: 1 },

    // Arrays — memory model & resizing
    { q: "Why can't you simply extend an array by writing to the memory slot right after it?", options: ["C doesn't allow pointer arithmetic past an array", "That adjacent memory may already be in use by another variable", "Arrays are read-only after allocation", "The compiler will catch this and throw an error"], answer: 1 },
    { q: "When you resize an array by allocating a new larger chunk, what must you do with the original data?", options: ["The OS copies it automatically", "You must copy the old values into the new chunk manually or via realloc", "The old data is accessible via the original pointer indefinitely", "You free it and the values carry over"], answer: 1 },
    { q: "Why is copying a large array to a new location potentially very slow?", options: ["malloc is an O(n) operation", "You must copy every element one by one, so the work scales linearly with size", "The OS must pause other programs during the copy", "C doesn't have memcpy, so you need a loop"], answer: 1 },
    { q: "What is the danger of doing 'list = malloc(4 * sizeof(int))' when list already points to a previously allocated chunk?", options: ["malloc will fail because memory is already allocated", "You lose the pointer to the original chunk, causing a memory leak", "The old memory is automatically freed", "list will point to both chunks simultaneously"], answer: 1 },
    { q: "What does realloc do that a raw malloc + copy loop does not?", options: ["It allocates memory on the stack instead of the heap", "It tries to extend the existing chunk in place, copying only if it must move the data", "It automatically checks for null so you don't have to", "It frees the old memory before allocating new memory"], answer: 1 },
    { q: "Even when using realloc, why must you use a temporary variable to store its return value instead of directly overwriting your pointer?", options: ["realloc may return the same address, causing confusion", "If realloc fails and returns null, you'd lose the pointer to the original data", "C requires two variables when working with realloc", "The temporary variable is needed to track allocation size"], answer: 1 },
    { q: "After a successful realloc into tmp, and before updating your main pointer, what should you do if realloc fails?", options: ["Call free(tmp) and continue", "Free the original list pointer before returning an error", "Simply return 0 — the OS reclaims everything", "Reassign list to null"], answer: 1 },

    // Linked lists — structure & mental model
    { q: "What two pieces of data does every node in a singly linked list contain?", options: ["A key and a value", "A value and a pointer to the next node", "An index and a value", "A pointer to the previous and next node"], answer: 1 },
    { q: "Why does a linked list not require its nodes to be contiguous in memory?", options: ["Linked lists use virtual memory that handles gaps automatically", "Each node stores the address of the next node, so the computer can follow pointers to find it anywhere", "The OS packs them together behind the scenes", "C arrays are actually non-contiguous too"], answer: 1 },
    { q: "What value is stored in the 'next' pointer of the last node in a linked list?", options: ["The address of the first node", "-1", "NULL", "0xFF"], answer: 2 },
    { q: "To keep track of an entire linked list, what single variable do you need?", options: ["A pointer to every node", "A pointer to the first node", "A pointer to the middle node", "An integer storing the list's length"], answer: 1 },
    { q: "Why does a struct node need the tag 'struct node' inside its own definition (e.g., 'struct node *next') instead of just 'node *next'?", options: ["It's a style convention with no technical reason", "The compiler reads top-to-bottom, so 'node' isn't defined yet when it sees the pointer field; the struct tag is already known", "You need two different names to avoid naming collisions", "It tells the linker this is a recursive type"], answer: 1 },
    { q: "What does the arrow operator '->' do in C?", options: ["Dereferences a pointer and accesses a struct field in one step, equivalent to (*ptr).field", "Returns the address of a struct field", "Copies a struct to a new memory location", "Checks if a pointer is null before dereferencing"], answer: 0 },

    // Linked lists — insertion & pointer manipulation
    { q: "When prepending a new node to a linked list, what is the correct order of pointer updates?", options: ["Set list = newNode, then set newNode->next = list", "Set newNode->next = list, then set list = newNode", "Set newNode->next = null, then set list = newNode", "Set list = newNode — that's the only step needed"], answer: 1 },
    { q: "What goes wrong if you set 'list = newNode' before setting 'newNode->next = list'?", options: ["newNode->next will contain garbage", "You overwrite list before saving where it pointed, orphaning all existing nodes", "The program will segfault immediately", "The old list is freed automatically"], answer: 1 },
    { q: "Prepending to a linked list runs in O(1). Why?", options: ["You only manipulate a constant number of pointers at the front, regardless of list length", "C optimizes linked list operations at compile time", "The list is sorted, so the front is always found immediately", "Malloc is an O(1) operation"], answer: 0 },
    { q: "Why is searching a linked list O(n) even if it is sorted?", options: ["Sorting a linked list takes O(n) every time", "You can't do pointer arithmetic to jump to the middle; you must follow pointers from the start", "C doesn't allow comparison operators on struct fields", "The null terminator prevents early exit"], answer: 1 },
    { q: "When freeing a linked list, why can't you just call free(list) once?", options: ["free() only works on stack memory", "free() has no knowledge of your data structure — you must free each individually malloc'd node yourself", "Calling free on a pointer to a struct will only free the first field", "You need to call free in reverse order"], answer: 1 },
    { q: "When traversing a linked list to free it, why do you need a temporary pointer?", options: ["To satisfy the compiler's type system", "Once you free a node, you can no longer read its 'next' field to find the following node", "free() sets the pointer to null, so you'd lose your iteration variable", "C requires two pointers for any loop involving structs"], answer: 1 },

    // Big-O analysis of data structures
    { q: "What is the big-O time complexity of binary search on a sorted array?", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], answer: 1 },
    { q: "What is the main performance advantage arrays have over linked lists?", options: ["Arrays can be resized in O(1)", "Arrays support binary search (O(log n)) because you can jump to any index via arithmetic", "Arrays use less memory per element", "Arrays are faster to allocate"], answer: 1 },
    { q: "What is the big-O time for searching a singly linked list, even a sorted one?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], answer: 2 },
    { q: "What is the space trade-off of a linked list compared to an array storing the same integers?", options: ["Linked lists use less memory because no contiguous block is needed", "Linked lists use more memory because each node stores both data and a pointer", "They use the same amount of memory", "Arrays use more memory due to pre-allocated empty slots"], answer: 1 },

    // Binary search trees
    { q: "What is the key ordering property of a binary search tree?", options: ["Every node is greater than all nodes in the tree", "Every node's value is greater than its left child and less than its right child", "The left subtree is always larger than the right", "Nodes are stored in insertion order"], answer: 1 },
    { q: "Why can a binary search tree support O(log n) search?", options: ["Each node stores two values instead of one", "At each node you can eliminate half the remaining tree based on a comparison, just like binary search on an array", "The tree is sorted left to right like an array", "Recursive calls are automatically memoized by C"], answer: 1 },
    { q: "What goes wrong if you insert values 1, 2, 3, 4, 5 in order into a naive binary search tree?", options: ["The tree violates the BST property and becomes unsearchable", "The tree devolves into a linked list shape, losing the O(log n) property", "Duplicate values cause a segfault", "The tree automatically rebalances to stay optimal"], answer: 1 },
    { q: "How does a BST node struct differ from a linked list node struct?", options: ["It stores a string key instead of an integer", "It has two child pointers (left and right) instead of one (next)", "It includes a parent pointer", "It stores the subtree size for O(1) length queries"], answer: 1 },
    { q: "Why is the recursive approach to BST search considered elegant?", options: ["Recursion is always faster than iteration in C", "The BST property is itself recursive — it applies identically to every subtree, matching the recursive code structure", "C optimizes tail recursion so there's no stack overhead", "It avoids the need for pointer arithmetic"], answer: 1 },

    // Hash tables
    { q: "What does a hash function do?", options: ["Encrypts a value so it can be stored securely", "Maps an input from a potentially infinite domain to a value in a finite range (a bucket index)", "Sorts values into alphabetical order", "Converts a string to an integer for comparison"], answer: 1 },
    { q: "What is a 'collision' in a hash table?", options: ["Two pointers pointing to the same node", "Two different keys hashing to the same bucket index", "An array index going out of bounds", "A null pointer dereference inside a struct"], answer: 1 },
    { q: "How does chaining resolve collisions in a hash table?", options: ["It uses a second hash function to find a new empty bucket", "It stores a linked list at each bucket so multiple values can share the same index", "It doubles the array size whenever a collision occurs", "It overwrites the older value with the newer one"], answer: 1 },
    { q: "A hash table with n elements and k buckets, assuming uniform distribution, has chains of length roughly n/k. What is its big-O search time?", options: ["O(1) because k is a constant", "O(log n) because of the sorted chains", "O(n) because the constant factor k doesn't change asymptotic behavior", "O(k) because you only search one chain"], answer: 2 },
    { q: "What is the fundamental trade-off when designing a hash function with more buckets?", options: ["More buckets means slower insertion", "More buckets reduces collisions but wastes more memory on unused slots", "More buckets causes the hash function itself to run in O(n)", "More buckets forces you to use a linked list instead of an array"], answer: 1 },

    // Tries
    { q: "What is a trie's key structural insight that gives it O(1) search time?", options: ["It uses a sorted array for fast binary search", "The path through the trie encodes the key itself, so lookup time depends only on key length, not the number of stored keys", "Each node stores the full key so comparison is a single operation", "It rebalances itself after every insertion"], answer: 1 },
    { q: "In a trie indexed by English letters, what does each node contain?", options: ["A single character and a pointer to the next node", "An array of 26 child pointers (one per letter) plus a marker indicating whether a word ends here", "The full string up to that point", "A hash of the remaining suffix"], answer: 1 },
    { q: "What is the main cost of using a trie instead of a hash table?", options: ["Tries have O(n) insertion time", "Tries use significantly more memory because most of the 26 child pointers in each node are null and unused", "Tries can only store strings, not arbitrary data", "Tries don't support deletion"], answer: 1 },
  ],
},
// ─── LECTURE 3 ───────────────────────────────────────────────────────
{
  course: "CS50",
  title: "CS50 Week 6: Python",
  questions: [
    // Interpreted vs compiled
    { q: "What is the key reason Python programs can run slower than equivalent C programs?", options: ["Python uses more memory by default", "Python interprets code line by line instead of running pre-compiled machine code", "Python doesn't support pointers", "Python programs are larger files"], answer: 1, explanation: "C compiles to machine code once and runs natively on the CPU. Python is interpreted at runtime \u2014 each line must be translated on the fly, adding overhead. The trade-off is faster development time." },
    { q: "How do you run a Python program called hello.py?", options: ["make hello.py", "clang hello.py", "python hello.py", "./hello.py"], answer: 2 },
    { q: "What does Python's interpreter secretly do to speed up repeated execution of the same file?", options: ["It caches the output", "It compiles your code to bytecode and runs that instead of re-interpreting", "It converts Python to C first", "It skips unchanged functions"], answer: 1 },
    { q: "Why don't Python programs need a compilation step before running?", options: ["Python code is already machine code", "The Python program itself reads and executes your source file directly", "Python only runs in the browser", "Python files are pre-compiled at install time"], answer: 1 },

    // Syntax changes from C
    { q: "Python's print() adds a newline automatically. What named parameter overrides this?", options: ["newline=False", "end=''", "sep=''", "flush=True"], answer: 1 },
    { q: "What does the 'end' parameter in Python's print() default to?", options: ["An empty string", "A space", "A backslash-n newline", "Nothing — there is no default"], answer: 2 },
    { q: "Why does Python not require you to declare a variable's type (e.g., 'int x')?", options: ["Python has no types", "The interpreter infers the type from the value assigned", "All Python variables are strings by default", "Types are declared separately in a header file"], answer: 1 },
    { q: "What replaces the two-vertical-bar '||' operator in Python conditionals?", options: ["or", "||", "OR", "either"], answer: 0 },
    { q: "In Python, what ends a conditional or loop header instead of an opening curly brace?", options: ["A semicolon", "A colon", "A parenthesis", "Nothing — whitespace is enough"], answer: 1 },
    { q: "Python requires indentation. What happens if you skip it?", options: ["The code runs but prints a warning", "Python infers the indentation from context", "The interpreter raises a syntax error", "Only the first line needs indenting"], answer: 2 },

    // Strings & types
    { q: "What does Python's 'str' type correspond to from the CS50 C library?", options: ["char", "char *", "string (a CS50 typedef)", "Both B and C — they are equivalent"], answer: 3 },
    { q: "When you call input() in Python, what type does it always return?", options: ["int if the user types a number", "float if the user types a decimal", "str, regardless of what the user typed", "It depends on the terminal"], answer: 2 },
    { q: "What happens if you add two variables from input() without converting them — e.g., x + y where x='1' and y='2'?", options: ["You get 3", "You get 12 — the strings are concatenated", "Python raises a TypeError", "You get 1.0 + 2.0"], answer: 1 },
    { q: "What is the correct way to convert a string from input() to an integer?", options: ["Cast it: (int)x", "Call int(x)", "Call x.to_int()", "Assign it: int x = input()"], answer: 1 },
    { q: "Why is converting with int() called 'converting' rather than 'casting' as in C?", options: ["It's just a style preference", "Converting does more work — it parses the string's digits, not just reinterprets the bytes", "Python has no casting at all", "int() is a method, not a function"], answer: 1 },
    { q: "Python does not have a 'char' type. How do you represent a single character?", options: ["Use the char() function", "Use a string of length 1", "Use an int with the ASCII value", "Use a byte literal"], answer: 1 },

    // Object-oriented & string methods
    { q: "What does it mean that a Python string is an 'object'?", options: ["It is stored on the heap", "It has both data (the characters) and built-in methods like .lower() and .upper()", "It cannot be reassigned", "It has a fixed size"], answer: 1 },
    { q: "What is the difference between calling a function like toupper(c) in C versus s.upper() in Python?", options: ["There is no difference — they do the same thing the same way", "Python's dot notation calls a method built into the object; C passes the data as an argument to an external function", "Python's version works on full strings; C's only works on single chars", "Both B and C are true"], answer: 3 },
    { q: "You want to check if a user typed 'yes' regardless of capitalization. What is the most Pythonic approach?", options: ["Check s == 'yes' or s == 'YES' or s == 'Yes'", "Call s.lower() and compare against 'yes'", "Use a loop to check each character", "Use a try/except around the comparison"], answer: 1 },
    { q: "Why does Python's == operator work correctly for comparing strings, unlike C?", options: ["Python strings are null-terminated just like C", "Python's == compares character by character automatically, not raw memory addresses", "Python interns all strings so addresses are always equal", "Python converts strings to ints before comparing"], answer: 1 },

    // Lists & loops
    { q: "What is the Python equivalent of a C array, and what key advantage does it have?", options: ["A tuple — it is faster", "A list — it can grow and shrink dynamically; you don't declare its size in advance", "A dict — it uses keys instead of indices", "A set — it has no duplicates"], answer: 1 },
    { q: "What does 'for i in range(3)' produce for i on each iteration?", options: ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "It depends on the starting value"], answer: 1 },
    { q: "Why does Python use 'range()' instead of a traditional C-style for loop with init/condition/increment?", options: ["Python can't track a counter variable", "range() is more readable and expressive — you say what you want, not how to count it", "range() is faster than a counter loop", "Python's for loops can only iterate over objects, not numbers"], answer: 1 },
    { q: "What does the 'in' keyword do when used with a list — e.g., 'if name in names'?", options: ["It checks that name is a valid variable", "It performs a linear search through the list and returns True if found", "It returns the index of the element", "It only works with strings"], answer: 1 },
    { q: "Python for loops can have an 'else' clause. When does the else block execute?", options: ["Always, after the loop finishes", "Only if the loop ran zero iterations", "Only if the loop completed without hitting a 'break'", "Only if the loop variable is truthy"], answer: 2 },
    { q: "If you want to signal that a loop variable is intentional but unused, what Pythonic convention replaces it?", options: ["Use 'none' as the variable name", "Use an underscore '_' as the variable name", "Omit the variable entirely", "Use 'unused' as the variable name"], answer: 1 },
    { q: "Python has no '++' operator. What is the idiomatic replacement for i++ in Python?", options: ["i += 1", "i =+ 1", "increment(i)", "i.increment()"], answer: 0 },
    { q: "Python has no do-while loop. What is the Pythonic substitute when you need to prompt a user at least once?", options: ["Use a for loop with range(1, infinity)", "Use 'while True:' with a 'break' once valid input is received", "Use a recursive function", "Use a try/except block"], answer: 1 },

    // Exceptions
    { q: "What problem do Python exceptions solve that return-value error checking in C does not?", options: ["They make code run faster", "They let functions signal errors out-of-band without stealing a return value or requiring the caller to check it", "They prevent all runtime errors automatically", "They replace the need for conditional logic"], answer: 1 },
    { q: "What does a 'ValueError' in Python typically indicate?", options: ["A variable was used before being declared", "A function received a value of the right type but an inappropriate value — e.g., int('cat')", "You tried to access memory you don't own", "A module was not found"], answer: 1 },
    { q: "What is the structure of a try/except block in Python?", options: ["try: risky code — catch: handler", "try: risky code — except ExceptionType: handler", "attempt: risky code — handle: ExceptionType", "watch: risky code — except: handler"], answer: 1 },
    { q: "If int('cat') raises a ValueError inside a try block, what happens to the lines after int('cat') in the try block?", options: ["They execute normally", "They are skipped — Python immediately jumps to the except block", "Python retries the line up to 3 times", "The program crashes regardless"], answer: 1 },

    // Dictionaries & data structures
    { q: "What Python built-in type implements a hash table with key-value pairs?", options: ["list", "set", "dict", "tuple"], answer: 2 },
    { q: "How do you look up a value by key in a Python dictionary — e.g., get David's number from a 'people' dict?", options: ["people.get('David')", "people['David']", "people->David", "people.David"], answer: 1 },
    { q: "What does a 'list of dicts' represent conceptually, as compared to a spreadsheet?", options: ["Each dict is a column; each list element is a row value", "Each dict is a row (one record); each key-value pair is a column (one field)", "Each list is a sheet; each dict is a cell", "They are unrelated structures"], answer: 1 },

    // Modules & libraries
    { q: "What is a Python 'module'?", options: ["A compiled binary that Python loads at startup", "A library — a file or package of reusable functions and objects", "A type of class", "A command-line tool for running Python"], answer: 1 },
    { q: "What is the difference between 'import sys' and 'from sys import argv'?", options: ["They are identical", "'import sys' loads the whole library, accessed via sys.argv; 'from sys import argv' brings argv directly into scope", "'from sys import argv' is slower", "'import sys' only works in Python 3"], answer: 1 },
    { q: "How do you install a third-party Python library that isn't included with the language?", options: ["Download and compile it from source", "Use pip install <library-name>", "Add it to your imports and Python fetches it automatically", "Copy the .py file into your project"], answer: 1 },
    { q: "What error type does Python raise when you try to import a library that isn't installed?", options: ["ImportError", "ValueError", "ModuleNotFoundError", "AttributeError"], answer: 2 },

    // Design & Pythonic patterns
    { q: "Why is it Pythonic to call 'main()' explicitly at the bottom of a Python file rather than relying on the interpreter?", options: ["Python requires it for all programs", "Python doesn't auto-call main() — it's just a function like any other, so you must call it yourself", "It makes the program run faster", "It is required when using sys.argv"], answer: 1 },
    { q: "What is the purpose of the 'if __name__ == \"__main__\":' guard before calling main()?", options: ["It makes main() run faster", "It prevents main() from running when the file is imported as a module by another file", "It is required syntax — Python won't run without it", "It replaces the need for a main() function entirely"], answer: 1 },
    { q: "What does the 'with' keyword do when opening a file in Python?", options: ["It opens the file in read-only mode", "It opens the file and automatically closes it when the indented block exits, even if an error occurs", "It locks the file so other programs can't access it", "It is equivalent to 'import'"], answer: 1 },
  ],
},
// ─── LECTURE 7 ───────────────────────────────────────────────────────
{
  course: "CS50",
  title: "CS50 Week 7: SQL",
  questions: [
    // Declarative vs procedural programming
    { q: "What makes SQL a 'declarative' language, unlike Python or C?", options: ["It runs faster than procedural languages", "You declare what result you want, not the step-by-step procedure to get it", "It only supports read operations", "It requires no variables or loops in the database engine"], answer: 1 },
    { q: "When you write 'SELECT language FROM favorites', who is responsible for deciding how to actually loop through the data?", options: ["You, by writing the loop yourself", "The database engine, not you", "The CSV library", "Python's for-loop"], answer: 1 },

    // CSV & flat files
    { q: "Why does CSV use a delimiter character (comma) instead of fixed-width columns?", options: ["Commas are required by the file system", "A separator character allows columns of varying width while still parsing correctly", "It compresses the file smaller", "Fixed-width is not supported by Python"], answer: 1 },
    { q: "What is the main fragility of using numeric indices (row[0], row[1]) to access CSV columns?", options: ["Numeric indices are slower than string keys", "If someone reorders the columns, your code silently reads the wrong data", "Python's CSV reader doesn't support numeric indexing", "It only works on files with exactly 3 columns"], answer: 1 },
    { q: "What advantage does csv.DictReader give you over csv.reader?", options: ["It's faster because it skips the header row", "Each row is a dictionary keyed by column name, so column order doesn't matter", "It automatically converts numbers from strings", "It can handle files with missing commas"], answer: 1 },
    { q: "With csv.DictReader, why don't you need to call next(reader) to skip the header row?", options: ["DictReader ignores the first row by default", "DictReader automatically consumes the header to learn column names", "The header is stored separately in a .header file", "You still need to call next() — it's optional but recommended"], answer: 1 },

    // Python counting patterns & dictionaries
    { q: "Why does 'counts[favorite] += 1' raise a KeyError the first time a new key is encountered?", options: ["The += operator doesn't work on dictionaries", "The key doesn't exist yet, so there's no value to increment", "Python dictionaries are immutable", "favorite is not a valid dictionary key type"], answer: 1 },
    { q: "What is the design problem with using three separate variables (scratch=0, c=0, python=0) to count languages?", options: ["Three variables use too much memory", "Adding a fourth language requires changing the code structure, not just the data", "Variables can't be incremented with +=", "You can't print variables and dictionary values in the same loop"], answer: 1 },
    { q: "What does the Python keyword 'in' test when used like 'if favorite in counts'?", options: ["Whether the value exists in the dictionary's values", "Whether the key exists in the dictionary", "Whether the string is a substring of another string", "Whether the variable is defined in scope"], answer: 1 },

    // Relational databases & schema
    { q: "What is the core difference between a 'flat file database' (CSV) and a relational database?", options: ["CSVs can only store text; databases store binary data", "Relational databases can express relationships across multiple tables; CSVs are a single table", "Databases are always faster than CSVs for small data sets", "CSVs require more disk space"], answer: 1 },
    { q: "In database terminology, what is a 'schema'?", options: ["A backup copy of the database", "The structure of the database — its tables, columns, and types", "The query used to import CSV data", "A temporary table returned by SELECT"], answer: 1 },
    { q: "What is a primary key?", options: ["The first column in any table", "A column whose values uniquely identify every row in that table", "A column that cannot contain NULL", "The column used to join two tables"], answer: 1 },
    { q: "What is a foreign key?", options: ["A primary key from a different database product", "A column whose values reference the primary key of another table", "Any column that stores integers", "A key used for encryption"], answer: 1 },
    { q: "Why does the lecture recommend using integer IDs as primary keys rather than strings like names?", options: ["Integers sort alphabetically", "Integers are a fixed, predictable size in memory, enabling efficient storage and search", "String columns can't be primary keys in SQLite", "Names are not unique enough to ever use"], answer: 1 },

    // CRUD operations
    { q: "In SQL, which command corresponds to 'reading' data?", options: ["GET", "SELECT", "FETCH", "READ"], answer: 1 },
    { q: "What does 'SELECT * FROM favorites' mean?", options: ["Select the first row from favorites", "Select all columns from every row in the favorites table", "Select every table in the database", "Count all rows in favorites"], answer: 1 },
    { q: "What does the WHERE clause do in a SELECT statement?", options: ["Sorts the results", "Filters rows to only those matching a condition", "Groups rows by a column", "Limits the number of columns returned"], answer: 1 },
    { q: "Why is 'DELETE FROM favorites' (without a WHERE clause) so dangerous?", options: ["It causes a syntax error", "It deletes every row in the table with no undo", "It only deletes the first row", "It requires admin privileges"], answer: 1 },
    { q: "What does NULL represent in SQL, and why is it different from an empty string?", options: ["NULL means zero; empty string means missing", "NULL is the conscious absence of data; an empty string is still a value (just blank)", "They are identical — both mean no data", "NULL means the column was deleted"], answer: 1 },
    { q: "What does 'DROP TABLE favorites' do that 'DELETE FROM favorites' does not?", options: ["DROP is faster", "DROP removes the table structure itself, not just its rows", "DROP requires a WHERE clause", "There is no difference — both delete all data"], answer: 1 },

    // SELECT with functions & clauses
    { q: "What does 'SELECT COUNT(*) FROM favorites' return?", options: ["The names of all columns", "A single number: the total number of rows in the table", "The first row of the table", "The number of distinct values in each column"], answer: 1 },
    { q: "What does 'SELECT DISTINCT language FROM favorites' return?", options: ["Every language repeated once per row", "A deduplicated list of languages — each appears only once", "The most common language", "Languages sorted alphabetically"], answer: 1 },
    { q: "What does 'GROUP BY language' do in a SELECT query?", options: ["Sorts the results by language", "Collapses all rows with the same language into one group so aggregate functions work per group", "Filters out rows where language is NULL", "Joins two tables on the language column"], answer: 1 },
    { q: "What does the LIKE operator with a '%' wildcard do?", options: ["Matches an exact string", "Matches a pattern where '%' represents zero or more characters", "Converts the value to lowercase before comparing", "Matches only if the column is NULL"], answer: 1 },
    { q: "Why does the lecture recommend aliasing 'COUNT(*)' as N (using AS)?", options: ["It's required for ORDER BY to work", "It gives the column a readable name and lets you reference it elsewhere in the query", "It makes the query run faster", "SQLite won't display COUNT(*) without an alias"], answer: 2 },

    // JOINs & relationships
    { q: "What type of relationship exists between shows and ratings (one show has exactly one rating)?", options: ["One-to-many", "Many-to-many", "One-to-one", "Zero-to-many"], answer: 2 },
    { q: "What type of relationship exists between shows and genres (one show can belong to multiple genres)?", options: ["One-to-one", "One-to-many", "Many-to-many", "None — genres are stored in the shows table"], answer: 1 },
    { q: "What type of relationship exists between shows and people (a person can be in many shows; a show has many people)?", options: ["One-to-one", "One-to-many", "Many-to-many", "Hierarchical"], answer: 2 },
    { q: "What is the purpose of the 'stars' table that links shows and people?", options: ["To store the star ratings each person gave a show", "To implement a many-to-many relationship using only two foreign key columns", "To duplicate show data for faster lookup", "To store each person's full biography"], answer: 1 },
    { q: "In a JOIN, why might the result contain duplicate data (e.g., a show's title repeated for each genre)?", options: ["JOIN has a bug that copies rows incorrectly", "To produce a valid grid, the database repeats the fixed side to match every row on the many side", "The database stores duplicates to speed up future queries", "Duplicates only appear when DISTINCT is not used"], answer: 1 },
    { q: "What is the key difference between solving a multi-table query with nested SELECT statements vs. JOIN?", options: ["JOINs are always faster", "Nested SELECTs take baby steps — each inner query solves one piece; JOINs combine tables in one breath", "Nested SELECTs are not valid SQL", "JOINs are only for one-to-one relationships"], answer: 1 },

    // Indexes & performance
    { q: "What problem does creating an index solve?", options: ["It prevents duplicate rows", "It allows the database to find rows without scanning every row linearly", "It compresses the table to use less disk space", "It enforces foreign key constraints"], answer: 1 },
    { q: "What data structure does SQLite typically use when building an index?", options: ["A hash table", "A linked list", "A B-tree", "A binary heap"], answer: 2 },
    { q: "Why does creating an index take a moment of up-front time but save time on every subsequent query?", options: ["The index compresses the data, which takes CPU time", "The database must build the tree structure once from existing data; after that, lookups traverse the tree instead of scanning linearly", "SQLite downloads the index from the internet", "The index stores a backup copy of the table"], answer: 1 },
    { q: "What is the trade-off of building an index on a frequently-updated column?", options: ["The column becomes read-only", "The index must be updated on every INSERT/UPDATE/DELETE, adding overhead to writes", "The column can no longer store NULL", "Queries using that column become slower"], answer: 1 },

    // SQL + Python integration
    { q: "In the CS50 SQL library, what does db.execute() return?", options: ["A single string with all results joined", "A list of dictionaries, one per row, keyed by column name", "A tuple of tuples", "A CSV-formatted string"], answer: 1 },
    { q: "Why should you use a '?' placeholder in db.execute() instead of an f-string to insert user input?", options: ["f-strings are slower in SQL contexts", "The library escapes dangerous characters in the placeholder, preventing SQL injection; f-strings do not", "? placeholders support multiple data types; f-strings only support strings", "SQLite doesn't support f-strings at the interpreter level"], answer: 1 },

    // SQL injection
    { q: "What is a SQL injection attack?", options: ["A performance attack that floods the database with SELECT queries", "An attack where malicious input is inserted into a query string, causing the database to execute unintended commands", "A technique to bypass index lookups", "An attack that corrupts the .db binary file directly"], answer: 1, explanation: "When user input is concatenated directly into SQL (e.g., via f-strings), an attacker can craft input that closes the original query and appends malicious commands like DROP TABLE or OR 1=1." },
    { q: "How does a single quote in user input become dangerous when using f-string interpolation in a SQL query?", options: ["It causes a Python SyntaxError", "It can prematurely close a string literal in the SQL, letting the attacker append arbitrary SQL commands", "It causes the database to return NULL", "SQLite rejects all queries containing single quotes"], answer: 1 },
    { q: "What does '--' do in SQL, and why is it useful to an attacker?", options: ["It starts a multi-line comment", "It comments out everything to the right, letting an attacker nullify the rest of a query (e.g., the password check)", "It creates a delimiter between two statements", "It's an arithmetic operator for subtraction"], answer: 1 },

    // Race conditions & transactions
    { q: "What is a race condition in the context of a database?", options: ["A query that runs slower than expected under load", "Two operations reading and writing shared data concurrently, producing an incorrect result because neither knows the other is running", "An index that becomes outdated when rows are updated simultaneously", "A deadlock caused by circular foreign key references"], answer: 1 },
    { q: "In the Instagram likes example, why does the count end up wrong when two servers handle a like at the same time?", options: ["The database rounds floating-point values incorrectly", "Both servers read the same old count, both compute count+1, and both write the same new value — losing one increment", "The JOIN across the users and posts tables returns duplicate rows", "SQL UPDATE is not atomic by default in SQLite"], answer: 1 },
    { q: "What does wrapping database operations in BEGIN TRANSACTION / COMMIT protect against?", options: ["SQL injection attacks", "Race conditions — it ensures the enclosed operations run atomically, not interleaved with other operations", "Accidental DROP TABLE commands", "Foreign key constraint violations"], answer: 1 },
  ],
},
{
  course: "CS50",
  title: "CS50 Week 8: HTML, CSS & JavaScript",
  questions: [
    // Networking fundamentals
    { q: "What is a router's primary job on the internet?", options: ["Store web pages for fast delivery", "Assign IP addresses to devices", "Forward packets toward their destination", "Translate domain names to IP addresses"], answer: 2 },
    { q: "Why can a packet from point A to point B take different paths each time?", options: ["Routers randomly choose paths to balance load", "The internet has many redundant connections, so multiple valid routes exist", "DNS servers redirect packets based on traffic", "TCP chooses the path before sending"], answer: 1 },
    { q: "What problem does IP (Internet Protocol) solve?", options: ["Guarantees that all packets arrive in order", "Gives every device a unique address so data can be routed to it", "Breaks large files into smaller chunks for transmission", "Encrypts data between sender and receiver"], answer: 1 },
    { q: "An IPv4 address is 32 bits. What is the practical consequence of this?", options: ["It limits packet size to 32 bytes", "Only 32 devices can be on one network", "There are roughly 4 billion possible addresses, which is becoming insufficient", "Routing tables can only hold 32 entries"], answer: 2 },
    { q: "What does TCP add on top of IP?", options: ["Unique addresses for every device", "Guaranteed delivery and the ability to multiplex multiple services on one device", "Encryption of the packet contents", "Faster routing through fewer hops"], answer: 1 },
    { q: "Why does a packet include a sequence number?", options: ["So routers know how many hops remain", "So the recipient can reassemble fragments in the correct order and detect missing pieces", "To prevent duplicate packets from being accepted", "To specify which DNS server to use"], answer: 1 },
    { q: "Port numbers solve which specific problem?", options: ["Uniquely identifying devices on the internet", "Allowing one device to run multiple services and route incoming data to the right one", "Measuring round-trip latency between client and server", "Encoding IP addresses in a shorter format"], answer: 1 },
    { q: "By convention, HTTPS uses port 443. What would happen if a server used a non-standard port?", options: ["The connection would automatically fail", "Clients would need to specify the port explicitly in the URL", "The server's certificate would be invalid", "DNS resolution would break"], answer: 1 },

    // DNS & DHCP
    { q: "What is the core function of a DNS server?", options: ["Assign IP addresses to new devices joining a network", "Translate domain names like google.com into IP addresses", "Encrypt traffic between client and server", "Store and serve web pages"], answer: 1 },
    { q: "Why don't devices come pre-loaded with a complete list of IP addresses for every domain?", options: ["That data is too sensitive to store locally", "IP addresses change frequently and the list would be enormous and instantly stale", "Operating systems aren't allowed to store network data", "DNS is faster than local lookup"], answer: 1 },
    { q: "What does DHCP do when you connect a device to a new network?", options: ["Encrypts your connection automatically", "Automatically assigns your device an IP address, DNS server, and router address", "Downloads the latest DNS table to your device", "Opens port 80 for web traffic"], answer: 1 },
    { q: "DNS resolution is described as 'recursive' or hierarchical. What does that mean in practice?", options: ["Your device asks every DNS server in parallel and takes the fastest reply", "If your local DNS server doesn't know an answer, it escalates to higher-level servers and caches the result", "DNS servers only answer queries from within the same network", "Each domain has exactly one authoritative DNS server worldwide"], answer: 1 },

    // HTTP
    { q: "What does an HTTP status code of 200 mean?", options: ["The request was redirected to a new location", "The requested resource was not found", "The request succeeded and the response contains the resource", "The server encountered an internal error"], answer: 2 },
    { q: "When a server returns a 301 status code, what is it telling the browser?", options: ["The request was malformed — try again with correct syntax", "The resource has permanently moved; go to this new URL instead", "Access denied — you need to authenticate first", "The server is temporarily unavailable"], answer: 1 },
    { q: "What does a 404 response mean?", options: ["The server is overloaded and cannot respond now", "The client sent an invalid HTTP version", "The requested resource does not exist on that server", "The connection was encrypted incorrectly"], answer: 2 },
    { q: "What is the GET verb used for in HTTP?", options: ["Sending form data to a server to create or update a resource", "Requesting a resource from a server", "Deleting a resource on the server", "Establishing an encrypted tunnel"], answer: 1 },
    { q: "What is the purpose of the 'Host' header in an HTTP request?", options: ["It specifies the port number to connect to", "It tells the server which domain the client wants, since one server can host multiple sites", "It authenticates the client to the server", "It defines the language the client prefers"], answer: 1 },
    { q: "What does the Content-Type header in an HTTP response tell the browser?", options: ["How large the response body is in bytes", "What format the response body is in, so the browser knows how to render it", "Whether the response is compressed", "The version of HTML being used"], answer: 1 },
    { q: "In a URL like 'https://www.example.com/folder/file.html?q=cats', what is 'q=cats'?", options: ["A file path fragment", "An HTTP header", "An HTTP parameter (key-value pair) passed to the server in the URL", "A CSS selector"], answer: 2 },
    { q: "Why is using HTTP (not HTTPS) considered a security risk?", options: ["HTTP uses port 80, which is blocked by most firewalls", "Traffic is unencrypted, so anyone between client and server can read it", "HTTP doesn't support persistent connections", "HTTP lacks the ability to send POST requests"], answer: 1 },

    // HTML structure & mental model
    { q: "When a browser reads an HTML file, what data structure does it build in memory?", options: ["A hash table mapping tag names to content", "A linked list of elements in document order", "A tree (the DOM) representing the nesting of elements", "A flat array of all text content on the page"], answer: 2, explanation: "The DOM (Document Object Model) is a tree where each HTML element is a node. Nesting in HTML becomes parent-child relationships in the tree. JavaScript can then traverse and modify this tree to change what the user sees." },
    { q: "Why does the browser ignore extra whitespace in HTML source code?", options: ["Whitespace characters are stripped before the file is sent over the network", "The HTML spec says only explicit tags control spacing and layout", "The browser compresses the file before parsing it", "Whitespace is only meaningful inside <pre> tags by convention"], answer: 1 },
    { q: "What is the difference between an HTML tag and an HTML element?", options: ["Tags are CSS selectors; elements are JavaScript objects", "A tag is the opening or closing marker; an element includes both the opening tag, content, and closing tag", "Elements can have attributes; tags cannot", "There is no meaningful difference — the terms are interchangeable"], answer: 1 },
    { q: "Why do some HTML tags (like <img>) not need a closing tag?", options: ["They are only valid inside <head>, not <body>", "They are 'empty elements' — it doesn't make semantic sense for them to wrap content", "The browser automatically adds closing tags for all elements", "Self-closing tags are a deprecated legacy syntax"], answer: 1 },
    { q: "What is the semantic purpose of using <header>, <main>, and <footer> tags instead of just <div> everywhere?", options: ["They apply default CSS styles that <div> does not", "They give search engines and assistive tools meaningful context about the page structure", "They are required by the HTML5 validator", "They automatically center their contents on the page"], answer: 1 },

    // CSS
    { q: "What does the 'cascading' in Cascading Style Sheets mean?", options: ["Styles are applied from most specific to least specific, overriding each other in order", "CSS properties flow down from parent elements to their children", "Stylesheets are loaded one after another from multiple files", "CSS animations cascade over time"], answer: 1 },
    { q: "What is the difference between a CSS class selector (.centered) and an ID selector (#harvard)?", options: ["Classes apply to one element; IDs can be reused across many elements", "IDs apply to one unique element per page; classes can be reused on many elements", "Classes only work on <div> elements; IDs work on any element", "There is no functional difference — just a naming convention"], answer: 1 },
    { q: "Why is it better design to put CSS in a separate .css file rather than inline style attributes on every tag?", options: ["Browsers load external CSS files faster than inline styles", "It separates presentation from content, making both easier to read and maintain", "Inline styles are not valid HTML5", "External files allow the browser to cache styles across pages"], answer: 1 },
    { q: "Why does the CSS property 'background-color' become 'backgroundColor' in JavaScript?", options: ["JavaScript uses camelCase because hyphens are subtraction operators and would be parsed as math", "CSS property names are case-sensitive; JavaScript requires lowercase", "JavaScript only supports single-word property names", "It's a legacy naming convention from early browser implementations"], answer: 0 },
    { q: "What does the CSS pseudo-selector 'a:hover' allow you to do?", options: ["Apply styles to all anchor tags permanently", "Apply styles to an anchor only while the user's cursor is over it", "Hide a link until the user clicks on it", "Change the href attribute when hovering"], answer: 1 },

    // JavaScript & the DOM
    { q: "What is the key capability JavaScript adds to a webpage that HTML and CSS alone cannot provide?", options: ["Loading content from a server", "Applying visual styles to elements", "Dynamically modifying the DOM (the page's content and structure) in response to user actions", "Defining the semantic structure of a document"], answer: 2 },
    { q: "What does document.querySelector('#name') return?", options: ["All elements on the page with the class 'name'", "The element with the unique ID 'name'", "The text content of every element named 'name'", "A CSS rule targeting the ID 'name'"], answer: 1 },
    { q: "Why is it safer to place a <script> tag at the bottom of <body> rather than inside <head>?", options: ["Scripts in <head> are not executed by the browser", "Scripts execute when encountered; placing them last ensures the DOM elements they reference already exist", "Browsers load <body> scripts in parallel, making them faster", "Scripts in <head> block CSS from loading"], answer: 1 },
    { q: "What does addEventListener('keyup', ...) do?", options: ["Fires once when the page loads and a key is already held down", "Registers a callback to run every time a key is released while that element is focused", "Listens for keyboard shortcuts defined in the browser", "Prevents default keyboard behavior on that element"], answer: 1 },
    { q: "Why is it a security mistake to rely solely on HTML form validation (like the 'pattern' attribute) to protect your server?", options: ["The pattern attribute uses a different regex dialect than server-side languages", "The user has a local copy of your HTML and can simply delete or modify those attributes", "Pattern validation only works on desktop browsers, not mobile", "Form validation blocks JavaScript from running on the page"], answer: 1 },
    { q: "In the autocomplete example, why is inner HTML being set via JavaScript rather than written directly in the HTML file?", options: ["HTML files can't contain list items", "The matching words aren't known until the user types — they must be generated dynamically at runtime", "Static HTML doesn't support <ul> and <li> tags", "Writing HTML directly is slower than using JavaScript"], answer: 1 },
    { q: "What is window.setInterval used for in the blink example?", options: ["Delaying code execution by a fixed number of milliseconds once", "Repeatedly calling a function at a set interval (e.g., every 500ms) indefinitely", "Measuring how long a function takes to execute", "Pausing JavaScript execution until a condition is met"], answer: 1 },
    { q: "What does navigator.geolocation.getCurrentPosition() do, and why does it take a callback function?", options: ["It immediately returns GPS coordinates from the device's cache", "It requests the device's location asynchronously — the callback runs later when coordinates are available, since GPS may take time", "It opens a map in a new browser tab at the user's location", "It queries a server-side API and returns coordinates synchronously"], answer: 1 },
  ],
},
{
  course: "CS50",
  title: "CS50 Week 9: Flask & Web Applications",
  questions: [
    // Flask & frameworks
    { q: "What problem does Flask solve that writing your own Python web server would not?", options: ["It provides a database", "It handles low-level HTTP parsing so you focus only on your application's logic", "It runs faster than standard Python", "It compiles Python to machine code"], answer: 1, explanation: "Flask is a web framework that handles HTTP request/response parsing, URL routing, template rendering, and session management so you can focus on your application logic instead of networking code." },
    { q: "What command starts a Flask application?", options: ["python app.py", "http-server", "flask run", "pip start flask"], answer: 2 },
    { q: "By convention, what file must exist in your project directory for Flask to run?", options: ["server.py", "main.py", "app.py", "index.py"], answer: 2 },
    { q: "What is a 'framework' as opposed to a plain library?", options: ["A framework is only usable in Python", "A framework is a library plus a set of conventions for how to use it", "A library requires more code than a framework", "There is no difference — both terms mean the same thing"], answer: 1 },
    { q: "What does 'from flask import Flask' achieve?", options: ["Installs Flask from the internet", "Gives access to the Flask constructor function from the flask package", "Starts the web server immediately", "Creates a virtual environment"], answer: 1 },
    { q: "What does `app = Flask(__name__)` do?", options: ["Starts listening on port 5000", "Turns the current file into a Flask application using its filename", "Imports all Flask routes automatically", "Creates a database connection"], answer: 1 },

    // Routes & decorators
    { q: "What is a Python decorator, as used in Flask routes?", options: ["A comment that documents a function", "A function that modifies the behavior of the function immediately below it", "A type of class inheritance", "A way to import external libraries"], answer: 1 },
    { q: "What does `@app.route('/')` tell Flask?", options: ["To run app.py from the root folder", "To associate the function directly below it with the slash URL path", "To redirect all traffic to the home page", "To make the function run on startup"], answer: 1 },
    { q: "What HTTP status code means the server had an internal error?", options: ["400", "404", "200", "500"], answer: 3 },
    { q: "What HTTP status code means 'method not allowed'?", options: ["400", "404", "405", "500"], answer: 2 },
    { q: "By default, which HTTP method does Flask assume a route supports?", options: ["POST", "GET", "PUT", "DELETE"], answer: 1 },
    { q: "How do you tell a Flask route to accept POST in addition to GET?", options: ["Add post=True to the route decorator", "Pass methods=['GET','POST'] to @app.route", "Use @app.post_route instead", "Flask supports all methods by default"], answer: 1 },

    // Templates & Jinja
    { q: "What function renders an HTML template file in Flask?", options: ["flask.render()", "send_file()", "render_template()", "display_html()"], answer: 2 },
    { q: "Where must template HTML files be placed for Flask to find them automatically?", options: ["The root project folder", "A folder named 'views'", "A folder named 'templates'", "A folder named 'html'"], answer: 2 },
    { q: "In Jinja, what syntax outputs a variable's value into HTML?", options: ["${variable}", "<% variable %>", "{{ variable }}", "@(variable)"], answer: 2 },
    { q: "What are Jinja's percent-sign tags (e.g. {% if %}) used for, unlike the double-curly-brace tags?", options: ["Outputting variable values", "Control logic like conditionals and loops", "Defining CSS classes", "Including CSS files"], answer: 1 },
    { q: "What is a Jinja 'block' such as `{% block body %}{% endblock %}` used for?", options: ["Blocking certain users from seeing content", "Defining a placeholder region that child templates can fill in", "Adding JavaScript to the page", "Creating a CSS class"], answer: 1 },
    { q: "What does `{% extends 'layout.html' %}` do in a child template?", options: ["Copies layout.html into the current file permanently", "Tells Flask this template should inherit the structure from layout.html", "Imports layout.html as a Python module", "Replaces layout.html with the current file"], answer: 1 },
    { q: "What is the main design benefit of using layout.html with template inheritance?", options: ["It makes the site load faster", "Boilerplate HTML is written once and shared — reducing duplication across pages", "It allows Flask to compile templates", "It removes the need for a templates folder"], answer: 1 },
    { q: "Why does extra whitespace in Jinja templates not matter for what the browser renders?", options: ["Browsers cache whitespace separately", "HTML ignores superfluous whitespace and collapses it to a single space", "Flask strips whitespace before sending", "Jinja automatically minifies HTML"], answer: 1 },

    // GET vs POST & request object
    { q: "When using method='get' on a form, where do submitted values appear?", options: ["In a hidden cookie", "In the request body only visible to the server", "In the URL after a question mark as key=value pairs", "In the HTTP headers"], answer: 2 },
    { q: "What is one security reason to prefer POST over GET for sensitive form data?", options: ["POST encrypts the data automatically", "POST prevents values from appearing in the browser's URL bar and history", "POST is faster than GET", "POST data is deleted after one request"], answer: 1 },
    { q: "In Flask, how do you access a GET parameter named 'name'?", options: ["request.params.get('name')", "request.form.get('name')", "request.args.get('name')", "request.query['name']"], answer: 2 },
    { q: "In Flask, how do you access a POST form field named 'name'?", options: ["request.args.get('name')", "request.form.get('name')", "request.body.get('name')", "request.post['name']"], answer: 1 },
    { q: "What does `request.args.get('name', 'world')` do when no name parameter is present?", options: ["Raises a KeyError", "Returns None", "Returns 'world' as the default value", "Returns an empty string"], answer: 2 },
    { q: "Why is it bad practice to validate a sport value only in the HTML form's dropdown?", options: ["HTML dropdowns are slow to render", "A user can modify the HTML client-side to inject arbitrary values; server-side validation is required", "Dropdowns don't support POST", "Flask ignores HTML-side validation"], answer: 1 },

    // Sessions & cookies
    { q: "What is an HTTP cookie in its simplest form?", options: ["A file stored on the server to track analytics", "A key-value pair the server plants in the browser to maintain state across requests", "An encrypted token required for all HTTPS connections", "A type of SQL record tied to a user account"], answer: 1, explanation: "HTTP is stateless \u2014 each request is independent. Cookies solve this by letting the server attach data to the browser (via Set-Cookie header) that the browser sends back on every subsequent request (via Cookie header)." },
    { q: "What HTTP header does the server send to plant a cookie in the browser?", options: ["Cookie:", "Set-Cookie:", "New-Cookie:", "Session-Token:"], answer: 1 },
    { q: "What HTTP header does the browser send to present a previously-received cookie back to the server?", options: ["Set-Cookie:", "Auth-Token:", "Cookie:", "Session:"], answer: 2 },
    { q: "What is a session in web programming?", options: ["A permanent database record for a user", "A persistent dictionary of key-value pairs associated with one user across multiple requests via cookies", "A TCP connection that stays open between requests", "A JavaScript object shared between all users"], answer: 1 },
    { q: "Why is storing a user's raw username and password in a cookie considered bad practice?", options: ["Cookies are deleted after one request", "The credential would be stored in the browser and visible to anyone with physical access", "Cookies can't store strings", "Flask forbids storing passwords in sessions"], answer: 1 },
    { q: "In Flask, what does `session.clear()` accomplish when a user logs out?", options: ["Deletes the database record for that user", "Removes the session data associated with that user, effectively logging them out", "Closes the Flask server", "Deletes all cookies from all users"], answer: 1 },
    { q: "Why does Incognito mode in a browser provide more privacy regarding tracking cookies?", options: ["It blocks all HTTP requests", "It deletes session cookies when the window closes, removing the 'hand stamp'", "It encrypts all outgoing requests", "It prevents servers from setting cookies entirely"], answer: 1 },

    // Static files & redirects
    { q: "Where should static assets like images and CSS files be placed in a Flask project?", options: ["In the templates folder", "In the root project directory", "In a folder named 'static'", "Anywhere — Flask finds them automatically"], answer: 2 },
    { q: "Why would an <img src='cat.jpeg'> fail even if cat.jpeg exists alongside app.py?", options: ["Flask doesn't support image files", "Static files must be in the 'static' folder; the browser can't access files outside it via the server", "The src attribute only accepts URLs", "Images require a special Flask extension"], answer: 1 },
    { q: "What does Flask's `redirect()` function do?", options: ["Reloads the current page", "Sends the user's browser to a different URL", "Renders a template at a new URL", "Forwards the POST data to another route"], answer: 1 },
    { q: "After a POST form submission, why is redirecting to another route better than rendering a template directly?", options: ["Templates are slower to render", "It prevents the browser from resubmitting the form on page reload", "Redirect is required by HTTP spec after POST", "It reduces server memory usage"], answer: 1 },

    // SQL in Flask & security
    { q: "Why is storing registrant data in a Python dictionary in memory problematic for a real application?", options: ["Dictionaries are slower than lists", "The data is lost whenever the server restarts because RAM is volatile", "Flask can't iterate over dictionaries in templates", "Dictionaries require more code to update"], answer: 1 },
    { q: "Why should you use SQL placeholders (?) rather than f-strings when inserting user input into a query?", options: ["F-strings don't work with SQL libraries", "Placeholders prevent SQL injection by sanitizing user input before it reaches the database", "Placeholders are faster to execute", "F-strings are deprecated in Python 3"], answer: 1 },
    { q: "Why is it important that a delete operation (like deregistering a user) uses POST rather than GET?", options: ["GET requests are cached by browsers and would fail", "A GET request can be triggered by simply clicking a link, enabling attackers to cause deletions via phishing URLs", "DELETE operations require POST by HTTP spec", "POST is the only method Flask supports for database writes"], answer: 1 },

    // MVC paradigm
    { q: "In the MVC paradigm as described in the lecture, what does the 'controller' correspond to in a Flask project?", options: ["The HTML templates in /templates", "The SQL database file", "app.py — the Python logic that processes requests and decides what to show", "The requirements.txt file"], answer: 2 },
    { q: "In MVC, what is the 'model'?", options: ["The HTML templates that the user sees", "The persistent data layer — e.g., the SQLite database", "The Python functions that handle routes", "The CSS that styles the page"], answer: 1 },

    // APIs & JSON
    { q: "What is an API in the context of web applications?", options: ["A type of SQL database", "A web-based interface you can call to get data, often returning JSON", "A Flask extension for authentication", "A JavaScript library for making HTTP requests"], answer: 1 },
    { q: "What does Flask's `jsonify()` function do?", options: ["Converts a template to JSON format", "Takes a Python list or dictionary and returns it as a JSON HTTP response", "Parses incoming JSON from the client", "Validates JSON against a schema"], answer: 1 },
    { q: "What is JSON and why is it useful for APIs?", options: ["A Python-specific data format incompatible with other languages", "A text format representing arrays and dicts that any language can consume", "A compiled binary format for fast data transfer", "An HTML extension for embedding data in web pages"], answer: 1 },

    // Checkboxes & multi-value inputs
    { q: "What HTML input type creates mutually exclusive options (only one selectable)?", options: ['type="checkbox"', 'type="radio"', 'type="select"', 'type="exclusive"'], answer: 1 },
    { q: "How does the browser know that multiple radio buttons belong to the same group?", options: ["They must be inside the same <div>", "They share the same 'name' attribute", "They share the same 'id' attribute", "They are wrapped in a <fieldset>"], answer: 1 },
    { q: "What Flask method retrieves multiple checked checkbox values submitted under the same name?", options: ["request.form.get()", "request.args.getlist()", "request.form.getlist()", "request.form.all()"], answer: 2 },
  ],
}
];
