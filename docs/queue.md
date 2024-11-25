# Filas (Queues)

## Descrição
Uma **fila** é uma estrutura de dados linear que segue o conceito **FIFO** (First In, First Out). Em uma fila, o primeiro item a entrar é o primeiro item a sair, sendo muito semelhante a uma fila de pessoas em um caixa de supermercado aguardando o atendimento, por exemplo.

## Aplicações
 * Usadas para processar tarefas em ordem sequencial ou cronológica
 * Sistema de impressão de documentos
 * Processamento de tarefas em tempo real

## Principais métodos da fila
* **enqueue()**: Insere um elemento ao final da fila - usando push()
* **dequeue()**: Remove o primeiro elemento de uma fila - usando pop()
* **dequeue()**: Retorna o item no começo da fila sem removê-lo.
* **isEmpty()**: Verifica se a fila está vazia.

## Exemplo de implementação em JavaScript

[Clique aqui](../src/Queue) para ver uma implementação de fila completa.