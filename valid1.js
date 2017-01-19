function addDept()
 {

var name=document.getElementById("name").value;
var id=document.getElementById("id").value;
var no=document.getElementById("no").value;
var add=document.getElementById("add").value;
var phone=document.getElementById("phone").value;
var email=document.getElementById("email").value;
var det = [{ "id1": id,
			 "nof" :no,
			 "name": name,
			 "address":add,
			 "pno":phone,
			 "email":email
			 			 }];
if (localStorage.getItem("dept_details") === null  || localStorage.getItem("dept_details") === undefined) 
{
localStorage.setItem("dept_details", JSON.stringify(det)); 
}

else
 {
	 	var item  = { 
	 				"id1": id,
					 "nof" :no,
				 	"name": name,
				 	"address":add,
				 	"pno":phone,
				 	"email":email
			 };

		var details = JSON.parse(localStorage.getItem("dept_details")) ;
		details.push(item);
	    localStorage.setItem("dept_details",JSON.stringify(details));
 	}
 alert("added!!");
 location.reload();
     }
