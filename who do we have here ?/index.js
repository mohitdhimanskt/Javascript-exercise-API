function reqListener() {
        const facts = JSON.parse(this.responseText);
         console.log(facts);
     }
    var xhr  = new XMLHttpRequest();
     console.log("initializing XMLHttpRequest", xhr);
     xhr.addEventListener("load", reqListener);
     xhr.open('GET', 'https://www.randomuser.me/api');
     console.log("making a request...")

     xhr.send();
     console.log("sent the request, let's see...");

     console.log(axios);

     axios.get('https://www.randomuser.me/api')


     .then(function (response) {
         console.log('GetV', response);
     })
     .catch(function (error) {
         console.log('an error???????????', error);
     })
     .finally(function () {
         
         console.log('Hey!'
         )
 });  

