function form_validation()
{
	var email=document.myform.name.value;
	
	if(email==null || email=="")
	{
		alert("Email can't be blank");
		return false;
	}
	else
	{
		alert("Thanks for joining in our email club :) Our team will get back to you soon !!");
	}
}
