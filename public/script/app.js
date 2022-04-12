window.onload = function () {
    document.getElementById("btn-more-main").onclick = function () { more("main") };
    function more(id) {
        var dots = document.getElementById("dots-" + id);
        var moreText = document.getElementById("more-" + id);
        var btnText = document.getElementById("btn-more-" + id);

        if (dots.className.includes("d-none")) {
            moreText.classList.add("d-none");
            dots.classList.remove("d-none");
        } else {
            dots.classList.add("d-none");
            moreText.classList.remove("d-none");
        }
    }
}