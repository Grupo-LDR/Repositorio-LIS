// userEdit.js
document.addEventListener("DOMContentLoaded", function () {
    const femaleRadio = document.getElementById("female");
    const maleRadio = document.getElementById("male");
    const pregnantYesRadio = document.getElementById("preg_active");
    const pregnantNoRadio = document.getElementById("preg_inactive");

    femaleRadio.addEventListener("change", function () {
        if (this.checked) {
            pregnant.classList.remove("d-none");
        }
    });

    maleRadio.addEventListener("change", function () {
        if (this.checked) {
            pregnant.classList.add("d-none");
            // Establece el valor del radio "Pregnant" en "No"
            pregnantNoRadio.checked = true;
        }
    });
});

