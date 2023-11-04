/**Seccion captura elementos de sistema */
// captura div secciones 
const sectionIzq = document.getElementById('izq');
const sectionDer = document.getElementById('der');
// caprtura menu 
const navLink = document.getElementsByClassName('nav-link');




// llamo pacientes
mostrarResultadoEnWeb(sectionIzq, '/user');
//console.log(pacientes);
mostrarResultadoEnWeb(sectionDer, '/refvalue');




/**
 * 
 * @param {*} elemento 
 * @param {*} link 
 */
async function mostrarResultadoEnWeb(elemento, link) {

    const htmlDocument = await consultaWebServer(link);
    if (htmlDocument) {
        elemento.innerHTML = htmlDocument.body.innerHTML;
    } else {
        elemento.innerHTML = 'No se pudo obtener el contenido.';
    }
}
/**
 * 
 * @param {*} link 
 * @returns 
 */
async function consultaWebServer(link) {
    try {
        const response = await fetch(link);
        if (response.ok) {
            const htmlContent = await response.text();
            const parser = new DOMParser();
            const htmlDocument = parser.parseFromString(htmlContent, 'text/html');
            if (htmlDocument) {
                console.log(htmlDocument.body.innerHTML);
                return htmlDocument;
            }
            return null;
        } else {
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error en consultaWebServer:', error);
    }
}


