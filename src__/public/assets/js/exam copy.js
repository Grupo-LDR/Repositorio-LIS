
let tableOrder = $('#orderTable').DataTable({
    "responsive": true,
    "autoWidth": false,
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
// $(document).ready(function () {
//     $('#btnFiltrar').click(function () {
//         // Alternar el estado de las casillas de verificación
//         $('.seleccion').each(function () {
//             $(this).prop('hidden', !$(this).prop('inline'));
//         });
//     });
// });
//TODO capturador de eventos mostrra rocultar seleccioandos
// let mostrarSeleccted = true;
// $('#btnFiltrar').click(function () {
//     let rowsExam = $('.row-exam');
//     if (mostrarSeleccted) {
//         console.log('hola');
//         // $('.seleccion').addClass('d-none');
//         //        $('.seleccion:checked').removeClass('d-none');
//         rowsExam.removeClass('d-none');
//         mostrarSeleccted = false;
//     } else {
//         console.log('adios');
//         //        $('.seleccion:checked').addClass('d-none');
//         rowsExam.addClass('d-none');
//         mostrarSeleccted = true;
//     }
// });

// let mostrarSeleccted = false;
// $('#btnFiltrar').click(function () {
//     if (mostrarSeleccted) {
//         console.log('hola');
//         let casillasMarcadas = $('.seleccion:checked');
//         let filasConCasillasMarcadas = casillasMarcadas.closest('tr');
//         $('.row-exam').addClass('d-none');
//         mostrarSeleccted = false;
//     } else {
//         console.log('chau');
//         $('.row-exam').removeClass('d-none');
//         mostrarSeleccted = true;
//     }
// });
var verSelec = true;

//var table = $('#orderTable').DataTable(); // Inicializa DataTables

$('#btnFiltrar').click(function () {
    if (verSelec) {
        $('.row-exam').addClass('d-none');
        $('.seleccion:checked').each(function () {
            var examId = $(this).val();
            $('#tr' + examId).removeClass('d-none');

        });
        tableOrder.rows('.d-none').remove().draw();

        verSelec = false;
    } else {
        $('.row-exam').removeClass('d-none');
        verSelec = true;
        tableOrder.draw();
    }
});



var table = $('#orderTable').DataTable(); // Inicializa DataTables
var mostrarSeleccted = true;
// $('#btnFiltrar').click(function () {

//     if (mostrarSeleccted) {
//         $('.row-exam').addClass('d-none');
//         $('.seleccion:checked').each(function () {
//             console.log('hola');
//             let examId = $(this).val();
//             console.log('Elemento seleccionado: ' + examId);
//             $(('#tr' + examId)).removeClass('d-none');
//             console.log('Elemento seleccionado dentro ehach: ' + examId);
//             table.rows('.d-none').remove().draw();
//         });
//         mostrarSeleccted = false;
//     } else {
//         $('.row-exam').removeClass('d-none');
//         mostrarSeleccted = true
//     }
//     // Redibuja la tabla DataTables
//     //table.draw();

// });
