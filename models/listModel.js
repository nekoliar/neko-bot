const firebase = require("../db/firebaseConfig");

const getLIST = (callback) => {
    firebase.ref(`list`).once(
        'value',
        (snapshot) => {
            callback(snapshot.val());
        },
        (err) => {
            console.log('Read Failed: ', err.name);
        }
    );
};

module.exports = {getLIST};