
document.getElementById('submitButton').addEventListener('click', function(e){
  e.preventDefault();
  fetchValue();
});


function fetchValue() {
var input = document.getElementById('search').value;
console.log('user input : ' , input );
fetch('/search?q=' + input)
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
