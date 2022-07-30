const path = require("path");

// nome do arquivo atual
console.log(path.basename(__filename));

//nome do diretório atual
console.log(path.dirname(__filename));

// extençao do arquivo
console.log(path.extname(__filename));

//criar objeto path
console.log(path.parse(__filename));

//path.join juntar caminhos de arquivo
console.log(path.join(__dirname, "test", "test.html"));
