
'use strict';

const Hapi = require('Hapi');
const mysql = require('mysql');
const connection = require('./db.js');

//connection.query()
const server = new Hapi.Server();
server.connection({host: 'localhost', port: 5000});// search 5000port
server.route({
    method: 'POST',
    path: '/searchdb',
    handler: function(request, reply){
      //  console.log(request.query);
   //  var product_name = request.query['product_name'];

      var product_code = parseInt(request.query['product_code']);
      console.log(request.query);  
         
      connection.query(`SELECT * FROM products_entry WHERE product_code = ?`,[product_code],request.query,function(err,result){
          if(err){
              console.log(err); 
          }else{
              console.log(result);
          }
      })
    

      
        reply("FOUND SUCCESSFULLY");
            }
});



server.start();