class Pipe {
  constructor() {
    this.spacing = 100; // Espacio entre los tubos
    this.minTopLength = 40; // Longitud mínima del tubo superior
    this.minBottomLength = 120; // Longitud mínima del tubo inferior
    
    // Generar una longitud aleatoria para el tubo superior dentro del rango mínimo y la altura total del lienzo menos la longitud mínima del tubo inferior y el espacio entre los tubos
    this.top = Math.random() * (height - this.minBottomLength - this.spacing - this.minTopLength) + this.minTopLength;
    
    // Calcular la longitud del tubo inferior basándose en la longitud del tubo superior y el espacio entre los tubos
    this.bottom = height - this.top - this.spacing;
    
    this.x = width;
    this.w = 40;
    this.speed = 1.5;
    this.pipeRedInf = pipeRedInf;
    this.pipeRedSup = pipeRedSup;
  }

  draw() {
    image(this.pipeRedSup, this.x, 0, this.w, this.top);
    image(this.pipeRedInf, this.x, height - this.bottom, this.w, this.bottom);
  }

  update() {
    this.x -= this.speed;
  }

  offscreen() {
    return this.x < -this.w;
  }
}






