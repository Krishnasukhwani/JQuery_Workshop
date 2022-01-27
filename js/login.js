
$(document).ready(
    ()=>{
        $('input[type="button"]').click(
            ()=>{
                var username=$('input[type="text"]').val();
                var password=$('input[type="password"]').val();
                if(username== ' ' && password==' ')
                {
                    alert(" You have not entered the Username or Password......!!!!!!");
                }
                else{
                    $.ajax({
                        url:"https://mocki.io/v1/dded2eda-49f4-467a-8ba2-6a2f3b6bf9b5",
                        type:"GET",
                        data:{
                            "username":username,
                            "password":password,
                        },
                        success:(x)=>{
                            alert(username+" Welcome.......! Logged in Successfully...... ");
                            console.log(x);
                            window.location="http://127.0.0.1:5500/html/registration.html"
            
                        }
                    }
                    )
                }
            }
        )
    }
)