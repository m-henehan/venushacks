function match()
{
    //new user
    let email = document.getElementById('email').value
    let time = document.getElementById('time').value
    let language = document.getElementById('language').value
    let why = document.getElementById('why').value
    let match = document.getElementById('matched').Value
    //i is 1 because the new user should be at place 0int the list   
    for(i =1; i<10;i++){
        //user2=user we are trying to match them too
        let match1 = document.getElementById('matched').value
        let email1 = document.getElementById('email').value;
        let time1 = document.getElementById('time').value;
        let language1 = document.getElementById('language').value;
        let why1 = document.getElementById('why').value;
        if(match1 === 'no'){ //check if user2 is matched or not 
            if(language===language1){//do they both speak the same language
                if(time===time1){//are they in the same time zone
                    if(why===why1){//do they want the same kind of buddy
                        match = "yes";
                        match1 = "yes";
                        //show the profiles
                        i=11;//break the loop
                    }else{
                        break;
                    }
                }else{
                    break;
                }
            }else{
                break;
            }
        }
    }
    if(match === 'no'){
        //show that there are no matches yet
    }
}
