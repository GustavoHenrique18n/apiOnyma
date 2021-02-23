const firebase = require("./firebse_connect");
const crypto = require('crypto');
const pwd = 'abcdefg'

module.exports={
    saveData: function (req){

    let text = req.adress
    text = crypto.createHmac('sha256',pwd)
                 .update(text)
                 .digest('hex') 
                  

        firebase.database().ref('users/').push({
            adress:`${text}`,
            patientName:req.patientName,
            dateTime:req.dateTime,
            state:req.state,
          
        });
       
    }
     
}


   


 