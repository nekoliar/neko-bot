const admin = require("firebase-admin");

const serviceAccount = require("./neko-bot-v1-firebase-adminsdk-80sef-0007cc22d9.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://neko-bot-v1-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db = admin.database();

module.exports = db;