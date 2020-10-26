const userID = document.getElementById("userID");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const email = document.getElementById("email")
const addBtn = document.getElementById("addBtn");

const database = firebase.database();

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/users' + userID.value).set({
        first_name: firstName.value,
        last_name: lastName.value,
        age: age.value,
        email: email.value
    });
});