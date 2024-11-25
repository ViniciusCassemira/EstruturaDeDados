# Árvores binárias (Binary tree)

## Descrição
**Árvore binárias** são uma estrutura fundamental na ciência da computação, sendo muito utilizadas para representar informações de forma hierárquica e eficiente. Sua estrutura consiste em um nó root, e a partir dele a estrutura é formada, cada nó possui possui no máximo, 2 filhos (um da esquerda e o outro da direita), o que permite organizar os dados desejados nessa estrutura afim de se realizar manipulações na árvore de forma eficiente, como busca, inserção e remoção.

Árvore binária é uma estrutura muito poderosa eamplamente utilizada, tendo destaque no tempo de acesso e procura dos dados são prioridade. Porém, Seu desempenho irá depender do seu balanceamento e da natureza dos dados que a mesma armazena, o que exige equilíbrio em sua estrutura e mais complexidade em termos de implementação.

### Vantagens
* Em uma árvore binária balanceada, a busca de um elemento pode ser feita de forma muito eficiente, sendo mais rápido do que uma busca linear em uma lista.
* Árvores binárias são naturalmente adequadas para representar relações hierárquicas, como sistema de arquivos, árvores de decisão, expressões matemáticas, entre outros.

### Desvantagens
* Se a árvore estiver desbalanceada, o seu tamanho/altura pode crescer de maneira linear, resultando em uma lista ligada, o que diminui a eficiência em manipulações
* Para se implementar uma árvore binária balanceada, é preciso algoritmos mais complexos para manter o seu balanceamento, o que pode aumentar a dificuldade de implementação e aumenta o tempo de algumas operações

## Aplicações
* Sistemas de arquivos em sistemas operacionais utilizam uma árvore binária para organizar arquivos e diretórios de forma hierárquica.
* Usadas para construir árvores de decisão em problemas de aprendizado supervisionado. Ajudam a tomar decisões com base em características dos dados. Cada nó interno da árvore representa uma condição ou teste, e cada ramo representa uma resposta possível para essa condição.

## Principais métodos da Árvore binária
* **insert()**: Insere um valor na árvore
* **inOrder()**: Visita a subárvore esquerda, o nó atual e a subárvore direita
* **preOrder()**: Visita o nó atual, a subárvore esquerda e a subárvore direita
* **postOrder()**: Visita a subárvore esquerda, a subárvore direita e o nó atual

## Exemplo de implementação em JavaScript

[Clique aqui](../src/Tree) para ver uma implementação de árvore binária completa.