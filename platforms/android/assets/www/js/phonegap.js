document.addEventListener("deviceready", function(){
  console.log("!!!!!!!!!!!!!!!!!!!!!!!! Device ready");
  var link = document.querySelector(".href-sourcecode");
  link.addEventListener("click", function(evt){
      console.log("!!!!!!!!!!!!!!!!!!!!!!!! Click noticed");
      evt.preventDefault();
      var ref = cordova.InAppBrowser.open("https://github.com/lsubel/amam", "_system", "location=yes");
  });
});
