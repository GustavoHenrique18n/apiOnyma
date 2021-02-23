const firebase = require("./firebse_connect");

module.exports={
    _deleteUserData: function(callback,id){
        deleteData = firebase.database().ref("users/"+ id).remove()
         
        callback("sucess")
    }
}