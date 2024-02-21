function generarNumero() {

    const numero = document.getElementById("number").value;
    const resultado= document.getElementById("resultado");
    const opcion= document.getElementById("opcion").value;
    let numeroTemp = numero;
    let numeroBinario = "";
    let numeroDecimal= 0;
    switch(opcion){
         case "1":
            do{
                numeroBinario+=''+Math.floor(numeroTemp%2);
                numeroTemp=numeroTemp/2;
            }while(numeroTemp>1);
            resultado.innerHTML="<hr><br><strong> The number in binary is: </strong><br>" + numeroBinario.split("").reverse().join("");
            break;

            case "0":
            numeroDecimalTemp= numero.split("").reverse().join("");
            for(let i =0; i<numeroDecimalTemp.length;i++){
                if(numeroDecimalTemp[i]!=0){
                    numeroDecimal+=Math.pow(numeroDecimalTemp[i]*2,i);
                }
            }
            resultado.innerHTML="<hr><br><strong> The number in decimal is: </strong><br>" + numeroDecimal;
            break;

            default:
                break;
        }
}
