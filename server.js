//define dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

//Handle upload image
const uploadFolder = __dirname + '/uploads/images'
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, uploadFolder)
    },
    filename: function(req, file, cb){
        cb(null, Date.now()+path.extname(file.originalname))
    }
})

//List of middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use(multer({storage: storage}).single('image'));
app.use(express.static('uploads'))


//define routes
var routes = require('./routes');
routes(app);

//Handle get image
app.get('/image/:fileName', (req,res)=>{
    const file = `${__dirname}/uploads/images/${req.params.fileName}`;
    res.sendFile(file);
});

//run server
app.listen(process.env.PORT||8000, ()=>{
    console.log('Server run at port: 8000')
});