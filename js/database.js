function initFB() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDRZBlCtz9Zb_EvXcuj8fmPOxzvqnJal54",
    authDomain: "poc-final-project.firebaseapp.com",
    databaseURL: "https://poc-final-project.firebaseio.com",
    projectId: "poc-final-project",
    storageBucket: "poc-final-project.appspot.com",
    messagingSenderId: "1003734821456"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

  var ref = database.ref();

  ref.limitToFirst(20).once('value', function(snapshot) {

    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();

      var tableRow = document.createElement("tr");   // Create a <tr> element
      tableRow.setAttribute("id", childKey); // add id to the row that is equal to the key

      // elements for Nome, Cognome, Eta, Anno, Regione
      var rowElNome = document.createElement("td");   // Create a <td> element
      rowElNome.appendChild(document.createTextNode(childData.Nome));   // Append data to the element
      tableRow.appendChild(rowElNome); // Append row element to the row

      var rowElCog = document.createElement("td");
      rowElCog.appendChild(document.createTextNode(childData.Cognome));
      tableRow.appendChild(rowElCog);

      var rowElEta = document.createElement("td");
      rowElEta.appendChild(document.createTextNode(childData.Eta));
      tableRow.appendChild(rowElEta);

      var rowElAnno = document.createElement("td");
      rowElAnno.appendChild(document.createTextNode(childData.Anno));
      tableRow.appendChild(rowElAnno);

      var rowElReg = document.createElement("td");
      rowElReg.appendChild(document.createTextNode(childData.Regione));
      tableRow.appendChild(rowElReg);

      // console.log(childData);
      // console.log(childKey);
      console.log(childData.Anno);

      // append tableRow to #table-body
      document.getElementById('table-body').appendChild(tableRow);
    });
  });


  // var regionKey = document.getElementsByName('name');
  // ref.child('users').orderByChild('Regione').equalTo(regionKey).on("value", function(snapshot) {
  //   console.log(snapshot.val());
  //   snapshot.forEach(function(data) {
  //     console.log(data.key);
  //   });
  // });

}


// TODO: Add a form to sort by region, year, age, show more

function toggleClass(el, el2) {

  if (el.classList.contains('disabled-view')) {

    // run firebase once
    var run = true;
    if (run) {
      initFB();
      run = false;
    }

    el.classList.add('enabled-view');
    el.classList.remove('disabled-view');
    el2.innerHTML = "Hide Victims";
  }
  else if (el.classList.contains('enabled-view')) {
    el.classList.add('disabled-view');
    el.classList.remove('enabled-view');
    el2.innerHTML = "Show Victims";
    // TODO: change the href of el2

  }
}

var triggerBtn = document.getElementById('download-button');
triggerBtn.addEventListener("click", function(){
  var table = document.getElementById('victim-table');
  toggleClass(table, triggerBtn);
});