async function carregarGatinho() {
  const img = document.getElementById("catImage");
  const error = document.getElementById("error");

  try {
    error.textContent = "";

    const resposta = await fetch("https://api.thecatapi.com/v1/images/search");
    const dados = await resposta.json();

    img.src = dados[0].url;

  } catch (err) {
    error.textContent = "Erro ao carregar imagem 😿";
    console.error(err);
  }
}

carregarGatinho();