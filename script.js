setInterval(function(){
    let currentTime = new Date().toLocaleTimeString()
    document.getElementsByClassName('time')[0].innerHTML=currentTime
},1000)


setInterval(function(){
    let currentDate = new Date().toLocaleDateString()
    document.getElementsByClassName('date')[0].innerHTML=currentDate   
},1000)
