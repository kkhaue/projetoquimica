function toggleValues(valueType, values) {
  const elements = document.querySelectorAll('#tabela span:nth-child(6)');

  elements.forEach((element, index) => {
    let newValue;

    if (valueType === 'string') {
      newValue = String(values[index]);
    } else {
      newValue = 'Unsupported data type';
    }

    element.textContent = newValue;
  });
}

const decimalButton = document.getElementById('decimal');
const arredondadoButton = document.getElementById('arredondado');

// Example values to be displayed as decimals and arredondado
const decimalValues = ["1,0","1,0"]; // Add your specific decimal values here
const arredondadoValues = [1,4,7,9,11,12,14,16,19,20,23,24,27,28,31,32,35,40,39,40,45,48,51,52,55,56,59,59,64,65,
                           70,73,75,79,80,84,85,88,89,91,93,96,"(98)",101,103,106,108,112,115,119,122,128,127,131,133,
                           137,178,181,184,186,190,192,195,197,201,204,207,209,"(209)","(210)","(222)","(223)","(226)",
                           "(267)","(262)","(266)","(264)","(227)","(268)","-","-","-","-","-","-","-","-","-",139,140,
                           141,144,"(145)",150,152,157,159,163,165,167,169,173,175,"(227)",232,231,238,"(237)","(224)",
                           "(243)","(247)","(247)","(251)","(252)","(257)","(258)","(259)","(262)"
                          ];

decimalButton.addEventListener('click', () => {
  toggleValues('string', decimalValues);
});

arredondadoButton.addEventListener('click', () => {
  toggleValues('string', arredondadoValues);
});
