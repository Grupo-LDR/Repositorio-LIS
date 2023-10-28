$(document).ready(function () {
    const tableOrder = $('#orderTable').DataTable({
        "responsive": true,
        "paging": false,
        "lengthChange": true,
        "searching": false,
        "ordering": true,
        "info": false,
        "autoWidth": true,
        "fixedHeader": true,
        //"dom": '<"custom-content"l>frt<"bottom"ip><"clear">',
        // "dom": '<"top">frt<"bottom"ip><"clear">',
        "language": {
            //  "search": "Buscar:",
            "searchPlaceholder": "Search...",
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
        /* agrega boton en cada TR*/
        // "columnDefs": [
        //     {
        //         "targets": -1, 
        //         "render": function (data, type, row) {
        //          return '<button class="btn btn-primary btn-detalle">Detalles</button>';
        //         }
        //     }
        // ]
    });
    //$("div.custom-content").html('<h1 class="btn btn-primary m-2" id="btnFiltrar"> View Selected</h1>');
    //    $("div.top").html('<div class="custom-content">Contenido Personalizado</div>');
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
