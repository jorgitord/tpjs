const valorTicket = 200;

let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;

const cantidad = document.querySelector('#cantidad');
const categoria = document.querySelector('#categoria');
const botonCalcular = document.querySelector('#resumen');
const total = document.querySelector('#total');

function totalPagar()
{

    let totalValor = parseInt(cantidad.value) * valorTicket;

    if (categoria.value == 1){

    totalValor = totalValor - (totalValor * descuentoEstudiante);
    }
    else if (categoria.value == 2){

    totalValor = totalValor - (totalValor * descuentoTrainee);
    }

    else if (categoria.value == 3){
        totalValor = totalValor - (totalValor * descuentoJunior);

    }

    else {totalValor = totalValor}
    
    total.innerHTML = "TOTALAPAGAR:" + totalValor;
}

botonCalcular.addEventListener('click', totalPagar);
