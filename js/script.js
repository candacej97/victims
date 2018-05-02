
var ref = database.ref();

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});



/*function getData() {
  var userId = firebase.auth().currentUser.uid;
  return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
  });
}*/

function toggleClass(el) {
  if (el.classList.contains('disabled-view')) {
    el.classList.add('enabled-view');
    el.classList.remove('disabled-view');
  }
  else if (el.classList.contains('enabled-view')) {
    el.classList.add('disabled-view');
    el.classList.remove('enabled-view');
  }
}

function toggleHTML(el) {
  console.log(el.innerHTML);

  var hide = "Hide Victims";
  var show = "Show Victims";

  // change depending on what the current innerHTML says
  if (el.innerHTML = "Hide Victims") {
    el.innerHTML = show;
  } else {
    el.innerHTML = hide;
  }
}

function testBtn(){
  console.log("Btn was clicked");
}



var triggerBtn = document.getElementById('download-button');
triggerBtn.addEventListener("click", function(){
  var table = document.getElementById('victim-table');
  console.log("Btn was clicked");
  toggleClass(table);
  toggleHTML(triggerBtn);
  // getData();
});
