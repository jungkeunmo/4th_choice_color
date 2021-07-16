import express from "express";
import path from "path";
import morgan from "morgan";

const app = express();
const PORT = 7000;

app.set("view engine", "pug");
app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START🥕, http://localhost:${PORT}`);
});