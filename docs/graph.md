# Grafos (Graph)

## Descrição
**Grafos** é uma estrutura utilizada para representar a relação/conexão entre diversos elementos. Sendo muito usados em redes sociais, mapas de rotas, sistema de recomendação (como serviços de streaming) e muito mais. A estrutura de um grafo é composta por vértice/nó e aresta/arco, sendo os vértices os elementos individuais e as arestas as conexões entre os vértices.

Existem alguns tipos de grafos sendo eles: Dirigidos, não dirigidos, ponderados e não ponderados. 

### Vantagens
* Grafos são ideias para representar relações complexas entre objetos, onde cada objeto é um nó e as suas relações com outros objetos seriam as arestas, o que permite modelar estruturas de rede e de comunicação
* Por ser eficiente na hora de representar redes e conexões, grafos auxiliam na construção de algoritmos de busca de caminhos, fluxos, e outras operações sobre redes.

### Desvantagens
* Implementar um algoritmos utilizando-se grados pode ser uma tarefa mais complexa se comparada com a implementação de estruturas mais simples, como filas ou árvores
* O custo computacional ao se utilizar grafos por natureza é maior, como na hora de se calcular o caminho mais curto em um grafo com vários nós, requer alto uso de poder computacional.

## Aplicações
* Em plataformas como Facebook, Instagram e LinkedIn, as pessoas (nós) estão conectadas por amizades ou seguimentos (arestas). Grafos são usados para analisar as relações e comportamentos dos usuários.
* Sâo usados para modelar redes de ruas e estradas em sistemas de navegação, como Google Maps, Waze, entre outros.
* Grafos podem ser usados para sugerir produtos, músicas, filmes ou outros itens com base nas interações dos usuários. Netflix e Spotify são exemplo de plataformas que utilizam grafos para realizar essas operações.

## Principais métodos do grafo
* **adicionarVertice**: Insere um novo vértice
* **adicionarAresta**: Insere uma aresta entre dois vpertices existentes
* **removerAresta**: Remove uma aresta entre dois vértices 
* **removerVertice**: Remove um vértice e as suas conexões

## Exemplo de implementação em JavaScript

[Clique aqui](../src/Graph/) para ver uma implementação de grafo completa.