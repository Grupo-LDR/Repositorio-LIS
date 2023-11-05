
const botonEdit = document.getElementById("button_edit");
const botonConfirm = document.getElementById("button_confirm");
const botonCancel = document.getElementById("button_cancel");
const divButton = document.getElementById("div_button");
const formEdit = document.getElementById("form_edit");

//- botonCancel.addEventListener("click", function (e){
//-     //  e.preventDefault();
//-         window.opener.location.reload(true);
//-         this.close();
//- })    

botonEdit.addEventListener("click", function () {
    botonEdit.classList.add('d-none');
    botonConfirm.classList.remove('d-none');
    botonConfirm.onclick = null;
    botonCancel.classList.remove('d-none');
    formEdit.onclick = null;
    removeReadOnly(formEdit);
})
function removeReadOnly(element) {
    const elementosForm = element.elements;
    for (let i = 0; i < elementosForm.length; i++) {
        const elemento = elementosForm[i];
        if (elemento.tagName === "INPUT" || elemento.tagName === "TEXTAREA") {
            // Habilita el elemento para edición
            elemento.removeAttribute("readonly");
            elemento.removeAttribute("disabled");
        }
    }
}
function verifyForm() {
    //        alert('caca');
}       