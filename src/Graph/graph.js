class Grafo{
    constructor(){
        //Estrutura para armzenar os vértices e suas conexões.
        this.adjacencia = {};
    }

    //Adiciona um novo vértice ao grafo
    adicionarVertice(vertice){
        if (!this.adjacencia[vertice]){
            this.adjacencia[vertice] = [];
        }
    }

    //Adiciona uma aresta entre dois vértices (não dirigido)
    adicionarAresta(vertice1, vertice2){
        if(!this.adjacencia[vertice1]){
            this.adicionarVertice(vertice1);
        }
        if(!this.adjacencia[vertice2]){
            this.adicionarVertice(vertice2);
        }
        this.adjacencia[vertice1].push(vertice2);
        this.adjacencia[vertice2].push(vertice1);
    }

    //Remove uma aresta entre dois vértices
    removerAresta(vertice1, vertice2){
        this.adjacencia[vertice1] = this.adjacencia[vertice1].filter(v => v !== vertice2);
        this.adjacencia[vertice2] = this.adjacencia[vertice2].filter(v => v !== vertice1);
    }

    // Remove um vértice e suas conexões.
    removerVertice(vertice){
        while (this.adjacencia[vertice]?.length){
            const adjacente = this.adjacencia[vertice].pop();
            this.removerAresta(vertice, adjacente);
        }
        delete this.adjacencia[vertice];
    }

    // Exibe o grafo.
    imprimirGrafo(){
        for (let vertice in this.adjacencia){
            console.log(`${vertice} -> ${this.adjacencia[vertice].join(', ')}`);
        }
    }

    //Busca em largura (BFS) 
    findShortestPath(verticeInicial, verticeFinal) {
        const queue = [verticeInicial];
        const visited = { [verticeInicial]: true };
        const predecessor = {};
    
        while (queue.length) {
          const currNode = queue.shift();
          const neighbors = this.adjacencia[currNode];
    
          for (const neighbor of neighbors) {
            if (!visited[neighbor]) {
              visited[neighbor] = true;
              predecessor[neighbor] = currNode;
              queue.push(neighbor);
    
              if (neighbor === verticeFinal) {
                const menorCaminho = [verticeFinal];
                let prevNode = currNode;

                while (prevNode !== verticeInicial) {
                    menorCaminho.unshift(prevNode);
                    prevNode = predecessor[prevNode];
                }
    
                menorCaminho.unshift(verticeInicial);
                return menorCaminho;
              }
            }
          }
        }
        return null;
    }
}

// Exemplo de uso
console.log("---- Exemplo 1 ----");
const exemplo1 = new Grafo();
exemplo1.adicionarVertice('A');
exemplo1.adicionarAresta('A', 'B');
exemplo1.adicionarAresta('A', 'C');
exemplo1.adicionarAresta('B', 'D');
exemplo1.imprimirGrafo();

console.log("---- Exemplo 2 ----");
const exemplo2 = new Grafo();
exemplo2.adicionarVertice('1');
exemplo2.adicionarVertice('2');
exemplo2.adicionarVertice('3');
exemplo2.adicionarVertice('4');
exemplo2.adicionarAresta('1','2');
exemplo2.adicionarAresta('1','3');
exemplo2.adicionarAresta('2','4');
exemplo2.removerVertice('2');
exemplo2.imprimirGrafo();

console.log("---- Usando o BFS ----");
const exemplo3 = new Grafo();
exemplo3.adicionarVertice('1');
exemplo3.adicionarVertice('2');
exemplo3.adicionarVertice('3');
exemplo3.adicionarVertice('4');
exemplo3.adicionarVertice('5');

exemplo3.adicionarAresta('1','3');
exemplo3.adicionarAresta('3','5');

exemplo3.adicionarAresta('1','2');
exemplo3.adicionarAresta('2','3');
exemplo3.adicionarAresta('3','4');
exemplo3.adicionarAresta('4','5');

exemplo3.imprimirGrafo();
console.log(exemplo3.findShortestPath('1', '5'));