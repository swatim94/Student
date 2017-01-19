function addSubj()
 {

var name=document.getElementById("name").value;
var code=document.getElementById("code").value;
var opt=document.getElementById("select1").value;

var det = [{ 
			"id1": code,
			 "name": name,
			  "dept":opt
			 	 }];
if (localStorage.getItem("subj_details") === null  || localStorage.getItem("subj_details") === undefined) 
{
localStorage.setItem("subj_details", JSON.stringify(det)); 
     // Should be something like [Object array]

}

else
 {
 	var item  = { 
					"id1": code,
			 		"name": name,
			 		"dept":opt
			 	 };

	var details = JSON.parse(localStorage.getItem("subj_details")) ;
	details.push(item);
     localStorage.setItem("subj_details",JSON.stringify(details));
 	}
alert("added!!");
location.reload();


     }