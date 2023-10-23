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
        window.open("/user/new", "blank", "toolbar=no, width=600, height=720, top=30, left=300, scrollbars=no");
    });

    $('#examsTable').on('change', 'input[type=radio], input[type=checkbox]', function () {
        // Obtén el valor del elemento que cambió
        var valor = $(this).val();
        console.log('Elemento cambió a: ' + valor);
    });

    $('#miFormulario').submit(function (event) {

        event.preventDefault();


        var valorRadio = $('input[name="examen"]:checked').val();


        console.log('Valor del radio seleccionado: ' + valorRadio);

        // Aquí puedes realizar una solicitud AJAX para enviar los datos al servidor si es necesario
        // Por ejemplo:
        // $.post('tu_url_de_procesamiento', { opcionSeleccionada: valorRadio }, function(response) {
        //     // Manejar la respuesta del servidor
        // });
    });
});
