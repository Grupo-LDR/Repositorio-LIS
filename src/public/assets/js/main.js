// Elemento contenido 
const contenido = document.getElementById('contenido');
// leemnto menu lateral
const menu = document.getElementsByClassName('menu-link');
contenido.innerHTML = `Hola Mundo`;
// cpnvioerto menu a array
Array.from(menu).forEach(element => {
    console.log(element.textContent);
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
// TODO: userEdit, userOrder (new), userOrders (lista)
// controlador eventos menu
async function consultaLink(menuLink) {
    try {
        const response = await fetch(`http://localhost:8082${menuLink}`);
        const data = await response.text();
        contenido.innerHTML = data;
        userEdit = document.querySelectorAll('.userEdit');
        userOrder = document.querySelectorAll('.userOrder');
        userOrders = document.querySelectorAll('.userOrders');
    } catch (error) {
        console.error('Error en consultaLink:', error);
    }
}
//TODO: crea datatables de usuarios
function userList() {
    const tableUser = $('#usersTable').DataTable({
        "responsive": true,
        //  "autoWidth": true,
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        // "fixedHeader": true,
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
    userListEventosIcon();
}
//TODO  capturador de evento en datables
function userListEventosIcon() {
    document.addEventListener('click', function (event) {
        const accion = event.target.getAttribute('accion');
        if (accion) {
            const userId = event.target.getAttribute('name');
            switch (accion) {
                case 'editUser':
                    // dispara edicion usuario
                    editUserClick(userId);
                    break;
                case 'newOrderUser':
                    // dispra nueva orden
                    newOrderUserClick(userId);
                    break;
                case 'viewOrdersUser':
                    // dispara vista todas ordenes usuario
                    viewOrdersUserClick(userId);
                    break;
                // Agrega más casos según sea necesario
            }
        }
    });
}
//TODO manjeadores  clic en user_table
/**
 * manejador edicion usuario
 * @param {*} userId 
 */
function editUserClick(userId) {
    console.log('Edit userId:', userId);
    // edicion usuario
    accionEventoUser(`./user/edit/${userId}`);
    // editUser(userId);
}
/**
 * manejador nueva orden
 * @param {*} userId 
 */
function newOrderUserClick(userId) {
    // nuev aorden para el user
    console.log('Order userId:', userId);
    accionEventoUser(`./user/order/new/${userId}`);
    //orderUser(userId);
}
/**
 * manejador ordenes usuraio
 * @param {*} userId 
 */
function viewOrdersUserClick(userId) {
    //listado ordenes usuario
    console.log('View userId:', userId);
    accionEventoUser(`./user/order/list/${userId}`);
    //viewUsers(userId);
}
/**
 * manejador ventnas emergentes 
 * @param {*} link 
 *
 */
function accionEventoUser(link) {
    // window.open(`/${link}`, "blank", "toolbar=no, width=600, height=720, top=30, left=300, scrollbars=no");
    const pantallaAncho = window.screen.availWidth;
    const pantallaALto = window.screen.availHeight;
    const anchoVentana = 60; // porcentaje
    const altoVentna = 60; // porcentaje     
    const ventanaAncho = (pantallaAncho * anchoVentana) / 100;
    const ventanaAlto = (pantallaALto * altoVentna) / 100;
    const top = (pantallaALto / 2) - (ventanaAlto / 2);
    const left = (pantallaAncho / 2) - (ventanaAncho / 2);
    window.open(`/${link}`, link, "_blank", `toolbar=no, width=${ventanaAncho}, height=${ventanaAlto}, top=${top}, left=${left}, scrollbars=no`);
}
/* munu colapsable*/
const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menuLinks.forEach((otherLink) => {
            otherLink.classList.remove('active');
        });
        link.classList.toggle('active');
    });
});