// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const PDFParser = require('pdf-parse');

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });



// router.post('/products', upload.single('pdfFile'), async (req, res) => {
//   try {
//     const pdfBuffer = req.file.buffer;
//     const pdfParser = new PDFParser();  // Crea una instancia de PDFParser
//     console.log(pdfParser)
//     pdfParser.on('pdfParser_dataError', errData => console.error(errData.parserError));
//     pdfParser.on('pdfParser_dataReady', pdfData => {
//       console.log(pdfData.info);  // Muestra las propiedades del PDF
//       res.json({ message: 'PDF properties extracted successfully.' });
//     });
//     pdfParser.parseBuffer(pdfBuffer);  // Analiza el buffer del PDF
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while processing the PDF.' });
//   }
// });

// module.exports = router;





