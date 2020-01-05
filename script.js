$(window).on("load", start);
window.addEventListener("load", sidenVises);

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

/*! klik paa div */
$(".figcaption").click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
});

$(".figcaption").hover(function () {
    $(this).css('cursor', 'pointer');
}, function () {
    $(this).css('cursor', 'auto');
});


$(".click01").click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
});

$(".click01").hover(function () {
    $(this).css('cursor', 'pointer');
}, function () {
    $(this).css('cursor', 'auto');
});
