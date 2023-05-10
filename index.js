const express = require("express");
var mysql = require('mysql');
const cors=require("cors")


app = express()
app.use(cors())
app.use(express.json())

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'marudhu',
    password : 'Marudhu@02',
    database : 'userDetails'
  });

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });


app.get('/getAllUsers',(req,res)=>{
    console.log(req.query.age)
    connection.query('SELECT * from users', function (error, results) {
        if (error) console.log( error);
        console.log('The solution is: ', results,"dgjkl");
        res.json(results)
      });
})
app.get('/getById/:id',(req,res)=>{
    console.log(req.params)
    connection.query('SELECT * from users where id=?', [req.params.id], function (error, results) {
    if (error) console.log( error);
        console.log('The solution is: ', results);
        res.json(results)   
      });
})
app.put('/updateById/:id',(req,res)=>{
    console.log(req.body)
    connection.query('update users set username=?,email=?,messages=? where id=?',[req.body.name,req.body.email,req.body.messages, req.params.id], function (error, results) {
    if (error) console.log( error);
        console.log("Updated sucessfully");
        console.log('The solution is: ', results);
        res.json(results)   

      });
})
app.post('/postData',(req,res)=>{
    console.log(req.body)
    let {name,email,messages}=req.body
    connection.query('insert into users (username,email,messages,isActive) values (?,?,?,?)',
    [name,email,messages,1], 
    function (error, results) {
        if (error) console.log( error);
    
            console.log("Posted sucessfully")
            console.log('The solution is: ', results);
            res.json(results)
          });
})
app.delete('/deleteById/:id',(req,res)=>{
  console.log(req.body)
  connection.query('update users set isActive=0 where id=?',[req.params.id], function (error, results) {
  if (error) console.log( error);
      console.log("Updated sucessfully");
      console.log('The solution is: ', results);
      res.json(results)   
    });
})
app.listen(4000, () => {
    console.log('listening on port 4000')
})



// user = [
//     { id: 1, name: "praveen", gender: 'Male' },
//     { id: 2, name: "Saroo", gender: 'Male' },
//     { id: 3, name: "Muthu", gender: 'Male' }
// ]

// app.get('/users', (req, res) => {
//     // console.log(req.query['abc'], "request")
//     // console.log("I am inside get")
//     //connect to db to fetch all users and assign it to a json var and send itas json
//     // res.send("hi , welcome")
//     res.json(users);

// })
// app.get("/:id",(req,res)=>{
//     console.log(req.params,"fghjk")
//     res.json(user.filter(e=>
//         e.id==req.params.id
//     ))
// })