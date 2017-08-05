'use strict';

const Hapi = require('Hapi');
const mysql = require('mysql');
const connection = require('./db.js');

//connection.query()
const server = new Hapi.Server();
server.connection({host: 'localhost', port: 3000});
server.route({
    method: 'GET',
    path: '/deletedb',
    handler: function(request, reply){
      //  console.log(request.query);   DELETE * FROM users WHERE
      console.log(request.query);  

      connection.query(`DELETE * FROM products_entry WHERE ?`,request.query,function(err,result){
          if(err){
              console.log(err); 
          }else{
              console.log(result);
          }
      })
      
        reply("DELETED SUCCESSFULLY");
     /* reply(request.query['product_name'] + "---" + 
              request.query['product_code'] + "---" + 
              request.query['product_price']+ "---" +
              request.query['product_gst']);



              
     server.call(,function(err,response){
         if(err){

         }else{
             
         }
     }) 
        */
    }
});



server.start();
