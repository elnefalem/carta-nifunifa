const carta = [

    {
        categoria: "CAFETERÍA",
        columna: "izquierda",

        productos: [
            {
                nombre: "ESPRESSO",
                precio: 1500
            },
            {
                nombre: "ESPRESSO DOBLE",
                precio: 3000
            },
            {
                nombre: "AMERICANO",
                descripcion: "con agua",
                precio: 2000
            },
            {
                nombre: "CORTADO",
                descripcion: "con leche",
                precio: 2500
            },
            {
                nombre: "IRLANDÉS",
                descripcion: "con whisky",
                precio: 6000
            }
        ]
    },

{
    categoria: "COMIDAS",
    columna: "izquierda",
    productos: [
        { nombre: "PIZZA", precio: 11000 },
        { nombre: "MUZARELLA", precio: 11000 },
        { nombre: "MUZARELLA & JAMÓN", precio: 12000 },
        { nombre: "MUZARELLA & SALAME", precio: 13000 },
        { nombre: "MUZARELLA INTEGRAL", precio: 12000 },
        { nombre: "SUPERPANCHO", precio: 3500 },
        { nombre: "EMPANADAS", descripcion: "JAMÓN, QUESO / CARNE", precio: 1000 },
        { nombre: "TOSTADO X 6", precio: 7000 },
        { nombre: "SANDWICH MIGAS 6", precio: 6000 },
        { nombre: "PEBETE", precio: 1500 },
        { nombre: "CHIPÁ X 100 g", precio: 1700 },
        { nombre: "MEDIALUNAS", precio: 1000 }
    ]
},


    {
        categoria: "BAR",
        columna: "derecha",

        productos: [
            {
                nombre: "TRAGO GRANDE",
                descripcion: "VODKA / SPRITE, FERNET/COCA, GANCIA / SPRITE",
                precio: 8000
            },
            {
                nombre: "TRAGO CHICO",
                descripcion: "VODKA / SPRITE, FERNET/COCA, GANCIA / SPRITE",
                precio: 5000
            }
        ]
    },

    {
        categoria: "MEDIDAS WHISKY",
        columna: "derecha",

        productos: [
            {
                nombre: "BALLANTINE'S",
                precio: 4000
            },
            {
                nombre: "BALLANTINE'S 7 AÑOS",
                precio: 7000
            },
            {
                nombre: "JAMESON",
                precio: 5000
            },
            {
                nombre: "JACK DANIELS",
                precio: 8000
            },
            {
                nombre: "JOHNNY WALKER B.L.",
                precio: 10000
            },
            {
                nombre: "JOHNNY WALKER R.L.",
                precio: 4000
            }
        ]
    },

    {
        categoria: "MEDIDA LICOR",
        columna: "derecha",

        productos: [
            {
                nombre: "COÑAC PREMIUM",
                precio: null
            },
            {
                nombre: "COPA VINO",
                precio: 2000
            },
            {
                nombre: "WHISCOLA",
                precio: 6000
            }
        ]
    }

];


const columnaIzquierda =
    document.getElementById("columna-izquierda");

const columnaDerecha =
    document.getElementById("columna-derecha");


function crearSeccion(seccion) {

    const contenedor =
        document.createElement("section");

    contenedor.classList.add("seccion");


    const titulo =
        document.createElement("h2");

    titulo.textContent =
        `★ ${seccion.categoria} ★`;

    contenedor.appendChild(titulo);


    seccion.productos.forEach(producto => {

    const fila =
        document.createElement("div");

    fila.classList.add("producto");


    const nombre =
        document.createElement("span");

    nombre.classList.add("nombre");

    nombre.textContent =
        producto.nombre;


    const puntos =
        document.createElement("span");

    puntos.classList.add("puntos");


    const precio =
        document.createElement("strong");

    precio.classList.add("precio");


    if (producto.precio !== null) {

        precio.textContent =
            `$ ${producto.precio}`;

    }


    fila.appendChild(nombre);
    fila.appendChild(puntos);
    fila.appendChild(precio);

    contenedor.appendChild(fila);


    // Descripción debajo del producto

    if (producto.descripcion) {

        const descripcion =
            document.createElement("div");

        descripcion.classList.add("descripcion");

        descripcion.textContent =
            producto.descripcion;

        contenedor.appendChild(descripcion);

    }

});


    return contenedor;
}


carta.forEach(seccion => {

    const elemento =
        crearSeccion(seccion);


    if (seccion.columna === "izquierda") {

        columnaIzquierda.appendChild(elemento);

    } else {

        columnaDerecha.appendChild(elemento);

    }

});