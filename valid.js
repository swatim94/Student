function validateForm()
 {

 	var username=document.getElementById("aid").value;
 	var password=document.getElementById("pwd").value;
 	var details = JSON.parse(localStorage.getItem("teacher_details")) ;

 	if (username=="admin123")
 		 {

 		if(password=="admin123" )
 			 {
 			 	alert( "Login Successful!!");
 			 	window.location= "adminfunc.html";

 			 }
 			 else
 			 	 {
 			 	 	alert( "Wrong password");
 			 	window.location= "loginA.html";
 			 	 }
 		
 			} 
	else
 	 {
	 	 	for(j=0;j<details.length;j++)
			{
						if(details[j].uname==username)
						{
							if(password==details[j].pass )
					 			 {

					 			 	
					 			 	console.log( "Login Successful!!");
					 			 	localStorage.setItem("session", JSON.stringify(username));
					 			 	window.open("viewProf.html","_self");
					 			 	
					 			 	console.log("hhh",j);
					 			 	break;
					 			 }
					 			 else
					 			 {
					 			 	
					 			 	console.log( "Wrong password",j);
					 			 	window.location= "loginA.html";
					 			 }
						}
						else
			 			{
			 			 	 console.log( "User Not Added.. Contact Admin",j);
			 			 	window.location= "loginA.html";
			 			}
				
			}
	 	 }
	 }