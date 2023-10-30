const userTable = document.getElementById('examTd');
const userFiles = userTable.getElementsByTagName('tr');
const userRows = userTable.getElementsByTagName('td');
//console.log(userRows);
$(document).ready(function () {
    const table = $('#examsTable').DataTable({

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

    table.on('draw.dt', function () {

        console.log(userFiles.length);
        if (userFiles.length === 1) {
            console.log('Búsqueda realizada o resultados filtrados.', userFiles.length);
        }

    });
    $('#botonNewUser').on('click', function () {
        // Lógica a ejecutar cuando se hace clic en el botón personalizado
        window.open("/user/new", "blank", "toolbar=no, width=600, height=720, top=30, left=300, scrollbars=no");
    });

});
