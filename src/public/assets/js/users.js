
$(document).ready(function () {
    //const table = $('#orderTable2').DataTable({
    const table = $('#usersTable').DataTable({
        //  "dom": '<"top"Bf>rt<"bottom"lip>',
        // "buttons": [
        //     {
        //         text: 'Nuevo paciente',
        //         action: function (e, dt, node, config) {
        //             console.log('botn aclick');


        //         }
        //     }
        // ],

        "paging": true,
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


    const boton = $('#addPaciente');

    function toggleBotonVisibility() {
        const pacientesEncontrados = table.rows({ search: 'applied' }).count();
        if (pacientesEncontrados === 0) {

            boton.show();
        } else {

            boton.hide();
        }
    }
    boton.on('click', function () {
        window.location.href = './user/new';
        console.log('btn paciente click');
    });
    toggleBotonVisibility();
    table.on('draw.dt', toggleBotonVisibility);
    pacientesI();

});
