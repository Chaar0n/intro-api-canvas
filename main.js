var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// 1ER EJEMPLO DE TRAZO
//ctx.fillStyle = "green";
//ctx.fillRect(10, 10, 100, 100);

// 1. TRAZO DE RECTANGULO
//ctx.fillRect(25, 25, 100, 100);
//ctx.clearRect(45, 45, 60, 60);
//c0tx.strokeRect(50, 50, 50, 50);

// 2. TRAZO DE TRIANGULO
//ctx.beginPath(); // VA A INICIAR RUTA DE TRAZOS CON LOS MOVIMIENTOS DE COORDENADAS
    //ctx.moveTo(75, 50);
    //ctx.lineTo(100, 75);
    //ctx.lineTo(100, 25);
    //ctx.fill(); // SE LLENA DE NEGRO AL FINAL

// 3. TRAZO DE PLUMA
//ctx.beginPath(); // VA A INICIAR RUTA DE TRAZOS CON LOS MOVIMIENTOS DE COORDENADAS
//ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // CIRCULO EXTERNO
//ctx.moveTo(110, 75);
//ctx.arc(75, 75, 35, 0, Math.PI, false); // BOCA (EN EL SENTIDO DE LAS AGUJAS DEL RELOJ)
//ctx.moveTo(65, 65);
//ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // OJO IZQUIERDO
//ctx.moveTo(95, 65);
//ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // OJO DERECHO
//ctx.stroke(); // SIN RELLENO

// 4. TRAZO DE LINEAS
 // TRIANGULO RELLENO
 //ctx.beginPath(); // VA A INICIAR RUTA DE TRAZOS CON LOS MOVIMIENTOS DE COORDENADAS
 //ctx.moveTo(25, 25);
 //ctx.lineTo(105, 25);
 //ctx.lineTo(25, 105);
 //ctx.fill(); //RELLENO DE COLOR NEGRO

 // TRIANGULO CONTORNEADO
 //ctx.beginPath(); // VA A INICIAR RUTA DE TRAZOS CON LOS MOVIMIENTOS DE COORDENADAS
 //ctx.moveTo(125, 125);
 //ctx.lineTo(125, 45);
 //ctx.lineTo(45, 125);
 //ctx.closePath();
 //ctx.stroke(); //SIN RELLENO

// 5. TRAZO DE ARCOS
//for (let i = 0; i < 4; i++) {
    //for (let j = 0; j < 3; j++) {
      //ctx.beginPath();
      //const x = 25 + j * 50; // Coordenada x
      //const y = 25 + i * 50; // Coordenada y
      //const radius = 20; // Radio del Arco
      //const startAngle = 0; // Punto inicial del Círculo
      //const endAngle = Math.PI + (Math.PI * j) / 2; // Punto final del Círculo
      //const counterclockwise = i % 2 !== 0; // En el sentido de las agujas del reloj o en sentido contrario

      //ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

      //if (i > 1) {
        //ctx.fill();
      //} else {
        //ctx.stroke();
      //}
    //}
//}

// 6. TRAZO DE CURVAS BEIZER Y CUADRATICAS
 // EJEMPLO DE CURVAS CUADRATICAS
 //ctx.beginPath();
 //ctx.moveTo(75, 25);
 //ctx.quadraticCurveTo(25, 25, 25, 62.5);
 //ctx.quadraticCurveTo(25, 100, 50, 100);
 //ctx.quadraticCurveTo(50, 120, 30, 125);
 //ctx.quadraticCurveTo(60, 120, 65, 100);
 //ctx.quadraticCurveTo(125, 100, 125, 62.5);
 //ctx.quadraticCurveTo(125, 25, 75, 25);
 //ctx.stroke();

// 7. TRAZO DE COMBINACIONES DE LINEAS Y FIGURAS
//roundedRect(ctx, 12, 12, 150, 150, 15);
    roundedRect(ctx, 17, 17, 170, 138, 9); // RECUADRO GRANDE
    roundedRect(ctx, 53, 53, 49, 33, 10); // SUPERIOR IZQUIERDA
    roundedRect(ctx, 53, 121, 50, 19, 6); //INFERIOR IZQUIERDA
    roundedRect(ctx, 132, 53, 38, 32, 10); //SUPERIOR DERECHA
    roundedRect(ctx, 134, 120, 36, 20, 10);//INFERIOR DERECHA

    ctx.beginPath(); // PAC-MAN
    ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    ctx.lineTo(31, 37);
    ctx.fill();

    for (let i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 35, 4, 4);
    }

    for (i = 0; i < 6; i++) {
      ctx.fillRect(115, 51 + i * 16, 4, 4);
    }

    for (i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 99, 4, 4);
    }

    ctx.beginPath();
    ctx.moveTo(83, 116);
    ctx.lineTo(83, 102);
    ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
    ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
    ctx.lineTo(111, 116);
    ctx.lineTo(106.333, 111.333);
    ctx.lineTo(101.666, 116);
    ctx.lineTo(97, 111.333);
    ctx.lineTo(92.333, 116);
    ctx.lineTo(87.666, 111.333);
    ctx.lineTo(83, 116);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(91, 96);
    ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
    ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
    ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
    ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
    ctx.moveTo(103, 96);
    ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
    ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
    ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
    ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();
    
// UNA FUNCION AUXILIAR PARA DIBUJAR UN RECTANGULO CON ESQUINAS REDONDEADAS.
function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.closePath();
  ctx.stroke();
  
}


// <canvas id="canvas" width="400" height="400"></canvas> // RECUADRO DE HTML, OSEA DONDE IRA TODO EL TRABAJO 
// ESTO LO ENCUENTRAS EL INDEX.HTML