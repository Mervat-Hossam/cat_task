let fname_valid = false
let lname_valid = false
let email_valid = false
let pass_valid = false

window.addEventListener('load', function loading(){

    // error first name
    f_name = document.getElementById("first_name")
    error_fname = document.getElementById("Error_fname")
    regular_name = /^[A-Za-z]+$/
    f_name.addEventListener('blur', function (e){
        if(f_name.value == "" || (!f_name.value.match(regular_name)))
        {
            error_fname.style.display ="block"
            fname_valid = false
        }
        else
        {
            error_fname.style.display ="none"
            fname_valid = true
        }
    })

    // error last name
    l_name = document.getElementById("last_name")
    error_lname = document.getElementById("Error_lname")
    regular_name = /^[A-Za-z]+$/
    l_name.addEventListener('blur', function (e){
        if(l_name.value == "" || (!l_name.value.match(regular_name)))
        {
            error_lname.style.display ="block"
            lname_valid = false
        }
        else
        {
            error_lname.style.display ="none"
            lname_valid = true
        }
    })

     // error email 
    email = document.getElementById("email")
    error_email = document.getElementById("Error_email")
    regular_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    email.addEventListener('blur', function (e){
        if(email.value == "" || (!email.value.match(regular_email)))
        {
            error_email.style.display ="block"
            email_valid = false
        }
        else
        {
            error_email.style.display ="none"
            email_valid = true
        }
    })

    // error password
    pass = document.getElementById("password")
    error_pass = document.getElementById("Error_pass")
    pass.addEventListener('blur',function (e){

        if(pass.value == "" || (pass.value.length < 7 || pass.value.length > 12))
        {
            error_pass.style.display ="block"
            pass_valid = false
        }
        else
        {
            error_pass.style.display ="none"
            pass_valid = true
        }
    })


    // submit error
    sub = document.getElementById("sub_button")
    sub.addEventListener('click', function (e){
        
        //check first name
        if(fname_valid)
        {
            error_fname.style.display ="none"
        }
        else
        {
            error_fname.style.display ="block"
            e.preventDefault();
        }

        //check last name
        if(lname_valid)
        {
            error_lname.style.display ="none"
        }
        else
        {
            error_lname.style.display ="block"
            e.preventDefault();
        }

        //check email
        if(email_valid)
        {
            error_email.style.display ="none"
        }
        else
        {
            error_email.style.display ="block"
            e.preventDefault();
        }

        //check password
        if(pass_valid)
        {
            error_pass.style.display = "none"
        }
        else
        {
            error_pass.style.display ="block"
            e.preventDefault();
            
        }
    })
})