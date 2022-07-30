const fs = require("fs");
const path = require("path");

//criar pasta
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro", error);
  }
  console.log("Pasta Criada com sucesso!");
});

fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro:", error);
    }
    console.log("Arquivo Criado com sucesso!");
  }
);

//adicionar a um arquivo
fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello world",
  (error) => {
    if (error) {
      return console.log("Erro:", error);
    }
    return console.log("Texto adicionado com sucesso.");
  }
);

//Ler arquivo
fs.readFile(
  path.join(__dirname, "/text", "test.txt"),
  "utf-8",
  (error, data) => {
    if (error) {
      console.log("Erro ", error);
    }
    console.log(data);
  }
);
