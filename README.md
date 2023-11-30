[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12091130&assignment_repo_type=AssignmentRepo)
# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the source to the target (not
the list of nodes that you looked at during the search). Start with the template
I provided in `code.js` and test your new function. I have not provided any test
code, but you can base yours on test code from other exercises.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Bonus

Implement and analyze breadth-first search.

**ANSWER:**  
Going through this step by step, we must first account for the initialization of the  
"visitedNodes" variable. This will take |V| amount of time, since it has to go over every  
node.  
Additionally, we must also take into account the final loop at the bottom that searches through the  
actual graph. Looking at this, it becomes clear that this loop will end up going through every  
node once and *only* once due to us keeping track of the number of visited nodes. Additionally,  
this loop will also go through every edge of the graph at least once in order to check if it  
leads to the desired node. So as a result, this will take |V|+|E| amount of time.  
So, if we combine all this together, we get a worst case runtime of $\Theta(|V|+|V|+|E|)$  
which of course simplifies to $\Theta(|V|+|E|)$  
NOTE: I am still a *little* rusty when it comes to runtime analyses for graphs, so please don't  
hesitate to let me know if any of my reasoning or logic was off and I'll fix it right away. Thank  
you!  
