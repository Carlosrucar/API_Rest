(async () => {
    await fetch('http://localhost:3000')
    .then(async (datos) => {
        await datos.json().then((datos) => {
            console.log(datos.saludo);
            let padre = document.getElementById('lista');
            datos.lista.forEach(element => {
                let newDiv = padre.firstElementChild.cloneNode(true);
                newDiv.appendChild(document.createTextNode(element.saludo));
                padre.appendChild(newDiv);
            });
            padre.firstElementChild.remove();

        }, () => {
            console.log('No parsea bien');
        });
    }, (datos) => {
        console.log(datos);
    })
})();
