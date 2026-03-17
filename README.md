# 📋 Documentación del Proyecto — Dashboard Interactivo Freskaleche S.A.S.

---

## 1. Información General

| Campo | Detalle |
|-------|---------|
| **Proyecto** | Dashboard Interactivo — Análisis Sectorial del Mercado Lácteo en Colombia |
| **Empresa Analizada** | Freskaleche S.A.S. |
| **Institución** | Universidad Pontificia Bolivariana (UPB) |
| **Curso** | Formulación y Evaluación de Proyectos |
| **Docente** | Verónica Arango Rivera |
| **Equipo Consultor** | Mariana Cardona Serna, Juan Pablo Aristizabal Giraldo, Sofia Giraldo Sarmiento |
| **Fecha** | Marzo 2026 |

---

## 2. ¿Cómo Ejecutar el Proyecto?

### Requisitos
- Un navegador web moderno (Chrome, Edge, Firefox, Safari).
- **No se necesita servidor local ni instalación.** Es una aplicación estática (SPA).

### Instrucciones
1. Abra la carpeta del proyecto.
2. Haga doble clic en **`index.html`**.
3. El dashboard se abrirá en su navegador predeterminado.
4. Haga scroll hacia abajo para navegar por las secciones.

> 💡 **Tip:** Use los **puntos de navegación** (dots) en el costado derecho de la pantalla para saltar entre secciones.

---

## 3. Arquitectura Tecnológica

El proyecto se desarrolló como una **Single Page Application (SPA) estática**, garantizando portabilidad inmediata sin requerir servidores locales.

