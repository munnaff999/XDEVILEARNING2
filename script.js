const firebaseConfig = {
  apiKey: "AIzaSyBUfLZ0hiR0uPQOSyrgrhBZnHf-h3UxezE",
  authDomain: "xdevilearning99.firebaseapp.com",
  databaseURL: "https://xdevilearning99-default-rtdb.firebaseio.com",
  projectId: "xdevilearning99",
  messagingSenderId: "481874738464"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

let userId = "demoUser";

function installOffer(offer) {
  let amount = offer === "offer1" ? 10 : 15;

  db.ref("users/" + userId + "/balance").transaction(bal => {
    return (bal || 0) + amount;
  });

  alert("Install recorded. ₹" + amount + " pending approval");
}

db.ref("users/" + userId + "/balance").on("value", snap => {
  document.getElementById("balance").innerText = snap.val() || 0;
});

function withdraw() {
  alert("Withdraw request sent (manual approval)");
}
