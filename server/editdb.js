'use strict';

const Hapi = require('Hapi');
const mysql = require('mysql');
const connection = require('./db.js');

//connection.query()
const server = new Hapi.Server();
server.connection({host: 'localhost', port: 3000});
server.route({
    method: 'GET',
    path: '/editdb',
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
      
        reply("EDIDED SUCCESSFULLY");
            }
});



server.start();