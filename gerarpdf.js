
function imagem() {
  // Seleciona o elemento para capturar
  const tabela = document.querySelector("#tabela");

  // Define a escala da imagem para aumentar a qualidade
  const escala = 1.05 ;

  // Captura a imagem da tabela com html2canvas
  html2canvas(tabela, { 
    width: tabela.offsetWidth * escala, 
    height: tabela.offsetHeight * escala,
    scale: escala
  }).then(canvas => {
    // Converte a imagem em uma URL de dados
    const imgData = canvas.toDataURL();

    // Cria um link de download com a imagem
    const link = document.createElement('a');
    link.href = imgData;
    link.download = 'tabela.png';
    document.body.appendChild(link);

    // Clica no link para iniciar o download
    link.click();

    // Remove o link do documento
    document.body.removeChild(link);
  });
}


