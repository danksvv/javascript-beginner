"use strict";

/*
 * EJERCICIO:
 * Explora el concepto de clase y crea un ejemplo que implemente un inicializador,
 * atributos y una función que los imprima (teniendo en cuenta las posibilidades
 * de tu lenguaje).
 * Una vez implementada, créala, establece sus parámetros, modifícalos e imprímelos
 * utilizando su función.
 *
 * DIFICULTAD EXTRA (opcional):
 * Implementa dos clases que representen las estructuras de Pila y Cola (estudiadas
 * en el ejercicio número 7 de la ruta de estudio)
 * - Deben poder inicializarse y disponer de operaciones para añadir, eliminar,
 *   retornar el número de elementos e imprimir todo su contenido.
 *
 */

class Queue {
  constructor() {
    this.elements = [];
  }

  push(element) {
    this.elements.push(element);
  }

  pop() {
    if (this.size() === 0) {
      return null;
    }
    return this.elements.pop(0);
  }

  size() {
    if (this.elements === null) {
      return 0;
    }
    return this.elements.length;
  }

  print() {
    console.log(this.elements);
  }
}

(function () {
  const queue = new Queue();
  queue.push(1);
  queue.push(2);
  queue.push(3);
  queue.push(4);
  queue.push(5);
  queue.print();
  console.log(queue.pop());
  console.log(queue.pop());
  console.log(queue.pop());
  console.log(queue.pop());
  console.log(queue.pop());
  console.log(queue.pop());
  queue.print();
})();
