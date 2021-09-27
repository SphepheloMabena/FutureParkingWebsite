
//Copyright Sphephelo Mabena 2020
//This code was writen by Sphephelo Mabena

const container=document.getElementById("container");
const menu=document.getElementById("menu");//smartphones
const menuDesktop=document.getElementById("menu-desktop");
const btnOpen=document.getElementById("image-btn");
const btnClosed=document.getElementById("image-btn-closed");
const logoPhones=document.getElementById("logo");
const logoDesktop=document.getElementById("logo-desktop")
const loadFrame=document.getElementById("load-frame");
const parent=document.getElementById("parent");
const body=document.getElementsByTagName("body")[0];
const gridContainers=document.getElementsByClassName("grid-container")
//individual informative grid containers
const one=document.getElementById("one");
const two=document.getElementById("two");
const three=document.getElementById("three");
const four=document.getElementById("four");
const five=document.getElementById("five");
const six=document.getElementById("six");
btnOpen.addEventListener("click",function()
{
    container.style.display="none";
    menu.style.display="block";
    btnOpen.style.display="none";
    btnClosed.style.display="inline-block";
    
})

btnClosed.addEventListener("click",function()
{
    container.style.display="block";
    menu.style.display="none";
    btnOpen.style.display="inline-block";
    btnClosed.style.display="none";
    
})

function Desktop()
{
    logoDesktop.style.display="inline-block";
    logoPhones.style.display="none";
    menu.style.display="none";
    menuDesktop.style.display="inline-block";
    btnClosed.style.display="none";
    btnOpen.style.display="none";
    body.style.maxWidth="1000px"
    body.style.marginLeft="10%";

    for(i=0;i<gridContainers.length;i++)
    {
        gridContainers[i].width="90%"
        gridContainers[i].maxWidth="90%"
        
    }
    one.style.width="400px"
    two.style.width="400px"
    three.style.width="400px"
    four.style.width="400px"
    five.style.width="400px"
    five.style.fontSize="24px"
    six.style.width="400px"
    six.style.fontSize="24px"

}
function Phones()
{
    logoDesktop.style.display="none";
    logoPhones.style.display="inline-block";
    menu.style.display="none";
    menuDesktop.style.display="none";
    btnClosed.style.display="none";
    btnOpen.style.display="inline-block";
    
    one.style.width="80%"
    two.style.width="80%"
    three.style.width="80%"
    four.style.width="80%"
    five.style.width="80%"
    five.style.fontSize=""
    six.style.width="80%"
    six.style.fontSize=""
    
  
}
function loader()
{
    loadFrame.style.display="none"
    parent.style.display="block"
    if (window.innerWidth > 1000)
    {
        Desktop()
    }
    else
    {
        Phones();
    }
    
}
window.onload=loader
window.onresize=loader;