const scroll= new LocomotiveScroll({
    el: document.getElementById(`viewport`),
    smooth: true
})


// circle ko move krte waqt ovel bnane k lia code
function circletooval() {
    let xscale= 1;
    let yscale=1;
    
    let xprev=0;
    let yprev=0;
    
    window.addEventListener(`mousemove`,function (dets) {
        let xdiff = dets.clientX - xprev;
        let ydiff = dets.clientY - yprev;

        xscale=gsap.utils.clamp(0.8,1.2,xdiff);
        yscale=gsap.utils.clamp(0.8,1,ydiff);

        xprev=dets.clientX;
        yprev=dets.clientY;
        circleMouseFollower(xscale,yscale)
    })
}

//cursor following dot

function circleMouseFollower(xscale, yscale) {
    const cursorFollower = document.querySelector(".cursorfollower");

    // Function to show the cursor follower
    function showCursorFollower() {
        cursorFollower.style.display = "block";
    }

    // Function to hide the cursor follower
    function hideCursorFollower() {
        cursorFollower.style.display = "none";
    }

    // Add event listener to show the cursor follower when entering the page
    document.addEventListener("mouseenter", showCursorFollower);

    // Add event listener to hide the cursor follower when leaving the page
    document.addEventListener("mouseleave", hideCursorFollower);

    // Add event listener to move and scale the cursor follower on mousemove
    document.addEventListener("mousemove", function (dets) {
        cursorFollower.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
}

  
  circleMouseFollower();
  circletooval();

  


//animation of first view
{
    let tl=gsap.timeline();
    tl.from(`.downtoupele`,{
        duration:.8,
        y:`200%`,
        
    })
    
    tl.from(`.uptodownele`,{
        duration:.8,
        y:`-100%`,
    })}


//  button animation 

// removing ball on hover
{
        let animatedElement=document.querySelector(`#mains3-3`);
        animatedElement.addEventListener(`mouseenter`,function (){
            let f=document.querySelector(`.cursorfollower`);
            f.style.display=`none`;
        })
        animatedElement.addEventListener(`mouseleave`,function (){
            let f=document.querySelector(`.cursorfollower`);
            f.style.display=`block`;
        })
}
// default lucation of arrows
{
    let deflt=gsap.timeline();
    deflt.to(`.s3buttonin1-1`,{
       x:`-53%`,
       duration:0
    })
    deflt.to(`.s3buttonin1-2`,{
       x:`-200%`,
       duration:0
    })
    deflt.to(`.s3buttonin2-1`,{
       x:`-53%`,
       duration:0
    })
    deflt.to(`.s3buttonin2-2`,{
       x:`-200%`,
       duration:0
    })

}
// moving arrows on hover
{
    let anim=document.querySelector(`.s3button1`);
    anim.addEventListener(`mouseenter`,()=>{
        let tl=gsap.timeline();
        tl.to(`.s3buttonin1-1`,{
            duration:0.25,
            x:`200%`
        })
        tl.to(`.s3buttonin1-2`,{
            x:`46%`,
            duration:0.25,
            onComplete:()=>{
                    gsap.to(`.s3buttonin1-2`,{
                        x:`-200%`,
                        duration:0
                    });
                    gsap.to(`.s3buttonin1-1`,{
                        x:`-53%`,
                        duration:0
                    });
            }
        })
    });
      
    let anim1=document.querySelector(`.s3button2`);
    anim1.addEventListener(`mouseenter`,()=>{
        let tl=gsap.timeline();
        tl.to(`.s3buttonin2-1`,
        {
            duration:0.25,
            x:`200%`,
        });
        tl.to(`.s3buttonin2-2`,{
            x:`46%`,
            duration:0.25,
            onComplete:()=>{
                gsap.to(`.s3buttonin2-2`,{
                    x:`-200%`,
                    duration:0
                });
                gsap.to(`.s3buttonin2-1`,{
                    x:`-53%`,
                    duration:0
                })
            }
        })
    });
    
    
}

// second view animation
