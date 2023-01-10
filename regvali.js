function regvalid()
{
    var firstname = document.getElementById('fname').value;
    var lastname = document.getElementById('lname').value;
    var day = document.getElementById('days').value;
    var month = document.getElementById('months').value;
    var year = document.getElementById('years').value;
    var fathername = document.getElementById('faname').value;
    var mothername = document.getElementById('mname').value;
    var gender = document.forms["formreg"]["optcheck"].value;
    var Nationality = document.getElementById('nation').value;
    var Course = document.getElementById('course').value;
    var Special = document.getElementById('special').value;
    var Notes = document.getElementById('notes').value;
    
    if ( firstname == "" || firstname == null)
    {
       alert ("Please Fill Out The First Name");
        return false;
    }
    else if  ( firstname.length > 50 )
    {
        alert ("First Name Required less than 50 characters");
        return false;
    }
    else if ( lastname == "" ||lastname == null)
    {
       alert ("Please Fill Out The last Name");
        return false;
    }
    
  else if ( lastname.length > 50 )
  {
      alert ("Last Name Required less  than 50 Characters");
      return false;
  }
  else if( day == "Day" )
  {
      alert("Please Select Day field");
      return false;
  }
 else if( month == "Month" )
 {
     alert( " Please Select Month field ");
     return false;
 }
 else if( year == "Year" )
 {
     alert( " Please Select Year field ");
     return false;
 }
else if(  fathername.length > 50) 
{
    alert ("Fathername Limit Exceeded");
    return false;
}
else if ( mothername.length > 50 )
{
    alert(" Mother Name limit Exceeded");
    return false;
}
else if( gender == "" || gender == null )
{
  alert("Must Check the Options Gender List");
  return false;
}
else if ( Nationality == "" )
{
    alert("Select the Nationality");
    return false;
}
else if ( Course == "" )
{
    alert("Select the course");
    return false;
}
else if ( Special == "" )
{
    alert("Select the Specialization");
    return false;
}
else if( Notes.length > 250 )
{
    alert("Notes Should be in 250 Characters");
    return false;
}
else
{
    alert("Registered Successfully");
    return true;
}
}

