// javascript Execution context - 
// whenever we create a js file, a Global execution context is made and it is refered to by the 'this' keyword
// js is single threaded language and everything is a process here
// 3 contexts in js - 1. Global execution context 2. Function execution contex 3.Eval exec context
// js runs the program in two phases - 1. memory creation phase 2. execution phase

// The working of the JavaScript works on three phases:
// 1. Global Execution Context
// 2. Memory phase / Creation phase
// 3. Execution phase

// 🔵Phase 1: Global Execution Context
// The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

// 🔵Phase 2: Memory phase
// During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

// 🔵Phase 3: Execution phase
// After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
// 1. Memory phase 
// 2. Execution phase 
// The return value of the 'Function Execution' context is passed to the Global Execution Context
