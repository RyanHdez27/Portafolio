<div align="center">

```
██████╗ ██╗  ██╗    ██████╗ ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
██╔══██╗██║  ██║    ██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝███████║    ██████╔╝██████╔╝██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔══██╗██╔══██║    ██╔═══╝ ██╔══██╗██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║  ██║██║  ██║    ██║     ██║  ██║██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝  ╚═╝╚═╝  ╚═╝    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
```

# ⬡ Ryan Hernandez — Portfolio

**Ingeniero de Software · Analista de Virtualización · Desarrollador Full Stack**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![License](https://img.shields.io/badge/License-MIT-00d4ff?style=flat-square)](LICENSE)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com)
[![Location](https://img.shields.io/badge/📍-Bogotá,_Colombia-1a3a5c?style=flat-square)](#)

---

*Portafolio web profesional de una sola página (SPA) construido con React. Diseño oscuro tecnológico, animaciones fluidas, cursor personalizado y arquitectura lista para producción.*

[**Ver Demo en Vivo →**](#) &nbsp;·&nbsp; [**Contactar →**](mailto:ryan.hdez27@gmail.com) &nbsp;·&nbsp; [**LinkedIn →**](https://linkedin.com/in/ryan-hernandez)

</div>

---

## 📋 Tabla de Contenidos

- [Vista General](#-vista-general)
- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Despliegue](#-despliegue)
- [Backend Node.js](#-backend-nodejs-opcional)
- [Personalización](#-personalización)
- [Secciones del Portafolio](#-secciones-del-portafolio)
- [Mejoras Futuras](#-mejoras-futuras)
- [Contacto](#-contacto)

---

## 🖥️ Vista General

Portfolio web personal construido como Single Page Application (SPA) con React. Pensado para transmitir un perfil técnico sólido en desarrollo Full Stack, virtualización de infraestructura e inteligencia artificial, con un diseño que refleja precisión e ingeniería.

**Paleta de diseño:**

| Variable | Color | Uso |
|----------|-------|-----|
| `bg` | `#050a14` | Fondo principal |
| `surface` | `#0a1628` | Tarjetas y secciones alternas |
| `accent` | `#00d4ff` | Cian tecnológico — acento principal |
| `text` | `#e2eaf4` | Texto principal |
| `muted` | `#6b8fa8` | Texto secundario |

**Tipografía:**
- **Syne 800** — Títulos y encabezados
- **DM Mono** — Código, labels, badges
- **DM Sans** — Cuerpo de texto

---

## ✨ Características

- ⬡ &nbsp;**Diseño Dark Tech** — Paleta oscura con acentos en cian `#00d4ff`
- 🖱️ &nbsp;**Cursor personalizado** — Dot + ring reactivos al movimiento del mouse
- ⌨️ &nbsp;**Typewriter animado** — Títulos dinámicos en el Hero
- 🔲 &nbsp;**Grid animado** — Fondo de cuadrícula con movimiento sutil en Hero
- 📱 &nbsp;**100% Responsive** — Adaptado para móvil, tablet y escritorio
- ⚡ &nbsp;**Animaciones CSS** — `fadeUp`, `float`, `blink`, `rotateSlow` sin librerías externas
- 🎨 &nbsp;**Componentes autónomos** — Cada sección es un componente React independiente
- 📊 &nbsp;**Stack visual por categorías** — 6 categorías con barras de progreso animadas
- 📬 &nbsp;**Formulario de contacto** — Listo para conectar con backend Node.js
- 🔧 &nbsp;**Arquitectura limpia** — Datos centralizados en objeto `DATA`, fácil de actualizar
- 🌐 &nbsp;**SEO básico** — Estructura semántica y metadatos configurables

---

## 🛠️ Stack Tecnológico

### Frontend
```
React 18          →  Arquitectura por componentes
JavaScript ES2024 →  Lógica y animaciones
CSS3 (in-JS)      →  Estilos inyectados dinámicamente, sin dependencias externas
Google Fonts      →  Syne · DM Mono · DM Sans
```

### Backend (opcional)
```
Node.js 20+       →  Runtime del servidor
Express.js        →  Framework HTTP ligero
Nodemailer        →  Envío de emails desde formulario de contacto
dotenv            →  Gestión de variables de entorno
```

### DevOps & Despliegue
```
Vercel / Netlify  →  Hosting frontend (CI/CD automático)
Railway / Render  →  Hosting backend Node.js
GitHub Actions    →  Pipeline de despliegue (recomendado)
```

---

## 📁 Estructura del Proyecto

```
ryan-portfolio/
│
├── public/
│   ├── index.html          # HTML base con meta tags SEO
│   ├── favicon.ico         # Favicon del sitio
│   └── robots.txt          # Configuración para crawlers
│
├── src/
│   ├── App.jsx             # ← ARCHIVO PRINCIPAL (todo el portafolio)
│   ├── index.js            # Entry point de React
│   └── index.css           # Reset CSS mínimo
│
├── backend/                # Backend Node.js (opcional)
│   ├── server.js           # API Express para formulario de contacto
│   ├── .env.example        # Variables de entorno de ejemplo
│   └── package.json        # Dependencias del backend
│
├── .gitignore
├── package.json
└── README.md
```

### Arquitectura de componentes en `App.jsx`

```
App
 ├── GlobalStyles        # Estilos CSS inyectados + Google Fonts
 ├── CustomCursor        # Cursor dot + ring personalizado
 ├── Nav                 # Navbar fija con efecto scroll
 └── main
      ├── Hero           # Sección inicial con typewriter + stats
      ├── About          # Sobre mí + terminal decorativa
      ├── Experience     # Timeline de experiencia profesional
      ├── Technologies   # Stack por categorías con progress bars
      ├── Projects       # Cards de proyectos destacados
      ├── Certifications # Grid de certificaciones
      └── Contact        # Formulario + links sociales
      
 └── Footer              # Footer minimalista
```

---

## 🚀 Instalación y Configuración

### Prerrequisitos

```bash
node --version   # v18+ requerido
npm --version    # v9+ recomendado
```

### 1. Clonar el repositorio

```bash
git clone https://github.com/ryan-hernandez/portfolio.git
cd portfolio
```

### 2. Crear el proyecto React

```bash
npx create-react-app ryan-portfolio
cd ryan-portfolio
```

### 3. Reemplazar el App.js

```bash
# Copiar el archivo del portafolio
cp ../App.jsx src/App.jsx

# Opcional: limpiar archivos no necesarios
rm src/App.css src/logo.svg
```

### 4. Instalar dependencias

```bash
npm install
```

> **Nota:** El portafolio no requiere librerías externas adicionales. Todo está implementado con React puro y CSS-in-JS.

### 5. Ejecutar en desarrollo

```bash
npm start
# Abre http://localhost:3000
```

---

## 📦 Despliegue

### Opción A — Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Build y deploy
npm run build
vercel --prod
```

O conectar el repositorio directamente en [vercel.com](https://vercel.com) para CI/CD automático en cada push.

### Opción B — Netlify

```bash
# Build del proyecto
npm run build

# Deploy manual
npx netlify-cli deploy --dir=build --prod
```

### Opción C — GitHub Pages

```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Agregar en package.json:
# "homepage": "https://ryan-hernandez.github.io/portfolio"
# "predeploy": "npm run build"
# "deploy": "gh-pages -d build"

npm run deploy
```

### Variables de entorno (frontend)

Crear `.env` en la raíz del proyecto:

```env
REACT_APP_API_URL=http://localhost:3001
REACT_APP_CONTACT_EMAIL=ryan.hdez27@gmail.com
```

---

## 🔌 Backend Node.js (Opcional)

El formulario de contacto está preparado para conectarse a una API REST. Para activarlo:

### Setup del servidor

```bash
mkdir backend && cd backend
npm init -y
npm install express nodemailer cors dotenv
```

### `backend/server.js`

```javascript
const express    = require('express');
const nodemailer = require('nodemailer');
const cors       = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000' }));
app.use(express.json());

// Transporter Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS   // App Password de Gmail (no la contraseña real)
  }
});

// POST /api/contact
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: 'ryan.hdez27@gmail.com',
      replyTo: email,
      subject: `[Portfolio] Nuevo mensaje de ${name}`,
      html: `
        <h2>Nuevo mensaje desde el portafolio</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    res.json({ success: true, message: 'Email enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar email:', error);
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
});

// Health check
app.get('/api/health', (_, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✓ API corriendo en http://localhost:${PORT}`));
```

### `backend/.env`

```env
EMAIL_USER=ryan.hdez27@gmail.com
EMAIL_PASS=tu_app_password_de_gmail
FRONTEND_URL=https://tu-dominio.com
PORT=3001
```

> **¿Cómo obtener un App Password de Gmail?**  
> Google Account → Seguridad → Verificación en 2 pasos → Contraseñas de aplicaciones

### Conectar frontend con backend

En `App.jsx`, actualizar la función `handleSubmit` del componente `Contact`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (res.ok) {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  } catch {
    setStatus('error');
  }
  setTimeout(() => setStatus(null), 4000);
};
```

---

## 🎨 Personalización

Todos los datos del portafolio están centralizados en el objeto `DATA` al inicio de `App.jsx`. Para personalizarlo:

### Actualizar información personal

```javascript
const DATA = {
  personal: {
    name: "Tu Nombre",
    location: "Tu Ciudad, País",
    email: "tu@email.com",
    linkedin: "https://linkedin.com/in/tu-usuario",
    github: "https://github.com/tu-usuario",
    bio: "Tu bio corta aquí...",
    about: "Tu descripción larga aquí...",
  },
  // ...
}
```

### Cambiar colores del tema

```javascript
const COLORS = {
  bg: "#050a14",       // Fondo principal
  accent: "#00d4ff",   // Color de acento — cambia esto para un tema diferente
  // ...
};
```

### Agregar/editar proyectos

```javascript
projects: [
  {
    title: "Nombre del Proyecto",
    description: "Descripción del proyecto...",
    tech: ["React", "Node.js", "PostgreSQL"],
    color: "#00d4ff",    // Color de la card
    icon: "⬡",          // Ícono decorativo
    type: "Full Stack",
    highlights: ["Feature 1", "Feature 2"],
  },
]
```

---

## 📄 Secciones del Portafolio

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | **Hero** | Nombre, typewriter animado, bio, stats y CTAs |
| 2 | **Sobre mí** | Resumen profesional + terminal decorativa interactiva |
| 3 | **Experiencia** | Timeline vertical con 3 roles profesionales |
| 4 | **Tecnologías** | 6 categorías con progress bars animadas (18+ techs) |
| 5 | **Proyectos** | 3 cards: Full Stack, IA/Python, Data & BI |
| 6 | **Certificaciones** | Grid con 6 credenciales (Talento Tech + Cisco) |
| 7 | **Contacto** | Formulario + links a email, LinkedIn, GitHub |
| 8 | **Footer** | Minimalista con copyright |

---

## 🔮 Mejoras Futuras

- [ ] **SEO avanzado** — `react-helmet-async` para meta tags dinámicos + Open Graph
- [ ] **Migración a Next.js** — SSR para mejor SEO y rendimiento
- [ ] **Blog técnico** — MDX para artículos propios con syntax highlighting
- [ ] **GitHub API** — Mostrar repositorios reales en tiempo real
- [ ] **Dark/Light toggle** — Modo claro alternativo
- [ ] **i18n ES/EN** — Internacionalización con `react-i18next`
- [ ] **PWA** — Service Worker para experiencia offline
- [ ] **Analytics** — Google Analytics 4 o Plausible
- [ ] **Tests** — Jest + React Testing Library para componentes clave
- [ ] **GitHub Actions** — Pipeline CI/CD automático en cada push

---

## 📬 Contacto

<div align="center">

**Ryan Hernandez**  
Ingeniero de Software · Bogotá, Colombia 🇨🇴

[![Email](https://img.shields.io/badge/Email-ryan.hdez27@gmail.com-00d4ff?style=flat-square&logo=gmail&logoColor=white)](mailto:ryan.hdez27@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ryan--hernandez-0077B5?style=flat-square&logo=linkedin)](https://linkedin.com/in/ryan-hernandez)
[![GitHub](https://img.shields.io/badge/GitHub-ryan--hernandez-181717?style=flat-square&logo=github)](https://github.com/ryan-hernandez)

</div>

---

<div align="center">

**MIT License** · © 2025 Ryan Hernandez

*Hecho con React ⬡ y mucho ☕ en Bogotá*

</div>
