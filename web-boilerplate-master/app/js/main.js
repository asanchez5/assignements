$(document).ready(function () {
  var output = $("#output");
  var template = $("#output-script").html();

  function getPosts() {
    return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
        req.open('GET', 'https://api.myjson.com/bins/1bpb69', false);
        req.onload = function() {
          if (req.status == 200) {
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
   html = Mustache.render(template, data);
   output.append(html);
  }).catch(() => {
    console.log('Something went wrong');
  });



});
