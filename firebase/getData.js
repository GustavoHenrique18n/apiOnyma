
const firebase = require("./firebse_connect");
 
 
module.exports = {
    _getData : function(callback){
        
            firebase.database().ref("users/").once("value",snapshot=>{
              callback(snapshot.val());

                

            }) 
             

             
   
    }
    

}
