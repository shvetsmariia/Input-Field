function InputField() {
    this.input = document.querySelector('#mycustomid');
    this.value = this.input.value;
    return this.input.value; 
}

InputField.prototype.setValue = function (value) {
    this.input.value = value;
    this.value = value;
};

InputField.prototype.isEmpty = function () {
    if (this.input.value === '' || null) {
        return true; 
    } else {
        return false; 
    }
}

InputField.prototype.isPhone = function () {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(this.input.value.match(phoneRegex)) {
        return true;
    } else {
        return false;
    }
}