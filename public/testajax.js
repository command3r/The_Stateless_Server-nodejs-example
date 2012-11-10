var xhr = new XMLHttpRequest();
xhr.open('POST', '/', true);
xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
xhr.addEventListener('load', function(event) { 
  console.log(event.target.response); 
});
xhr.send(JSON.stringify({evento: "cafe agil", cidade: "natal"}));
