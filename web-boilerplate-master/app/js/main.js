$(document).ready(function () {
  var output = $("#output");
  var template = $("#output-script").html();

  function getPosts() {
    return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
        req.open('GET', 'https://api.myjson.com/bins/uptto', false);
        req.onload = function() {
          if (req.status == 200) {
            alert(req.response);
            resolve(JSON.parse(req.response));
          }
          else {
            reject();
          }
        };
        req.send();
    })
}

getPosts().then(function(data){
  alert("it worked");
  alert(data);
   html = Mustache.render(template, data);
   output.append(html);
  }).catch(() => {
    alert('Algo salió mal');
  });



});
