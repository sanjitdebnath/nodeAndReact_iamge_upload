const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const { CONNREFUSED } = require('dns');

router.post('/upload', uploadController.upload);
router.get('/get_AllMedia', uploadController.get_AllMedia);
router.get('/get_Media_count', uploadController.get_Media_count);
router.post('/delete_single_data', uploadController.delete_single_data);


router.post('/delete-file', (req, res) => {
    const filePath = path.join(__dirname, '../../uploads', req.body.filename);


    fs.unlink(filePath, (err) => {
      if (err) {
        console.error('Error deleting file:', err);
        return res.status(500).send('Error deleting file');
      }
      console.log('File deleted successfully');
      res.send('File deleted successfully');
    });
  });

module.exports = router;
