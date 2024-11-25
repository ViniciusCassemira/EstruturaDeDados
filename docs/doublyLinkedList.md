# Listas duplamente encadeadas (Doubly linked list)

## Descrição
Uma **lista duplamente encadeada** é uma estrutura onde cada nó na estrutura possui três principais partes:O valor que o nó armazena e dois ponteiros, um apontando para o nó anterior e o outro para o próximo nó. Diferente da lista dinamicamente encadeada, que possui o ponteiro apenas para o próximo nó da estrutura, a lista duplamente encadeada permite consutar a lista em ambos os sentidos (do início ao fim / do fim ao início), o que é útil quando precisamos manipular a lista(percorre-lá, excluir ou adicionar itens) em ambos os sentidos

### Vantagens
* Uma lista duplamente encadeada permite ser percorrida e manipulada em ambas as direções, o que se torna uma vantagem quando comparada a uma lista encadeada simples.
* Graças aos ponteiros que apontam para o nó anterior e ao sucessor, as operações de inserção e remoção se tornam mais rápidas em relação a listas duplamente encadeadas

### Desvantagens
* Cada nó armazena dois ponteiros adicionais, o que significa um maior consumo de memória.
* O gerenciameno dos ponteiros se torna uma tarefa complexa, exigindo atenção para evitar que erros aconteçam.

## Aplicações
 * Histório de navegação de páginas em um navegador ou aplicativo
 * Alocadores de memória ou gerenciadores de blocos de memória.
 * Implementação de caches de recursos, como em sistemas de memória ou caches de páginas da web.

## Principais métodos da lista
* **removeFirst()**: Remove o primeiro nó na lista
* **removeLast()**: Remove o último nó na lista
* **transverse()**: Percorre a lista do início ao fim
* **transverseReverse()**: Percorre a lista do fim ao início

## Exemplo de implementação em JavaScript

[Clique aqui](../src/DoublyLinkedList) para ver uma implementação de lista dinamicamente encadeada completa.