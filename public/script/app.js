$(function () {
    $("#btn-more-main").click(function () { moreText("main") });
    $("#btn-more-form").click(function () { moreText("form"); showFrom(); changeText($("#btn-more-form"), "Criar novo tópico") });
    $("#form-enviar").click(function () { showSuccessFrom(); });
    $("#editar-form").click(function () { showFrom(); });
    $("#body-com-1").click(function () { moreComs("1"); moreText("com-1"); });
    $("#body-com-2").click(function () { moreComs("2"); moreText("com-2"); });

    // Não funciona com func click do Jquery 
    let listButton = $(".toolbar")[0].children;
    listButton[1].onclick = function () { executador(this); }
    listButton[0].onclick = function () { executador(this); }
});

function removeNone(Object) {
    Object.removeClass("d-none");
}
function addNone(Object) {
    Object.addClass("d-none");
}
function hasNone(Object) {
    return Object.hasClass("d-none");
}
function switchNone(Object1, Object2) {
    Object1.addClass("d-none");
    Object2.removeClass("d-none");
}
function moreText(id) {
    let dots = $("#dots-" + id);
    let text = $("#more-" + id);

    if (hasNone(dots))
        switchNone(text, dots);
    else
        switchNone(dots, text);
}
function moreComs(id) {
    let coms = $("#more-coms-" + id);
    if (hasNone(coms))
        removeNone(coms);
    else
        addNone(coms);
}
function changeText(Object, text) {
    Object.html(text);
}
function showFrom() {
    addNone($("#btn-form"));
    addNone($("#more-success-form"));
    addNone($("#success-form"));
    removeNone($("#disc-form"));
    removeNone($("#more-form"));
}
function clearForm() {
    $("#assunto").val("");
    $("#editor").html("");
}
function showSuccessFrom() {
    removeNone($("#btn-form"));
    removeNone($("#more-success-form"));
    removeNone($("#success-form"));
    addNone($("#disc-form"));
    addNone($("#more-form"));

    $("#btn-more-form").click(function () { showFrom(); clearForm(); });
}
function executador(objeto) {
    document.execCommand(objeto.dataset.command, false, null);
}