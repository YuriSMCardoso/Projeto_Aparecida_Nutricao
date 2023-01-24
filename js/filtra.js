var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {

    var nomeInput = this.value;
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0) {

        pacientes.forEach(function(paciente) {
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            
            var expressao = new RegExp(nomeInput,"i");

            //if(nome != nomeInput) {
            if(!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
    
        })

    } else {
        pacientes.forEach(function(paciente) {
            paciente.classList.remove("invisivel");
        })
    }

})