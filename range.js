window.onload=function(){
    sl=document.getElementById('slider');
    
    sl.oninput=function(){
        document.getElementById('output').innerHTML=this.value
    }
    
    st="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789"


    pa=document.getElementById('password')
    generate=document.getElementById('gen')
   
    function pas(){
       let  u;
        p=document.getElementById('output')
        s=st;
        j=""
        let z;
        check=document.getElementById('check').checked
        if(check){
            p="@#$%&*"
            s+=p;
            y=Math.floor(Math.random()*6)
            u=p[y];
            z=Math.floor(Math.random()*(sl.value-1))
        }
        for(i=0;i<sl.value;i++){
            if(z==i){
                j+=u;
                continue;
            }
            x=Math.floor(Math.random()*s.length)
            j+=s[x];
        }
        
        pa.innerHTML=j;
    }
    co=document.getElementById('cop');
    function copy(){
        navigator.clipboard.writeText(pa.innerHTML);
        document.getElementById('copied').innerHTML="Copied to clipboard!!!!"
        setTimeout(()=>{
            
            document.getElementById('copied').innerHTML=""
        },2000)

    }
    generate.addEventListener('click',pas);
    co.addEventListener('click',copy);

}