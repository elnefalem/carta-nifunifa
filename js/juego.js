const parametros = new URLSearchParams(window.location.search);
const idJuego = parametros.get("id");

const contenedor = document.getElementById("detalle");

const juego = juegos.find(juego => juego.id === idJuego);

if (!juego) {

    contenedor.innerHTML = `
        <section class="juego-no-encontrado">
            <h2>Juego no encontrado</h2>
            <p>No pudimos encontrar este juego.</p>

            <a href="index.html" class="volver-detalle">
                ← VOLVER A JUEGOS
            </a>
        </section>
    `;

} else {

    document.title = `${juego.nombre} | Ni Fu, Ni Fa`;

    contenedor.innerHTML = `
        <article class="ficha-juego">

            <div class="ficha-imagen">
                <img
                    src="../img/juegos/${juego.imagen}"
                    alt="${juego.nombre}"
                >
            </div>

            <div class="ficha-contenido">

                <h2>${juego.nombre}</h2>

                <div class="datos-juego">

                    <div class="dato">
                        <span>👥</span>
                        <strong>Jugadores</strong>
                        <p>${juego.jugadores}</p>
                    </div>

                    <div class="dato">
                        <span>🎂</span>
                        <strong>Edad</strong>
                        <p>${juego.edad}</p>
                    </div>

                    <div class="dato">
                        <span>⏱️</span>
                        <strong>Duración</strong>
                        <p>${juego.duracion}</p>
                    </div>

                </div>

                <div class="etiquetas-juego">
                    ${juego.etiquetas.map(etiqueta => `
                        <span>${etiqueta}</span>
                    `).join("")}
                </div>

                <section class="reglas-juego">

                    <h3>¿CÓMO SE JUEGA?</h3>

                        <p>
                             ${juego.reglas || "Próximamente vamos a agregar las instrucciones de este juego."}
                        </p>

                </section>

            </div>

        </article>
    `;
}