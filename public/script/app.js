window.onload = function () {
    document.getElementById("btn-more-main").onclick = function () { more("main") };
    document.getElementById("btn-more-form").onclick = function () { more("form"); showFrom(); changeText(this, "Criar novo tópico") };
    document.getElementById("form-enviar").onclick = function () { showSuccessFrom(); };
    document.getElementById("editar-form").onclick = function () { showFrom(); };

    list = document.getElementsByClassName("toolbar");
    list[0].children[1].onclick = function () { executador(this); }
    list[0].children[0].onclick = function () { executador(this); }

    document.getElementById("body-com-1").onclick = function () { moreCom("1"); };
    document.getElementById("body-com-2").onclick = function () { moreCom("2"); };

    function more(id) {
        var dots = document.getElementById("dots-" + id);
        var moreText = document.getElementById("more-" + id);

        if (dots.className.includes("d-none")) {
            moreText.classList.add("d-none");
            dots.classList.remove("d-none");
        } else {
            dots.classList.add("d-none");
            moreText.classList.remove("d-none");
        }
    }
    function moreCom(id) {
        var moreCom = document.getElementById("more-com-" + id);
        if (moreCom.className.includes("d-none")) {
            moreCom.classList.remove("d-none");
        } else {
            moreCom.classList.add("d-none");
        }
    }

    function changeText(objeto, texto) {
        objeto.innerHTML = texto;
    }
    function showFrom() {
        var btn = document.getElementById("btn-form");
        var more = document.getElementById("more-form");
        var div = document.getElementById("disc-form");
        var divMore = document.getElementById("more-success-form");
        var success = document.getElementById("success-form");
        btn.classList.add("d-none");
        divMore.classList.add("d-none");
        success.classList.add("d-none");
        div.classList.remove("d-none"); 
        more.classList.remove("d-none");
    }
    function clearForm(){
        var assunto = document.getElementById("assunto");
        var editor = document.getElementById("editor");
        assunto.value = "";
        editor.innerHTML = "";
    }

    function showSuccessFrom() {
        var btn = document.getElementById("btn-form");
        var div = document.getElementById("more-success-form");
        var divForm = document.getElementById("disc-form");
        var moreForm = document.getElementById("more-form");
        var success = document.getElementById("success-form");

        divForm.classList.add("d-none");
        moreForm.classList.add("d-none");
        success.classList.remove("d-none");
        div.classList.remove("d-none");
        btn.classList.remove("d-none");

        document.getElementById("btn-more-form").onclick = function () { showFrom(); clearForm(); };
    }


    function executador(objeto) {
        document.execCommand(objeto.dataset.command, false, null);
    }
}