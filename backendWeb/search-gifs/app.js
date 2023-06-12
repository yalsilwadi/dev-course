const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
// App
const app = express();
app.use(express.static(path.join(__dirname, "public")));

// Init Tenorjs
const SECRET_KEY = "AIzaSyCM4lMIooaRqum8NDpboZRHoA0eIjfPgww";
const Tenor = require("tenorjs").client({
  Key: SECRET_KEY,
  Filter: "low",
  Locale: "en_US",
});

// hbs
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", "./views"); // you can rename views folder here

// HOMEWORK
// render static files (css)

// Route
app.get("/", (req, res) => {
  const { term } = req.query;

  //   Simple error handling
  if (!term || term.length === 0) {
    res.render("home", { error: "Provide valid term" });
  }
  if (term) {
    Tenor.Search.Query(term, "2")
      .then((GIFs) => {
        /*
        TenorJS v1.0.10 includes small patches to ensure 
        the wrapper doesn't break following the release 
        of Tenor's V2 API. TenorJS v2 will be coming soon

        Simple workaround until tenorjs v2 comes out 
        */
        GIFs.forEach((gif) => {
          gif.itemurl = gif.itemurl + ".gif";
        });
        /* Simple workaround until tenorjs v2 comes out */
        res.render("home", { gifs: GIFs });
      })
      .catch((err) => {
        // HOMEWORK - handle this error as well
        console.log(err);
      });
  }
});

// HOMEWORK
app.get("/random", (req, res) => {
  // render random gifs
  Tenor.Search.Random("food", "3")
  .then((Results) => {
    Results.forEach((Post) => {
        console.log(`Item ${Post.id} (Created: ${Post.created}) @ ${Post.url}`);
        Post.itemurl = Post.itemurl + ".gif";
    });
    res.render("random", { results: Results });
}).catch(console.error);
  
});

// HOMEWORK
app.get("/suggestions", (req, res) => {
  // render suggested gifs
  Tenor.Search.Random("arsenal", "3")
  .then((Sugges) => {
    Sugges.forEach((Post) => {
        console.log(`Item ${Post.id} (Created: ${Post.created}) @ ${Post.url}`);
        Post.itemurl = Post.itemurl + ".gif";
    });
    res.render("suggestions", { sugges: Sugges });
}).catch(console.error);
});

// Listen
app.listen(5050, () => {
  console.log("Running on 5050!!!");
});