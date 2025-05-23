function detectarPlagio(base, frasesEstudiante) {
  const normalizar = (frase) =>
    frase
      .toLowerCase()
      .trim()
      .replace(/^[¡¿.!?]+|[¡¿.!?]+$/g, '');

  const baseNormalizada = base.map(normalizar);
  const frasesEstudianteNormalizadas = frasesEstudiante.map(normalizar);

  return frasesEstudiante.filter((frase, index) =>
    baseNormalizada.includes(frasesEstudianteNormalizadas[index])
  );
}

const base = [
  'El conocimiento es poder.',
  'Aprender nunca es una pérdida de tiempo!',
  'Programar es divertido',
];

const frasesEstudiante = [
  'el conocimiento es poder',
  ' Aprender nunca es una pérdida de tiempo ',
  'programar es divertido.',
  'La práctica hace al maestro',
];

console.log(detectarPlagio(base, frasesEstudiante));
console.log('-----------------------');
console.log(detectarPlagio(['¡Siempre adelante!'], ['siempre adelante'])); // --> expected ["siempre adelante"]
