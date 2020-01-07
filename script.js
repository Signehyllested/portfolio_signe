window.addEventListener("load", sidenVises);
window.addEventListener("load", billede);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}

function billede() {
    console.log('billede her');
    window_Height = window.innerHeight;
    window_Width = window.innerWidth;

    image_Element = document.getElementById("image");
    image_Height = image_Element.clientHeight;
    image_Width = image_Element.clientWidth;

    availSpace_V = window_Height - image_Height;
    availSpace_H = window_Width - image_Width;

    var changeInterval = 3000;
    setInterval(moveImage, changeInterval);
}

function moveImage() {
    console.log('nypos');
    var randNum_V = Math.round(Math.random() * availSpace_V);
    var randNum_H = Math.round(Math.random() * availSpace_H);

    image_Element.style.top = randNum_V + "px";
    image_Element.style.left = randNum_H + "px";
}
