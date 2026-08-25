# Maderas Melgar - Portal Web Informativo & Catálogo Protegido

![Maderas Melgar](public/assets/branding/logo-full.png)

> **Sitio Web Oficial**: [melgarmaderas.com.ec](https://melgarmaderas.com.ec)  
> **Slogan Corporativo**: *“Muebles que traspasan épocas”*  
> **Tecnologías**: Next.js 14 (App Router), TypeScript, React, Vitest, Vanilla CSS Design Tokens, JSON-LD Schema, Vercel & Cloudflare Readiness.

---

## 📋 Resumen del Proyecto

Este repositorio contiene la solución web informativa y catálogo digital de **Maderas Melgar** (`melgarmaderas.com.ec`), desarrollada bajo estándares de ingeniería de software Senior, principios **SOLID**, buenas prácticas de ciberseguridad antipiratería, posicionamiento **SEO Senior** y optimización para motores de IA (**GEO - Generative Engine Optimization** en Gemini, ChatGPT y Perplexity).

El sitio NO es un e-commerce transaccional con carrito de compras, sino un **portal informativo de alta gama** orientado a presentar la trayectoria de la empresa, exhibir la nobleza de la madera maciza 100% y convertir prospectos mediante cotizaciones personalizadas hacia WhatsApp.

---

## 🎨 Sistema de Diseño y Manual de Marca

El desarrollo sigue rigurosamente las pautas del **Manual de Imagen Corporativa Melgar**:
- **Tono Amaderado Oscuro / Caoba**: `#3A1A0E` (CMYK 33, 83, 99, 44)
- **Verde Corporativo Melgar**: `#0D6838` (CMYK 90, 32, 92, 24)
- **Fondo Crema Marfil de Lujo**: `#FDFBF7`
- **Tipografías**:
  - *Encabezados*: `Plus Jakarta Sans` / `Outfit`
  - *Cuerpo*: `Inter`
  - *Slogan & Acentos Elegantes*: `Cormorant Garamond` (Monotipo Cursiva)

### Inspiración UX/UI
La experiencia visual y de usuario fue diseñada inspirándose en las mejores prácticas de firmas líderes de mobiliario:
1. **Adriana Hoyos**: Sofisticación artesanal, fotografía de gran formato, narrativa de nobleza de la madera.
2. **Tempo Design**: Grillas de ambientes limpias y respirables.
3. **Colineal**: Categorización intuitiva por ambientes y llamadas a la acción claras.
4. **Vaseb Template**: Glassmorphism en encabezados, botones flotantes y micro-animaciones fluidas.

---

## 🛡️ Solución de Ciberseguridad & Anti-Robo de Imágenes

Para evitar que competidores descarguen o utilicen fotografías de productos para revenderlas:

1. **Marcas de Agua Dinámicas (`WatermarkImage.tsx`)**:
   - Superposición visual sutil con el dominio `melgarmaderas.com.ec` en patrón diagonal repetido y sello de propiedad en esquina.
2. **Escudo Protector Transparente (`transparent-shield`)**:
   - Capa sobre la imagen que intercepta los clics derechos *"Guardar imagen como..."*, impidiendo la descarga del archivo fuente.
3. **Módulo Guardián de Ciberseguridad (`SecurityGuard.tsx`)**:
   - Intercepta y deshabilita atajos de teclado para la apertura de DevTools / Inspección (`F12`, `Ctrl+Shift+I`, `Ctrl+Shift+J`, `Ctrl+U`, `Ctrl+S`).
   - Muestra notificaciones flotantes de advertencia de propiedad intelectual.

---

## 📐 Arquitectura SOLID & Estructura del Código

El proyecto sigue una arquitectura modular en **TypeScript**:

```
MelgarMaderas/
├── .github/
│   └── workflows/
│       └── ci.yml               # CI/CD Pipeline para GitHub Actions
├── public/
│   ├── assets/
│   │   ├── branding/            # Logotipos e isotipos oficiales
│   │   └── products/            # Fotografías amaderadas protegidas
│   ├── llms.txt                 # Archivo GEO para IAs (Gemini, ChatGPT)
│   ├── robots.txt               # Configuración para motores de búsqueda e IAs
│   └── vercel.json              # Configuración de despliegue y cabeceras WAF
├── src/
│   ├── app/
│   │   ├── globals.css          # Sistema de diseño y tokens CSS
│   │   ├── layout.tsx           # RootLayout con SEO, Metadatos y JSON-LD
│   │   ├── page.tsx             # Entry Point con unificación de módulos
│   │   ├── robots.ts            # Ruta dinámica de robots.txt
│   │   └── sitemap.ts           # Ruta dinámica de sitemap.xml
│   ├── components/              # Componentes UI reacoplables y tipados
│   │   ├── AboutBrand.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FloatingWhatsApp.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProductCatalog.tsx
│   │   ├── ProductModal.tsx
│   │   ├── SecurityGuard.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ValueProps.tsx
│   │   └── WatermarkImage.tsx
│   ├── data/
│   │   └── products.ts          # Dataset oficial de productos
│   ├── services/
│   │   ├── configService.ts     # Configuración centralizada (DIP)
│   │   ├── schemaService.ts     # Generador de esquemas JSON-LD (SRP)
│   │   └── whatsappService.ts   # Generador de URLs de WhatsApp (SRP)
│   ├── types/
│   │   └── index.ts             # Interfaces TypeScript (ISP)
│   └── __tests__/               # Pruebas unitarias automatizadas (Vitest)
│       ├── schemaService.test.ts
│       ├── WatermarkImage.test.tsx
│       └── whatsappService.test.ts
├── next.config.mjs
├── tsconfig.json
└── vitest.config.mts
```

---

## 🧪 QA & Pruebas Automatizadas (Vitest)

Para ejecutar la suite de pruebas unitarias y verificar el funcionamiento de servicios y componentes:

```bash
# Ejecutar todas las pruebas una vez
npm test

# Ejecutar pruebas en modo observador (Watch Mode)
npm run test:watch
```

---

## 🚀 Despliegue en Vercel & Configuración Futura

### Pasos para Desplegar en Vercel:
1. Conectar este repositorio a su cuenta de **Vercel**.
2. Vercel detectará automáticamente la estructura de **Next.js**.
3. Haga clic en **Deploy**. El archivo `vercel.json` inyectará automáticamente las cabeceras de ciberseguridad y reglas de caché.

### Actualización del Número de WhatsApp y Dirección de Google Maps:
Para actualizar el número de WhatsApp corporativo o la ubicación en el futuro, únicamente edite el archivo `src/services/configService.ts`:

```typescript
export const APP_CONFIG: AppConfig = {
  domain: 'melgarmaderas.com.ec',
  
  // Agregue su número con código de país (Ej: '+593991234567')
  whatsappNumber: '+593991234567', 

  location: {
    city: 'Quito',
    province: 'Pichincha',
    country: 'Ecuador',
    addressLine: 'Av. Granados y Eloy Alfaro, Quito, Ecuador'
  }
};
```

---

## 📜 Licencia y Derechos Reservados
© {new Date().getFullYear()} **Maderas Melgar** (`melgarmaderas.com.ec`). Todos los derechos reservados.
