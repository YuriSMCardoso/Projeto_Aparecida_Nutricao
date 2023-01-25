var botaoBuscarPacientes = document.querySelector("#buscar-pacientes");

botaoBuscarPacientes.addEventListener("click", function() {

    //INSTANCIANDO O OBJETO QUE SERÁ USADO PARA FAZER REQUISIÇÕES COM O JS
    var xhr = new XMLHttpRequest();

    /*O XMLHttpRequest precisa ser configurado, para dizer qual método HTTP queremos utilizar na requisição, 
    e para qual servidor vamos enviá-la. Para configurar o XMLHttpRequest utilizamos a função .open()*/
    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    /*Para pegarmos a resposta quando a requisiçao HTTP voltar precisamos colocar um escutador de evento no próprio
     XMLHttpRequest, escutando o evento de load */
     xhr.addEventListener("load", function() {
        erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            /*o servidor nos retorna um JSON, um formato de texto muito comum hoje em dia na web. Como não queremos trabalhar 
            com texto e sim com objetos Javascript, vamos parsear este texto para um objeto Javascript equivalente usando 
            a função 'JSON.parse()'*/
            var pacientes = JSON.parse(xhr.responseText);

            pacientes.forEach(function(paciente) {
                adicionarPacienteNaTabela(paciente);
            });

        } else {
            erroAjax.classList.remove("invisivel");
            console.log(xhr.status);
        }

     });

    /*Por último , para enviar a requisição precisamos chamar o método .send() */
    xhr.send();
});
