var db=require('../dbconn'); 

var user={
    getAllUsers:function(callback){
        return db.query("select * from user_table",callback);
    },

    signup:function(item,callback){
        return db.query("insert into user_table(email_id,password,user_name,mobile_no,user_type,city,address) values(?,?,?,?,?,?,?)",[item.email_id,item.password,item.user_name,item.mobile_no,item.user_type,item.city,item.address]);
    },

    updateUser:function(email_id,item,callback){
        return db.query("update user_table set user_name=?,mobile_no=?,user_type=?,city=?,address=? where email_id=?",[item.user_name,item.mobile_no,item.user_type,item.city,item.address,email_id],callback);
    },

    deleteUser:function(email_id,callback){
        return db.query("delete from user_table where email_id=?",[email_id],callback);
    }
};

module.exports=user;