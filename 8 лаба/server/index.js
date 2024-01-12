const express = require("express");
const path = require("path");
const app = express();
const port = 4000;

app.use(express.json());

app.listen(port, () => {
  console.log(`\nServer is running at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  //GET-сервис, который возвращает саму веб-страницу с фронтовым кодом.
  res.sendFile(path.resolve(__dirname, "index.html"));
  console.log("\nHTML is uploaded!");
});

app.get("/get", (req, res) => {
  //GET-сервис, который возвращает какие-то данные в формате JSON.
  res.json({ text: "Я был загружен с помощью GET" });
});

app.post("/post", (req, res) => {
  //POST-сервис, который возвращает какие-то данные в формате JSON.
  res.json({ text: "Я был загружен с помощью POST" });
});

app.post("/postData", (req, res) => {
  //POST-сервис, который принимает какие-то данные.
  const data = req.body;

  console.log("POST-сервис принял следующее сообщение: \n", data);

  res.json({ message: "Данные успешно получены и обработаны." });
});

app.get("/file", (req, res) => {
  //какой-либо сервис для получения данных в формате XML/HTML/JSON в зависимости от заголовка запроса Accept
  const acceptHeader = req.get("Accept");

  let file;

  if (acceptHeader.includes("application/json")) {
    file = path.resolve(__dirname, "downloads", "index.json");
  
  } else if (acceptHeader.includes("application/xml")) {
    file = path.resolve(__dirname, "downloads", "index.xml");

  } else if (acceptHeader.includes("application/html")) {
    file = path.resolve(__dirname, "downloads", "index.html");

  } else {
    res.status(406).send("Not Acceptable");
    return;
  }

  res.download(file);
});