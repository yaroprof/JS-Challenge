// description


class User{
    constructor( username, password ){
        this.username = username;
        this.password = password;
    }
    validatePassword(){
        console.log('Work parent pass')

        if (this.password > 6){
            return true
        } return false
    }
}




