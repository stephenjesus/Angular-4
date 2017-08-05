'use strict';

const Hapi = require('Hapi');
const mysql = require('mysql');
const connection = require('./db.js');

//connection.query()
const server = new Hapi.Server();
server.connection({host: 'localhost', port: 3000});
server.route({
    method: 'GET',
    path: '/inserttodb',
    handler: function(request, reply){
      //  console.log(request.query);
      console.log(request.query);  

      connection.query(`INSERT INTO products_entry SET ?`,request.query,function(err,result){
          if(err){
              console.log(err); 
          }else{
              console.log(result);
          }
      })
      
        reply("INSERTED SUCCESSFULLY");
            }
});



server.start();

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
