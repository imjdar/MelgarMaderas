/**
 * Dataset Oficial de Productos - Maderas Melgar (TypeScript)
 */

import { Product, Category } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'todos', label: 'Todos los Ambientes' },
  { id: 'sala', label: 'Salas' },
  { id: 'comedor', label: 'Comedores' },
  { id: 'habitaciones', label: 'Habitaciones' },
  { id: 'cocina', label: 'Cocinas & Almacenamiento' },
  { id: 'estudio', label: 'Estudio & Consolas' }
];

export const PRODUCTS: Product[] = [
  {
    id: 'sala-linea-premium',
    name: 'Juego de Sala Línea Premium Melgar',
    category: 'sala',
    categoryLabel: 'Sala de Estar',
    image: '/assets/products/sala-linea-premium.jpg',
    shortDesc: 'Conjunto de sofá de 3 puestos, 2 sillones ergonómicos y mesa de centro de diseño exclusivo en madera maciza.',
    fullDesc: 'El Juego de Sala Línea Premium encarna la maestría artesanal de Maderas Melgar. Fabricado en madera maciza de Seike seleccionada a mano, tratada térmicamente al horno para garantizar máxima durabilidad. Su tapicería en textil anti-manchas complementa la nobleza de las vetas amaderadas oscuras.',
    material: 'Madera Maciza de Seike / Roble + Poliuretano Mate High-Traffic',
    dimensions: 'Sofá: 2.10m x 0.90m | Sillones: 0.85m x 0.85m | Mesa: 1.10m x 0.70m',
    features: [
      'Estructura 100% madera maciza con encamado reforzado',
      'Acabado en poliuretano no tóxico resistente al desgaste',
      'Cojines con espuma de alta densidad (30kg/m³)',
      'Fabricación personalizada en dimensiones y tonos de tela'
    ]
  },
  {
    id: 'comedor-elegance',
    name: 'Juego de Comedor Elegance 6 Sillas',
    category: 'comedor',
    categoryLabel: 'Comedor',
    image: '/assets/products/comedor-elegance.jpg',
    shortDesc: 'Mesa rectangular en acabado amaderado caoba con 6 sillas tapizadas de corte ergonómico.',
    fullDesc: 'Diseñado para crear experiencias memorables en torno a la mesa. Elaborado con tablas macizas ensambladas a presión, ofreciendo una superficie impermeable y resistente a altas temperaturas.',
    material: 'Madera Maciza de Laurel / Seike + Acabados Satinados',
    dimensions: 'Mesa: 1.80m x 1.00m x 0.78m | Sillas: Standard Ergonómico',
    features: [
      'Superficie tratada con sellador poliuretánico antihumedad',
      'Sillas con respaldo curvado para soporte lumbar prolongado',
      'Opción de extensión para 8 o 10 personas a pedido'
    ]
  },
  {
    id: 'tocador-luxury',
    name: 'Tocador Luxury con Espejo y Banco',
    category: 'habitaciones',
    categoryLabel: 'Habitación',
    image: '/assets/products/tocador-luxury.jpg',
    shortDesc: 'Mueble tocador de alta costura con espejo enmarcado en madera noble, cajones organizadores y banqueta.',
    fullDesc: 'La elegancia clásica al servicio de su espacio personal. El tocador Luxury de Melgar destaca por su moldurado tradicional, herrajes de extracción suave y marco biselado de gran amplitud.',
    material: 'Madera Maciza Amaderada Negra / Caoba',
    dimensions: 'Ancho: 1.30m | Alto Total: 1.75m | Profundidad: 0.48m',
    features: [
      '3 cajones principales con rieles telescópicos de cierre suave',
      'Banco tapizado en terciopelo o microfibra a elección',
      'Espejo cristal importado sin distorsión'
    ]
  },
  {
    id: 'sala-entretenimiento',
    name: 'Centro de TV & Sofá Modular Melgar',
    category: 'sala',
    categoryLabel: 'Sala de Estar',
    image: '/assets/products/sala-entretenimiento.jpg',
    shortDesc: 'Modular de pared para pantalla TV con vitrinas amaderadas, cava de vinos integrada y mesa auxiliar.',
    fullDesc: 'Una solución integral de entretenimiento que une la calidez del mueble de madera maciza con las necesidades contemporáneas de tecnología en el hogar.',
    material: 'Madera Maciza + Cristales Templados',
    dimensions: 'Modular TV: 2.40m x 1.90m x 0.45m',
    features: [
      'Gestión oculta de cableado multimedia',
      'Vitrinas con iluminación cálida empotrada',
      'Cava de vinos en madera tratada'
    ]
  },
  {
    id: 'cama-king-imperial',
    name: 'Dormitorio Cama King Imperial',
    category: 'habitaciones',
    categoryLabel: 'Habitación',
    image: '/assets/products/cama-king-imperial.jpg',
    shortDesc: 'Cama matrimonial King Size con espaldar amaderado estructurado y largueros de alta resistencia.',
    fullDesc: 'La Cama King Imperial de Maderas Melgar está construida con durabilidad intergeneracional. Su espaldar con paneles de madera maciza refleja el lema de nuestra marca: Muebles que traspasan épocas.',
    material: 'Madera Maciza de Seike de 2 pulgadas',
    dimensions: 'Para colchón King (2.00m x 2.00m)',
    features: [
      'Parrilla central de soporte con pies de refuerzo',
      'Ensambles invisibles de altísima precisión',
      'Disponible en tamaño Queen, King y Super King'
    ]
  },
  {
    id: 'cocina-integral',
    name: 'Mueble de Cocina Integral en Madera',
    category: 'cocina',
    categoryLabel: 'Cocina',
    image: '/assets/products/cocina-integral.jpg',
    shortDesc: 'Gabinete modular para cocina con acabados amaderados repelentes a la humedad.',
    fullDesc: 'Transforme su cocina con gabinetes en madera tratada hidrófuga que combinan la textura rústica elegante con la funcionalidad de la arquitectura moderna.',
    material: 'Madera Tratada Antihumedad + Herrajes Inoxidables',
    dimensions: 'Diseño modular adaptado a medida del espacio',
    features: [
      'Bisagras bidimensionales reforzadas de acero inoxidable',
      'Protección contra vapor y aceites de cocina',
      'Organización de almacenamiento maximizada'
    ]
  },
  {
    id: 'escritorio-ejecutivo',
    name: 'Escritorio Ejecutivo & Biblioteca',
    category: 'estudio',
    categoryLabel: 'Estudio & Oficina',
    image: '/assets/products/escritorio-ejecutivo.jpg',
    shortDesc: 'Mueble escritorio de trabajo en madera noble con cajonera de seguridad y estantería superior.',
    fullDesc: 'Ideal para despachos directivos y oficinas de hogar donde la presencia y sofisticación de la madera auténtica marcan la diferencia.',
    material: 'Madera Maciza de Seike / Roble',
    dimensions: 'Escritorio: 1.50m x 0.75m x 0.76m',
    features: [
      'Superficie pulida suave con barniz de altísima resistencia',
      'Cajón principal con cerradura de seguridad',
      'Pasa-cables ocultos integrados en la estructura'
    ]
  },
  {
    id: 'comedor-artesanal',
    name: 'Trinchante & Buffet Comedor Artesanal',
    category: 'comedor',
    categoryLabel: 'Comedor',
    image: '/assets/products/comedor-artesanal.jpg',
    shortDesc: 'Mueble trinchante buffet para Vajilla con puertas de madera y gavetas superiores.',
    fullDesc: 'Complemento indiscutible del comedor formal. Ofrece amplio espacio de almacenamiento interior para mantelería y piezas de cristalería.',
    material: 'Madera Maciza Amaderada',
    dimensions: 'Ancho: 1.60m | Alto: 0.90m | Profundidad: 0.45m',
    features: [
      'Estantes interiores ajustables',
      'Cajones con separadores acolchados para cubertería',
      'Tiradores metálicos artesanales'
    ]
  }
];