| Componente | Tecnología | Detalles |
|------------|------------|----------|
| **Estructura** | HTML5 | Semántica, secciones apiladas verticales (`100vh`) |
| **Estilos** | CSS3 (Vanilla) | Tema oscuro corporativo, glassmorphism, parallax animado |
| **Visualización** | [Chart.js](https://www.chartjs.org/) (CDN) | Gráfico de líneas y gráfico de dona |
| **Interactividad** | JavaScript (Vanilla) | Intersection Observer API, lazy loading |
| **Tipografía** | [Google Fonts](https://fonts.google.com/) | Outfit (títulos), Inter (cuerpo) |
| **Iconos** | [Font Awesome 6.4](https://fontawesome.com/) | CDN |

### Dependencias Externas (CDN)
Todas las dependencias se cargan remotamente. **Se requiere conexión a Internet** para:
- `fonts.googleapis.com` — Tipografías Outfit e Inter
- `cdnjs.cloudflare.com` — Iconos Font Awesome
- `cdn.jsdelivr.net` — Librería Chart.js

---

## 4. Estructura de Archivos

```
📁 PAGINA WEB/
│
├── 📄 index.html              ← Página principal (286 líneas)
├── 📄 style.css               ← Estilos del dashboard (600+ líneas)
├── 📄 script.js               ← Lógica y animaciones (230+ líneas)
│
├── 🖼️ hero_bg_abstract.png    ← Fondo portada (onda fluida abstracta)
├── 🖼️ market_bg_abstract.png  ← Fondo sección Mercado (grilla geométrica)
├── 🖼️ swot_bg_abstract.png    ← Fondo sección DOFA (botella cristalizada)
├── 🖼️ image_04937c.jpg        ← Fotografía paisaje lácteo (respaldo)
├── 🖼️ image_04938c.jpg        ← Fotografía paisaje lácteo (respaldo)
├── 🖼️ dashboard_banner.png    ← Banner decorativo (respaldo)
├── 🖼️ market_banner.png       ← Banner decorativo (respaldo)
├── 🖼️ swot_banner.png         ← Banner decorativo (respaldo)
│
├── 📄 walkthrough.md           ← Resumen de cambios realizados
├── 📄 README.md                ← ESTE ARCHIVO
├── 📄 Estructura del Proyecto.txt ← Documento original de planeación
│
├── 📑 TALLER Parte 1 Freskaleche.docx     ← Datos fuente del análisis
├── 📑 Colombia - Informe Sector Lácteo - Marzo 2025.pdf
├── 📑 Colombia - Informe Sector Lácteo - Septiembre 2025.pdf
├── 📑 Dairy Products, Colombia Industry Overview 2021-2029.pdf
├── 📑 Drinking Milk Products in Colombia.pdf
├── 📑 EMIS_1195513_2026-03-08_EXPORT.pdf
│
├── 📄 INFORME DATOS - 2dashboard.html      ← Versiones anteriores
├── 📄 INFORME DATOS.dashboard.html         ← Versiones anteriores
└── 📄 Informe sectorial dashboard.html     ← Versiones anteriores
```

---

## 5. Mapa de Navegación (Secciones del Dashboard)

El dashboard sigue un formato **scrollytelling**: el usuario navega haciendo scroll vertical por 5 secciones narrativas de pantalla completa.

### 5.1. 🏠 Portada (`#hero`)
- Título: "Dashboard de Investigación"
- Subtítulo con periodo analizado (2024/2025)
- Datos institucionales: UPB, docente y equipo consultor
- Botón "Exportar Datos" (abre `window.print()`)
- Fondo: Imagen abstracta con animación de zoom continuo

### 5.2. 📊 Panorama General (`#dashboard`)
- **3 Tarjetas KPI:**
  - Ventas Retail: **7.1 Billones COP** (2024)
  - Aporte al PIB: **2.3%**
  - Empresas registradas: **6.583**
- **Gráfico de Líneas:** Valor de Producción en Millones USD (2021→2033)
  - 2021 histórico: $2,597M
  - 2024 actual: $2,555M
  - 2029 proyección: $2,606M
  - 2033 proyección: $3,200M
- **Gráfico de Dona:** Relación de Dominancia del mercado
  - Colanta: 55.5%, Alpina: 25.3%, Alquería: 14.5%, Freskaleche: 4.7%, Otros: 10%
- Interpretación de indicadores (resiliencia + concentración)

### 5.3. 🌍 Dinámica del Mercado (`#mercado`)
- Análisis del consumidor (consumo per cápita: 144 litros)
- Erosión del poder adquisitivo
- Cambio de hábitos hacia leches vegetales (42% jóvenes)
- Balanza de riesgo: ratio 4:1 importación vs exportación
- Fondo: Imagen geométrica con parallax animado

### 5.4. 🏆 Análisis de Competencia (`#competencia`)
- **Barras animadas de ingresos:**
  - Colanta: $4.6B (100%)
  - Alpina: $2.1B (45%)
  - Freskaleche: $385M (8.5%)
- Análisis cualitativo del posicionamiento regional de Freskaleche
- Crecimiento sostenido del 5.3% en 2024

### 5.5. 🎯 Matriz DOFA (`#dofa`)
| | Positivo | Negativo |
|---|----------|----------|
| **Interno** | **F** — Dominio logístico regional, marca anclada | **D** — Costos sensibles a inflación, menor escala |
| **Externo** | **O** — Venezuela +141%, valor funcional | **A** — TLC 2026 arancel 0%, bebidas vegetales |

- Conclusión estratégica: migrar hacia productos de valor agregado
- Fondo: Imagen abstracta con parallax animado

---

## 6. Características Técnicas Clave

### Scrollytelling con Intersection Observer
El JavaScript usa la API nativa `IntersectionObserver` para detectar qué sección está en el viewport y disparar animaciones correspondientes. Los gráficos de Chart.js se renderizan **solo cuando el usuario llega a ellos** (lazy loading).

### Animaciones CSS
| Clase | Efecto |
|-------|--------|
| `.reveal-fade-up` | Aparece desde abajo con desvanecimiento |
| `.reveal-fade-left` | Aparece desde la izquierda |
| `.reveal-fade-right` | Aparece desde la derecha |
| `.reveal-scale-up` | Escala desde 95% a 100% |
| `.reveal-stagger-item` | Elementos escalonados con `transition-delay` |

### Fondos Parallax Animados
Las secciones Hero, Mercado y DOFA usan pseudo-elementos `::before` con una animación CSS `slowZoom` de 30 segundos que crea una sensación de profundidad continua.

### Glassmorphism
Las tarjetas usan `backdrop-filter: blur(12px)` sobre fondos semitransparentes (`rgba(15, 23, 42, 0.6)`) para el efecto de cristal.

---

## 7. Fuentes de Datos

Los datos presentados en el dashboard provienen de las siguientes fuentes:

1. **TALLER Parte 1 Freskaleche.docx** — Documento base del curso
2. **Colombia - Informe Sector Lácteo (Marzo y Septiembre 2025)** — Informes sectoriales
3. **Dairy Products, Colombia Industry Overview 2021-2029** — Proyecciones de mercado
4. **Drinking Milk Products in Colombia** — Análisis de consumo
5. **EMIS Export** — Datos financieros corporativos (Supersociedades)
6. **DANE** — Estadísticas nacionales de producción y consumo

---

## 8. Notas para Modificaciones Futuras

- **Añadir datos:** Modifique los valores dentro de `script.js` en las funciones `renderGrowthChart()` y `renderShareChart()`.
- **Cambiar colores:** Edite las variables CSS en `:root` dentro de `style.css`.
- **Añadir secciones:** Duplique un bloque `<section>` en `index.html`, asígnele un nuevo `id`, y añada un nuevo `<li>` al `<nav class="scroll-nav">`.
- **Cambiar imágenes de fondo:** Reemplace los archivos `.png` en la carpeta y actualice las rutas en `style.css` (buscar `.hero-bg::before`, `.market-bg::before`, `.swot-bg::before`).

---

> **Proyecto desarrollado para la materia de Formulación y Evaluación de Proyectos — UPB, Marzo 2026.**
