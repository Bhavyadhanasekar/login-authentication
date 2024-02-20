var studentsmodel =require('./studentsModel');
var key ='123456789112345dfg';
var encryptor = require('simple-encryptor')(key);

module.exports.createUserDBService =async (studentsDetails)=>{
 
        try{
        var studentsModelData = new studentsmodel();

        studentsModelData.firstname = studentsDetails.firstname;
        studentsModelData.lastname = studentsDetails.lastname;
        studentsModelData.email = studentsDetails.email;
        studentsModelData.password = studentsDetails.password;
        var encrypted= encryptor.encrypt(studentsDetails.password);
        studentsModelData.password = encrypted;

        await studentsModelData.save();
        return true;
        }
        catch(error){
            console.log("There is an error in CreatestudentsDBservice",error);
            return false;
        }
   
}

module.exports.loginStudentsDBservice = async (studentsDetails)=>
{
    try
    {
       const result= await studentsmodel.findOne({ email: studentsDetails.email})
        {
                if(result !==undefined && result !==null)
                {
                    var decrypted = encryptor.decrypt(result.password);

                    if(decrypted=== studentsDetails.password)
                    {
                        console.log("student validated successfully");
                    }
                    else{
                        console.log("student validated failed");
                    }
                }
                else{
                    console.log("invalid students detailsssss");
                }
            }
        }
    catch(error){
        console.log(error)
    }
    }

