import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import exphbs from "express-handlebars";
import methodOverride from "method-override";
import session from "express-session";
import { app, PORT } from "./server.js";
import router_i from "./routes/index.js";
import router_u from "./routes/users.js";
import router_n from "./routes/notes.js";

//init
import "./database.js";
const __dirname = dirname(fileURLToPath(import.meta.url));

//settings
app.set("views", join(__dirname, "views"));

app.engine(
  ".hbs",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: join(app.get("views"), "layouts"),
    partialsDir: join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

//middle
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "mysecretapp",
    resave: true,
    saveUninitialized: true,
  })
);

//global

//routes
app.use(router_i);
app.use(router_u);
app.use(router_n);

//static
app.use(express.static(join(__dirname, "public")));

//server
app.listen(PORT, () => {
  console.log("Servidor escuchando en puerto", PORT);
});
