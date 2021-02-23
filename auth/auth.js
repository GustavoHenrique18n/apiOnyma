const jwt = require ('jsonwebtoken')
const SECRET = 'gustavo'

    var verifyjwt = function (req,res,next){
    const token = req.headers['x-access-token']
    if(!token){
      res.status(401).json({auth: false, message: 'No token provided.' })
    }
    jwt.verify(token,SECRET, (err,decoded)=>{
      if(err){
        res.status(500).json({ auth: false, message: 'Failed to authenticate token.'})
      }
      
       req.id = decoded.id 
       
       next();
    })
  }

  module.exports= verifyjwt;