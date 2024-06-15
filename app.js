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
const closeHam=document.querySelector(".close-hambargar");
const navListPhone=document.querySelector(".outer-after-click-nav");
const openHam=document.querySelector(".show-hambargar");
const TopnavPhone=document.querySelector(".phone-nav-outer");

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

closeHam.addEventListener("click",()=>{
    navListPhone.style.display="none";
    TopnavPhone.style.display="flex";
});

openHam.addEventListener("click",()=>{
    navListPhone.style.display="flex";
    TopnavPhone.style.display="none";
});

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
