class InputField {
    value; 

    constructor(input) {
        this.value = document.querySelector(input); 
    }

    isEmpty() {
        if (this.value.value === '' || null) {
            return true; 
        } else {
            return false; 
        }
    }

    setValue(value) {
        this.value.value = value;
    }

    isPhone() {
        const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

        if(this.value.value.match(phoneRegex)) {
            return true;
        } else
        {
            return false;
        }
    }
}