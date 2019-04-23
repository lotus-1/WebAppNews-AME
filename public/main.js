var inputValue = document.getElementById('search').value;

inputValue.addEventListener('click', function(e){
  e.preventDefault();
  fetchValue(inputValue);
});


function fetchValue(e) {
event.preventDefault();
var input = document.getElementById('search');
fetch('/search')
.then(function(response) {
  return response.json();
})
.then(function(data) {
console.log(data);
})
.catch(function(error) {
  console.log(error);
})
};
