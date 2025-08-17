/*
===========================================
📝 To-Do List Filter with Anonymous Functions
===========================================

🎯 Objective:
Students will create and manipulate a simple array of to-do items using anonymous functions.

They will practice using:
- `filter()` to extract specific items
- `map()` to transform items
- `sort()` to organize items

This activity helps build a dynamic "To-Do List Filter" based on different criteria.
*/

// ============================================
// 🚀 Starting Point: To-Do List Array
// ============================================

const todos = [
    { task: "Wash the dishes", completed: false, priority: 3 },
    { task: "Write a blog post", completed: true, priority: 1 },
    { task: "Buy groceries", completed: false, priority: 2 },
    { task: "Study JavaScript", completed: true, priority: 1 },
    { task: "Walk the dog", completed: false, priority: 2 },
  ];
  
  // ============================================
  // 🔍 Tasks
  // ============================================
  
  /*
  🔹 Task 1: Filter Incomplete Tasks
  
  Step-by-Step:
  1. Use the `filter()` method on the todos array.
  2. Use an anonymous function as the callback.
  3. Return only the tasks that are not completed.
  */
 let incompleteTasks = todos.filter((neededTasks) => !neededTasks.completed); // created a variable that filtered the todos array and created another array with the incompleted tasks. Using the arrow function checks the objects and creates another array of incomplete tasks.
   
  /*
  🔹 Task 2: Sort Tasks by Priority
  
  Step-by-Step:
  1. Use the `sort()` method on the todos array.
  2. Use an anonymous function as the comparison function.
  3. Sort tasks in ascending order of priority (1 = highest).
  */
  todos.sort((a, b) => a.priority - b.priority); // sorted the todos array and used a and b for comparison. I used the arrow function call to compare the priority in the objects. For ascending order, b had to be subtracted from a to show the a values first.
  
  /*
  🔹 Task 3: Mark All Tasks as Completed
  
  Step-by-Step:
  1. Use the `map()` method to return a new array.
  2. Use an anonymous function to modify each object.
  3. Change the `completed` property to `true` for every task.
  */
  let mappedList = todos.map(newStatus => {
    return { ...newStatus, completed: true 
    };
  });
    
  /*
  🔹 Task 4: Combine Filters
  
  Step-by-Step:
  1. First, filter the todos to get only incomplete tasks.
  2. Then, sort the filtered results by priority using `sort()`.
  3. Use method chaining to perform both steps together.
  */
  let finalList = todos.filter(task => !task.completed).sort((a, b) => a.priority - b.priority); // This one was tricky I needed to fully understand the method chaining filter().sort() to get it, I was trying to fill it all in with the variables I collected. I used the incompleteTasks but realized I can't use the variables to reuse the conditions. which is crazy. Anyway, renamed the variable and filtered the todos array using the conditions outlined above and directly sorted it using the .sort and the conditions outlined above from the previous vairable.
  
  // ============================================
  // 🧪 Console Test Your Work
  // ============================================
  
  console.log("Incomplete Tasks:", (incompleteTasks));
  console.log("Sorted by Priority:", (todos));
  console.log("All Tasks Completed:", (mappedList));
  console.log("Sorted Incomplete Tasks:", (finalList));
  