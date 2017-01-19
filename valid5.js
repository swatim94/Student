function view()
{
	var i=0,j;var a=[];
	var details=JSON.parse(localStorage.getItem("subj_details"));
	var select1=document.getElementById("select1").value;
	lel="";
	for(j=0;j<details.length;j++)
	{

		//var option=document.createElement("option");
		if(details[j].dept==select1)
					lel=lel+details[j].name+"<br/>";
				
		
	}
document.getElementById('l1').innerHTML = lel+"<br/>";
}
