var express = require("express");
var router = express.Router();
const  { User } = require('../models');



router.use(express.static("public"));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Laboratorio" });
});

router.get("/login", function (req, res, next) {
  res.render("login");
});

router.get("/main", function (req, res, next) {
  res.render("menu");
});

// Ruta para renderizar la otra plantilla cuando se hace click en una opción del menú
router.get("/main/:id", (req, res) => {
  const id = req.params.id;
  //lógica para determinar qué plantilla renderizar según el 'id'
  switch (id) { 
    case "patient":
      res.render("menus/mainPatient.pug");
      break;
    case "order":
      res.render("menus/mainOrder.pug");
      break;
    case "result":
      res.render("menus/mainResult.pug");
      break;
    case "exam":
      res.render("menus/mainExam.pug");
      break;
    case "sample":
      res.render("menus/mainSample.pug");
      break;
    case "user":
      res.render("menus/mainUser.pug");
      break;
    case "audit":
      res.render("menus/mainAudit.pug");
      break;

    default:
      res.render("error.pug");
      break;
  }
});

router.get("/main/patient/:id", (req, res) => {
  const id = req.params.id;
  //lógica para determinar qué plantilla renderizar según el 'id'
  switch (id) {
    case "add":
      res.render("menus/mainsPatient/addPatient.pug");
      break;
    case "search":
      res.render("menus/mainsPatient/searchPatient.pug");
      break;
    case "update":
      res.render("menus/mainsPatient/updatePatient.pug");
      break;

    default:
      res.render("error.pug");
      break;
  }
});
router.post("/registrarUser", async (req, res) => {


  const newUser = await User.create({ 
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gender: req.body.gender,
    active:req.body.active,
    dni: req.body.dni,
    phone: req.body.phone,
    email: req.body.email,
    adress: req.body.adress,
    password: req.body.pasword,
    location: req.body.location,

  }); 
  res.render("menus/mainPatient.pug")
})


module.exports = router;
