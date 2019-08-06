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

    function search() {
        var input, set_elements, label_element, i, text_value;
        input = document.getElementById("search_bar");
        set_elements = document.getElementById("output").getElementsByClassName("flex-container__item");
        for (i = 0; i < set_elements.length; i++) {
            text_value = set_elements[i].getElementsByTagName("label")[0].textContent;
            if (text_value.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
                set_elements[i].style.display = "inline-block"
            } else {
                set_elements[i].style.display = 'none';
            }
        }
    }

    document.getElementById('search_bar').onkeypress = function(e){
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13'){
          search();
        }
      }

      document.getElementById("search_button").addEventListener("click", function(){
        search();
      });
});
