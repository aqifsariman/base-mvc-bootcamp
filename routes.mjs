import db from "./models/index.mjs";
import items from "./controllers/items.mjs";
// import your controllers here

export default function bindRoutes(app) {
  app.get("/items", (req, res) => {
    res.render("index", { items });
  });
}
