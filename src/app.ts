import express from "express";
import childClass from "./class1";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  // res.send("The sedulous hyena ate the antelope!");
  const obj = new childClass("ENTC");
  res.send(`Name : ${obj.printName()} - Dept : ${obj.printDept()}`);
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
