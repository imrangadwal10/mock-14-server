const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const app = express();
const userRoute = require("./user/user.route");
const PORT = 8005;

app.use(cors());
app.use(express.json());
app.use("/user",userRoute)

app.get("/", (req, res) => {
  res.status(200).send("hello World");
});


app.get("/randomword", (req, res) => {
  try {
    const words = [
      "Hello",
      "World",
      "postgraduate",
      "consecrate",
      "student",
      "culture",
      "limit",
      "america",
      "japan",
      "china"
    ];
    let randomWord = words[Math.floor(Math.random() * words.length)];
    return res.send(randomWord);
  } catch (e) {
     return res.send(e.message);
  }
});



app.listen(PORT, async () => {
  await connect();
  console.log(`server started on port ${PORT}`);
});
