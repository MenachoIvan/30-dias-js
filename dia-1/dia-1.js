function decodeSpell(spell) {
  const spellMap = {
    '☽': 1,
    '☾': 5,
    '♁': 10,
    '⚕': 50,
    '⚡': 100,
  };

  // Check if the input is a string
  if (typeof spell !== 'string') throw new Error('Input must be a string');

  // Check if the input is empty
  if (spell.length === 0) throw new Error('Input cannot be empty');

  // Check if the input contains only valid characters
  const validChars = Object.keys(spellMap);
  for (let i = 0; i < spell.length; i++) {
    if (!validChars.includes(spell[i])) {
      return NaN;
    }
  }

  // Check if the input contains only one character
  if (spell.length === 1) {
    return spellMap[spell];
  }

  // Check if the input contains more than one character but if the first character is not greater than the second character, don't add, substract
  if (spell.length > 1) {
    let total = 0;
    for (let i = 0; i < spell.length; i++) {
      if (i === 0) {
        total += spellMap[spell[i]];
      } else {
        if (spellMap[spell[i]] > spellMap[spell[i - 1]]) {
          total += spellMap[spell[i]] - 2 * spellMap[spell[i - 1]];
        } else {
          total += spellMap[spell[i]];
        }
      }
    }
    return total;
  }
}

console.log(decodeSpell('☽☽☽')); // 3
console.log(decodeSpell('☽☾')); // 4 (5 - 1)
console.log(decodeSpell('☾☽')); // 6 (5 + 1)
console.log(decodeSpell('☾☽☽☽')); // 8 (5 + 3)
console.log(decodeSpell('☽☽☽⚡')); // 101 (1 + 1 + (100 - 1))
console.log(decodeSpell('☽⚕')); // 49 (50 - 1)
console.log(decodeSpell('☽☽☾')); // 5 (1 + (5 - 1))
console.log(decodeSpell('☽☽☾⚡')); // 95 (1 + (-1 + (100 - 5)))
console.log(decodeSpell('☽⚕⚡')); // 49 (-1 - 50 + 100)
console.log(decodeSpell('⚡⚡⚡')); // 300
console.log(decodeSpell('⚕⚡')); // 50
console.log(decodeSpell('⚕.♒')); // NaN
