var Clicar = document.querySelector(".buttons");
Clicar.addEventListener("click", function(event){
    event.preventDefault();
});

var CampoDeDigitacao = document.querySelector(".Campo-De-Digitacao");
var botaoCrip = document.querySelector("#botao-Criptografar");
var botaoDescrip = document.querySelector("#botao-Descriptografar");

    CampoDeDigitacao.addEventListener("input", function(){

        var texto = CampoDeDigitacao.value;
        console.log(texto);

        
        function ocultar() {
            var imgTxt = document.getElementById("img-txt").classList.add("invisivel");
            var txtareaBotao = document.getElementById("txtarea-botao").classList.remove("invisivel");
        }


        function exibir() {
            document.getElementById("img-txt").classList.remove("invisivel");
            document.getElementById("txtarea-botao").classList.add("invisivel");
        }
        
        function espelho (){
            var a = document.getElementById("a");
            var b = document.getElementById("b");
            a.addEventListener("keyup", function(){
                b.innerHTML = a.value;
            })
        }
    
        if (texto != "") {
            ocultar();
            espelho ();
        } else if (texto == ""){
            exibir();
        }
    
    });

    function copiadorDeTexto() {
        var CampoDeDigitacao2 = document.querySelector("#b");
        CampoDeDigitacao2.select();
        document.execCommand("copy");
        alert("O texto já está na área de transferência!");
    }

    function Criptografar(texto) {
        var criptografia = texto.replace(/e/g , "enter");
        criptografia = criptografia.replace(/i/g , "imes");
        criptografia = criptografia.replace(/a/g, "ai");
        criptografia = criptografia.replace(/o/g , "ober");
        criptografia = criptografia.replace(/u/g , "ufat");
        return criptografia;
    }

    function Descriptografar(texto) {
        var criptografia = texto.replace(/enter/g , "e");
        criptografia = criptografia.replace(/imes/g , "i");
        criptografia = criptografia.replace(/ai/g , "a");
        criptografia = criptografia.replace(/ober/g , "o");
        criptografia = criptografia.replace(/ufat/g , "u");
        return criptografia;
    }
    

    botaoCrip.addEventListener("click", function(){
        var criptografia = document.getElementById("a").value;
        var cript = Criptografar(criptografia);
        var cripto = document.getElementById("b");
        cripto.textContent = cript;
    });


    botaoDescrip.addEventListener("click", function(){
        var criptografia = document.getElementById("a").value;
        var cript = Descriptografar(criptografia);
        var cripto = document.getElementById("b");
        cripto.textContent = cript;
    });

