
function accionOpenEnvent(link) {
    const timeActual = Math.floor(Date.now() / 1000);
    const idVentana = btoa(timeActual);

    // window.open(`/${link}`, "blank", "toolbar=no, width=600, height=720, top=30, left=300, scrollbars=no");
    const name = idVentana;
    const pantallaAncho = window.screen.availWidth;
    const pantallaALto = window.screen.availHeight;
    const anchoVentana = 60; // porcentaje
    const altoVentna = 60; // porcentaje     
    const ventanaAncho = (pantallaAncho * anchoVentana) / 100;
    const ventanaAlto = (pantallaALto * altoVentna) / 100;
    const top = (pantallaALto / 2) - (ventanaAlto / 2);
    const left = (pantallaAncho / 2) - (ventanaAncho / 2);
    const toolbar = 'no';
    const scrollbars = 'no';
    const resizable = 'yes';
    const menubar = 'no';
    const location = 'no';
    const status = 'no';
    const title = 'no';
    const fullscreen = 'no';


    const opcionesVentana = `
        name=${name},
        toolbar=${toolbar},
        width=${ventanaAncho},
        height=${ventanaAlto},
        top=${top},
        left=${left},
        scrollbars=${scrollbars},
        resizable=${resizable},
        menubar=${menubar},
        location=${location},
        status=${status},
        title=${title},
        fullscreen=${fullscreen}
        `;

    window.open(
        link,
        idVentana,
        opcionesVentana
    );
}