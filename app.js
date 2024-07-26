const navOption=document.querySelectorAll(".nav-single-option");
for(let obj of navOption){
    obj.addEventListener("mouseover",()=>{
        obj.style.backgroundColor="#A22FFF";
    });
    obj.addEventListener("mouseout",()=>{
        obj.style.backgroundColor="";
    })
}

const phoneNavOptions=document.querySelectorAll(".phone-nav-options");
const navListPhone=document.querySelector(".outer-after-click-nav");
const TopnavPhone=document.querySelector(".phone-nav-outer");
const Hambar=document.querySelector(".Hambar");
const phoneNavInside=document.querySelector(".phone-nav")

Hambar.addEventListener("click",()=>{
    phoneNavInside.classList.toggle("sharp-border-phone-nav");
    if(Hambar.attributes.src.nodeValue=="Icons/show-hambargar.svg"){
        Hambar.attributes.src.nodeValue="Icons/cancel-line.svg"
        navListPhone.style.display="flex";
    }
    else{
        Hambar.attributes.src.nodeValue="Icons/show-hambargar.svg";
        navListPhone.style.display="none";
    }
})
for(let obj of phoneNavOptions){
    obj.addEventListener("mouseover",()=>{
        obj.style.backgroundColor="#A22FFF";
    });
    obj.addEventListener("mouseout",()=>{
        obj.style.backgroundColor="";
    })
    obj.addEventListener("click",()=>{
        navListPhone.style.display="none";
        TopnavPhone.style.display="flex";
    })
}

const visitSite=document.querySelectorAll(".visit-site");
const gotoGitHub=document.querySelectorAll(".go-to-github");

for(let obj of visitSite){
    obj.addEventListener("mouseover",()=>{
        obj.style.backgroundColor="#A22FFF";
        obj.style.color="white";
    });
    obj.addEventListener("mouseout",()=>{
        obj.style.backgroundColor="";
        obj.style.color="#A22FFF";
    });
}

for(let obj of gotoGitHub){
    obj.addEventListener("mouseover",()=>{
        obj.style.backgroundColor="#A22FFF";
        obj.style.color="white";
    });
    obj.addEventListener("mouseout",()=>{
        obj.style.backgroundColor="";
        obj.style.color="#C072FF";
    });
}

const emailForm=document.querySelector(".email-form");
const inputForm=document.querySelector(".idea-input");
emailForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    inputForm.value="";
})

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.smooth-scroll');

    for (const link of links) {
        link.addEventListener('click', function(e) {
            phoneNavInside.classList.toggle("sharp-border-phone-nav");
            Hambar.attributes.src.nodeValue="Icons/show-hambargar.svg";
            e.preventDefault();

            const targetID = this.getAttribute('href');
            const targetSection = document.querySelector(targetID);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });


            history.replaceState(null, null, targetID);
        });
    }
    
    window.addEventListener('popstate', function() {
        if (history.length <= 1) {
            window.close();
        }
    });
});
