const multer = require('multer');
const path = require('path');
// Settings
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../uploads'),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname))
    }
});
module.exports = multer({ storage });