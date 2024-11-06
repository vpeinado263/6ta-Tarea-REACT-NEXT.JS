# 6ta-Tarea-REACT-NEXT.JS

## Descripción del Proyecto
Este proyecto he implementado un carrito de compras simple usando React y Next.js. El objetivo principal es aplicar conceptos clave de React y de manejo de estado para crear un flujo básico de un carrito de compras. Implementación del carrito con un enfoque algorítmico y coloquial.

## Algoritmo del Carrito de Compras

A continuación, se presenta el proceso en lenguaje coloquial para gestionar las funciones principales del carrito de compras. Este enfoque ayuda a estructurar el flujo antes de traducirlo a código:

### Agregar Producto
1. Buscar el producto en la base de datos.
2. Guardar el producto en una variable temporal.
3. Verificar si el producto ya existe en el carrito:
   - Si ya existe, incrementar la cantidad.
   - Si no existe, agregar el producto al carrito.

### Eliminar Producto
1. Verificar si hay un producto en el carrito que coincida con el que el usuario desea eliminar.
2. Guardarlo en una variable temporal.
3. Revisar la cantidad:
   - Si la cantidad del producto es mayor a 1, restar 1 a la cantidad.
   - Si la cantidad es 1, eliminar el producto del carrito.

Este enfoque de lenguaje coloquial permite una comprensión clara del flujo antes de traducirlo a código.

## Herramientas de JavaScript Utilizadas
Para implementar el algoritmo en código, se utilizaron varias herramientas y métodos clave de JavaScript:

- **Método `find`**: Busca un elemento en un arreglo que cumpla con una condición, en este caso, una coincidencia en el ID del producto.
- **Estructuras de control (`if`, `else`)**: Valida condiciones sobre la cantidad y existencia del producto en el carrito para tomar decisiones sobre su manejo.

## Reflexiones y Buenas Prácticas
Durante el desarrollo del proyecto, se identificaron algunas buenas prácticas y reflexiones importantes:

- **No mezclar conceptos**: Es crucial diferenciar el uso de IDs en objetos y componentes en React, ya que un mal manejo puede causar errores de duplicidad.
- **Persistencia de datos**: No siempre es necesario mantener los datos después de recargar la página. En este caso, el carrito de compras no requiere persistencia en esta etapa, pero se considera implementarla en el futuro.
- **Pensamiento abstracto**: Imaginar el flujo de datos y el comportamiento del código antes de programar es una habilidad valiosa que facilita la resolución de problemas y depuración de errores.
- Optimizar Imágenes usando el componente <Image /> de Next.js para mejorar el rendimiento y la carga de la página.
- Usar key en Listas de Componentes en React, lo que ayuda a identificar cada elemento de manera única y mejora la eficiencia del renderizado.
- Configurar Dominios Externos en next.config.js para permitir la carga de imágenes desde fuentes externas de forma segura.

in process : https://6ta-tarea-react-next-js.vercel.app/
  
