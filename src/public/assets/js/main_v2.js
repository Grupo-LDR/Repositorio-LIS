document.onload = async () => {
    const sectionIzq = document.getElementById('izq');
    try {
        const response = await fetch('/user')
            .then(response => response.text())
            .then(data => console.log(data))
            .then(() => {
                sectionIzq.innerHTML = data;

            });
        console.log(response);



    } catch (error) {

    }

}
