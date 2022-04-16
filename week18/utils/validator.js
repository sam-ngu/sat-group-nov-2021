function validateEmail(input) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(input);
}


module.exports = {
    validateEmail,
}
