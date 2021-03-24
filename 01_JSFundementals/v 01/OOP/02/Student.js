// description

class Student extends User{
    constructor( username, password, nickname ) {
        super( username, password );
        this.nickname = nickname;
    }

    getStudentCourses(){
        return[1,2]
    }

    validatePassword() {   // зміна умов валідації локально для Student

        super.validatePassword();  // звернення до батьківського елемента та запуск саме його методу

        if (this.password.length > 10){   // змінюємо умови методу, перезаписуємо - User class
            return true
        } return false
    }
}

