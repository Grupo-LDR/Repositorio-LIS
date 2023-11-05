/**Seccion captura elementos de sistema */

// captura div secciones 
const sectionIzq = document.getElementById('izq');
const sectionDer = document.getElementById('der');
// captura menu 
const navLink = document.getElementsByClassName('nav-link');
const userTable = lisTable(sectionIzq, '#usersTable', 'user', 'userLink');
// captura iconos
const userLink = capturarLink('userLink');
/****************************************************** */
//console.log(userLink);
document.addEventListener("DOMContentLoaded", function () {
    const notificacion = document.getElementById('alert');

    notificacion.addEventListener('click', () => {
        Toastify({
            text: "This is a toast",
            duration: 3000,
            destination: "/user",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { }
        }).showToast();
    });
});
/***************************************************** */

async function capturarLink(link) {
    const element = document.getElementById(link);
    return element;
}
// convierto menu a array
/**
 * 
 */
Array.from(navLink).forEach(element => {
    //    console.log(element.textContent);
    // agrego escuchador evento    
    element.addEventListener('click', async function (event) {
        event.preventDefault();
        console.log(element.id);
        //        await consultaLink(element.id);
        switch (element.id) {
            case 'admin':
                const userT = await lisTable(sectionDer, '#refValTable', 'refvalue', 'userLink');
                break;
            case ('order'):
                const derecha = await mostrarResultadoEnWeb(sectionDer, 'userLink');
            //                const userOrder = await lisTable(sectionDer, '#orderTable', 'userLink', 'userLink');


        }
    });
});

/**
 * 
 * @param {*} elemento 
 * @param {*} link 
 */
async function mostrarResultadoEnWeb(elemento, htmlDocument) {
    elemento.innerHTML = '';
    if (htmlDocument) {
        elemento.innerHTML = htmlDocument;
    } else {
        elemento.innerHTML = 'No se pudo obtener el contenido.';
    }
}
/**
 * 
 * @param {*} link 
 * @returns 
 */
async function consultaWebServer(link) {
    try {
        const response = await fetch(`/${link}`); //await fetch(link);
        if (response.ok) {
            const htmlContent = await response.text();
            const parser = new DOMParser();
            const htmlDocument = parser.parseFromString(htmlContent, 'text/html');
            if (htmlDocument) {

                return htmlDocument.body.innerHTML;
            }
            return null;
        } else {
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error en consultaWebServer:', error);
    }
}

/**
 * 
 * @param {*} section para mostrar
 * @param {*} id tabla a mostrar
 * @param {*} link 
 * @param {*} idElement 
 */
async function lisTable(section, tabla, link, idElement) {
    const result = await consultaWebServer(link);
    await mostrarResultadoEnWeb(section, result);
    const table = $(tabla).DataTable({
        "paging": true,
        "responsive": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": true,
        "fixedHeader": true,
        "language": {
            "search": "Buscar:",
            "searchPlaceholder": "Escribe para buscar",
            "lengthMenu": "Mostrar _MENU_ entradas por página",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ entradas",
            "infoEmpty": "No se encontraron entradas",
            "infoFiltered": "(filtrado de un total de _MAX_ entradas)",
            "zeroRecords": "No se encontraron registros coincidentes",
            "emptyTable": "La tabla está vacía",
            "paginate": {
                "first": "Primero",
                "previous": "Anterior",
                "next": "Siguiente",
                "last": "Último"
            }
        },
        "drawCallback": function () {
            const userLinks = this.api().table().container().querySelectorAll('.userEdit i');
            userLinks.forEach(link => {
                link.addEventListener('click', function (event) {
                    event.stopPropagation();
                    if (event.target.tagName === 'I') {
                        const name = this.getAttribute('name');
                        const route = this.getAttribute('route');
                        const iconId = this.getAttribute('id');

                        switch (tabla) {
                            case '#usersTable':
                                console.log(`Clic en el enlace con name=${name} y route=${route} con id ${iconId}`);
                                routeClickUser(route, name);
                                break;
                            case '#refValTable':
                                routeClickRefValueTabla(route, tabla);
                                break;
                        }
                    }
                });
            });
        }

    },
    );
}

/**
 * Seccion ruteo cliks
 * @param {*} route 
 * @param {*} name 
 */
async function routeClickUser(route, name) {
    //    console.log(`Clic en el enlace con name=${name} y route=${route}`);
    let result;
    switch (route) {
        case 'editUser':
            result = await consultaWebServer(`user/edit/${name}`);
            // LLAMAR  A LAS FUCIONES CORRESPONDIENTES
            mostrarResultadoEnWeb(sectionDer, result);
            recorrerFormEdit();
            break;
        case 'newOrderUser':
            result = await lisTable(sectionDer, '#orderTable', `user/order/new/${name}`, 'userLink');
            //     result = await consultaWebServer(`user/order/new/${name}`);
            //    mostrarResultadoEnWeb(sectionDer, result);
            break;
    }
}
function routeClickRefValueTabla(route) {
    lisTable(sectionIzq, '#refValTable', '/refvalue', 'userLink');
}
/**
 * recorre formulario user para permitir editar.
 */
function recorrerFormEdit() {
    console.log('en seccion edit user');
    const botonEdit = document.getElementById("button_edit");
    const botonConfirm = document.getElementById("button_confirm");
    const botonCancel = document.getElementById("button_cancel");
    const divButton = document.getElementById("div_button");
    const formEdit = document.getElementById("form_edit");
    botonEdit.addEventListener("click", function (event) {
        event.stopPropagation();
        event.preventDefault();
        console.log(`ACA ESTOY EN ${event}`);
        botonEdit.classList.add('d-none');
        botonConfirm.classList.remove('d-none');
        botonConfirm.onclick = null;
        botonCancel.classList.remove('d-none');
        formEdit.onclick = null;
        removeReadOnly(formEdit);
        console.log('ACA ESTOY EN edit');
    });
    botonConfirm.addEventListener("click", function (event) {
        event.stopPropagation();
        event.preventDefault();
        sendPostUser(formEdit);
    });
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

        /*
        const genderRadio=formEdit.querySelectorAll('input[name="gender"]');
        genderRadio.forEach(radio => {         
            if(radio.checked){
                urlencoded.append('gender', radio.value);
            }
        });
        const sexRadio=formEdit.querySelectorAll('input[name="sex"]');
        sexRadio.forEach(radio => {         
            if(radio.checked){
                urlencoded.append('sex', radio.value);
            }
        });
        const activeRadio=formEdit.querySelectorAll('input[name="active"]');
        activeRadio.forEach(radio => {         
            if(radio.checked){
                urlencoded.append('active', radio.value);
            }
        });
*/


        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("/user/edit", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .then(() => {
                lisTable(sectionIzq, '#usersTable', 'user', 'userLink');
            })
            .catch(error => console.log('error', error));
    }
    function removeReadOnly(element) {
        const elementosForm = element.elements;
        for (let i = 0; i < elementosForm.length; i++) {
            const elemento = elementosForm[i];
            if (elemento.tagName === "INPUT" || elemento.tagName === "TEXTAREA") {
                // Habilita el elemento para edición
                elemento.removeAttribute("readonly");
                elemento.removeAttribute(" ");
            }
        }
    }

}

