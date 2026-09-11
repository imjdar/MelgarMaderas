/**
 * Dataset Oficial de Productos - Maderas Melgar (TypeScript)
 * Información extraída del catálogo oficial proporcionado.
 */

import { Product, Category } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'todos', label: 'Todos los Ambientes' },
  { id: 'sala', label: 'Salas' },
  { id: 'comedor', label: 'Comedores' },
  { id: 'habitaciones', label: 'Habitaciones' },
  { id: 'cocina', label: 'Cocinas & Almacenamiento' },
  { id: 'estudio', label: 'Estudio & Consolas' },
  { id: 'complementos', label: 'Complementos' }
];

export const PRODUCTS: Product[] = [
  {
    id: 'sala-halem',
    name: 'Sala Halem',
    category: 'sala',
    categoryLabel: 'Sala de Estar',
    image: '/assets/products/sala-armonia.jpg', 
    shortDesc: 'Maderas cálidas, textiles suaves y tonos que evocan tierra, agua y tranquilidad.',
    fullDesc: 'Una colección que lleva al interior del hogar la sensación de estar rodeado de naturaleza, combinando el carácter de la madera con líneas elegantes y atemporales. Diseñada para quedarse.',
    material: 'Madera Sólida + Textiles Seleccionados',
    dimensions: 'Diseño Modular a Medida',
    features: [
      'Líneas elegantes y atemporales',
      'Tonos que evocan tierra, agua y tranquilidad',
      'Textiles antifluido, chenil, microfibra o microcuero a elección'
    ]
  },
  {
    id: 'mesa-centro-halem',
    name: 'Mesa de centro redonda Halem',
    category: 'sala',
    categoryLabel: 'Sala de Estar',
    image: '/assets/products/sala-linea-premium.jpg',
    shortDesc: 'Mesa de centro circular con carácter amaderado y líneas atemporales.',
    fullDesc: 'Complemento perfecto de la Colección Halem, que lleva al interior del hogar la sensación de estar rodeado de naturaleza.',
    material: 'Madera Sólida',
    dimensions: 'Diseño Circular',
    features: [
      'Líneas elegantes',
      'Estructura de madera sólida (laurel negro del Oriente, seike, manzano colorado o roble)'
    ]
  },
  {
    id: 'sala-fiorella',
    name: 'Sala Fiorella',
    category: 'sala',
    categoryLabel: 'Sala de Estar',
    image: '/assets/products/sala-entretenimiento.jpg',
    shortDesc: 'Líneas clásicas, materiales cálidos y detalles cuidadosamente trabajados.',
    fullDesc: 'Una colección que nace del carácter de la madera y de la tradición de crear muebles pensados para acompañar la vida. Crea espacios que invitan a quedarse, compartir y construir recuerdos.',
    material: 'Madera Sólida',
    dimensions: 'Configuración Personalizada',
    features: [
      'Líneas clásicas y detalles trabajados',
      'Espacios para compartir y construir recuerdos'
    ]
  },
  {
    id: 'comedor-sorento',
    name: 'Comedor Sorento',
    category: 'comedor',
    categoryLabel: 'Comedor',
    image: '/assets/products/comedor-elegance.jpg',
    shortDesc: 'La elegancia de lo que permanece. Inspira tradición y belleza de diseños clásicos.',
    fullDesc: 'Inspirada en la tradición y en la belleza de los diseños clásicos, Sorento combina la calidez de la madera con detalles trabajados para crear espacios de carácter y distinción. Una colección pensada para quienes encuentran belleza en lo atemporal y valoran piezas que pueden acompañar momentos que pasan de generación en generación.',
    material: 'Madera Sólida',
    dimensions: 'A medida',
    features: [
      'Detalles trabajados de carácter y distinción',
      'Belleza atemporal'
    ]
  },
  {
    id: 'silla-sorento',
    name: 'Silla de comedor Sorento',
    category: 'comedor',
    categoryLabel: 'Comedor',
    image: '/assets/products/comedor-elegance.jpg',
    shortDesc: 'Silla clásica con calidez de la madera y detalles trabajados.',
    fullDesc: 'Complemento de la colección Sorento, pensada para quienes encuentran belleza en lo atemporal y valoran piezas que pueden acompañar momentos de generación en generación.',
    material: 'Madera Sólida + Tapiz',
    dimensions: 'Estándar',
    features: [
      'Diseño clásico y elegante',
      'Asiento ergonómico con tapizado seleccionado'
    ]
  },
  {
    id: 'bufetero-halem',
    name: 'Bufetero Halem',
    category: 'comedor',
    categoryLabel: 'Comedor',
    image: '/assets/products/comedor-artesanal.jpg',
    shortDesc: 'Mueble complementario para el comedor de la Colección Halem.',
    fullDesc: 'Lleva al interior del hogar la sensación de estar rodeado de naturaleza. Espacio de almacenamiento elegante y atemporal.',
    material: 'Madera Sólida',
    dimensions: 'A medida',
    features: [
      'Almacenamiento funcional',
      'Diseño atemporal de líneas elegantes'
    ]
  },
  {
    id: 'comedor-coral',
    name: 'Comedor Coral',
    category: 'comedor',
    categoryLabel: 'Comedor',
    image: '/assets/products/comedor-elegance.jpg',
    shortDesc: 'La precisión de la madera. Calidez combinada con superficies ligeras y geométricas.',
    fullDesc: 'Una colección donde el diseño encuentra su expresión en las líneas, las proporciones y los detalles. La calidez de la madera se combina con superficies ligeras y formas geométricas para crear piezas contemporáneas, elegantes y llenas de carácter.',
    material: 'Madera Sólida',
    dimensions: 'A medida',
    features: [
      'Formas geométricas precisas',
      'Superficies ligeras y elegantes'
    ]
  },
  {
    id: 'dormitorio-imperial',
    name: 'Dormitorio Imperial',
    category: 'habitaciones',
    categoryLabel: 'Habitación',
    image: '/assets/products/cama-king-imperial.jpg',
    shortDesc: 'La grandeza de lo atemporal. Inspirada en la elegancia de los diseños clásicos.',
    fullDesc: 'Expresa carácter a través de detalles cuidadosamente trabajados y una ebanistería que honra la elegancia. Una colección creada para quienes valoran los espacios con personalidad y piezas que no necesitan seguir tendencias para permanecer de moda.',
    material: 'Madera Sólida',
    dimensions: 'Personalizable (Queen, King, Super King)',
    features: [
      'Diseño clásico y elegante',
      'Detalles de ebanistería tradicional'
    ]
  },
  {
    id: 'coqueta-imperial',
    name: 'Coqueta Imperial',
    category: 'habitaciones',
    categoryLabel: 'Habitación',
    image: '/assets/products/tocador-luxury.jpg',
    shortDesc: 'Complemento clásico de la colección Imperial con detalles cuidadosamente trabajados.',
    fullDesc: 'La coqueta imperial añade elegancia atemporal al dormitorio, expresando carácter a través de la ebanistería de alta calidad. No necesita seguir tendencias para permanecer de moda.',
    material: 'Madera Sólida',
    dimensions: 'A medida',
    features: [
      'Espacio funcional de organización personal',
      'Diseño clásico atemporal'
    ]
  },
  {
    id: 'comoda-specia',
    name: 'Semanero y Cómoda Specia',
    category: 'habitaciones',
    categoryLabel: 'Habitación',
    image: '/assets/products/tocador-luxury.jpg', 
    shortDesc: 'Inspirada en la calidez de los refugios entre madera y montaña.',
    fullDesc: 'Una colección inspirada en la calidez de los refugios donde la madera, las texturas y los tonos naturales crean una sensación de abrigo y tranquilidad.',
    material: 'Madera Sólida',
    dimensions: 'A medida',
    features: [
      'Tonos naturales',
      'Sensación de abrigo y tranquilidad'
    ]
  },
  {
    id: 'dormitorio-roma',
    name: 'Dormitorio Roma',
    category: 'habitaciones',
    categoryLabel: 'Habitación',
    image: '/assets/products/cama-king-imperial.jpg',
    shortDesc: 'La grandeza de la arquitectura clásica convertida en mobiliario.',
    fullDesc: 'Inspirada en las formas y detalles de la arquitectura romana, esta colección combina la fuerza de la madera con curvas, relieves y proporciones que evocan elegancia. El carácter de Roma, transformado en madera.',
    material: 'Madera Sólida',
    dimensions: 'A medida',
    features: [
      'Curvas y relieves arquitectónicos',
      'Proporciones elegantes clásicas'
    ]
  },
  {
    id: 'entretenimiento-roma',
    name: 'Centro de Entretenimiento Roma',
    category: 'complementos',
    categoryLabel: 'Complementos',
    image: '/assets/products/sala-entretenimiento.jpg',
    shortDesc: 'Fuerza de la madera con detalles inspirados en la arquitectura clásica.',
    fullDesc: 'Complemento ideal de la Colección Roma, combina formas arquitectónicas y proporciones elegantes para entregar un centro de entretenimiento con carácter único.',
    material: 'Madera Sólida',
    dimensions: 'A medida',
    features: [
      'Gestión de espacio superior',
      'Proporciones y relieves únicos inspirados en Roma'
    ]
  }
];
