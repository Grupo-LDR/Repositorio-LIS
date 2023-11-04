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
console.log(userLink);



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
    //const htmlDocument = await consultaWebServer(link);
    if (htmlDocument) {
        //     elemento.innerHTML = htmlDocument.body.innerHTML;
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
            console.log(name);
            console.time('miTiempo');
            result = await consultaWebServer(`user/edit/${name}`);
            // LLAMAR  A LAS FUCIONES CORRESPONDIENTES
            mostrarResultadoEnWeb(sectionDer, result);
            recorrerFormEdit();
            break;
        case 'newOrderUser':
            result = await consultaWebServer(`user/order/new/${name}`);
            //result = await consultaWebServer(`order/new/${name}`);
            // LLAMA RFUNCION ESPEFICIA PARA ESTE FORMULARIO
            console.log(result);
            mostrarResultadoEnWeb(sectionDer, result);
            //            console.log(result);
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
    // escucha evento click en edi button
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
        //sendFormUser(formEdit);
        sendPostman(formEdit);
        console.log('ACA ESTOY EN envio formualrio');
    });
    function sendPostman(formEdit) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();

        // Recorre los elementos del formulario y agrega sus datos a urlencoded
        formEdit.querySelectorAll('input, textarea, select').forEach(function (element) {
            var name = element.getAttribute('name');
            var value = element.value;
            if (name) {
                urlencoded.append(name, value);
            }
        });

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

    function sendPostman1(formEdit) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        //myHeaders.append("Cookie", "connect.sid=s%3As2twccX8DR6kPyuAvcmvh4PKEehdwLZo.Xj0TtWNQKMgsi65oTtAqmrhjKm5If2m8SGyUqrUz22c");

        var urlencoded = new URLSearchParams();
        formEdit.foreach(formEdit, (value, name) => {
            urlencoded.append(name, value);
        })

        //        urlencoded.append("id", "9");
        //        urlencoded.append("email", "sdfgsdfg@asfsadf.com");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://localhost:8085/user/edit", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }




    function sendFormUser(formEdit) {
        const formData = new FormData(formEdit);
        data = JSON.stringify(Object.fromEntries(formData));
        console.log(data);
        console.log(data);
        fetch('/user/edit', {
            method: 'POST',
            body: data,

        })
            .then(response => {
                if (response.ok) {
                    //    lisTable(sectionIzq, '#usersTable', 'user', 'userLink');
                    return response.text();
                } else {
                    throw new Error('Error al enviar el formulario');
                }
            })
            .then(data => {

                console.log('lina 279');


                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
        //        formEdit.submit();
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

