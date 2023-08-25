const express = require('express');
const multer = require('multer'); // Para manejar la carga de archivos
const pdf = require('pdf-parse'); // Para analizar archivos PDF
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Configuración de multer para manejar la carga de archivos
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 } // Limita el tamaño del archivo a 10 MB
}).single('pdfFile');

app.use(express.static('public'));

app.post('/upload', (req, res) => {
  upload(req, res, async function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    if (!req.file) {
      return res.status(400).send('No se ha seleccionado ningún archivo.');
    }

    const filePath = req.file.path;

    // Analizar el archivo PDF
    try {
      const dataBuffer = fs.readFileSync(filePath);
      const data = await pdf(dataBuffer);
      console.log(data.text);
      fs.unlinkSync(filePath); // Elimina el archivo después de usarlo
      res.send('Contenido del PDF mostrado en la consola.');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al analizar el archivo PDF.');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
