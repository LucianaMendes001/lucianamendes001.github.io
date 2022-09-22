
    var inputTexto = document.querySelector(".input-texto");
    var mensagem = document.querySelector(".mensagem");
    document.getElementById("aparece").style.display = 'none';

    
    function botaoEncriptar() {
        var textoDigitado = encriptar(inputTexto.value);
        mensagem.value = textoDigitado;            
        aparece();
        
    }    
    
    function encriptar(stringEncriptada) {
        var matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase();
    
        for(var i=0; i < matrizCodigo.length; i++) {
            if(stringEncriptada.includes(matrizCodigo[i][0])) {
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            }
        }    
        return stringEncriptada.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");

    }

    function botaoDesencriptar() {
        var textoModificado = desencriptar(mensagem.value);
        mensagem.value = textoModificado;
        aparece();
    }
    
    
    function desencriptar(stringDesencriptada) {
        var matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober","o"], ["ufat","u"]];
        stringDesencriptada = stringDesencriptada.toLowerCase();
    
        for(var i=0; i < matrizCodigo.length; i++) {
            if(stringDesencriptada.includes(matrizCodigo[i][0])) {
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            }
        }    
        return stringDesencriptada;
    }

    function aparece(){
        document.getElementById("desaparece").style.display = 'none';
        document.getElementById("aparece").style.display = 'block';
    }

   
    function botaocopiar() {
        var copia = document.querySelector(".mensagem");
        copia.select();
        navigator.clipboard.writeText(copia.value)
        msg.copia = "";
        aparece();
    }
    
   




    