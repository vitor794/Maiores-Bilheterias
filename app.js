function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
     // Loga a seção no console para verificação

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value
    
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum filme foi encontrado</p>"
        return  
    }

    campoPesquisa = campoPesquisa.toLowerCase()
 
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada dado (filme) na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        if (titulo.includes(campoPesquisa) || dado.
        descricao.includes(campoPesquisa))
        tags = dado.tags.toLowerCase(campoPesquisa)
        {
            //cria um novo elemento
            resultados += `
            <div class="item-resultado"> 
                <h2>
                    <a href="#" target="_blank"> ${dado.titulo} </a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank" > - Mais informações - </a>
                <a href=${dado.link2} target="_blank" >  Onde assistir </a>
            </div>
        `;
        }
        // Cria uma nova div para cada resultado, formatando-a com HTML

    }
    if (!resultados){
        resultados = "<p>Nenhum filme foi encontrado</p>"
    }
    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
}
