var getUser = (id, callback) => {
    var user = {
        id: id,
        name: "Saml"
    }
    setTimeout(() => {
        callback(user);
    }, 3000);
}

getUser(54, (userObject) => {
    console.log(userObject);
});