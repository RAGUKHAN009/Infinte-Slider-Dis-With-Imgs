const prevBtn = document.getElementById("PREV");
const nextBtn = document.getElementById("NEXT");
const container1 = document.querySelector(".carousel1");
const children1 = document.querySelectorAll(".cart1");
const container2 = document.querySelector(".carousel2");
const children2 = document.querySelectorAll(".cart2");

let currentIndex = 0;

//////////////////////////////////////////////

document.getElementById('PREV').addEventListener('click', function () {
    document.body.style.overflow = 'auto'; // Enable scrolling
});

//////////////////////////////////////////////

document.getElementById('NEXT').addEventListener('click', function () {
    document.body.style.overflow = 'auto'; // Enable scrolling
});

//////////////////////////////////////////////
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % children1.length;
    updateClassesOnPrev1();
    updateClassesOnPrev2();
});

function updateClassesOnPrev1() {
    children1.forEach((child1, index) => {
        const newIndex = (index - currentIndex + children1.length) % children1.length + 1;
        child1.classList.remove(`carr1`, `carr2`, `carr3`, `carr4`, `carr5`, `car1`, `car2`, `car3`, `car4`, `car5`);
        child1.classList.add(`carr${newIndex}`);
    });
}
function updateClassesOnPrev2() {
    children2.forEach((child2, index) => {
        const newIndex = (index - currentIndex + children2.length) % children2.length + 1;
        child2.classList.remove(`carr21`, `carr22`, `carr23`, `carr24`, `carr25`, `car21`, `car22`, `car23`, `car24`, `car25`);
        child2.classList.add(`carr2${newIndex}`);
    });
}

//////////////////////////////////////////////
//////////////////////////////////////////////

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + children1.length) % children1.length;
    updateClassesOnNext1();
    updateClassesOnNext2();
});

function updateClassesOnNext1() {
    children1.forEach((child1, index) => {
        const newIndex = (index - currentIndex + children1.length) % children1.length + 1;
        child1.classList.remove(`carr1`, `carr2`, `carr3`, `carr4`, `carr5`, `car1`, `car2`, `car3`, `car4`, `car5`);
        child1.classList.add(`car${newIndex}`);
    });
}

function updateClassesOnNext2() {
    children2.forEach((child2, index) => {
        const newIndex = (index - currentIndex + children2.length) % children2.length + 1;
        child2.classList.remove(`carr21`, `carr22`, `carr23`, `carr24`, `carr25`, `car21`, `car22`, `car23`, `car24`, `car25`);
        child2.classList.add(`car2${newIndex}`);
    });
}


////////////////////////////
////////////////////////////
////////////////////////////

window.addEventListener('scroll', () => {
    const button1 = document.getElementById('PREV');
    const button2 = document.getElementById('NEXT');
    if (window.scrollY > 0) {
        button1.disabled = true;
    } else {
        button1.disabled = false;
    }

    if (window.scrollY > 0) {
        button2.disabled = true;
    } else {
        button2.disabled = false;
    }
});



// 
// 


window.addEventListener('scroll', function () {
    const Img1 = document.getElementById('Img111');
    const Img2 = document.getElementById('Img112');
    // 
    // 
    const Img3 = document.getElementById('Img121');
    const Img4 = document.getElementById('Img122');
    // 
    // 
    const Img5 = document.getElementById('Img131');
    const Img6 = document.getElementById('Img132');
    // 
    // 
    const Img7 = document.getElementById('Img141');
    const Img8 = document.getElementById('Img142');
    // 
    // 
    const Img9 = document.getElementById('Img151');
    const Img10 = document.getElementById('Img152');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    let scrollPercent = (scrollPosition / windowHeight) * 1;
    if (scrollPercent > 100) {
        scrollPercent = 100;
    }

    Img1.style.left = `${-scrollPercent}px`;
    Img2.style.right = `${-scrollPercent}px`;

    Img3.style.left = `${-scrollPercent}px`;
    Img4.style.right = `${-scrollPercent}px`;

    Img5.style.left = `${-scrollPercent}px`;
    Img6.style.right = `${-scrollPercent}px`;

    Img7.style.left = `${-scrollPercent}px`;
    Img8.style.right = `${-scrollPercent}px`;

    Img9.style.left = `${-scrollPercent}px`;
    Img10.style.right = `${-scrollPercent}px`;


    if (window.scrollY <= 0) {
        
        Img1.style.left = `${75}px`;
        Img2.style.right = `${75}px`;
        
        Img3.style.left = `${75}px`;
        Img4.style.right = `${75}px`;
        
        Img5.style.left = `${75}px`;
        Img6.style.right = `${75}px`;
        
        Img7.style.left = `${75}px`;
        Img8.style.right = `${75}px`;
        
        Img9.style.left = `${75}px`;
        Img10.style.right = `${75}px`;
    }
});




window.addEventListener('scroll', function () {
    const containers = document.querySelectorAll('.carr3, .car3');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    let scrollPercent = (scrollPosition / windowHeight) * 100;
    if (scrollPercent > 100) {
        scrollPercent = 100;
    }

    containers.forEach(container => {
        container.style.background = `linear-gradient(to top, #f5deb35c ${scrollPercent}%, #1a1617 0%)`;
    });

});