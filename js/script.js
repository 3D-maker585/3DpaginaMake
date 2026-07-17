// Base de datos de productos 3D con MULTIPLES IMÁGENES por producto
const productos = [
    { 
        id: 1, 
        nombre: "Estadio Boca Juniors", 
        precio: 40000, 
        categoria: "Decoración", 
        imagenes: [
            "img/cancha1.jpeg", 
            "img/cancha2.jpeg", 
            "img/cancha3.jpeg",
                "img/cancha4.jpeg", 
            "img/cancha5.jpeg", 
            "img/cancha6.jpeg",
                "img/cancha7.jpeg", 
           
        ], 
        desc: "Estadio boca juniors realizado en 3D con filamento PLA de calidad, colocado sobre una base color negra decorada con un Escudo de boca juniors , el estadio contiene luces que lo resltan ." 
    },
    { 
        id: 2, 
        nombre: "Collar K40S", 
        precio: 10000, 
        categoria: "Juguetes",  
        imagenes: [
             "img/K4OScollar2.jpeg",
            "img/K4OScollar.jpeg", 
            
        ], 
        desc: "Cadena de acero quirurgico con un dije caracteristico del grupo k4OS , el cual recrea su collar original ." 
    },
    { 
        id: 3, 
        nombre: "Dragón Articulado de Entrenando a tu dragon ", 
        precio: 9000, 
        categoria: "Juguetes", 
        imagenes: [
            "img/chimuelo.jpg", 
            "img/chimuelo2.jpg", 
            "img/dragon3.jpg"
        ], 
        desc: "🐉 ¡El Dúo Furioso llegó en 3D! (Chimuelo & Furia Luminosa) ✨¿Fan de Entrenar a tu Dragón? Llevate a los protagonistas más queridos con un nivel de detalle increíble y ¡totalmente articulados!Ideal para fans de la saga, coleccionistas o para regalar ese match perfecto.✅ Movimiento Total: Son súper flexibles, ideales como fidget toy (antiestrés) o para posar en tu repisa. ✅ El Regalo Ideal: La combinación perfecta de negro mate y blanco perlado. ✅ Calidad Artesanal: Impresión 3D de alta precisión con materiales ecológicos (PLA).💰 Precios Especiales:Un solo dragón: $9.000.EL COMBO (Chimuelo + Furia Luminosa): $16.500 🎁." 
    },
    { 
        id: 4, 
        nombre: "Cartel de Sabrina Carpenter ,Pretty Girl ave", 
        precio: 6000, 
        categoria: "Decoración", 
        imagenes: [
            "img/cartelSabrina.jpeg", 
            "img/cartelSabrina2.jpeg"
        ], 
        desc: "Cartel House Tour de Sabrina Carpenter realizado completamente en 3D .Perfecto para decorar cualquier espacio de tu casa." 
    }, 
    { 
        id: 5, 
        nombre: "Caja Para Figuritas del Mundial", 
        precio: 8000, 
        categoria: "Juguetes", 
        imagenes: [
            "img/cajafigus.jpeg",
            
        ], 
        desc: "¿Querés mantener tus figuritas del Mundial ordenadas y protegidas? Esta caja es ideal para guardar hasta 150 figuritas, evitando que se doblen, ensucien o pierdan.✅ Capacidad para hasta 150 figuritas✅ Práctica y fácil de transportar✅ Ideal para coleccionistas y fanáticos del fútbol✅ Mantiene tus figuritas organizadas y en buen estado✅ Excelente opción para regalar🎉 ¡Promociones especiales para cumpleaños! Consultá por descuentos y precios especiales para compras en cantidad, ideales para souvenirs, regalos y eventos infantiles.⚽ ¡Guardá y protegé tu colección como un campeón! 🏆 Escríbenos para más información.(no incluye figuritas)." 
    },
     { 
        id: 6, 
        nombre: "Trono de Hierro Game Of Thrones", 
        precio: 20000,
        categoria: "Decoración", 
        imagenes: [
            "img/tronohierro1.jpg", 
           "img/tronohierro2.jpg", 
             "img/tronohierro3.jpg", 
               "img/tronohierro4.jpg", 
                 "img/tronohierro5.jpg", 
        ], 
        desc: "Impresionante estatuilla del icónico Trono de Hierro de Game of Thrones, realizada en impresión 3D con gran nivel de detalle" 
    },
         { 
        id: 7, 
        nombre: "Corona Princesa Peach", 
        precio: 8000, 
        categoria: "Juguetes", 
        imagenes: [
            "img/corona1.jpeg", 
            "img/corona2.jpeg", 
            "img/corona3.jpeg", 
            "img/corona4.jpeg", 

        ], 
        desc: "Corona de la Princesa Peach, Perfecta para disfraces echa completamente en 3D realizada con filamento PLA.Cómoda y ligera CORONA SOLA : 8,000 CORONA CON VINCHA: 10,000 TENEMOS PRECIOS POR MAYOR PARA CUMPLEAÑOS Y REVENTA" 
    }, 
      { 
        id: 8, 
        nombre: "Set de 6 Mini Cuadros De Marvel", 
        precio: 15000, 
        categoria: "Decoración", 
        imagenes: [
            "img/cuadroMarvel.jpg", 
            "img/cuadroMarvel2.jpg"
        ], 
        desc: "Set de 6 Mini Cuadros Decorativos en 3D DE MARVEL.Dale un toque moderno y original a tu habitación, oficina o cualquier espacio con este set de cuadros impresos en 3D. Son livianos, fáciles de colocar y perfectos para decorar paredes, escritorios o estanterías.Fabricados en PLA de alta calidad, un material resistente y con muy buen acabado.📏 Medidas:• Cuadros chicos: 9.97 cm × 14.13 cm• Cuadros grandes: 16.04 cm × 22.74 cm📦 Incluye:• Set de 6 cuadros decorativos💰 Precio:• Pack 6 cuadros chicos: $15.000• Pack 6 cuadros grandes: $28.000.Ideales para decorar tu espacio o regalar." 
    },
     { 
        id: 9, 
        nombre: "Porta Puas en forma Amplificador ", 
        precio: 5500, 
        categoria: "Decoración", 
        imagenes: [
            "img/portaPuasAmplificador1.jpeg", 
            
        ], 
        desc: "¿Buscás un regalo original y barato? Este porta púas tipo amplificador es la que va. 🔥 PROMO 2 UNIDADES: $10.000 (Ideal para regalarle a tu bajista/guitarrista o tener uno en la funda y otro en casa)." 
    }, { 
        id: 10, 
        nombre: "Soporte Para libros en forma de lazo/moño", 
        precio: 14000, 
        categoria: "Decoración", 
        imagenes: [
            "img/soporteMoño.jpg", 
            "img/soporteMoño2.jpg"
        ], 
        desc: "SOPORTE PARA MANGAS/LIBROS .Echo completamente en 3D.Un diseño hermoso y dinámico,perfecto para completar tu decoración "
    },{ 
        id: 11, 
        nombre: "Soporte Para libros de Harry Potter", 
        precio: 14000, 
        categoria: "Decoración", 
        imagenes: [
            "img/sujetaLibrosHarryPotter1.webp", 
            "img/sujetaLibrosHarryPotter2.webp", 
        ], 
        desc: "⚡ Sujetalibros Harry Potter 3D - ¡Magia en tu biblioteca! ⚡¿Tus libros de la saga necesitan orden? Dale un toque mágico a tu estante con estos sujetalibros exclusivos de alta calidad. ¡El regalo ideal para cualquier fan de Hogwarts!✅ Diseño Detallado: Disponible en modelos icónicos (Hogwarts, Andén 9 3/4, Reliquias de la Muerte). ✅ Resistentes y Estables: Pensados para sostener desde tomos pesados hasta tus mangas favoritos. ✅ Terminación Premium: Color Negro Mate(consultar disponibilidad de mas colores).💰 PRECIOS:Unidad: $14.000(Oferta): $24.000 ✨ (¡Llevá los dos y ahorrá!)"
    },
   
 
     { 
        id: 14, 
        nombre: "Llavero K4OS", 
        precio: 2000, 
        categoria: "Llaveros", 
        imagenes: [
            "img/llaveroK4OS.webp", 
           
        ], 
        desc: "Llavero inspirado en K4OS, fabricado en impresión 3D con excelente detalle y acabado. Ligero, resistente y perfecto para llevar tus llaves, decorar mochilas o sumar a tu colección. Un accesorio ideal para fans que buscan un diseño único y llamativo.🔑 5 llaveros → $9.000🔑 10 llaveros → $18.000🔑 15 llaveros → $25.500🔑 20 llaveros → $32.000" 
    },
    { 
        id: 15, 
        nombre: "Llavero diablo viste a la moda", 
        precio: 2000, 
        categoria: "Llaveros", 
        imagenes: [
            "img/visteALamoda.jpeg", 
            "img/01.png",
            "img/02.png",
            "img/03.png",
            "img/04.png",
            "img/05.png"
        ], 
        desc: " LLAVEROS DIABLO VISTE A LA MODA .Para fans de la moda, el drama y los íconos ¡Llevate tu llavero y sumá estilo a todo! PROMOS ESPECIALES 💥🔑 5 llaveros → $9.000🔑 10 llaveros → $17.000🔑 15 llaveros → $24.000🔑 20 llaveros → $30.000💣 Ideal para revender, regalar o completar la colección . VENTA UNICAMENTE A PARTIR DE 5 LLAVEROS.No te quedes sin el tuyo… porque *everyone wants this* 😉" 
    },
     { 
        id: 16, 
        nombre: "Corona Glinda ", 
        precio: 9000, 
        categoria: "Juguetes", 
        imagenes: [
            "img/coronaGlinda1.webp", 
        
        ], 
        desc: "Hermosa corona inspirada en Glinda, impresa en 3D con gran nivel de detalle. Ideal para cosplay, disfraces, eventos temáticos, sesiones de fotos o para coleccionistas y fanáticos de Wicked. Ligera y cómoda" 
    },
    { 
        id: 17, 
        nombre: "Pomni Cartel", 
        precio: 12000, 
        categoria: "Decoración", 
        imagenes: [
            "img/cartelPomni.webp", 
            
        ], 
        desc: "Cartel de puerta de Pomni de The Amazing Digital Circus ." 
    },
];

