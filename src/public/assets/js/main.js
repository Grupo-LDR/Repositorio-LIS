const userTable = document.getElementById('usersTd');
const userFiles = userTable.getElementsByTagName('tr');
const userRows = userTable.getElementsByTagName('td');
//console.log(userRows);
$(document).ready(function () {
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


    //  table.on('search.dt', function () {
    table.on('draw.dt', function () {
        console.log(userFiles.length);
        if (userFiles.length === 1) {
            // alert('No s encontro debe ingresa paciente NUEVO');
            console.log('Búsqueda realizada o resultados filtrados.', userFiles.length);
        }
    });
});



// const arrayFiles = Array.from(userFiles);
// console.log(userFiles);
// arrayFiles.forEach((fila, index) => {
//     const celdas = fila.getElementsByTagName('td');

//     // Accede a los datos en cada celda (td)
//     const id = celdas[0].textContent;
//     const nombre = celdas[1].textContent;
//     const email = celdas[2].textContent;
//     const document = celdas[3].textContent;
//     const phone = celdas[4].textContent;
//     const gender = celdas[5].textContent;
//     const edad = celdas[6].textContent;

//     // Haz algo con los datos, por ejemplo, muestra en la consola
//     console.log(`Fila ${index + 1}: ID: ${id}, Nombre: ${nombre}, Email: ${email}, Document: ${document}, Phone: ${phone}, Gender: ${gender}, Edad: ${edad}`);
// });