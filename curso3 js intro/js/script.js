//alert("Hello World!");

function pulaLinha(){
    document.write("<br>");
}

var nome = "Yago Santos";

document.write(nome);
pulaLinha();
document.write(nome.replace("Santos", "Ribeiro"));
pulaLinha();

var familia = ["yago", "Marcia", "Altair", "Atoa", "Bruno"];
//adiciona na lista
familia.push("me apague");

//Apaga da lista
familia.pop();

console.log(familia);

//ver tamanho
familia.length

//mostra ao contrario
familia.reverse

//le algo que o user escreveu como se fosse o scan
var idade = prompt("Qual sua idade");

if(idade >= 18){
    document.write("maior de idade");
}else{
    document.write("menor de idade");
}


var lista = ["Alemanha", "Inglaterra", "Escócia"]
lista.push("Polônia");
lista.pop("Inglaterra");

console.log(lista);

for(i=0;i<=5;i++){
    console.log(i);
}
    function clicou(){
        document.write("Obrigado por clicar");
        //combinando com o html
        document.getElementById("msg").innerHTML = "<b>Obrigado pela visita, clique na msg</b>"
    }

   function redireciona(){
       //abre uma nova guia
       window.open("https://yagosant.github.io");
       //abre na mesma janela
       window.location.href = "https://yagosant.github.io";
   }

   function aparece(){
    document.getElementById("mouse").innerHTML = "<b>passo o mouse</b>"
   }

   function trocar(elemento){
   elemento.innerHTML = "<b>Mudou aqui</b>";

   }

   function load(){
    alert("Página carregada");
   }

   function mudanca(){
       pulaLinha();
       document.write(elemento.value)
   }
