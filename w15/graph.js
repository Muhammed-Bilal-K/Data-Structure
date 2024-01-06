class graph {
    constructor() {
        this.adjacentList = {};
    }

    addvertex(v) {
        if (!this.adjacentList[v]) {
            this.adjacentList[v] = new Set()
        }
    }

    addEdge(v1, v2) {
        if (!this.adjacentList[v1]) {
            this.addvertex(v1);
        }
        if (!this.adjacentList[v2]) {
            this.addvertex(v2);
        }
        this.adjacentList[v1].add(v2);
        this.adjacentList[v2].add(v1);
    }

    display() {
        for (let vertex in this.adjacentList) {
            console.log(vertex + '->' + [...this.adjacentList[vertex]]);
        }
    }

    hasEdge(v1, v2) {
        return (
            this.adjacentList[v1].has(v2) && this.adjacentList[v2].has(v1)
        )
    }

    removeEdge(v1, v2) {
        this.adjacentList[v1].delete(v2) &&
            this.adjacentList[v2].delete(v1)
    }

    removeVertex(v) {
        if (!this.adjacentList[v]) {
            return
        }
        for (const vertex of this.adjacentList[v]) {
            this.removeEdge(v, vertex);
        }
        delete this.adjacentList[v];
    }

    bfs(startNode) {
        let visited = new Set();
        let queue = [];

        visited.add(startNode);
        queue.push(startNode);

        while (queue.length) {
            let currentNode = queue.shift();
            console.log(currentNode);

            let datas = this.adjacentList[currentNode];
            for (const data of datas) {
                if (!visited.has(data)) {
                    visited.add(data);
                    queue.push(data);
                }
            }
        }
    }

    dfs(startNode, visited = new Set()) {
        visited.add(startNode);
        console.log(startNode);

        let datas = this.adjacentList[startNode];
        for (const data of datas) {
            if (!visited.has(data)) {
                visited.add(data);
            }
        }
    }
}


let g = new graph();
g.addvertex('a');
g.addvertex('b');
g.addEdge('a', 'b');
g.addvertex('c');
g.addvertex('d');
// console.log(g.hasEdge('a', 'b'));
// g.removeEdge('a', 'b');
// g.removeVertex('d');
g.display();
g.bfs('a');
g.dfs('a');

