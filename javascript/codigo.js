const pizarra = document.querySelector(".pizarra");
const pincel = pizarra.getContext("2d");

dibujarPIzarra(0,0,600,600);
dibujarPaleta();

var puedoDibujar = false;
var colores = ["#f00","#0f0","#00f"];
var indice = 2;

function dibujarPIzarra (x,y,w,h) {
    pincel.fillStyle = "#fff";
    pincel.fillRect(x, y, w, h);
}

function dibujarCuadrados(x,y,color){
    pincel.fillStyle = color;
    pincel.fillRect(x,y,50,50);
}

function dibujarPaleta(){
    dibujarCuadrados(0,0,"#f00");
    dibujarCuadrados(50,0,"#0f0");
    dibujarCuadrados(100,0,"#00f");
}




function cambiarColor(e){
    if(e.offsetY < 50){
        if(e.offsetX > 0 && e.offsetX < 50){
            indice = 0;
        }else if(e.offsetX > 50 && e.offsetX < 100){
            indice = 1;
        }else if(e.offsetX > 100 && e.offsetX < 150){
            indice = 2;
        }
    }
}





function habilitarDibujar (){
    puedoDibujar = true;
}

function desabilitarDibujar (){
    puedoDibujar = false;
}

function dibujarTrazo(e){
    if(puedoDibujar && (e.offsetX > 150 || e.offsetY > 50)){
        let x = e.offsetX;
        let y = e.offsetY;
        pincel.fillStyle = colores[indice];
        pincel.beginPath();
        pincel.arc(x, y, 5, 0, 2 * 3.14);
        pincel.fill();
    }
}



pizarra.addEventListener("mousedown",habilitarDibujar);
pizarra.addEventListener("mousemove",dibujarTrazo);
pizarra.addEventListener("mouseup",desabilitarDibujar);
pizarra.addEventListener("click",cambiarColor);