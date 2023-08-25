const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => res.send("Welcome!"));
router.post("/upload", (req, res) => {
  console.log(req.files);
  res.send("Archivo Subido!");
});

module.exports = router;
