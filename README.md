# Ejemplo de Middleware en Express

Este proyecto demuestra el uso básico de middleware en una aplicación Express.js.

## ¿Qué es un Middleware?

Un middleware es una función que tiene acceso al objeto de solicitud (req), al objeto de respuesta (res) y a la siguiente función de middleware en el ciclo de solicitud/respuesta de la aplicación. El middleware puede:

- Ejecutar cualquier código.
- Realizar cambios en la solicitud y los objetos de respuesta.
- Finalizar el ciclo de solicitud/respuesta.
- Llamar al siguiente middleware en la pila.

## Funcionamiento

En este ejemplo, cuando se recibe una solicitud:

1. Primero se ejecuta el middleware, registrando la hora actual en la consola.
2. Luego, si la ruta solicitada es "/", se envía la respuesta "Página Principal".

Este ejemplo muestra cómo el middleware puede realizar acciones (en este caso, registrar la hora) antes de que se maneje la ruta específica.

## Ejecución

Para ejecutar este proyecto:

1. Asegúrate de tener Node.js instalado.
2. Instala las dependencias con `npm install`.
3. Ejecuta el servidor con `npm run dev`.
4. Accede a <http://localhost:3000> en tu navegador.
