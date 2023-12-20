//Obteniendo elementos del html
let div = document.getElementById('recuadro');
let pTiempo = document.getElementById('tiempo');
//Inicializando variables
let hrs = 0;
let min = 0;
let seg = 0;

//Función que cambiara con el tiempo
function cambiarTiempo(){
    console.log('Entro a intervalo');
    seg += 1;
    if(seg == 60){
         console.log('Entr a seg = 60')
        min +=1;
        seg=0;
    }
    if(min == 60){
        hrs += 1;
        min =0;
    }
    pTiempo.innerHTML = `${hrs>=10? hrs:'0'+hrs} h : ${min>=10? min:'0'+min} min : ${seg>=10? seg:'0'+seg} seg`; 
}
//Ayuda a generar el cambio cada cierto tiempo
setInterval(cambiarTiempo, 1000);
//Agregando elemento que cambia