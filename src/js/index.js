//passo 1
const abas = console.log(document.querySelectorAll(".aba")); 

abas.forEach(aba => {
    //passo 2
    aba.addEventListener("click", function() {

        //para não executar código desnecessariamente 
        if(aba.classList.contains("selecionado")){
            return;
        }

        //passo 3
        const abaSelecionada = documet.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado")
        //passo 4
        aba.classList.add("selecionado")
        //passo 5
        const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");
        //passo 6
        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba) informacaoASerMostrada.classList.add("selecionado")
    });
});