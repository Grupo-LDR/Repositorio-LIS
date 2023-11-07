document.addEventListener("DOMContentLoaded", function () {
    const notificacion = document.getElementById('alert');

    notificacion.addEventListener('click', () => {
        Toastify({
            text: "This is a toast",
            duration: 3000,
            destination: "/",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { }
        }).showToast();
    });
});
$(document).ready(function () {
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


    const boton = $('#miBoton');

    function toggleBotonVisibility() {
        const pacientesEncontrados = table.rows({ search: 'applied' }).count();
        if (pacientesEncontrados === 0) {

            boton.show();
        } else {

            boton.hide();
        }
    }
    boton.on('click', function () {
        console.log('btn paciente click');
    });
    toggleBotonVisibility();
    table.on('draw.dt', toggleBotonVisibility);
    pacientesI();

});

const pacientesI = () => {
    const elementosI = $('.userLink');


    elementosI.each(function () {
        $(this).on('click', function () {
            const id = $(this).attr('id');
            const user = $(this).attr('user');
            const route = $(this).attr('route');
            const employee = $(this).attr('empId');
            // console.log('Elemento i clicado:');
            // console.log('ID:', id);
            // console.log('User:', user);
            // console.log('Route:', route);
            // console.log('Employee:', employee);
            accionOpenEnvent(`/${route}`);


        });
    });
} 
