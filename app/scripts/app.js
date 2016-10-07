$(function () { 


    var form = $('form');
    var nameInput = $('input[name="firstname"]');
    var surnameInput = $('input[name="lastname"]');
    var emailInput = $('input[type=email]');
    var errorDiv = new $('<div class="error" style="margin-left: 80px; color: red"></div>');
    var section = $('#checkout');
    var submitBtn = $('button');
    
    //console.log(nameInput);
    //console.log(emailInput);
    //console.log(errorDiv);
    
    nameInput.addClass('error');
    surnameInput.addClass('error');
    emailInput.addClass('error');



    form.submit('click', function (e) {

       e.preventDefault();
        var nameVal = nameInput.val();
        var surnameVal = surnameInput.val();
        var emailVal = emailInput.val();
        
        section.append(errorDiv);
        

        var hasError = false;


        if (nameVal.length < 3) {
                
            $('.error').append('<p>Name is too short</p>')
            e.preventDefault();
            hasError = true;
        }
        
        if (surnameVal.length < 3) {
                
            $('.error').append('<p>Last Name is too short</p>')
            e.preventDefault();
            hasError = true;
        }


        if (emailVal.indexOf("@") < 0)  {
            
            $('.error').append('<p>Email zrobiłeś źle - brak @</p>')
            e.preventDefault();
            hasError = true;
        } 
        
        if (emailVal.indexOf(".") < 0 ) {
            
            $('.error').append('<p>Email zrobiłeś źle - brak kropki</p>')
            e.preventDefault();
            hasError = true;
        } 

        
        if (hasError != true) {
            
            $('.error').append('<p>Formularz wysłany !</p>')
            
        };
            



    });






});