const express = require("express");
const { MongoClient } = require(`mongodb`);

const app = express(),
      port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set(`view engine`, `ejs`);
app.use(express.static(__dirname + '/views'));

app.get(`/`, (req, res) => {
  res.render(`newUser`);
});

app.post(`/signup`, (req, res) => {
  res.send(req.body);
});

app.get(`/search`, (req, res) => {
  res.render(`search`, {query: req.query.q});
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