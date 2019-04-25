document.getElementById("submitButton").addEventListener("click", function(e) {
  e.preventDefault();
  fetchValue();
});

function fetchValue() {
  var input = document.getElementById("search").value;
  console.log("user input : ", input);
  fetch("/search?q=" + input)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log("my data is : ", data);
      var news = document.createElement("a");
      var node = document.createTextNode("Click Here");
      news.href = data;
      news.appendChild(node);

      var element = document.getElementById("newsURL");
      element.appendChild(news);
    })
    .catch(function(error) {
      console.log(error);
    });
}
