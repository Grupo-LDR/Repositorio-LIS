
const datos = [
    { nombre: "Anemia", id: 1 },
    { nombre: "Tuberculosis", id: 2 },
    { nombre: "Deabetes", id: 3 },
    { nombre: "Sindrome  TUDS", id: 4 },

];

const elementDiagnosis = document.getElementById('diagnosis');
const name = document.getElementById('name');
elementDiagnosis.addEventListener('input', () => {
    const valorBusqueda = elementDiagnosis.value.toLowerCase();
    const nameFiltradas = datos.filter(obj => obj.nombre.toLowerCase().includes(valorBusqueda));

    name.innerHTML = '';

    nameFiltradas.forEach(sugerencia => {
        const li = document.createElement('li');
        li.textContent = sugerencia.nombre;
        li.addEventListener('click', () => {
            elementDiagnosis.value = sugerencia.nombre;
            campoBusqueda2.value = sugerencia.id;
            name.innerHTML = '';
        });
        name.appendChild(li);
    });

    if (nameFiltradas.length > 0) {
        name.style.display = 'block';
    } else {
        name.style.display = 'none';
    }
});

elementDiagnosis.addEventListener('blur', () => {
    setTimeout(() => {
        name.innerHTML = '';
        name.style.display = 'none';
    }, 200);
});
