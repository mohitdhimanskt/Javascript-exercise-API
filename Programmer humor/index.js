function reqListener() {
         const data = JSON.parse(this.responseText);
         let status = data.status;
         if(status >= 400){
             console.log('erro!')
         }else{
             console.log('success!')
         }
         console.log(data);

         let img =document.createElement('img')
         document.body.appendChild(img)
         img.src = data.img
     }
     var oReq = new XMLHttpRequest();
     let status = oReq.status;

     oReq.addEventListener("load", reqListener);
     oReq.open('GET', 'https://xkcd.now.sh/?comic=614');
     oReq.send();





    
    let data
    let img =document.createElement('img')
    document.body.appendChild(img)

    axios.get('https://xkcd.now.sh/?comic=614')



    .then(function (response) {
        console.log(response);
        
        data=response.data.img
        console.log(data)
        img.src = data

    })
    .catch(function (error) {
        console.log('error');
    })
    .finally(function () {

    });  


