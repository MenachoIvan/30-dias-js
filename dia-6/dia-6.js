function resolverConflictos(firstUserChanges, secondUserChanges) {
  let texto = "";

  // Aplicar cambios del primer usuario
  firstUserChanges.forEach((cambio) => {
    if (cambio.op === "insert") {
      if (cambio.index >= 0 && cambio.index <= texto.length) {
        texto =
          texto.slice(0, cambio.index) +
          cambio.text +
          texto.slice(cambio.index);
      }
    } else if (cambio.op === "delete") {
      if (cambio.index >= 0 && cambio.index < texto.length) {
        texto = texto.slice(0, cambio.index) + texto.slice(cambio.index + 1);
      }
    }
  });

  // Aplicar cambios del segundo usuario
  secondUserChanges.forEach((cambio) => {
    if (cambio.op === "insert") {
      if (cambio.index >= 0 && cambio.index <= texto.length) {
        texto =
          texto.slice(0, cambio.index) +
          cambio.text +
          texto.slice(cambio.index);
      }
    } else if (cambio.op === "delete") {
      if (cambio.index >= 0 && cambio.index < texto.length) {
        texto = texto.slice(0, cambio.index) + texto.slice(cambio.index + 1);
      }
    }
  });

  return texto;
}

const cambiosA = [
  { user: "ana", op: "insert", index: 0, text: "Hola" },
  { user: "ana", op: "insert", index: 4, text: " mundo" },
];

const cambiosB = [
  { user: "luis", op: "delete", index: 4 },
  { user: "luis", op: "insert", index: 4, text: "Mundo cruel" },
];

console.log(resolverConflictos(cambiosA, cambiosB));
// => "HolaMundo cruelmundo"
