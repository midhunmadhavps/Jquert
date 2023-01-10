$(document).ready (function () {  
    $('#formreg').submit (function (e) { 
        e.preventDefault();   
        
        var firstname = $('#fname').val();  
        $(".error").remove();  
       
        if (firstname.length == "" ) {  
              
              $('#fname').after('<span class="error text-danger font-weight-bold">**FirstName is required</span>');  
              return false;
            } 
            else 
            {
                   $("#fname").click(function(){
                    $(".error").removeclass();
                   });
                  
             
                
            }
                // $("#fname").keydown(function(){
                //     $("#fname").removeclass("d-none").hide();
                //   });
            
          
    });

        });