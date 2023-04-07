
function imagem() {
  // Seleciona o elemento para capturar
  const tabela = document.querySelector("#tabela");

  // Define a escala da imagem para aumentar a qualidade
  const escala = 1.03;

  // Captura a imagem da tabela com html2canvas
  html2canvas(tabela, { 
    width: tabela.offsetWidth * escala, 
    height: tabela.offsetHeight * escala,
    scale: escala
  }).then(canvas => {
    // Converte a imagem em uma URL de dados
    const imgData = canvas.toDataURL();

    // Abre uma nova janela com a imagem
    const novaJanela = window.open();
    novaJanela.document.write(`<img src="${imgData}" alt="Imagem da tabela">`);
  });
}

