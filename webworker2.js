let i=0;
setInterval(()=>{
    i+=1;
    postMessage(i);
},1000)