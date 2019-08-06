$(document).ready(function () {
    var output = $("#output");
    var template = $("#output-script").html();
    var req = new XMLHttpRequest();
    req.open('GET', 'https://api.myjson.com/bins/1bpb69', false);
    req.send(null);
    var data;
    if (req.status == 200)
      data = req.responseText;
      html = Mustache.render(template, JSON.parse(data));
      output.append(html);
});
