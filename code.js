function depthFirstSearch(graph, start, target){
	nodeFound=false
	visitedNodes=[]
	currentPath=[]
	for (var i=0; i<graph.length;i++){
		visitedNodes[i]=false;
	}
	dfs(graph, start, target, visitedNodes);
	if (nodeFound==true){
		return currentPath
	}
	else
		return []
}

function dfs(graph, start, target, visited){
	var allSearched=true;
	allSearched=(!visited.includes(false))
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
