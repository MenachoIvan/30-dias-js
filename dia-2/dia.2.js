function getCompromisedFiles(lastSafeDownload, droneLogs) {
  let aux = [];
  for (let i = 0; i < droneLogs.length; i++) {
    if (droneLogs[i][1] > lastSafeDownload && !aux.includes(droneLogs[i][0])) {
      aux.push(droneLogs[i][0]);
    }
  }
  aux.sort((a, b) => a - b);

  return aux;
}

const lastSafeDownload = 1670000000;

const droneLogs = [
  [42, 1670000500],
  [13, 1670000000],
  [8, 1670000700],
  [8, 1670000001],
  [99, 1669999999],
];

console.log(getCompromisedFiles(lastSafeDownload, droneLogs));
// => [8, 42]
