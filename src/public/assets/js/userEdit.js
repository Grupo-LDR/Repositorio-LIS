// userEdit.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form_edit");
    const buttonEdit = document.getElementById("button_edit");
    const buttonConfirm = document.getElementById("button_confirm");
    const buttonCancel = document.getElementById("button_cancel");

    // Función para habilitar la edición de campos
    function enableEdit(event) {
        event.preventDefault(); // Prevenir el envío del formulario por GET
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
        //1 const inputs = form.querySelectorAll("input, select");
        console.log('click');
        window.close();
        // for (const input of inputs) {
        //     input.setAttribute("readonly", true);
        //     input.setAttribute("disabled", true);
        // }
        // buttonEdit.classList.remove("d-none");
        // buttonConfirm.classList.add("d-none");
        // buttonCancel.classList.add("d-none");
    }


    function sendEdit() {
        const formData = new FormData(form);
        console.log(formData);
        fetch("/user/editUser", {
            method: "POST", // Cambia el método HTTP según tus necesidades (por ejemplo, POST)
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    // La solicitud fue exitosa, puedes mostrar un mensaje de éxito o redirigir a otra página
                    alert("Datos actualizados con éxito");
                    //   window.location.href = "/otra-ruta"; // Cambia la URL de redirección
                } else {
                    // La solicitud falló, maneja el error según sea necesario
                    alert("Error al actualizar datos");
                }
            })
            .catch((error) => {
                // Maneja errores de red
                console.error("Error de red: " + error);
            });
    }




    buttonEdit.addEventListener("click", enableEdit);
    buttonCancel.addEventListener("click", cancelEdit);
    buttonConfirm.addEventListener("click", function () {
        sendPostUser(form);
    });


    function sendEdit2() {
        const form = document.getElementById("form_edit"); // Asegúrate de seleccionar el formulario adecuado por su ID
        const formData = new FormData(form);

        // Crea una URL para tu ruta de servidor
        const url = "/user/editUser"; // Reemplaza esto con tu ruta real

        // Configura la solicitud fetch
        fetch(url, {
            method: "POST", // Cambia el método HTTP según tus necesidades (por ejemplo, POST)
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    // La solicitud fue exitosa, puedes mostrar un mensaje de éxito o redirigir a otra página
                    alert("Datos actualizados con éxito");
                    // window.location.href = "/otra-ruta"; // Cambia la URL de redirección
                } else {
                    // La solicitud falló, maneja el error según sea necesario
                    alert("Error al actualizar datos");
                }
            })
            .catch((error) => {
                // Maneja errores de red
                console.error("Error de red: " + error);
            });
    }

    function sendPostUser(formEdit) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        var urlencoded = new URLSearchParams();
        formEdit.querySelectorAll('input, textarea, select').forEach(function (element) {
            if (element.tagName === 'INPUT') {
                if (element.type === 'text') {
                    urlencoded.append(element.name, element.value);
                } else if (element.type === 'radio') {
                    if (element.checked) {
                        urlencoded.append(element.name, element.value);
                    }
                }
            } else if (element.tagName === 'TEXTAREA') {
                urlencoded.append(element.name, element.value);
            } else if (element.tagName === 'SELECT') {
                urlencoded.append(element.name, element.value);
            }
        });




        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("/user/editUser", requestOptions)
            //  .then(response => response.text())
            .then(result => console.log(result))
            .then(() => {
                // Cierro y redirijo
                //a ca deberi air un aviso OK

                closeAndReload();
            })
            .catch(error => console.log('error', error));
    }

});

