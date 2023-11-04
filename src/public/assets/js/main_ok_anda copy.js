
// captura div secciones 
const sectionIzq = document.getElementById('izq');
const sectionDer = document.getElementById('der');
// captrua menu 
const navLink = document.getElementsByClassName('nav-link');

// llamo pacientes
mostrarResultadoEnWeb(sectionIzq, '/user');
//console.log(pacientes);
mostrarResultadoEnWeb(sectionDer, '/refvalue');





async function mostrarResultadoEnWeb(elemento, link) {

    const htmlDocument = await consultaWebServer(link);
    if (htmlDocument) {
        elemento.innerHTML = htmlDocument.body.innerHTML;
    } else {
        elemento.innerHTML = 'No se pudo obtener el contenido.';
    }
}






async function consultaWebServer(link) {
    try {
        const response = await fetch(link);
        if (response.ok) {
            const htmlContent = await response.text();
            const parser = new DOMParser();
            const htmlDocument = parser.parseFromString(htmlContent, 'text/html');
            if (htmlDocument) {
                console.log(htmlDocument.body.innerHTML);
                return htmlDocument;
            }
            return null;
        } else {
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error en consultaWebServer:', error);
    }
}






//pacientesList();
// convierto menu a array
Array.from(navLink).forEach(element => {
    console.log(element.textContent);
    // agrego escuchador evento    
    element.addEventListener('click', async function (event) {
        event.preventDefault();
        console.log(element.id);
        await consultaLink(element.id);
        switch (element.id.substring(1)) {
            case 'user':
                userList();
                break;
        }
    });
});
function userList() {
    fetch('/user')
        .then(response => response.text())
        .then(htmlContent => {
            // 2. Convierte el contenido de la respuesta en un fragmento de documento HTML
            const parser = new DOMParser();
            const htmlDocument = parser.parseFromString(htmlContent, 'text/html');

            // 3. Selecciona el elemento div en el que deseas inyectar el HTML
            //const targetDiv = document.getElementById('tuDiv');

            if (sectionIzq) {
                // 4. Agrega el fragmento de HTML al elemento div
                sectionIzq.innerHTML = htmlDocument.body.innerHTML;
                userListTable();
            }
        })
        .catch(error => {
            console.error('Error al realizar la solicitud Fetch:', error);
        });
}

async function consultaWebServer(link) {
    try {
        const response = await fetch(link);
        if (response.ok) {
            const htmlContent = await response.text();
            const parser = new DOMParser();
            const htmlDocument = parser.parseFromString(htmlContent, 'text/html');
            if (htmlDocument) {
                console.log(htmlDocument.body.innerHTML);
                return htmlDocument;
            }
            return null;
        } else {
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error en consultaWebServer:', error);
    }
}

async function mostrarResultadoEnDiv(elemento, link) {
    // const resultadoDiv = document.getElementById('resultadoDiv');
    const htmlDocument = await consultaWebServer(link);

    if (htmlDocument) {
        elemento.innerHTML = htmlDocument.body.innerHTML;
    } else {
        elemento.innerHTML = 'No se pudo obtener el contenido.';
    }
}


function userListTable() {
    const table = $('#usersTable').DataTable({
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
        }
    });

    // ... (el resto del código se mantiene igual)
}


async function userList(link) {
    fetch(link)
        .then(response => response.text())
        .then(htmlContent => {
            // 2. Convierte el contenido de la respuesta en un fragmento de documento HTML
            const parser = new DOMParser();
            const htmlDocument = parser.parseFromString(htmlContent, 'text/html');

            // 3. Selecciona el elemento div en el que deseas inyectar el HTML
            //const targetDiv = document.getElementById('tuDiv');

            if (sectionIzq) {
                // 4. Agrega el fragmento de HTML al elemento div
                sectionIzq.innerHTML = htmlDocument.body.innerHTML;
                userListTable();
            }
        })
        .catch(error => {
            console.error('Error al realizar la solicitud Fetch:', error);
        });
}

async function consultaLink(menuLink) {
    try {
        const response = await fetch(menuLink);
        const data = await response;
        sectionIzq.innerHTML = data;
        userEdit = document.querySelectorAll('.userEdit');
        userOrder = document.querySelectorAll('.userOrder');
        userOrders = document.querySelectorAll('.userOrders');
        //        new DataTable('#usersTable');
    } catch (error) {
        console.error('Error en consultaLink:', error);
    }
}
