const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert("./serviceAccountKey.json"),
  databaseURL:
    "https://firebase-adminsdk-dj6xw@mixit-mixology-guide.iam.gserviceaccount.com",
});
