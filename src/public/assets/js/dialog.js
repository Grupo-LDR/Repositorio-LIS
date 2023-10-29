// dialogo new
// captura boton nueva orden
const openNewType = document.getElementById('btn_new_type');
// captura  dialogo nueva orden
const dialogNew = document.getElementById('new_dialog');
// evento click nueva orden
openNewType.addEventListener('click', () => {
    dialogNew.showModal();
    console.log('clik');
});
// captura campo name para dialog new
const newName = document.getElementById('new_name');
// captura boton reset para new dialog
const newReset = document.getElementById('new_reset');
// captura botn cerrar para new dialog
const newClose = document.getElementById('new_close');
// evento boton cerrar new dialog
newClose.addEventListener('click', (event) => {
    newName.removeAttribute('required');

    dialogNew.close();

});