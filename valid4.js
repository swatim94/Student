function addTeacher()
 {

var uname=document.getElementById("uname").value;
var pass=document.getElementById("pass").value;
var dept=document.getElementById("select1").value;
var sub=document.getElementById("select2").value;


var det = [{
			"name": "",
			 "gen": "",
			 "age": "",
			 "phone": 0,
			 "address":0,
			 "email": "",
			 "uname": uname,
			 "pass": pass,
			 "dept": dept,
			 "sub": sub

			 	 }];
if (localStorage.getItem("teacher_details") === null  || localStorage.getItem("teacher_details") === undefined) 
{
localStorage.setItem("teacher_details", JSON.stringify(det)); 
     // Should be something like [Object array]

}

else
 {
		 	var item  = { 
					 "name":"",
					 "gen":"",
					 "age":"",
					 "phone":0,
		 			 "address":0,
					 "email":"",
					 "uname":uname,
					 "pass":pass,
					 "dept":dept,
					 "sub":sub
			 	 };

	var details = JSON.parse(localStorage.getItem("teacher_details")) ;
	details.push(item);
     localStorage.setItem("teacher_details",JSON.stringify(details));
 	}
alert("added!!");
location.reload();


     }