// Express Server
// tutorial: https://www.youtube.com/watch?v=Ejg7es3ba2k&t=712s

//npm run dev

const express = require("express");
const app = express();
const parse = require("./parse.js");

//setting CORS
const cors = require("cors");
app.use(cors());

app.use(express.json({limit: '10mb'})); //parse body as json

app.post("/api", async (req, res) => {
  const imageBase64 = req.body.imageBase64.replace("data:image/jpeg;base64,","")
  let result = await parse.ocr(imageBase64);
  await console.log(result)
  await res.json({result: result});
});

app.listen(1337, () => {

  console.log("Server Started on 1337");
});
