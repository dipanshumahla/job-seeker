const path = require('path');
const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({   
    destination: function(req, file, cb) { 
      console.log(req.body)
      const { userId } = req.body;
      const dir = `./uploads/user/${userId}`;

      fs.exists(dir, exist => {
        if (!exist) {
          fs.mkdir(dir, error => cb(error, dir))
        }
        cb(null, dir) 
      });
      
    }, 
    filename: function (req, file, cb) { 
      
       cb(null , 'resume'+path.extname(file.originalname));   
    }
});

const upload = multer({ storage }).single("cvFile");

const uploadCV = (req,res)=>{
    upload(req, res, (err) => {
        if(err) {
          console.log(err)
          res.status(400).send("Something went wrong!");
        }else
        res.send('done');
      });
}

module.exports = { uploadCV};