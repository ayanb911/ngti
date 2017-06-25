$(document).ready(function () {
    overlaySlide();
})

function overlaySlide(){
    var overlay = $("#profileOverlay"),
        overlayBlack = $(".overlay-black"),
        menuLink = $("#aboutMe"),
        closeBtn = $(".overlay-close");
    menuLink.click(function () {
        overlay.addClass("overlay-shown");
        overlayBlack.addClass("show");
    })
    closeBtn.click(function () {
        overlay.removeClass("overlay-shown");
        setTimeout(function () {
            overlayBlack.removeClass("show");
        }, 500);
    })
}