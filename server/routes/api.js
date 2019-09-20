const express = require('express');
const router = express.Router();
var transaction = require('node-mysql-transaction');

var mysql = require('mysql');
var con = mysql.createConnection({host:'localhost',user:'root',password:'',database:'shopping_cart'});


// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

var msg3="Successfullly Uploaded";
var msg1 = "valid"
var msg2="invalid";
var msg4 = "valid";
// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    var sql = "select * from tbl_category";
    con.query(sql,function(err,rows){
        if(err) {
            sendError(err, res);
        }
        response.data = rows;
        res.json(response);
    })
});

router.post('/login', (req, res) => {

	//var sql = "CALL users";

        var uname = req.body.uname;
        var pass = req.body.pass;
        var result;
    // var sql = "select * from users where uname='"+uname+"' and password='"+pass+"'";
    var sql = "CALL users_test('" + uname + "','" + pass + "', @ress)SELECT '@ress'";
    //console.log(sql);
    con.query(sql,function(err,rows){
    	//console.log('m here');
        if(err) throw err;    
        console.log(rows);
        if(rows.affectedRows != '0')
        {
        	//console.log('in the if');
        	
            //response.data = rows;
            //res.json(response);
            res.json({'msg':msg1, data : rows[0] })
            
        }
        else
        {
        res.json({'msg':msg2});
        }
        
    });
        
});

router.post('/resumedetail', (req, res) => {

        // var uname = req.body.uname;
        // var pass = req.body.pass;
    var sql = "select * from resume where id='"+req.body.nameId+"' LIMIT 1;";
    //console.log(req.body);
    con.query(sql,function(err,rows){
        if(err) throw err;    
        if(rows.length)
        {
            response.data = rows;
            response.msg = msg4;
            res.json(response);
        }
        else
        {
            response.msg = msg2;
            res.json(response);
        }
    });
        
});



router.post('/addExam', (req, res) => {


con.beginTransaction(function(err){
if(err) {
  throw err;
}

var correctAnswer = req.body.isCorrect;
// console.log(correctAnswer);
var isCorrectOne = isCorrectTwo = isCorrectThree = isCorrectFour = 0;
if(correctAnswer == 'isCorrectOne'){
    isCorrectOne = '1';
} else if(correctAnswer == 'isCorrectTwo'){
     isCorrectTwo = '1';
}else if(correctAnswer == 'isCorrectThree'){
     isCorrectThree = '1';
} else if(correctAnswer == 'isCorrectFour'){
     isCorrectFour = '1';
}

var sql = "INSERT into `question_table`(`questionCategory`,`question`,`createdDate`) VALUES ('"+req.body.type_question+"','"+req.body.question+"','"+req.body.CurrentDate+"')";
con.query(sql, function(err,rows){
  if(err){
    con.rollback(function(){
      throw err;
    });
  }


var log = rows.insertId;

 var sql2 = "INSERT into `answer_table` (`questionId`,`answer`,`isCorrect`,`createdDate`) VALUES ('"+log+"','"+req.body.answerOne+"','"+isCorrectOne+"','"+req.body.CurrentDate+"'), ('"+log+"','"+req.body.answerTwo+"','"+isCorrectTwo+"','"+req.body.CurrentDate+"'), ('"+log+"','"+req.body.answerThree+"','"+isCorrectThree+"','"+req.body.CurrentDate+"'), ('"+log+"','"+req.body.answerFour+"','"+isCorrectFour+"','"+req.body.CurrentDate+"')";

con.query(sql2,function(err,rows){
 
// con.commit(function(err){
  if(err){
     con.rollback(function(){
      throw err;
      console.log('rollback works');
     });
  }
  else {


  con.commit(function(err){
      console.log('success');

  });


  }
  //console.log('Transaction Complete.');
       // con.end();

// });

});
 });

});

});




router.post('/uploadResume', (req, res) => {
//console.log(req.body);
    var sql = "INSERT into `resume` (`name`,`qualification`,`skills`,`experience`,`phone` ) VALUES ('"+req.body.name+"','"+req.body.qualification+"','"+req.body.skills+"','"+req.body.experience+"','"+req.body.phone+"')";


   // console.log(sql);
    con.query(sql,function(err,rows){
        if(err) throw err;    
       
           
            res.json({'msg':msg3, data : rows })
            
        
       
        
    });
        
});


router.get('/getResume', (req, res) => {
    var sql = "select * from resume";
    con.query(sql,function(err,rows){
        if(err) {
            sendError(err, res);
        }
        response.data = rows;

        res.json(response);
    })
});


router.get('/getCountries', (req, res) => {
    var sql = "select * from country";
    con.query(sql,function(err,rows){
        if(err) {
            sendError(err, res);
        }

        response.data = rows;

        res.json(response);
    })
});



router.post('/getStates', (req, res) => {
    var sql = "select * from state where countryID = '"+req.body.countryid+"'";
    con.query(sql,function(err,rows){
        if(err) {
            sendError(err, res);
        }
       
        response.data = rows;

        res.json(response);
    })
});

router.post('/deleteCategoryOption', (req, res) => {
    var sql = "DELETE FROM `question_category` WHERE `id` = '" + req.body.selectedOption + "'";
    con.query(sql,function(err,response){
        if(err) {
            sendError(err, res);
        }
        var affectedRows = (response.affectedRows)?response.affectedRows:0;
        res.json(affectedRows);
    })
});

function getReadableDateString(dateString) {
    var date = new Date(dateString);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
}

router.post('/addNewCategotyOption', (req, res) => {
    var now = new Date();
    var dateCreated = getReadableDateString(now);
    var sql = "INSERT INTO `question_category` (`questionCategory`, `createdDate`, `status`) VALUES ('" + req.body.newOption + "', '" + dateCreated + "', '1')";
    con.query(sql,function(err,response){
        if(err) {
            sendError(err, res);
        }
        res.json(response);
    })
});


router.post('/getCities', (req, res) => {
    var sql = "select * from city where stateId = '"+req.body.stateid+"'";
    con.query(sql,function(err,rows){
        if(err) {
            sendError(err, res);
        }
       response.data = rows;

        res.json(response);
    })
});


router.get('/getUsers', (req, res) => {
    var sql = "select * from users WHERE role = 2";
    con.query(sql,function(err,rows){
        if(err) {
            sendError(err, res);
        }
        response.data = rows;

        res.json(response);
    })
});

router.get('/getQuestionCategory', (req, res) => {
    var sql = "select * from question_category";
    con.query(sql,function(err,rows){
        if(err) {
            sendError(err, res);
        }
        response.data = rows;

        res.json(response);
    })
});



module.exports = router;