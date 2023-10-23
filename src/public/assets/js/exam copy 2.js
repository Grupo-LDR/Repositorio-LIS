$(document).ready(function () {
    let tableOrder = $('#orderTable').DataTable({
        "responsive": true,
        "autoWidth": false,
        "paging": false,
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

    let verSeleccionados = false;
    $('#btnFiltrar').click(function () {
        if (verSeleccionados) {
            tableOrder.rows().every(function () {
                $(this.node()).removeClass('d-none');
            });
            $(this).text("View Selected");


        } else {
            tableOrder.search('').draw();
            tableOrder.rows().every(function () {
                if ($(this.node()).find('.seleccion:checked').length === 0) {
                    $(this.node()).addClass('d-none');
                }
            });
            $(this).text("View ALL");

        }
        tableOrder.draw();
        verSeleccionados = !verSeleccionados;
    });
});
