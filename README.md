![image](https://github.com/TheBridge-FullStackDeveloper/exercise-p5-game-flappy-clone/assets/33903092/7c839e0d-0dc6-4713-80f2-fbc5ccfa8d14)

# Ejercicio: Crear un juego estilo Flappy Bird en p5.js

Este ejercicio te guiará a través de los pasos para crear un juego simple estilo Flappy Bird utilizando la biblioteca p5.js. Puedes utilizar este ejercicio como un proyecto para aprender los conceptos básicos de desarrollo de juegos en JavaScript.


https://github.com/TheBridge-FullStackDeveloper/exercise-p5-game-flappy-clone/assets/33903092/f80437bc-5f26-4089-9340-5efa91606527


## Requisitos

Asegúrate de tener lo siguiente configurado en tu proyecto:

- [p5.js](https://p5js.org/): Una biblioteca de JavaScript para gráficos y animaciones.

## Pasos

1. **Configura tu entorno:**
   - Crea un proyecto de p5.js y configura tu entorno de desarrollo.

2. **Dibuja el fondo:**
   - En la función `setup()`, crea un lienzo (canvas) y establece el fondo del juego.

3. **Crea el pájaro:**
   - Define una clase `Bird` para representar al pájaro. Debe tener propiedades como posición, velocidad y gravedad.
   - En la función `draw()`, actualiza y muestra el pájaro en el lienzo.

4. **Agrega obstáculos:**
   - Define una clase `Pipe` para representar los obstáculos (tubos). Los obstáculos deben tener una posición aleatoria y una brecha para que el pájaro pase.
   - En la función `draw()`, genera nuevos obstáculos y muévelos hacia la izquierda.

5. **Maneja las colisiones:**
   - Implementa la detección de colisiones entre el pájaro y los obstáculos para determinar si el juego ha terminado.

6. **Implementa el control de salto:**
   - Permite al jugador controlar el pájaro, por ejemplo, haciendo que el pájaro salte cuando se presione la barra espaciadora.

7. **Calcula la puntuación:**
   - Lleva un seguimiento de la puntuación del jugador cada vez que el pájaro pasa con éxito a través de un obstáculo.

8. **Agrega un mensaje de "juego terminado":**
   - Muestra un mensaje de "juego terminado" cuando el jugador pierda y reinicia el juego después de un tiempo.

## Bonus

Puedes personalizar y expandir este juego agregando más funcionalidades, como efectos de sonido, animaciones, gráficos más elaborados y menús. En [este repo](https://github.com/samuelcust/flappy-bird-assets) puedes encontrar los assets

## Aprende más

- [p5.js Reference](https://p5js.org/reference/): Consulta la documentación de p5.js para obtener información detallada sobre las funciones y características disponibles.

## Ejemplo

Puedes encontrar un ejemplo de un juego estilo Flappy Bird en p5.js [aquí](flappybird.io).
