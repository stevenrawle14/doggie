"use-strict";
const express = require('express');
const app = express();
const path = require("path");
const serveStatic = require("serve-static");
const finalHandler = require("finalhandler");

app.listen (5000, console.log(
    "listening"
));

function logger (req,res,next){
	
	next();
};	


app.use(logger);





app.get("/", (req,res)=> {
	
	res.sendFile(path.join(__dirname,"index.html"));
	//res.sendFile(__dirname.path.join("/public"));

	// let html = `<DOCTYPE html><html><head><style>h1{background-color:black; color:white;}</style><link rel="stylesheet" src="/style.css"/><title>sample</title></head><body><h1>Helooo</h1></body></html>`;
	let html = `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
		<link rel = "stylesheet" href="style.css">
		<style>
		
		
		@media all and (max-width:375px)
		{
	
			.doggieImg
			{
				min-width: 100%;
				  height: auto;
			}
	
			
			#btn 
			{
				margin-left:75%;
				margin-top: 15%;
				padding:5%;
				background-color:black;
				color : red;
				font-size:25px
			}
	
	
	
		}
	
			   
		
		
	
	
		</style>
	</head>
	<body>
		
		 <img class="doggieImg"  src="doggie.jpeg">
	
		 <button id="btn-">Click me Tia</button>
		
	</body>
	</html>`
	//res.send(html);
	
	
	

});

app.use("/public",express.static("public"));
	
  




