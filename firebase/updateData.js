const firebase = require("./firebse_connect");

module.exports={
    _updateData: function(req){
        //vamos atualizar apenas o state de um appointments
        let id = req.id;
        let state = req.state; 
        firebase.database().ref("users/"+id+"/").update({
            state: state
        });
    }

}