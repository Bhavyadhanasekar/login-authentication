var studentsService = require('./studentsService');

var createstudentsControllerFn = async (req, res) => {
    try {
        console.log(req.body);
        var status = await studentsService.createUserDBService(req.body);
        console.log(status);

        if (status) {
            res.send({"status": true, "message": "Student created successfully"});
        } else {
            res.send({"status": false, "message": "Error creating user"});
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({"status": false, "message": "Internal Server Error"});
    }
};


var loginstudentsControllerFn = async(req,res)=>{
    var result = null;
    try{
        console.log(req.body)
        result = await studentsService.loginStudentsDBservice(req.body);
        if(result){
            res.send({"status":true,"message":"students details valid"});
        }else{
            res.send({"status": true,"message": "students details valid"});
        }
    } catch (error){
        console.log(error);
        res.send({"status":false,"message":"students details invalid"});
    }
}

module.exports ={ createstudentsControllerFn,loginstudentsControllerFn};