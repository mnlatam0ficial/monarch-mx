# 🚀 Guía Rápida - Monarch Mx

## Lo primero: Tu número de WhatsApp

Abre `script.js` y busca esta línea:

```javascript
const WHATSAPP_NUMBER = '5215559876543';
```

**Cámbialo a tu número.** Por ejemplo:

```javascript
const WHATSAPP_NUMBER = '5219876543210';  // Tu número sin +52 al inicio
```

Guarda el archivo. ¡Listo! Ahora todos los botones de WhatsApp funcionarán.

---

## Segunda cosa: Las imágenes

Por defecto, el sitio usa imágenes placeholder. Para agregar las tuyas:

1. Pon las imágenes en: `assets/images/`
2. Abre `script.js`
3. Busca el array `products`
4. En cada producto, cambia:
   ```javascript
   imagen: 'https://via.placeholder.com/400x400?text=AF1+Premium',
   ```
   Por:
   ```javascript
   imagen: './assets/images/tu-imagen.jpg',
   ```

---

## Tercero: Cambiar tu información

### Logo y favicon
1. Guarda tu logo en: `assets/images/logo.png`
2. Guarda tu favicon en: `assets/images/favicon.png`

### Redes y contacto
En `index.html`, busca el footer y actualiza:
- Tu número de WhatsApp
- Tu email
- Tu ubicación (si lo deseas)

### Colores
En `style.css`, busca `:root` y cambia:
```css
--color-bg: #F4F4F4;        /* Cambia aquí */
--color-dark: #1C1C1C;      /* O aquí */
--color-silver: #A0A0A0;    /* Etc... */
```

---

## Cuarto: Agregar más productos

En `script.js`, busca el array `products` y añade:

```javascript
{
    id: 13,
    nombre: 'Tu Producto',
    marca: 'Marca',
    categoria: 'Sneakers',  // O la categoría que quieras
    precio: 1990,
    descripcion: 'Descripción breve',
    imagen: './assets/images/imagen.jpg',
    estado: 'nuevo',
    destacado: true,        // true para mostrar en "Destacados"
    stock: 5
}
```

---

## Quinto: Publicar en línea

### Opción A: GitHub Pages (GRATIS)

1. Ve a https://github.com
2. Crea una cuenta si no tienes
3. Crea un nuevo repositorio llamado `monarch-mx`
4. En tu computadora:
   ```bash
   cd monarch-mx
   git init
   git add .
   git commit -m "Primera versión"
   git remote add origin https://github.com/TU_USUARIO/monarch-mx.git
   git branch -M main
   git push -u origin main
   ```
5. En GitHub:
   - Settings → Pages
   - Source: `main` branch
   - Espera 5 minutos ✅

Tu sitio estará en: `https://tu-usuario.github.io/monarch-mx`

### Opción B: Hosting pagado

Sube todos los archivos con FTP a tu proveedor de hosting.

---

## Sexto: Personalizar el SEO

En `index.html`, busca las etiquetas meta:

```html
<meta name="description" content="Cambiar este texto">
<meta name="keywords" content="cambiar, estas, palabras">
```

---

## Comandos útiles

**Ver el sitio localmente:**
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

Luego abre: http://localhost:8000

**Actualizar en GitHub:**
```bash
git add .
git commit -m "Mi cambio"
git push
```

---

## Preguntas Frecuentes

**¿Por qué no aparecen las imágenes?**
- Verifica que estén en `assets/images/`
- Los nombres deben coincidir exactamente

**¿El WhatsApp no abre?**
- Asegúrate de que el número sea correcto
- Prueba con tu número personal primero

**¿Cómo cambio el texto del sitio?**
- Abre `index.html` con un editor de texto (VSCode, Sublime, etc.)
- Busca y reemplaza el texto

**¿Necesito HTML/CSS/JavaScript avanzado?**
- No. Usa find & replace para cambiar lo que necesites

**¿Es gratis publicar en GitHub Pages?**
- Sí. Completamente gratuito con HTTPS incluido

---

## Resumen rápido de archivos

| Archivo | Para cambiar |
|---------|-------------|
| `script.js` | Número WhatsApp, productos, lógica |
| `style.css` | Colores, tamaños, estilos |
| `index.html` | Textos, secciones, estructura |
| `productos.json` | Datos de productos (alternativa) |
| `assets/images/` | Todas tus imágenes |

---

## ¡Necesitas ayuda?

1. Lee el README.md completo
2. Busca en Google tu problema específico
3. Ve a https://github.com y abre un "issue"

---

**¡Tu sitio premium está listo! Ahora a vender.** 🚀

