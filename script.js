// Pega aquí el enlace de tu repositorio.
const URL_REPOSITORIO = '';

const productos = [
    { nombre: 'Pollera Andina Floral',     categoria: 'Pollera', precio: 120, etiqueta: 'Entrega inmediata',
      descripcion: 'Pollera bordada a mano con hilos de colores vivos sobre tela de lana. Motivos florales andinos tradicionales de la región Junín.', imagen: '' },
    { nombre: 'Pollera Huanca Multicolor', categoria: 'Pollera', precio: 180, etiqueta: 'Entrega inmediata',
      descripcion: 'Pollera de estilo huanca con bordados multicolor, ideal para festividades y danzas folclóricas.', imagen: '' },
    { nombre: 'Pollera Ceremonial Puno',   categoria: 'Pollera', precio: 220, etiqueta: 'Entrega inmediata',
      descripcion: 'Pollera de gala con bordado detallado, pensada para ceremonias y presentaciones especiales.', imagen: '' },
    { nombre: 'Faja Tradicional Junín',    categoria: 'Faja',    precio: 35,  etiqueta: 'Entrega inmediata',
      descripcion: 'Faja tradicional con motivos típicos de Junín, resistente y cómoda para uso diario o de danza.', imagen: '' },
    { nombre: 'Faja Bordada Cóndor',       categoria: 'Faja',    precio: 45,  etiqueta: 'Entrega inmediata',
      descripcion: 'Faja con bordado del cóndor andino, símbolo de la cultura de los Andes.', imagen: '' },
    { nombre: 'Faja Wanka Personalizada',  categoria: 'Faja',    precio: 50,  etiqueta: 'Personalizado',
      descripcion: 'Faja bordada a pedido: eliges colores, nombre o diseño para tu grupo o institución.', imagen: '' },
    { nombre: 'Chaleco Folklórico Bordado',categoria: 'Chaleco', precio: 80,  etiqueta: 'Personalizado',
      descripcion: 'Chaleco con bordados folklóricos que puedes personalizar con tus propios diseños.', imagen: '' },
    { nombre: 'Chaleco Andino Premium',    categoria: 'Chaleco', precio: 95,  etiqueta: 'Personalizado',
      descripcion: 'Chaleco de acabado premium con bordado andino de alta calidad.', imagen: '' },
    { nombre: 'Chaleco Infantil Bordado',  categoria: 'Chaleco', precio: 60,  etiqueta: 'Entrega inmediata',
      descripcion: 'Chaleco bordado en tallas para niños, perfecto para actos escolares y danzas.', imagen: '' }
];

/*MISIÓN Y VISIÓN*/
const boton = document.getElementById('miBoton');
const mensaje = document.getElementById('mensaje');

boton.addEventListener('click', () => {
    mensaje.classList.toggle('oculto');

    if (mensaje.classList.contains('oculto')) {
        boton.textContent = 'Ver misión y visión';
    } else {
        boton.textContent = 'Ocultar misión y visión';
    }
});

/*PRODUCTOS*/
const contenedorProductos = document.getElementById('listaProductos');

function crearTarjeta(p) {
    const tarjeta = document.createElement('article');
    tarjeta.className = 'tarjeta';

    const zonaImg = document.createElement('div');
    zonaImg.className = 'tarjeta-img';
    if (p.imagen) {
        zonaImg.style.background = `url("${p.imagen}") center / cover no-repeat`;
    } else {
        zonaImg.textContent = '🧵';
    }

    const etiqueta = document.createElement('span');
    etiqueta.className = 'etiqueta';
    etiqueta.textContent = p.etiqueta;
    zonaImg.appendChild(etiqueta);

    const cuerpo = document.createElement('div');
    cuerpo.className = 'tarjeta-cuerpo';

    const cat = document.createElement('span');
    cat.className = 'categoria';
    cat.textContent = p.categoria;

    const titulo = document.createElement('h3');
    titulo.textContent = p.nombre;

    const desc = document.createElement('p');
    desc.textContent = p.descripcion;

    const precio = document.createElement('span');
    precio.className = 'precio';
    precio.textContent = 'S/ ' + p.precio.toFixed(2);

    cuerpo.append(cat, titulo, desc, precio);
    tarjeta.append(zonaImg, cuerpo);
    return tarjeta;
}

productos.forEach(p => contenedorProductos.appendChild(crearTarjeta(p)));

/*PESTAÑAS*/
const pestanas = document.querySelectorAll('.pestana');
const paneles = document.querySelectorAll('.panel');

pestanas.forEach(pestana => {
    pestana.addEventListener('click', () => {
        const destino = pestana.dataset.destino;

        pestanas.forEach(p => {
            const activa = p === pestana;
            p.classList.toggle('activa', activa);
            p.setAttribute('aria-selected', activa);
        });

        paneles.forEach(panel => {
            panel.hidden = panel.id !== destino;
            panel.classList.toggle('activo', panel.id === destino);
        });
    });
});

/*REPOSITORIO */
const enlaceRepo = document.getElementById('enlaceRepo');
const avisoRepo = document.getElementById('avisoRepo');

if (URL_REPOSITORIO) {
    enlaceRepo.href = URL_REPOSITORIO;
} else {
    avisoRepo.textContent = 'Aún no se ha colocado el enlace del repositorio (edita URL_REPOSITORIO en script.js).';
    enlaceRepo.addEventListener('click', e => e.preventDefault());
}