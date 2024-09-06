function pesquisar() {
    var section = document.getElementById('C4r');
    let resultado = '';
    let campoPesquisa = document.getElementById('campo_das_pesquisas').value.toLowerCase();

    // Assumindo que `dados` é um array de objetos com as propriedades `título`, `descrição` e `tags` (sendo `tags` um array)
    for (let dado of dados) {
        let título = dado.título.toLowerCase();
        let descrição = dado.descrição.toLowerCase();
        let tags = dado.tags.toLowerCase(); // Junta todas as tags em uma única string

        if (título.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultado += `
                <div class="item-resultado">
                    <h2>${dado.título}</h2>
                    <p class="descricao-meta">${dado.descrição}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    if (resultado === '') {
        section.innerHTML = '<p>Nada foi encontrado</p>';
    } else {
        section.innerHTML = resultado;
    }
}