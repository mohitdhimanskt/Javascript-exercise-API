const img = document.querySelector('#img');
const postReg = new XMLHttpRequest();
postReg.open('get',"https://xkcd.now.sh/?comic=latest")
postReg.send();
postReg.addEventListener('load', function(){
    console.log(JSON.parse(postReg.response))
    const link = JSON.parse(postReg.response).img;
    img.src="link";
    document.body.appendChild(img);
});

