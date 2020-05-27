export const switchImg=count=>{
    alert(count)
    setInterval(()=>{
        if(count<5){
            count++  
        }
        else{
            count=1;
        }
    },1000)
}