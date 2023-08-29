const { Router } = require("express");
const { uploadFile } = require("./S3");
const router = Router();

router.get("/archivo/:fileName", async (req, res) => {
  try {
    const result = await readFile(req.params.fileName)
    res.send ('archivo descargado')
  } catch (error) {
    res.send(error.message)
  }

});

router.post("/upload", async (req, res) => {
  console.log(req.files["Photo"]);
  const result = await uploadFile(req.files["Photo"]);

  console.log(result);

  res.send("Archivo Subido!");
});

module.exports = router;
