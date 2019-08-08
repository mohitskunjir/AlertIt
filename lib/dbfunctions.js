var express = require('express');
var mysql = require('mysql');
mysql.promise = global.Promise;
var database_name = "accident_help";

var connection = mysql.createConnection(
 {
   host     : 'localhost',
   user     : 'root',
   password : 'root',
   database : database_name
 });

 connection.connect(function(err){
 if(err) {
     console.log("Error connecting database ... "+err);
 } else {
     console.log("Database is connected ...");
 }
 });

exports.createTable = function(table_name){
  var sql = "CREATE TABLE if not exists" +table_name+ "(id INT AUTO_INCREMENT PRIMARY KEY, placeId varchar(50), name VARCHAR(255), address VARCHAR(255),contact_no BIGINT, latitude double, longitude double)";
  connection.query(sql,function(err) {
  connection.end();
   if (err){
    console.log(err);
   }
   else{
    console.log('Table creation Query exectued successfully');
    return;
   }
   });
}

exports.getAllHospitalData = function(table_name,callback){
    connection.connect(function() {
    console.log("Connected!");
    var sql = "select * from "+table_name;
    connection.query(sql,function (err, rows) {
      if(err){
        throw err;
      }
      else{
        return callback(rows);
      }
    })
  });
 }

exports.getOneHospital = function(hospitalPlaceId, callback) {

  connection.connect(function() {
	  
	var sql = "select * from accident_help where placeId = ?";
	var values = [hospitalPlaceId];
	connection.query(sql,[values],function (err, result) {
		
      if(err){
        throw err;
      }
      else {
        if(result == null || result == undefined || result.length <= 0 )
        {
           result[0] = new Object;
		   result[0].status="offline";
		   return callback(result);
        }
        else
        {
			return callback(result);
        }
      }
    });
  });
 }

exports.checkHospital = function(hospitalPlaceId, callback)
{	
	var query = "select * from accident_help where placeId = ?";
	var values = [hospitalPlaceId];
	
	connection.query(query, [values], function(err, result)
	{
		if(err)
		{
			throw err;
		}
		else
		{
			if(result == null || result == undefined || result.length <= 0 )
			{	
				result[0] = new Object;
				result[0].status="offline";
			}
			return callback(result[0].status);
		}
	});
}

exports.insertHospitalData = function (typeInst, hospitalPlaceId, hospitalName, hospitalAddress, lat, lng, emailId, hospitalContact, passwd, status, vehicle){
	var res= 0;
    connection.connect(function()
     {
			var sql = "INSERT INTO accident_help (typeInst, placeId, name, address, latitude, longitude, emailId, contact_no, passwd, status, vehicle) VALUES (?)";
			var values = [typeInst, hospitalPlaceId, hospitalName, hospitalAddress, lat, lng, emailId, hospitalContact, passwd, status, vehicle];
			// var values = ["hospitals", "ChIJCzvk_GTAwjsRrHGmRsa64IY" , "KEM", "Rastha Peth", "18.503", "73.253", "mohit@gmail", 917507305415, "qwerty", "online", 5];
			connection.query(sql,[values],function (err)
			{
				if(err)
				{
					console.log(err);
					res = 1;
				}
				else
				{
					console.log("Query executed successfully");
					res = 0;
				}
			});	 
      });
      return res;
}	  
exports.updateHospitalData = function (hospitalPlaceId, emailId, passwd, vehicle, hospitalContact, status) {
	var res;
    connection.connect(function()
     {	
			var sql = 'Update accident_help set emailId = ' + '"' + emailId + '"' + ', passwd = ' + '"' + passwd + '"' + ', vehicle = ' + '"' + vehicle + '"' + ', contact_no = ' + '"' + hospitalContact + '"' + ', status = ' + '"' + status + '"' + ' where placeId = ' + '"' + hospitalPlaceId + '"';
			var values = [emailId, passwd, vehicle, hospitalContact, status, hospitalPlaceId];
			// var values = ["hospitals", "ChIJCzvk_GTAwjsRrHGmRsa64IY" , "KEM", "Rastha Peth", "18.503", "73.253", "mohit@gmail", 917507305415, "qwerty", "online", 5];
			connection.query(sql,[values],function (err)
			{
				if(err)
				{
					console.log(err);
					res = 1;
				}
				else
				{
					console.log("Query executed successfully");
					res = 0;
				}
			});	 
      });
      return res;
}