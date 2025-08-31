const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function exibirOsLivrosNaTela(listaDeLivros) {
  elementoParaInserirLivros.innerHTML = ''

  listaDeLivros.forEach(livro => {
    let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
    elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo"> ${livro.titulo} </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
  })

  const valorTotalNumero = listaDeLivros.filter(livro => livro.quantidade > 0).reduce((acc, livro) => acc + Number(livro.preco || 0), 0)

  const valorTotalFormatado = valorTotalNumero.toFixed(2).replace('.', ',')

  elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis"> 
      <p>Todos os livros desta categoria por R$ <span id="valor">${valorTotalFormatado}</span></p>
    </div>
  `
}