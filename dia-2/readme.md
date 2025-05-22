🤖 Reto: Archivos comprometidos
En el año 3025, las ciudades están controladas por Inteligencias Artificiales que almacenan registros de todos los movimientos humanos.

Cada cierto tiempo, los nodos de vigilancia hacen una descarga segura de datos para evitar pérdidas ante apagones del sistema.

Tienes el timestamp de la última descarga segura y un registro de modificaciones recientes que hicieron los drones. Cada modificación está representada como un par: [ID del archivo, timestamp de modificación].

Tu misión es implementar la función getCompromisedFiles que devuelva un array con los IDs de los archivos modificados después de la última descarga, ordenados de menor a mayor.

Ejemplos
const lastSafeDownload = 1670000000

const droneLogs = [
[42, 1670000500],
[13, 1670000000],
[8, 1670000700],
[8, 1670000001],
[99, 1669999999],
]

getCompromisedFiles(lastSafeDownload, droneLogs)
// => [8, 42]
📌 Reglas:
Si al menos una modificación es posterior al lastSafeDownload, incluye ese ID.
No repitas IDs, aunque aparezcan varias veces.
Devuelve un array vacío si no hay archivos comprometidos.
El resultado debe estar ordenado de forma ascendente.
