
    window.addEventListener("load", function(){
        document.querySelector(".preloader").classList.add("opacity-0");
         
       setTimeout(function(){
            document.querySelector(".preloader").style.display="none";
        },1000)
    })

    // Portofolio Item Filter

    const filterContainer=document.querySelector(".portofolio-filter"),
          filterBtns=filterContainer.children,
          totalFilterBtn=filterBtns.length,
          portofolioItems=document.querySelectorAll(".portofolio-item"),
          totalPortofolioItem=portofolioItems.length;

          for(let i=0; i<totalFilterBtn; i++){
              filterBtns[i].addEventListener("click", function(){
                  filterContainer.querySelector(".active").classList.remove("active")
                  this.classList.add("active");

                  const filterValue=this.getAttribute("data-filter");
                  for(let k=0; k<totalPortofolioItem; k++){
                      if(filterValue === portofolioItems[k].getAttribute("data-category")){
                          portofolioItems[k].classList.remove("hide");
                          portofolioItems[k].classList.add("show");
                      }
                      else{
                          portofolioItems[k].classList.remove("show");
                          portofolioItems[k].classList.add("hide");
                    }
                    if(filterValue === "all"){
                        portofolioItems[k].classList.remove("hide");
                        portofolioItems[k].classList.add("show");
                    }
                }
            })
        }

// portofolio Lightbox
const lightbox=document.querySelector(".lightbox"),
    lightboxImg=lightbox.querySelector(".lightbox-img"),
    lightboxClose=lightbox.querySelector(".lightbox-close"),
    lightboxText=lightbox.querySelector(".caption-text"),
    ightboxCounter=lightbox.querySelector(".caption-counter");
    let itemIndex=0;

    for(let i=0; i<totalPortofolioItem; i++){
        portofolioItems[i].addEventListener("click", function(){
            itemIndex=i;
            changeItem();
            toggleLightbox();
        })
    }

    function nextItem() {
        if(itemIndex === totalPortofolioItem-1){
            itemIndex=0;
        }
        else{
            itemIndex++
        }
        changeItem();
    }

    function prevItem() {
        if(itemIndex === 0){
            itemIndex=totalPortofolioItem-1;
        }
        else{
            itemIndex--;
        }
        changeItem();
    }

    function toggleLightbox(){
        lightbox.classList.toggle("open");
    }

    function changeItem(){
        imgSrc=portofolioItems[itemIndex].querySelector(".portofolio-img img").getAttribute("src");
        lightboxImg.src=imgSrc;
        lightboxText.innerHTML=portofolioItems[itemIndex].querySelector("h4").innerHTML;
        ightboxCounter.innerHTML= (itemIndex+1) + " of " + totalPortofolioItem;
    }

// close Lightbox
    lightbox.addEventListener("click", function(event){
        if(event.target === lightboxClose || event.target === lightbox){
            toggleLightbox();
        }
    })


    // Aside Navbar Section
       const nav=document.querySelector(".nav"),
             navList=nav.querySelectorAll("li"),
             totalNavList=navList.length,
             allSection=document.querySelectorAll(".section"),
             totalSection=allSection.length;
            
    for(let i=0; i<totalNavList; i++){
        const a=navList[i].querySelector("a");
        a.addEventListener("click",function(){
            // this.remove back section Class
            removeBackSectionClass();

            for(let i=0; i<totalSection; i++){
             allSection[i].classList.remove("back-section");
                }

            for(let j=0; j<totalNavList; j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    // add back section Class
                    addBackSectionClass(j)
                }
                navList[j].querySelector("a").classList.remove("active");
                
            }

        this.classList.add("active");
        showSection(this);

        if(window.innerWidth <1200){
            asideSectionTogglerBtn();
        }

        })
    }

    function removeBackSectionClass(){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
            }
    }
    function addBackSectionClass(num){
        allSection[num].classList.add("back-section");
    }
    function showSection(element){
          for(let i=0; i<totalSection; i++){
              allSection[i].classList.remove("active");
          }
         const target=element.getAttribute("href").split("#")[1];
      document.querySelector("#"+target).classList.add("active")

    }

    
    function updateNav(element){
        for(let i=0; i<totalNavList; i++){
            navList[i].querySelector("a").classList.remove("active");
            const terget=element.getAttribute("href").split("#")[1];
            if(terget === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }


    document.querySelector(".hire-me").addEventListener("click",function(){
        const sectionIndex=this.getAttribute("data-section-inde");
        // console.log(sectionIndex)
        showSection(this);
        updateNav(this);
        removeBackSectionClass();
        addBackSectionClass(sectionIndex);

    })

    const navTogglerBtn=document.querySelector(".nav-toggler"),
          aside=document.querySelector(".aside");
        
    navTogglerBtn.addEventListener("click",asideSectionTogglerBtn)

    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.toggle("open");
        }
    }