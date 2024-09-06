function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Para fins de depuração, mostra o elemento no console

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        // Cria um novo elemento HTML para cada dado
        section.innerHTML += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
        `;
    }

    // **Observação:** A linha abaixo está incorreta e provavelmente causará um erro.
    // section.innerHTML = resultados-pesquisa; // Isso deve ser section.innerHTML = resultados;

    // **Sugestão:** Para evitar problemas, você pode remover essa linha, pois o resultado já está sendo concatenado dentro do loop.
}
// console.log(dados); // Mostra os dados no console (para depuração)