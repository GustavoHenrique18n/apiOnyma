const firebase = require("./firebse_connect");
module.exports={
    

    _databyid : (callback)=>{
       
            firebase.database().ref("users/").on("value",(snapshot)=>{
                    callback(snapshot.val());

    });

    }
           
    

}


