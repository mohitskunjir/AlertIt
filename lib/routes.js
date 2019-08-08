const express = require('express');
const router = express.Router();
const axios = require('axios');
/*const Nexmo = require('nexmo');*/
const dbFunction =  require('./dbfunctions');
	
// GET POST
router.get('/:id', (req, res)=> {

  str = new Array(3);
  str = req.params.id.split(',');
  // AIzaSyCyZA_78gN4lQ5j6rIrEHJ640yvBnmJADU
  // AIzaSyCP6bhFPs90anDdC1dL2IH76yRhh00XRtY
  axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + str[0] +'+nearby&location=' + str[1] + ',' + str[2] + '&radius=100&key=AIzaSyCyZA_78gN4lQ5j6rIrEHJ640yvBnmJADU')
  .then(function (response)
  { 
    entireResponse = response.data.results;
	
    if (response.data.status == "OK")
    {   
		requiredResponse = [];
		var actualResp = 0;
        for( i = 0; i < 20 ; i++)
        { 
			/*
			result = dbFunction.insertHospitalData(str[0],entireResponse[i].place_id,entireResponse[i].name,entireResponse[i].formatted_address,entireResponse[i].geometry.location.lat,entireResponse[i].geometry.location.lng,"mohit@gmail.com",917507305415,"qwerty","online",5);
			console.log(result);
			}
			*/		
			//dbFunction.getOneHospital(entireResponse[i].place_id, function(result) 
			{
				if((entireResponse[i].name).indexOf('Clinic') === -1 && (entireResponse[i].name).indexOf('Eye Care') === -1 && (entireResponse[i].name).indexOf('Ayurved') === -1 && (entireResponse[i].name).indexOf('Klinik') === -1)
				{
					//if(result[0].status == "online") 
					{		
						if(actualResp < 4)
						{	
							requiredResponse[actualResp] = new Object();
							requiredResponse[actualResp].placeId = entireResponse[i].place_id;
							requiredResponse[actualResp].name = entireResponse[i].name;
							requiredResponse[actualResp].address = entireResponse[i].formatted_address;
							requiredResponse[actualResp].lat = entireResponse[i].geometry.location.lat;
							requiredResponse[actualResp].lng = entireResponse[i].geometry.location.lng;	
							actualResp++;
						} 					
					}
				}
			}//);
			/*
			requiredResponse[i] = new Object();
			requiredResponse[i].placeId = entireResponse[i].place_id;
			requiredResponse[i].address = entireResponse[i].formatted_address;
			requiredResponse[i].name = entireResponse[i].name;
			requiredResponse[i].lat = entireResponse[i].geometry.location.lat;
			requiredResponse[i].lng = entireResponse[i].geometry.location.lng;
			requiredResponse[i].phone = entireResponse[i].formatted_phone_number;
      */
	    }
		res.status(200).send(requiredResponse);
		
	}
    else
    {
		res.status(400).send("Unknown Errorss");
    }
 }
)
.catch(function (error) {
    res.status(500).send("There was an error!");
});
});

router.get('/hosp/:id', (req, res) => {

    str = new Array(3);
    str = req.params.id.split(',');

    dbFunction.getOneHospital(str[0], function(result)
   {	  
          const text = 'https://www.google.com/maps/dir/?api=1&origin=' + result[0].latitude + ',' + result[0].longitude +'&origin_place_id='+ str[0] +'&destination=' + str[1] + ',' + str[2] + '&travelmode=driving&key=AIzaSyDDNnPuIzO1BpY53h1wGfcTb2ERQOCDJfw';
          console.log('URL: ' + text);
          
          const googleurl = encodeURIComponent(text);
          console.log('URL encoded: ' + googleurl);
          
          const message = "Emergency%20service%20required%20at%20Link%20" + googleurl;
          console.log('Message: ' + message);
          
          const data = {
                        'apikey':'8BdG211hDxM-FIS2GRGbQFRUOXIIFEylPrsEFlEAF7',
                        'message': message,
                        'sender':'TXTLCL',
                        'numbers': result[0].contact_no,
                        'test': true
                      }

          const url = 'https://api.textlocal.in/send/?apikey=8BdG211hDxM-FIS2GRGbQFRUOXIIFEylPrsEFlEAF7&message=' + message + '&sender=TXTLCL&numbers=' + result[0].contact_no + '&test=true';
          console.log('URL_s: ' + url);
		  
          var XMLHttpRequest = require("xmlhttprequest-ssl").XMLHttpRequest;
          var xmlhttp = new XMLHttpRequest();
          xmlhttp.open("GET",url, true);
          xmlhttp.onreadystatechange = function()
          {
              if (this.readyState == 4 && this.status == 200)
              {
                  const myArr = JSON.parse(this.responseText);
                  console.log(myArr);
                  console.log(myArr.status);
                  if(myArr.status == "success")
                  {
                    console.log(myArr.message.content);
                  }
                  console.log("Message Sent");
                  res.json(this.responseText);
              }
          }
          xmlhttp.send();
		  
      });

});

router.get('/insert/:id', (req, res)=> {

  str = new Array(11);
  str = req.params.id.split('*');
  dbFunction.insertHospitalData(str[0],str[1],str[2],str[3],str[4],str[5],str[6],str[7],str[8],str[9],str[10]);
  res.send("");
});

router.get('/update/:id', (req, res)=> {

  str = new Array(6);
  str = req.params.id.split('*');
  dbFunction.updateHospitalData(str[0],str[1],str[2],str[3],str[4],str[5]);
  res.send("");
});

router.get('/check/:id', (req, res)=> {
	
	var placeId = req.params.id;
	var result;
	
	dbFunction.checkHospital(placeId, function(result) {		
		console.log("Hospital is " + result);
		res.send("<h1>Hospital is " + result + "</h1>");
	});

	res.send("<h1>Hospital is " + result + "</h1>");
});

module.exports = router;
/*

https://api.textlocal.in/send/?apikey=8BdG211hDxM-FIS2GRGbQFRUOXIIFEylPrsEFlEAF7&message=hello&sender=TXTLCL&numbers=+917507305415'

*/