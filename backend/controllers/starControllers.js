const db = require("../models");
const Star = db.star;
const Op = db.sequelize.Op; 
const fs = require('fs'); // « file system », donne accès aux fonctions qui nous permettent de modifier le fs, 
//y compris aux fonctions permettant de supprimer les fichiers

//const starModel = require("../models/starModel");

exports.createStar = (req, res, next) => {
    if(!req.body.name) {
        res.status(400).json({
        message: "Le nom est requis !"
        });
        return;
    }
    const starObject = req.file ?
        {
        ...req.body, 
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : { 
        ...req.body
        };
    Star.create(starObject)
    .then((star) => {
        console.log(star.imageUrl);
        return res.status(201).json(star); 
    })
    .catch((err) => {
        return res.status(500).json({
        message: err.message || "Erreur pendant la création de la star"
        
        });
    });
};

exports.findAllStar = (req, res, next) => {
    Star.findAll()
    .then((stars) => {
        return res.status(200).json(stars);
    })
    .catch((err) => {
        return res.status(500).json({
        message: err.message || "some error occured while looking for the stars"
        });
    });
};

exports.findOneStar = (req, res, next) => {
    Star.findByPk( req.params.id ) // findByPk à utiliser QUE pour récupérer un id
    .then((star) => {
        if(star === null) {
        res.status(400).json({
        message: "Le star n'existe pas"
        });
        return;
    }
        return res.status(200).json(star); 
    })
    .catch((err) => {
        return res.status(404).json({
        message: err.message || "some error occured while looking for the star"
        });
    });
};;

exports.updateStar = (req, res, next) => {
    const id = req.params.id;
    const starObject = req.file ?
        {
        ...req.body, 
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : { ...req.body };
    Star.update(starObject, {where: { id: id }})
    .then(num => {
        if(num == 1) {
        res.status(200).json({ message: "star was updated successfully !" });
        } else {
        res.status(400).json({
            message: `Can't update star with id=${id}. Maybe star wasn't found or req.body is empty`
        });
        }
    })
    .catch((err) => {
        res.status(500).json({
        message: `Error updating star with id=${id}`
        });
    });
};

exports.deleteStar = (req, res, next) => {  
    Star.findByPk( req.params.id )
    .then(star => {
      if(star.imageUrl) {
        const filename = star.imageUrl.split('/images/')[1];
        console.warn(filename);
        fs.unlink(`images/${filename}`, () => {
            Star.destroy({where: {id: req.params.id} }) 
          .then(num => {
            if(num == 1) {
              return res.status(200).json({ message: "Star was deleted successfully !" });
            } else {
              return res.status(400).json({
                message: `Can't delete Star with id=${id}. Maybe Star wasn't found`
              });
            }
          })
          .catch((err) => {
            return res.status(500).json({
              message: `Error deleting Star with id=${id}`
            });
          });
        });
      } else {
        Star.destroy({where: {id: req.params.id} }) 
        .then(num => {
          if(num == 1) {
            return res.status(200).json({ message: "Star was deleted successfully !" });
          } else {
            return res.status(400).json({
              message: `Can't delete Star with id=${id}. Maybe Star wasn't found`
            });
          }
        })
        .catch((err) => {
          return res.status(500).json({
            message: `Error deleting Star with id=${id}`
          });
        });
      }
    })
    .catch(error => res.status(500).json({ message: "Le Star n'existe pas" }));
  };