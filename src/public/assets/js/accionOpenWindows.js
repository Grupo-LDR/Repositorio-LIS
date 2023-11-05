
function accionOpenEnvent(link) {
    // window.open(`/${link}`, "blank", "toolbar=no, width=600, height=720, top=30, left=300, scrollbars=no");
    const pantallaAncho = window.screen.availWidth;
    const pantallaALto = window.screen.availHeight;
    const anchoVentana = 60; // porcentaje
    const altoVentna = 60; // porcentaje     
    const ventanaAncho = (pantallaAncho * anchoVentana) / 100;
    const ventanaAlto = (pantallaALto * altoVentna) / 100;
    const top = (pantallaALto / 2) - (ventanaAlto / 2);
    const left = (pantallaAncho / 2) - (ventanaAncho / 2);
    window.open(`${link}`, "blank", `toolbar=no, width=${ventanaAncho}, height=${ventanaAlto}, top=${top}, left=${left}, scrollbars=no`);
}