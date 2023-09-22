let stars=document.getElementById("stars");
let moon=document.getElementById("moon");
let mountain3=document.getElementById("mountain3");
let mountain4=document.getElementById("mountain4");
let river=document.getElementById("river");
let boat=document.getElementById("boat");
let hee =document.querySelector(".hee");

window.onscroll = function()
{
    let value=scrollY;
    stars.style.left=value + 'px';
    moon.style.top=value*4 + 'px';
    mountain3.style.top=value*2 + 'px';
    mountain4.style.top=value*1.5 + 'px';
    moon.style.top=value + 'px';  
    boat.style.top=value + 'px';
    boat.style.left=value*3 + 'px';
    river.style.top=value + 'px';
    hee.style.fontSize=value + 'px';
    if(scrollY>=67)
    {
        hee.style.fontSize=67 + 'px';
        hee.style.position='fixed';
        if(scrollY>=478)
        {
    hee.style.display='none';
        }
        else{
            hee.style.display='block';  
        }
        if(scrollY>=127)
        {
document.querySelector(".main").style.background='linear-gradient(#376281,#100001f)';
        }
        else{
            document.querySelector(".main").style.background='rgb(27, 2, 86), rgba(233, 14, 149, 0.792)';
        }
    }
}