var pageno=1
async function unsplash(pageno){
   var api =
   'https://api.unsplash.com/photos/?page=1&client_id=x_NB4WqK3EtrdO9sLUKvaTUrn-yoQ2G1tkJ9Hjt4tLY&per_page=1000&order_by=popular'
    

try{
    var data_fetch=await fetch(api)
    var final_data= data_fetch.json()
    var final_out= await final_data
    
    for(let i of final_out){
     
      var image_cre= document.createElement('img')
      image_cre.setAttribute('src',i.urls.thumb)
      document.querySelector('body').append(image_cre)
    }


}
catch(err){
   console.log(err);
   console.log("error");
}
}
unsplash(1)

window.addEventListener('scroll',()=>{
   console.log('scrolled')
   pageno=pageno+1;
   console.log(pageno);
   unsplash(pageno)
})
 
