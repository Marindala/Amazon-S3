const express = require ('express')
const cors = require ('cors')
const app = express()
const fileUpload = require ('express-fileupload')
const photosRoutes = require ('./photos.router.js')

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './archivos'
}));

app.use(express.static('images'))



app.use(cors({
    origin:"http://127.0.0.1:5173" //vas a permitir ese dominio, en la documentación se puede ver con multiples dominios //habia puesto un slash más por eso no me lo tomaba y me tiraba error
}))

app.use(photosRoutes) //app quiero que utilices photosRoutes

app.listen(3000, console.log("estoy escuchando"))



//npm i express-fileupload
//npm upload file
//npm multer
//npm busboy
//