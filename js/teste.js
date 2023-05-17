var a =""

function ativa(cdc){
    let a = document.getElementById('apresentacao');
    let c = document.getElementById('contato');
    let n_eu = document.getElementById("eu");
    let n_contatos = document.getElementById("contatos");

    if(cdc == true){
        if(!a.classList.contains("ativado")){
            a.classList.add("ativado");
            c.classList.remove("ativado");
            n_eu.classList.add("selecionado");
            n_contatos.classList.remove("selecionado");
        }
    }else{
        if(!c.classList.contains("ativado")){
            c.classList.add("ativado");
            a.classList.remove("ativado");
            n_contatos.classList.add("selecionado");
            n_eu.classList.remove("selecionado");
        }
    }

    

}

console.log(a);
