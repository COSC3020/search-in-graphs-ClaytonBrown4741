//function depthFirstSearch(graph, startNode, targetNode){
function depthFirstSearch(graph, start, target){
	for (var i=0; i<graph.length;i++){
		visitedNodes[i]=false;
	}
	return dfs(graph, start, target, visitedNodes);
}

function dfs(graph, start, target, visited){
	console.log(start);
	var allSearched=true;
	for (var i=0; i<graph.length;i++){
		if (visited[i]==false)
			allSearched=false;
	}
	if (allSearched==true){
		currentPath=[]
		return visitedNodes
	}
	currentPath.push(start)
	if (start==target){
		nodeFound=true
		return visitedNodes
	}
	visited[start]=true;
	for (var i=0; i< graph[start].length; i++){
		if(visited[graph[start][i]]==false){
			return dfs(graph, graph[start][i], target, visited)
		}
	}
	currentPath.pop()
	return visitedNodes
}

var visitedNodes=[];
var currentPath = [];
var nodeFound=false;
console.log(depthFirstSearch([[1],[0,3],[0,1],[0,1,2,3]], 0, 2))
console.log(nodeFound);
if (nodeFound==true)
	console.log(currentPath)
else
	console.log([])
