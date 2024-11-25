# Listas dinamicamente encadeadas (Linked list)

## Descrição
Uma **lista dinamicamante encadeada**(ou lista encadeada) são uma estrutura formadas por nós que, quando unidos, formam uma sequência. Cada nó(node) é formado por 2 partes: O valor que queremos armazenar e um ponteiro para o próximo nó da estrutura. Isso diferencia a lista do array, já que os mesmos armazenam os elementos em um único local contínuo na memória.

As listas encadeadas tem algumas vantagens e desvantagens quando comparadas com um array tradicional, que devem ser consideradas.

### Vantagens
* Inserir e remover itens em uma lista podem ser realizados em um menor tempo, desde que  lista esteja estruturada corretamente.
* Listas encadeadas possuem tamanhos dinâmicos, podendo crescer ou diminuir de forma dinâmica conforme a necessidade.

### Desvantagens
* Enquanto o acesso a itens no array é feito a partir de índices de forma constante, na lista o acesso a um determinado nó requer percorrer toda a lista, resultando em um tempo de busca maior.
* Cada nó na lista armazena além da sua informação, o ponteiro que aponta para o próximo nó na lista, o que pode resultar em um uso maior de memória, se comparado a um array.

## Aplicações
* São usadas em tabelas de hash para lidar com colisões
* O gerenciamento de memória em sistemas operacionais pode usar listas encadeadas para rastrear blocos de memória alocados e livres
* Em sistemas de simulação ou modelagem de eventos discretos, pode ser usada para armazenar eventos que ocorrem em uma ordem específica

## Principais métodos da lista
* **insertAtBeginning()**: Insere no início da lista
* **insertAtEnd()**: Insere no final da lista
* **removedByValue()**: Remove um nó a partir de um valor específico
* **find()**: Procura um nó por valor

## Exemplo de implementação em JavaScript

[Clique aqui](../src/LinkedList) para ver uma implementação de lista dinamicamente encadeada completa.