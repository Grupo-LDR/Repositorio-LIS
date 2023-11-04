
// Secciones 
const sectionIzq = document.getElementById('izq');
const sectionDer = document.getElementById('der');
// menu elemnts
const menu = document.getElementsByClassName('menu-link');
// convierto menu a array
Array.from(menu).forEach(element => {
    console.log(element.textContent);
    // agrego escuchador evento    
    element.addEventListener('click', async function (event) {
        event.preventDefault();
        await consultaLink(element.id);
        switch (element.id.substring(1)) {
            case 'user':
                userList();
                break;
        }
    });
});

function userListTable() {
    const table = $('#usersTable').DataTable({
        "paging": true,
        "responsive": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": true,
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
