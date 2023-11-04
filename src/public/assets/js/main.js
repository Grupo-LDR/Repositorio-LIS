const contenido = document.getElementById('contenido');
const menu = document.getElementsByClassName('menu-link');

Array.from(menu).forEach(element => {
    console.log(element.textContent);
    element.addEventListener('click', async function (event) {
        event.preventDefault();
        console.log(`Se hizo clic en el enlace: ${element.textContent.toLowerCase()}`);
        console.log(`Se hizo clic en el enlace: ${element.id.substring(1)}`);
        await consultaLink(element.id);
        switch (element.id.substring(1)) {
            case 'user':
                // userList();
                //     userListEventos();
                userListEventos2();
                break;
        }
    });
});



// TODO: userEdit, userOrder (new), userOrders (lista)
async function consultaLink(menuLink) {
    try {
        const response = await fetch(menuLink);
        const data = await response.text();
        contenido.innerHTML = data;
        userEdit = document.querySelectorAll('.userEdit');
        userOrder = document.querySelectorAll('.userOrder');
        userOrders = document.querySelectorAll('.userOrders');
        //  userList();
    } catch (error) {
        console.error('Error en consultaLink:', error);
    }
}

// Función para manejar el clic en "userEdit"
function handleEditUserClick(userId) {
    // Realiza la acción correspondiente al hacer clic en "userEdit"
    // Por ejemplo:
    console.log('Edit userId:', userId);
    // editUser(userId);
}

// Función para manejar el clic en "orderUser"
function handleOrderUserClick(userId) {
    // Realiza la acción correspondiente al hacer clic en "orderUser"
    // Por ejemplo:
    console.log('Order userId:', userId);
    //orderUser(userId);
}

// Función para manejar el clic en "viewUsers"
function handleViewUsersClick(userId) {
    // Realiza la acción correspondiente al hacer clic en "viewUsers"
    // Por ejemplo:
    console.log('View userId:', userId);
    //viewUsers(userId);
}
function userListEventos2() {
    document.addEventListener('click', function (event) {
        const accion = event.target.getAttribute('accion');
        if (accion) {
            const userId = event.target.getAttribute('name');
            switch (accion) {
                case 'editUser':
                    handleEditUserClick(userId);
                    break;
                case 'orderUser':
                    handleOrderUserClick(userId);
                    break;
                case 'viewUsers':
                    handleViewUsersClick(userId);
                    break;
                // Agrega más casos según sea necesario
            }
        }
    });
}

//TODO
/*
document.addEventListener('click', function (event) {
    if (event.target.getAttribute('accion') === 'editUser') {
        // Realiza la acción correspondiente al hacer clic en "userEdit"
        const userId = event.target.getAttribute('name');
        editUser(userId);
    } else if (event.target.getAttribute('accion') === 'orderUser') {
        // Realiza la acción correspondiente al hacer clic en "userOrder"
        const userId = event.target.getAttribute('name');
        orderUser(userId);
    } else if (event.target.getAttribute('accion') === 'viewUsers') {
        // Realiza la acción correspondiente al hacer clic en "userOrders"
        const userId = event.target.getAttribute('name');
        viewUsers(userId);
    }
});
*/


// crea datsatables de usuarios
function userList() {
    const table = $('#usersTable').DataTable({
        "paging": true,
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
function userListEventos() {
    const userTable = document.getElementById('usersTable');
    const userRows = userTable.getElementsByTagName('tr');

    // Captura eventos en las filas
    for (let i = 0; i < userRows.length; i++) {
        userRows[i].addEventListener('click', function () {
            // Acción a realizar cuando se hace clic en una fila
            console.log('Fila seleccionada:', i);
        });

        // Captura eventos en las celdas (td) dentro de la fila
        const userCells = userRows[i].getElementsByTagName('td');
        for (let j = 0; j < userCells.length; j++) {
            userCells[j].addEventListener('click', function () {
                // Acción a realizar cuando se hace clic en una celda
                console.log('Celda seleccionada:', i, j);
            });
        }
    }
}