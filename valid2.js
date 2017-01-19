
function showDept()
 {
	var i=0;var a=[];
	var details=JSON.parse(localStorage.getItem("dept_details"));
	var select3=document.getElementById("select1");
	
	for(i=0;i<details.length;i++)
	{
		var option=document.createElement("option");
		option.textContent=details[i].name;
		select3.appendChild(option);
	}
}
function showSubj()
 {
	var i=0,j;var a=[];
	var details=JSON.parse(localStorage.getItem("subj_details"));
	var select1=document.getElementById("select1").value;
	var select2=document.getElementById("select2");
	for (i =select2.length-1; i>=0;i--) 
	{
    select2.remove(i);
      }
	for(j=0;j<details.length;j++)
	{
		var option=document.createElement("option");
		if(details[j].dept==select1)
		{
			option.textContent=details[j].name;
		select2.appendChild(option);
		}
		
	}

}
