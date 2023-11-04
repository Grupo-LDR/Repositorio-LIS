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
            // Captura los elementos con la clase "userLink" después de que se haya dibujado la tabla
            const userLinks = this.api().table().container().querySelectorAll(`.${idElement}`);

            userLinks.forEach(link => {
                link.addEventListener('click', function () {
                    const name = this.getAttribute('name');
                    const route = this.getAttribute('route');
                    // name e sel id user
                    switch (tabla) {
                        case '#usersTable':
                            console.log(`Clic en el enlace con name=${name} y route=${route}`);
                            routeClickUser(route, name);
                            break;
                        case '#refValTable':
                            routeClickRefValueTabla(route, tabla);
                            break;
                    }

                    //  const userT = lisTable(sectionDer, '#refValTable', '/refvalue', 'userLink');
                    console.log(`Clic en el enlace con name=${name} y route=${route} -> ${tabla}`);
                });
            });
        }

    },
    );
}


async function routeClickUser(route, name) {
    console.log(`Clic en el enlace con name=${name} y route=${route}`);
    let result;
    switch (route) {

        case 'editUser':
            console.log(name);
            result = await consultaWebServer(`user/edit/${name}`);
            //            console.log(result);
            mostrarResultadoEnWeb(sectionDer, result);
            //            lisTable(sectionDer, '#userTable', '/user', 'userLink');
            break;
        case 'newOrderUser':
            result = await consultaWebServer(`user/order/new/${name}`);
            //result = await consultaWebServer(`order/new/${name}`);
            console.log(result);
            mostrarResultadoEnWeb(sectionDer, result);
            //            console.log(result);
            break;
    }

}
function routeClickRefValueTabla(route) {
    lisTable(sectionIzq, '#refValTable', '/refvalue', 'userLink');
}