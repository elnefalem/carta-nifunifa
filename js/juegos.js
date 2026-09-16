const juegos = [

    {
        id: "uno",
        nombre: "UNO",
        imagen: "uno.jpg",
        jugadores: "2 - 10 jugadores",
        edad: "7+",
        duracion: "15 - 30 min"
    },

    {
        id: "jenga",
        nombre: "JENGA",
        imagen: "jenga.jpg",
        jugadores: "2+ jugadores",
        edad: "6+",
        duracion: "10 - 20 min"
    },

    {
        id: "truco",
        nombre: "TRUCO",
        imagen: "truco.jpg",
        jugadores: "2 - 6 jugadores",
        edad: "8+",
        duracion: "20 - 40 min"
    }

];


const contenedor = document.getElementById("lista-juegos");


juegos.forEach(juego => {

    const tarjeta = document.createElement("article");

    tarjeta.classList.add("tarjeta-juego");

    tarjeta.innerHTML = `

        <a href="juego.html?id=${juego.id}">

            <div class="imagen-juego">
                <img
                    src="../img/juegos/${juego.imagen}"
                    alt="${juego.nombre}"
                >
            </div>

            <div class="info-juego">

                <h3>${juego.nombre}</h3>

                <p>👥 ${juego.jugadores}</p>

            </div>

        </a>

    `;

    contenedor.appendChild(tarjeta);

});