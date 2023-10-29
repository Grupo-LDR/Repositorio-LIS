const contenido = document.getElementById('contenido');
const menu = document.getElementsByClassName('menu-link');
let tdUsers = '';
let userEdit = '';
let userOrder = '';
let userOrders = '';
console.log(menu);

contenido.innerHTML = `Hola Mundo`;
Array.from(menu).forEach(element => {
    console.log(element.textContent);
    element.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(`Se hizo clic en el enlace: ${element.textContent}`);
        console.log(`Se hizo clic en el enlace: ${element.id}`);
        consultaLink(element.id);
    });
});
//TODO  userEdit, userOrder (new), userOrders (lista)
function consultaLink(menuLink) {
    fetch(`http://localhost:8082${menuLink}`)
        .then(response => response.text())
        .then(data => {
            contenido.innerHTML = data;
        })
        .then(() => {
            userEdit = document.querySelectorAll('.userEdit');
            userOrder = document.querySelectorAll('.userOrder');
            userOrders = document.querySelectorAll('.userOrders');
        })
        .then(() => {
            userList();
        })
        .then(() => {
            hacerTdClick(userEdit);
            hacerTdClick(userOrder);
            hacerTdClick(userOrders);
        })
        .then(() => {
            //   userList();
        })
}

const hacerTdClick = (tdcli) => {
    tdcli.forEach((element) => {
        element.addEventListener('click', () => {
            console.log(`Se hizo clic en el enlace: ${element.name}`);
            console.log(`Se hizo clic en el enlace: ${element}`);
        });
    });
}

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
    //  const userTable = document.getElementById('usersTd');
    //  const userFiles = userTable.getElementsByTagName('tr');

    const hacerTdClick = (tdcli) => {
        tdcli.forEach((element) => {
            element.addEventListener('click', () => {
                console.log(`Se hizo clic en el enlace: ${element.textContent}`);
                console.log(`Se hizo clic en el enlace: ${element.id}`);
            })
        })
    }
    hacerTdClick(userEdit);
    hacerTdClick(userOrder);
    hacerTdClick(userOrders);
    // hacerTrClick(trUser);



    /*
      trUser.forEach(element => {
          element.addEventListener('click', function (event) {
              event.preventDefault();
              console.log(`Se hizo clic en el enlace: ${element.textContent}`);
              editUser(element.id);
          })
          console.log(element);
      });
  */
    // const userRows = userTable.getElementsByTagName('td');


    const userFiles2 = table.rows().data();
    //console.log(userFiles2);

    table.on('draw.dt', function () {
        console.log('userEDIT: ', userEdit);
        console.log('UserOrder: ', userOrder);
        console.log('userOrderS; ', userOrders);
        if (userFiles.length === 0) {
            console.log('Búsqueda realizada o resultados filtrados. No se encontraron registros.');
        }
    });
    // //  table.on('search.dt', function () {
    // table.on('draw.dt', function () {
    //     userFiles.forEach(element => {
    //         console.log(element);
    //     });
    //     console.log(userFiles.length);
    //     if (userFiles.length === 1) {
    //         // alert('No s encontro debe ingresa paciente NUEVO');
    //         console.log('Búsqueda realizada o resultados filtrados.', userFiles.length);
    //     }

}

function editUser(id) {
    window.open(`http://localhost:8082/user/edit/${id}`, "blank", "toolbar=no, width=1200, height=720, top=30, left=300, scrollbars=no");
}