function Calcular(valor){
    if(valor == 'c'){
        document.getElementById('resultado').value = '';
    }else if(valor == '='){
        document.getElementById('resultado').value = eval(document.getElementById('resultado').value);
    }else{
        document.getElementById('resultado').value += valor;
    }
}