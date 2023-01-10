// $(document).ready(function () {
     
//     $('#firstcheck').hide();
//     $('#lastcheck').hide();
//     $('#gendercheck').hide();
    
//     var f_err = true;
//     var la_err = true;
//     var gen_err = true;
//     let dateError = true;
//     let monthError = true;
//     let yearError = true;
   
//     $("#fname").keyup(function () 
//     {

//         firstname_check();
   

//     });
//     $('#lname').keyup(function()
//     {
//         lastname_check();
//     });
//     $('#optradio').keyup(function()
//     {
//       gender_check();
//     });
//     $('#day').keyup(function(){
//         dateval();

//     });
    
//     function firstname_check() 
//     {
//         var firstname = $('#fname').val();
      
//         if (firstname.length == '' ) 
//         {
//             $("#firstcheck").show();
//             $('#firstcheck').html("**Please fill out the FirstName");
//             $('#firstcheck').focus();
//             $('#firstcheck').css("color", "red");
//             f_err = false;
//             return false;

//         }
//         else 
//         {
//             $('#firstcheck').hide();
            
//         }

//     }
//     function lastname_check()
//     {
//         var lastname = $('#lname').val();
//         if( lastname.length == '')
//         {
//             $('#lastcheck').show();
//             $('#lastcheck').html("**Please fill out the LastName");
//             $('#lastcheck').focus();
//             $('#lastcheck').css("color", "red");
//             la_err = false;
//             return false;

//         }
//         else
//         {
//             $('#lastcheck').hide();
            
//         }
      
//     }
//     function gender_check()
//     {
        
//         if ($('input[id="optradio"]:checked').length == 0)
//         // if( Gender.length == '')
//         {
//             $('#gendercheck').show();
//             $('#gendercheck').html("**Must Check The Option Gender!!");
//             $('#gendercheck').focus();
//             $('#gendercheck').css("color", "red");
//             gen_err = false;
//             return false;
//        }
//         else
//         {
//             $('#gendercheck').hide();
          
//         }
//     }
//     $("#day").keyup(function(){
//         dateval();
//         $("#d_val").hide();

//     });

//     $('#month').change(function () {
//         dateval();
//         $("#m_val").hide();
//     });
//     $('#year').change(function () {
//         dateval();
//         $("#y_val").hide();
//     });

//     function dateval() {
//         let date = $("#day").val();
//         let month = $("#month").val();
//         let year = $("#year").val();

//         if (date.length == "") {
//             $("#d_val").removeClass("d-none").show();
//             dateError = false;
//             return false;
//         }
//         else if (month.length == "") {
//             $("#m_val").removeClass("d-none").show();
//             monthError = false;
//             return false;
//         }
//         else if (year.length == "") {
//             $("#y_val").removeClass("d-none").show();
//             yearError = false;
//             return false;
//         }
//         else {
//             $("#d_val").hide();
//             return true;
//         }
//     }
   
//     $("#formreg").submit(function(){
        
       
//         f_err =true;
//         la_err =true;
//         gen_err = true;
         
//         firstname_check();
//         lastname_check();
//         gender_check();
//         dateval();
//         if((f_err == true) && (la_err == true) && (gen_err == true) && (dateError == true) && (monthError ==true) && (yearError ==true))
//         {
//             return true;
//         }
       
//         else
//         {
//             return false;
//         }
        
//     });
        
  
// });