// --- 1. MENÚ DESPLEGABLE EN CELULARES ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

if(mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerText = navLinks.classList.contains('active') ? '✕' : '☰';
    });
}

// --- 2. LÓGICA DEL CARRUSEL DE INICIO (INDEX) ---
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function mostrarSlide(index) {
    if(slides.length === 0) return;
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function cambiarSlide(direccion) {
    mostrarSlide(currentSlide + direccion);
}

if(slides.length > 0) {
    setInterval(() => { cambiarSlide(1); }, 5000);
}

// --- 3. CARGA Y FILTRADO DEL CATÁLOGO ---
function cargarProductos(lista) {
    const contenedor = document.getElementById('catalogo');
    if(!contenedor) return; 
    
    contenedor.innerHTML = "";

    lista.forEach(prod => {
        const urlParams = `id=${prod.id}`;
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${prod.imagenes[0]}" alt="${prod.nombre}">
            <div class="card-body">
                <div>
                    <span class="tag">${prod.categoria}</span>
                    <h3>${prod.nombre}</h3>
                </div>
                <div>
                    <p class="price">$${prod.precio}</p>
                    <a href="producto.html?${urlParams}" class="btn-info">Información</a>
                </div>
            </div>
        `;
        contenedor.innerHTML += card.outerHTML;
    });
}

function filtrar(categoria) {
    if(navLinks) {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerText = '☰';
    }
    const titulo = document.getElementById('categoria-titulo');
    if (categoria === 'Todos') {
        if(titulo) titulo.innerText = "Todos los Productos";
        cargarProductos(productos);
    } else {
        if(titulo) titulo.innerText = categoria;
        const filtrados = productos.filter(p => p.categoria === categoria);
        cargarProductos(filtrados);
    }
    if(titulo) titulo.scrollIntoView({ behavior: 'smooth' });
}

window.onload = () => {
    cargarProductos(productos);
};
