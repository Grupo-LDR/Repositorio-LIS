
const pacientesI = () => {
    const elementosI = $('.userLink');


    elementosI.each(function () {
        $(this).on('click', function () {
            const id = $(this).attr('id');
            const user = $(this).attr('user');
            const route = $(this).attr('route');
            const employee = $(this).attr('empId');
            console.log('Elemento i clicado:');
            console.log('ID:', id);
            console.log('User:', user);
            console.log('Route:', route);
            console.log('Employee:', employee);
            //   accionOpenEnvent(`/${route}`);


        });
    });
} 
