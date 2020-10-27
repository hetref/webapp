const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const email = document.getElementById("email")
const addBtn = document.getElementById("addBtn");

const database = firebase.database();

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/users' + userID.value).set({
        full_name: lastName.value,
        phone: age.value,
        address: email.value
    });
});