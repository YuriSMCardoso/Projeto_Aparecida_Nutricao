var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    //console.log(event.target()); //O EVENT RETORNA QUEM FOI O ALVO DO EVENTO, OU SEJA, O ALVO DO CLIQUE.
    //var alvoEvento = event.target; //TD
    //var paiDoAlvo = alvoEvento.parentNode; //TR
    //paiDoEvento.remove();

    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500); //setTimeOut serve para que o javascript demore um tempo pra executar o código dentro dele, o tempo passado em MS
            //setTimeOut(function(){}, tempo)/
    

})


/*pacientes.forEach(function(paciente) {

    paciente.addEventListener("dblclick", function() {
        console.log("Fui clicado com duplo clique");
        this.remove(); //REMOVE QUEM TEM O EVENTO ATRELADO
    });
    
});*/
