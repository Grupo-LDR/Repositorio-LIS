// userEdit.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form_edit");
    const buttonEdit = document.getElementById("edit");
    const buttonConfirm = document.getElementById("confirm");
    const buttonCancel = document.getElementById("cancel");

    // Función para habilitar la edición de campos
    function enableEdit() {
        console.log('click');
        const inputs = form.querySelectorAll("input, select");
        for (const input of inputs) {
            input.removeAttribute("readonly");
            input.removeAttribute("disabled");
        }
        buttonEdit.classList.add("d-none");
        buttonConfirm.classList.remove("d-none");
        buttonCancel.classList.remove("d-none");
    }

    // Función para cancelar la edición
    function cancelEdit() {
        console.log('click');
        window.location.href = '/';
    }
    buttonEdit.addEventListener("click", enableEdit);
    buttonCancel.addEventListener("click", cancelEdit);
    // buttonConfirm.addEventListener("click", function () {
    //     sendPostUser(form);
    // });




});

