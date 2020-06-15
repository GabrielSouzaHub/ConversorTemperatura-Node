const express = require("express");
const app = express();
app.use(express.json())

app.get("/:conversor", (request, response) => {
    const conversor = request.params.conversor;
    let menssagem;
    switch (conversor) {
        case "FparaC":
          const { Tf } = request.body;
          menssagem =`A Temperatura Fahrenheit ${Tf} em Celsius fica: ${(Tf - 32)*5/9}°`;
          break;
        case "CparaF":
          const { Tc } = request.body;
          menssagem =`A Temperatura Celsius ${Tc}° em Fahrenheit fica: ${(Tc*9/5)+32}`;
          break;
    }
    response.json(menssagem);
});

app.listen(3000, () => {
    console.log("Servidor ok");
  });