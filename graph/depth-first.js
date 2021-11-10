
const graph = {
    a:['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}

depthFirstTraversal = (graph,sourceNode) => {
    const stack = [sourceNode];

    while(stack.length > 0) {
        const current  = stack.pop()
        console.log(current);

        for(const neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }

}

depthFirstTraversal(graph,'f');