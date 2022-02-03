const express = require('express');
//on importe le module express’
const bodyParser = require('body-parser');
// pour gérer la demande POST provenant du front-end
// permet d'extraire l'objet JSON de la demande

const helmet = require('helmet');
const path = require('path');
const starRoutes = require('./routes/starRoutes');

const app = express();
//on crée notre app qui appelle la méthode express -> crée une app express’
app.use(helmet()); // utilisation de helmet pour la sécurité

// accès cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
    next();
});

const db = require("./models");
 
db.sequelize.sync({ alter: process.env.APP_ENV === "dev" }).then(() => {
    console.log("connexion à la bdd ok !");
}).catch(e => console.error(e));
    
/*    
app.use(express.json()); //express.json plus de bodyparser
//app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log('Requête reçue !'); //permet d’afficher un mess dans le console.log’
    next();
});
    app.use((req, res, next) => {
    res.status(201); //permet de changer le statut’
    next();
});
    app.use((req, res, next) => {
    res.json({ message: 'Votre requête a bien été reçue !' });
});*/

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/star', starRoutes);

module.exports = app;
//on exporte cette app, cette constante pour pouvoir y accéder de nos autres fichiers, comme le server node’
