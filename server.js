const express = require("express");
// const {MongoClient } = require(`mongodb`);
var fetchUrl = require("fetch").fetchUrl;

const app = express(),
port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.set(`view engine`, `ejs`);
app.use(express.static(__dirname + '/views'));

app.get(`/`, (req, res) => {
  res.render(`newUser`);
});
app.get(`/about`, (req, res) => {
  res.render(`about`);
});

app.post(`/signup`, (req, res) => {
  res.send(req.body);
});

// let productList = [{
//   url: `images/1.JPG`,
//   name: `ABC Notebook`,
//   price: 40
// },
//   {
//     url: `images/2.JPG`,
//     name: `El qalam`,
//     price: 29
//   },
//   {
//     url: `images/3.JPG`,
//     name: `XYZ Ball pen`,
//     price: 10
//   },
//   {
//     url: `images/4.JPG`,
//     name: `HB2 pencil`,
//     price: 6
//   }]

app.get(`/search`, async (req, res) => {
  productList = [];
  await fetchUrl(`https://fakestoreapi.com/products`, function(error, meta, body) {
    productList = JSON.parse(body.toString())

    res.render(`search`, {
      query: req.query.q, products: productList
    })
  });
});
app.get(`/searchBody`, async (req, res) => {
  // const response = await fetch(`https://www.amazon.in/s?k=${req.query.q}&ref=nb_sb_noss`);
  // const body = await response.text();
  // res.text(body)

  fetchUrl(`https://www.amazon.in/s?k=${req.query.q}&ref=nb_sb_noss`, function(error, meta, body) {
    res.send(body.toString());
  });
});










app.listen(port, () => {
  console.log(`server live at http://localhost:${port}`);
})

// const uri = `mongodb+srv://KabirJyoti:m2IRNkytQeq1AVnc@school-informarion.4yycavr.mongodb.net/?retryWrites=true&w=majority`;
// // const uri = `mongodb+srv://KabirBakshi:KabirBakshi2006@school-informarion.4yycavr.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri);

// const main = async () => {
//   try {
//     await client.connect();

//     // await listDatabases(client);

//     // await createListing(client, {
//     //   name: "Government Co-ed Sarvodaya Vidyalaya sec. 13, Dwarka, New Delhi",
//     //   _id: 1821281
//     // });

//     await find(client);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// };
// // main().catch(e => console.error(e));

// const listDatabases = async (client) => {
//   const databasesList = await client.db().admin().listDatabases();
//   databasesList.databases.forEach((db) => {
//     console.log(` - ${db.name}`);
//   });
// };

// const createListing = async (client, newListing) => {
//   const result = await client.db(`schoolData`).collection(`schools`).insertOne(newListing);
//   console.log(result);
// };
// const find = async (client) => {
//   const result = await client.db(`schoolData`).collection(`schools`).find({
//     _id: {$ne: -1}
//   }).toArray();
//   console.log(result);
// };