let btn1 = document.querySelector('#button1')
let btn2 = document.querySelector('#button2')
let ul = document.querySelector('.ul')
btn1.addEventListener("click",withXHR);
btn2.addEventListener("click",withAxios);

function withXHR(){
    var oReq = new XMLHttpRequest();
    oReq.open('GET','https://dog.ceo/api/breeds/image/random');
    oReq.send();
    oReq.onload = function(){
        if(oReq.status == 200){
          console.log('success')
          const data = JSON.parse(oReq.responseText);
          console.log(data)
          console.log(data.message)
          let li =document.createElement('li')
          ul.appendChild(li)
          let img =document.createElement('img')
          li.appendChild(img)
          img.src = data.message
        } else {
            console.log('error!')
        } 
        
    }
}
 
let data 
function withAxios(){
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(
        function (response) {
            console.log(response);
            data=response.data.message
            console.log(data)
            let li =document.createElement('li')
            ul.appendChild(li)
            let img =document.createElement('img')
            li.appendChild(img)
            img.src = data
        })
        .catch(function(error){
            console.log('error');
        })
    .finally(function(){

    });
}