function seeSession()
{

	var session1=JSON.parse(localStorage.getItem("session"));
	if(session1!="")
	{
		


			var getT=JSON.parse(localStorage.getItem("teacher_details"));

			for(var i=0;i<getT.length;i++)
				{
					console.log("hhh",i, session1,getT[i].uname);
                    
				if (session1==getT[i].uname)

				{   
										console.log("hhh",i, session1,getT[i].uname);

					document.getElementById("uname").setAttribute("disabled",false);
					document.getElementById("uname").setAttribute("value",getT[i].uname);
					//document.getElementById("uname").setAttribute("enabled",false);

					document.getElementById("dept").setAttribute("disabled",false);
					document.getElementById("dept").setAttribute("value",getT[i].dept);
					//document.getElementById("dept").setAttribute("enabled",false);


					document.getElementById("subj").setAttribute("disabled",false);
					document.getElementById("subj").setAttribute("value",getT[i].sub);
					//document.getElementById("subj").setAttribute("enabled",false);
						break;
					}
				}
}
}