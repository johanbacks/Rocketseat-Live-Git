const express = require("express")


const app = express();
app.get('/teste' , (res , req) => {
  return res.json({hello : "word"})
});

app.listen("3333");