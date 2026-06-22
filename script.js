// ════════════════════════════════════════════════════════════════
// MONARCH MX - GITHUB PAGES VERSION
// ════════════════════════════════════════════════════════════════

const WHATSAPP_NUMBER = '5212225364045';

// Detectar ruta base (para funcionar en GitHub Pages)
const BASE_PATH = '/monarch-mx';

// ════════════════════════════════════════════════════════════════
// CATÁLOGO DE PRODUCTOS - 101 MODELOS
// ════════════════════════════════════════════════════════════════

const products = [
    { id: 1, nombre: 'Cross Body Steve y Coach', marca: 'Coach', categoria: 'Bolsas', precio: 390, imagenes: [`${BASE_PATH}/images/Cross-Body-Steve-Coach-1.jpg`], destacado: false },
    { id: 2, nombre: 'TN Camaleón', marca: 'Nike', categoria: 'Sneakers', precio: 1150, imagenes: [`${BASE_PATH}/images/TN-Camaleon-1.jpg`, `${BASE_PATH}/images/TN-Camaleon-2.jpg`], destacado: true },
    { id: 3, nombre: 'AF1', marca: 'Nike', categoria: 'Sneakers', precio: 850, imagenes: [`${BASE_PATH}/images/AF1-1.jpg`, `${BASE_PATH}/images/AF1-2.jpg`, `${BASE_PATH}/images/AF1-3.jpg`, `${BASE_PATH}/images/AF1-4.jpg`], destacado: false },
    { id: 4, nombre: 'NB Negro Rosa', marca: 'New Balance', categoria: 'Sneakers', precio: 650, imagenes: [`${BASE_PATH}/images/NB-Negro-Rosa-1.jpg`, `${BASE_PATH}/images/NB-Negro-Rosa-2.jpg`], destacado: false },
    { id: 5, nombre: 'NB 990 Menta', marca: 'New Balance', categoria: 'Sneakers', precio: 650, imagenes: [`${BASE_PATH}/images/NB-990-Menta-1.jpg`, `${BASE_PATH}/images/NB-990-Menta-2.jpg`, `${BASE_PATH}/images/NB-990-Menta-3.jpg`, `${BASE_PATH}/images/NB-990-Menta-4.jpg`, `${BASE_PATH}/images/NB-990-Menta-5.jpg`, `${BASE_PATH}/images/NB-990-Menta-6.jpg`], destacado: false },
    { id: 6, nombre: 'Mid 002', marca: 'Jordan', categoria: 'Sneakers', precio: 950, imagenes: [`${BASE_PATH}/images/Mid-002-1.jpg`, `${BASE_PATH}/images/Mid-002-2.jpg`, `${BASE_PATH}/images/Mid-002-3.jpg`, `${BASE_PATH}/images/Mid-002-4.jpg`], destacado: false },
    { id: 7, nombre: '720 Tortuga', marca: 'Nike', categoria: 'Sneakers', precio: 850, imagenes: [`${BASE_PATH}/images/720-Tortuga-1.jpg`, `${BASE_PATH}/images/720-Tortuga-2.jpg`, `${BASE_PATH}/images/720-Tortuga-3.jpg`], destacado: false },
    { id: 8, nombre: 'Nocta Negro', marca: 'Nike', categoria: 'Sneakers', precio: 790, imagenes: [`${BASE_PATH}/images/Nocta-Negro-1.jpg`, `${BASE_PATH}/images/Nocta-Negro-2.jpg`, `${BASE_PATH}/images/Nocta-Negro-3.jpg`], destacado: true },
    { id: 9, nombre: 'Nocta Blanco', marca: 'Nike', categoria: 'Sneakers', precio: 790, imagenes: [`${BASE_PATH}/images/Nocta-Blanco-1.jpg`, `${BASE_PATH}/images/Nocta-Blanco-2.jpg`, `${BASE_PATH}/images/Nocta-Blanco-3.jpg`], destacado: false },
    { id: 10, nombre: 'NB 9060 Chocolate', marca: 'New Balance', categoria: 'Sneakers', precio: 850, imagenes: [`${BASE_PATH}/images/NB-9060-Chocolate-1.jpg`], destacado: false },
    { id: 11, nombre: 'Bolsa Lacoste', marca: 'Lacoste', categoria: 'Bolsas', precio: 750, imagenes: [`${BASE_PATH}/images/Bolsa-Lacoste-1.jpg`], destacado: false },
    { id: 12, nombre: 'Maletas Alo', marca: 'Alo', categoria: 'Accesorios', precio: 590, imagenes: [`${BASE_PATH}/images/Maletas-Alo-1.jpg`], destacado: false },
    { id: 13, nombre: 'Cross Body Guess', marca: 'Guess', categoria: 'Bolsas', precio: 590, imagenes: [`${BASE_PATH}/images/Cross-Body-Guess-1.jpg`], destacado: false },
    { id: 14, nombre: 'Cross Body Guess 3 Diseños', marca: 'Guess', categoria: 'Bolsas', precio: 750, imagenes: [`${BASE_PATH}/images/Cross-Body-Guess-3Diseños-1.jpg`, `${BASE_PATH}/images/Cross-Body-Guess-3Diseños-2.jpg`], destacado: false },
    { id: 15, nombre: 'Sudaderas Essentials', marca: 'Fear of God', categoria: 'Sudaderas', precio: 790, imagenes: [`${BASE_PATH}/images/Sudaderas-Essentials-1.jpg`], destacado: false },
    { id: 16, nombre: 'Mochilas Jordan', marca: 'Jordan', categoria: 'Bolsas', precio: 690, imagenes: [`${BASE_PATH}/images/Mochilas-Jordan-1.jpg`], destacado: false },
    { id: 17, nombre: 'Crocs Rayo McQueen', marca: 'Crocs', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/Crocs-Rayo-McQueen-1.jpg`], destacado: false },
    { id: 18, nombre: 'Crocs Snoopy', marca: 'Crocs', categoria: 'Sneakers', precio: 650, imagenes: [`${BASE_PATH}/images/Crocs-Snoopy-1.jpg`], destacado: false },
    { id: 19, nombre: 'Suelita Roja', marca: 'Nike', categoria: 'Sneakers', precio: 950, imagenes: [`${BASE_PATH}/images/Suelita-Roja-1.jpg`, `${BASE_PATH}/images/Suelita-Roja-2.jpg`, `${BASE_PATH}/images/Suelita-Roja-3.jpg`], destacado: false },
    { id: 20, nombre: 'Lou Bota', marca: 'Louis Vuitton', categoria: 'Botas', precio: 990, imagenes: [`${BASE_PATH}/images/Lou-Bota-1.jpg`, `${BASE_PATH}/images/Lou-Bota-2.jpg`, `${BASE_PATH}/images/Lou-Bota-3.jpg`], destacado: false },
    { id: 21, nombre: 'NB 9060 Black White', marca: 'New Balance', categoria: 'Sneakers', precio: 850, imagenes: [`${BASE_PATH}/images/NB-9060-Black-White-1.jpg`, `${BASE_PATH}/images/NB-9060-Black-White-2.jpg`, `${BASE_PATH}/images/NB-9060-Black-White-3.jpg`], destacado: false },
    { id: 22, nombre: 'Super Star Black', marca: 'Adidas', categoria: 'Sneakers', precio: 790, imagenes: [`${BASE_PATH}/images/Super-Star-Black-1.jpg`, `${BASE_PATH}/images/Super-Star-Black-2.jpg`, `${BASE_PATH}/images/Super-Star-Black-3.jpg`, `${BASE_PATH}/images/Super-Star-Black-4.jpg`], destacado: false },
    { id: 23, nombre: 'NB 9060 Pétalo Rosa', marca: 'New Balance', categoria: 'Sneakers', precio: 850, imagenes: [`${BASE_PATH}/images/NB-9060-Petalo-Rosa-1.jpg`, `${BASE_PATH}/images/NB-9060-Petalo-Rosa-2.jpg`, `${BASE_PATH}/images/NB-9060-Petalo-Rosa-3.jpg`, `${BASE_PATH}/images/NB-9060-Petalo-Rosa-4.jpg`], destacado: false },
    { id: 24, nombre: 'Plataforma P Blanca Total', marca: 'Puma', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/Plataforma-P-Blanca-Total-1.jpg`, `${BASE_PATH}/images/Plataforma-P-Blanca-Total-2.jpg`, `${BASE_PATH}/images/Plataforma-P-Blanca-Total-3.jpg`], destacado: false },
    { id: 25, nombre: 'Plataforma P Blanca Negra', marca: 'Puma', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/Plataforma-P-Blanca-Negra-1.jpg`, `${BASE_PATH}/images/Plataforma-P-Blanca-Negra-2.jpg`, `${BASE_PATH}/images/Plataforma-P-Blanca-Negra-3.jpg`], destacado: false },
    { id: 26, nombre: 'AF1 Con Llavero', marca: 'Nike', categoria: 'Sneakers', precio: 890, imagenes: [`${BASE_PATH}/images/AF1-Con-Llavero-1.jpg`, `${BASE_PATH}/images/AF1-Con-Llavero-2.jpg`], destacado: false },
    { id: 27, nombre: 'Metcon Latte Vino', marca: 'Nike', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/Metcon-Latte-Vino-1.jpg`, `${BASE_PATH}/images/Metcon-Latte-Vino-2.jpg`], destacado: false },
    { id: 28, nombre: 'Jane Animal Print', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/Jane-Animal-Print-1.jpg`, `${BASE_PATH}/images/Jane-Animal-Print-2.jpg`], destacado: false },
    { id: 29, nombre: 'On C Latte Café', marca: 'On', categoria: 'Sneakers', precio: 890, imagenes: [`${BASE_PATH}/images/On-C-Latte-Cafe-1.jpg`, `${BASE_PATH}/images/On-C-Latte-Cafe-2.jpg`], destacado: false },
    { id: 30, nombre: 'On C Negro', marca: 'On', categoria: 'Sneakers', precio: 890, imagenes: [`${BASE_PATH}/images/On-C-Negro-1.jpg`, `${BASE_PATH}/images/On-C-Negro-2.jpg`, `${BASE_PATH}/images/On-C-Negro-3.jpg`, `${BASE_PATH}/images/On-C-Negro-4.jpg`], destacado: false },
    { id: 31, nombre: 'Dumbo', marca: 'Disney', categoria: 'Sneakers', precio: 790, imagenes: [`${BASE_PATH}/images/Dumbo-1.jpg`, `${BASE_PATH}/images/Dumbo-2.jpg`, `${BASE_PATH}/images/Dumbo-3.jpg`], destacado: false },
    { id: 32, nombre: 'XL Suede', marca: 'Puma', categoria: 'Sneakers', precio: 650, imagenes: [`${BASE_PATH}/images/XL-Suede-1.jpg`, `${BASE_PATH}/images/XL-Suede-2.jpg`, `${BASE_PATH}/images/XL-Suede-3.jpg`], destacado: false },
    { id: 33, nombre: '720 Sport', marca: 'Nike', categoria: 'Sneakers', precio: 990, imagenes: [`${BASE_PATH}/images/720-Sport-1.jpg`, `${BASE_PATH}/images/720-Sport-2.jpg`, `${BASE_PATH}/images/720-Sport-3.jpg`], destacado: true },
    { id: 34, nombre: 'N 97 Válvula', marca: 'Nike', categoria: 'Sneakers', precio: 950, imagenes: [`${BASE_PATH}/images/N-97-Valvula-1.jpg`, `${BASE_PATH}/images/N-97-Valvula-2.jpg`, `${BASE_PATH}/images/N-97-Valvula-3.jpg`], destacado: false },
    { id: 35, nombre: 'Jane Blanco Negro', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/Jane-Blanco-Negro-1.jpg`, `${BASE_PATH}/images/Jane-Blanco-Negro-2.jpg`, `${BASE_PATH}/images/Jane-Blanco-Negro-3.jpg`], destacado: false },
    { id: 36, nombre: 'Tokio Rojo', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/Tokio-Rojo-1.jpg`, `${BASE_PATH}/images/Tokio-Rojo-2.jpg`], destacado: false },
    { id: 37, nombre: 'Super Star Latte', marca: 'Adidas', categoria: 'Sneakers', precio: 790, imagenes: [`${BASE_PATH}/images/Super-Star-Latte-1.jpg`, `${BASE_PATH}/images/Super-Star-Latte-2.jpg`, `${BASE_PATH}/images/Super-Star-Latte-3.jpg`], destacado: false },
    { id: 38, nombre: 'ADIZERO', marca: 'Adidas', categoria: 'Sneakers', precio: 850, imagenes: [`${BASE_PATH}/images/ADIZERO-1.jpg`, `${BASE_PATH}/images/ADIZERO-2.jpg`, `${BASE_PATH}/images/ADIZERO-3.jpg`], destacado: false },
    { id: 39, nombre: 'Ad Ultra Ligero', marca: 'Adidas', categoria: 'Sneakers', precio: 850, imagenes: [`${BASE_PATH}/images/Ad-Ultra-Ligero-1.jpg`, `${BASE_PATH}/images/Ad-Ultra-Ligero-2.jpg`, `${BASE_PATH}/images/Ad-Ultra-Ligero-3.jpg`], destacado: false },
    { id: 40, nombre: 'On C', marca: 'On', categoria: 'Sneakers', precio: 950, imagenes: [`${BASE_PATH}/images/On-C-1.jpg`, `${BASE_PATH}/images/On-C-2.jpg`, `${BASE_PATH}/images/On-C-3.jpg`], destacado: false },
    { id: 41, nombre: 'NB 530 Plata', marca: 'New Balance', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/NB-530-Plata-1.jpg`, `${BASE_PATH}/images/NB-530-Plata-2.jpg`, `${BASE_PATH}/images/NB-530-Plata-3.jpg`], destacado: false },
    { id: 42, nombre: 'Playeras Mayoreo', marca: 'Varios', categoria: 'Playeras', precio: 890, imagenes: [`${BASE_PATH}/images/Playeras-Mayoreo-1.jpg`, `${BASE_PATH}/images/Playeras-Mayoreo-2.jpg`], destacado: false },
    { id: 43, nombre: 'Sudadera Alo', marca: 'Alo', categoria: 'Sudaderas', precio: 950, imagenes: [`${BASE_PATH}/images/Sudadera-Alo-1.jpg`], destacado: false },
    { id: 44, nombre: 'Conjuntos Escudería', marca: 'Varios', categoria: 'Conjuntos', precio: 899, imagenes: [`${BASE_PATH}/images/Conjuntos-Escuderia-1.jpg`], destacado: false },
    { id: 45, nombre: '720 Tortuga Black White', marca: 'Nike', categoria: 'Sneakers', precio: 990, imagenes: [`${BASE_PATH}/images/720-Tortuga-Black-White-1.jpg`, `${BASE_PATH}/images/720-Tortuga-Black-White-2.jpg`, `${BASE_PATH}/images/720-Tortuga-Black-White-3.jpg`], destacado: false },
    { id: 46, nombre: 'Chaqueta Beisbolera', marca: 'Varios', categoria: 'Chaquetas', precio: 850, imagenes: [`${BASE_PATH}/images/Chaqueta-Beisbolera-1.jpg`], destacado: false },
    { id: 47, nombre: 'Baby Milos', marca: 'Varios', categoria: 'Accesorios', precio: 590, imagenes: [`${BASE_PATH}/images/Baby-Milos-1.jpg`], destacado: false },
    { id: 48, nombre: 'Samba Rojo', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/Samba-Rojo-1.jpg`, `${BASE_PATH}/images/Samba-Rojo-2.jpg`, `${BASE_PATH}/images/Samba-Rojo-3.jpg`], destacado: false },
    { id: 49, nombre: '720 Tortuga Variante', marca: 'Nike', categoria: 'Sneakers', precio: 950, imagenes: [`${BASE_PATH}/images/720-Tortuga-Variante-1.jpg`, `${BASE_PATH}/images/720-Tortuga-Variante-2.jpg`, `${BASE_PATH}/images/720-Tortuga-Variante-3.jpg`], destacado: false },
    { id: 50, nombre: 'On C Negro Total', marca: 'On', categoria: 'Sneakers', precio: 950, imagenes: [`${BASE_PATH}/images/On-C-Negro-Total-1.jpg`, `${BASE_PATH}/images/On-C-Negro-Total-2.jpg`, `${BASE_PATH}/images/On-C-Negro-Total-3.jpg`], destacado: true },
    { id: 51, nombre: 'Terrex Blanco Rosa', marca: 'Adidas', categoria: 'Sneakers', precio: 950, imagenes: [`${BASE_PATH}/images/Terrex-Blanco-Rosa-1.jpg`, `${BASE_PATH}/images/Terrex-Blanco-Rosa-2.jpg`, `${BASE_PATH}/images/Terrex-Blanco-Rosa-3.jpg`], destacado: false },
    { id: 52, nombre: 'NB 9060 Negro Latte', marca: 'New Balance', categoria: 'Sneakers', precio: 950, imagenes: [`${BASE_PATH}/images/NB-9060-Negro-Latte-1.jpg`, `${BASE_PATH}/images/NB-9060-Negro-Latte-2.jpg`, `${BASE_PATH}/images/NB-9060-Negro-Latte-3.jpg`], destacado: false },
    { id: 53, nombre: 'NB 9060 Ginger Latte', marca: 'New Balance', categoria: 'Sneakers', precio: 950, imagenes: [`${BASE_PATH}/images/NB-9060-Ginger-Latte-1.jpg`, `${BASE_PATH}/images/NB-9060-Ginger-Latte-2.jpg`, `${BASE_PATH}/images/NB-9060-Ginger-Latte-3.jpg`], destacado: true },
    { id: 54, nombre: 'L3br0n', marca: 'Nike', categoria: 'Sneakers', precio: 990, imagenes: [`${BASE_PATH}/images/L3bron-1.jpg`, `${BASE_PATH}/images/L3bron-2.jpg`, `${BASE_PATH}/images/L3bron-3.jpg`, `${BASE_PATH}/images/L3bron-4.jpg`], destacado: true },
    { id: 55, nombre: 'Samba Marino', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/Samba-Marino-1.jpg`, `${BASE_PATH}/images/Samba-Marino-2.jpg`, `${BASE_PATH}/images/Samba-Marino-3.jpg`], destacado: false },
    { id: 56, nombre: 'AF1 Blanco', marca: 'Nike', categoria: 'Sneakers', precio: 890, imagenes: [`${BASE_PATH}/images/AF1-Blanco-1.jpg`, `${BASE_PATH}/images/AF1-Blanco-2.jpg`, `${BASE_PATH}/images/AF1-Blanco-3.jpg`], destacado: false },
    { id: 57, nombre: 'D Blanco Plata', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/D-Blanco-Plata-1.jpg`, `${BASE_PATH}/images/D-Blanco-Plata-2.jpg`, `${BASE_PATH}/images/D-Blanco-Plata-3.jpg`], destacado: false },
    { id: 58, nombre: 'Neo', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/Neo-1.jpg`, `${BASE_PATH}/images/Neo-2.jpg`, `${BASE_PATH}/images/Neo-3.jpg`], destacado: false },
    { id: 59, nombre: 'D Blanco Cielo', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/D-Blanco-Cielo-1.jpg`, `${BASE_PATH}/images/D-Blanco-Cielo-2.jpg`, `${BASE_PATH}/images/D-Blanco-Cielo-3.jpg`], destacado: false },
    { id: 60, nombre: 'Metcon Latte Vino Esp', marca: 'Nike', categoria: 'Sneakers', precio: 750, imagenes: [`${BASE_PATH}/images/Metcon-Latte-Vino-Esp-1.jpg`, `${BASE_PATH}/images/Metcon-Latte-Vino-Esp-2.jpg`, `${BASE_PATH}/images/Metcon-Latte-Vino-Esp-3.jpg`], destacado: false },
    { id: 61, nombre: 'P Ligero Negro Total', marca: 'Puma', categoria: 'Sneakers', precio: 590, imagenes: [`${BASE_PATH}/images/P-Ligero-Negro-Total-1.jpg`, `${BASE_PATH}/images/P-Ligero-Negro-Total-2.jpg`, `${BASE_PATH}/images/P-Ligero-Negro-Total-3.jpg`], destacado: false },
    { id: 62, nombre: 'Cortez Blanco', marca: 'Nike', categoria: 'Sneakers', precio: 590, imagenes: [`${BASE_PATH}/images/Cortez-Blanco-1.jpg`, `${BASE_PATH}/images/Cortez-Blanco-2.jpg`], destacado: false },
    { id: 63, nombre: 'R 1 Space Jam', marca: 'Jordan', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/R-1-Space-Jam-1.jpg`, `${BASE_PATH}/images/R-1-Space-Jam-2.jpg`, `${BASE_PATH}/images/R-1-Space-Jam-3.jpg`], destacado: false },
    { id: 64, nombre: 'Samba Brillos', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/Samba-Brillos-1.jpg`, `${BASE_PATH}/images/Samba-Brillos-2.jpg`, `${BASE_PATH}/images/Samba-Brillos-3.jpg`, `${BASE_PATH}/images/Samba-Brillos-4.jpg`], destacado: false },
    { id: 65, nombre: 'NB 990 Blanco Plata', marca: 'New Balance', categoria: 'Sneakers', precio: 590, imagenes: [`${BASE_PATH}/images/NB-990-Blanco-Plata-1.jpg`, `${BASE_PATH}/images/NB-990-Blanco-Plata-2.jpg`, `${BASE_PATH}/images/NB-990-Blanco-Plata-3.jpg`], destacado: false },
    { id: 66, nombre: 'Mantequilla', marca: 'Nike', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/Mantequilla-1.jpg`, `${BASE_PATH}/images/Mantequilla-2.jpg`, `${BASE_PATH}/images/Mantequilla-3.jpg`], destacado: false },
    { id: 67, nombre: 'NB 530 Blanco Plata', marca: 'New Balance', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/NB-530-Blanco-Plata-1.jpg`, `${BASE_PATH}/images/NB-530-Blanco-Plata-2.jpg`, `${BASE_PATH}/images/NB-530-Blanco-Plata-3.jpg`], destacado: false },
    { id: 68, nombre: 'Blazer Choclo', marca: 'Nike', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/Blazer-Choclo-1.jpg`, `${BASE_PATH}/images/Blazer-Choclo-2.jpg`, `${BASE_PATH}/images/Blazer-Choclo-3.jpg`, `${BASE_PATH}/images/Blazer-Choclo-4.jpg`, `${BASE_PATH}/images/Blazer-Choclo-5.jpg`, `${BASE_PATH}/images/Blazer-Choclo-6.jpg`], destacado: false },
    { id: 69, nombre: 'Plataforma Blanca', marca: 'Puma', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/Plataforma-Blanca-1.jpg`, `${BASE_PATH}/images/Plataforma-Blanca-2.jpg`, `${BASE_PATH}/images/Plataforma-Blanca-3.jpg`], destacado: false },
    { id: 70, nombre: 'Super Star Latte Esp', marca: 'Adidas', categoria: 'Sneakers', precio: 790, imagenes: [`${BASE_PATH}/images/Super-Star-Latte-Esp-1.jpg`, `${BASE_PATH}/images/Super-Star-Latte-Esp-2.jpg`], destacado: false },
    { id: 71, nombre: 'T 90 Negro', marca: 'Nike', categoria: 'Sneakers', precio: 790, imagenes: [`${BASE_PATH}/images/T-90-Negro-1.jpg`, `${BASE_PATH}/images/T-90-Negro-2.jpg`, `${BASE_PATH}/images/T-90-Negro-3.jpg`], destacado: false },
    { id: 72, nombre: 'Samba Latte Negro', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/Samba-Latte-Negro-1.jpg`, `${BASE_PATH}/images/Samba-Latte-Negro-2.jpg`, `${BASE_PATH}/images/Samba-Latte-Negro-3.jpg`], destacado: false },
    { id: 73, nombre: 'Ad Ultra Ligero Blanco Tornasol', marca: 'Adidas', categoria: 'Sneakers', precio: 850, imagenes: [`${BASE_PATH}/images/Ad-Ultra-Ligero-Blanco-Tornasol-1.jpg`, `${BASE_PATH}/images/Ad-Ultra-Ligero-Blanco-Tornasol-2.jpg`, `${BASE_PATH}/images/Ad-Ultra-Ligero-Blanco-Tornasol-3.jpg`], destacado: false },
    { id: 74, nombre: 'Sam Brillos', marca: 'Adidas', categoria: 'Sneakers', precio: 850, imagenes: [`${BASE_PATH}/images/Sam-Brillos-1.jpg`, `${BASE_PATH}/images/Sam-Brillos-2.jpg`, `${BASE_PATH}/images/Sam-Brillos-3.jpg`, `${BASE_PATH}/images/Sam-Brillos-4.jpg`], destacado: false },
    { id: 75, nombre: 'Sam Plata', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/Sam-Plata-1.jpg`, `${BASE_PATH}/images/Sam-Plata-2.jpg`, `${BASE_PATH}/images/Sam-Plata-3.jpg`, `${BASE_PATH}/images/Sam-Plata-4.jpg`], destacado: false },
    { id: 76, nombre: 'Sam Rojo', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/Sam-Rojo-1.jpg`, `${BASE_PATH}/images/Sam-Rojo-2.jpg`, `${BASE_PATH}/images/Sam-Rojo-3.jpg`], destacado: false },
    { id: 77, nombre: 'NB 9060 Latte Oro', marca: 'New Balance', categoria: 'Sneakers', precio: 850, imagenes: [`${BASE_PATH}/images/NB-9060-Latte-Oro-1.jpg`, `${BASE_PATH}/images/NB-9060-Latte-Oro-2.jpg`, `${BASE_PATH}/images/NB-9060-Latte-Oro-3.jpg`], destacado: false },
    { id: 78, nombre: 'Tortuga Negra Blanca', marca: 'Nike', categoria: 'Sneakers', precio: 990, imagenes: [`${BASE_PATH}/images/Tortuga-Negra-Blanca-1.jpg`, `${BASE_PATH}/images/Tortuga-Negra-Blanca-2.jpg`, `${BASE_PATH}/images/Tortuga-Negra-Blanca-3.jpg`], destacado: false },
    { id: 79, nombre: 'Mind 001', marca: 'Nike', categoria: 'Sneakers', precio: 950, imagenes: [`${BASE_PATH}/images/Mind-001-1.jpg`, `${BASE_PATH}/images/Mind-001-2.jpg`, `${BASE_PATH}/images/Mind-001-3.jpg`], destacado: false },
    { id: 80, nombre: 'Línea Premium', marca: 'Varios', categoria: 'Sneakers', precio: 950, imagenes: [`${BASE_PATH}/images/Linea-Premium-1.jpg`, `${BASE_PATH}/images/Linea-Premium-2.jpg`, `${BASE_PATH}/images/Linea-Premium-3.jpg`], destacado: false },
    { id: 81, nombre: 'Alexander Swaro', marca: 'Alexander McQueen', categoria: 'Sneakers', precio: 1250, imagenes: [`${BASE_PATH}/images/Alexander-Swaro-1.jpg`, `${BASE_PATH}/images/Alexander-Swaro-2.jpg`, `${BASE_PATH}/images/Alexander-Swaro-3.jpg`], destacado: true },
    { id: 82, nombre: 'DG Portofino', marca: 'Dolce & Gabbana', categoria: 'Sneakers', precio: 950, imagenes: [`${BASE_PATH}/images/DG-Portofino-1.jpg`, `${BASE_PATH}/images/DG-Portofino-2.jpg`, `${BASE_PATH}/images/DG-Portofino-3.jpg`, `${BASE_PATH}/images/DG-Portofino-4.jpg`], destacado: false },
    { id: 83, nombre: 'Travis Gris', marca: 'Travis Scott', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/Travis-Gris-1.jpg`, `${BASE_PATH}/images/Travis-Gris-2.jpg`, `${BASE_PATH}/images/Travis-Gris-3.jpg`], destacado: false },
    { id: 84, nombre: 'Super Star Black Var', marca: 'Adidas', categoria: 'Sneakers', precio: 790, imagenes: [`${BASE_PATH}/images/Super-Star-Black-Var-1.jpg`, `${BASE_PATH}/images/Super-Star-Black-Var-2.jpg`, `${BASE_PATH}/images/Super-Star-Black-Var-3.jpg`], destacado: false },
    { id: 85, nombre: '6 Aros', marca: 'Nike', categoria: 'Sneakers', precio: 850, imagenes: [`${BASE_PATH}/images/6-Aros-1.jpg`, `${BASE_PATH}/images/6-Aros-2.jpg`, `${BASE_PATH}/images/6-Aros-3.jpg`, `${BASE_PATH}/images/6-Aros-4.jpg`], destacado: false },
    { id: 86, nombre: 'D Blanco Negro', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/D-Blanco-Negro-1.jpg`, `${BASE_PATH}/images/D-Blanco-Negro-2.jpg`, `${BASE_PATH}/images/D-Blanco-Negro-3.jpg`], destacado: false },
    { id: 87, nombre: 'NB Maquillaje', marca: 'New Balance', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/NB-Maquillaje-1.jpg`, `${BASE_PATH}/images/NB-Maquillaje-2.jpg`, `${BASE_PATH}/images/NB-Maquillaje-3.jpg`], destacado: false },
    { id: 88, nombre: 'Sam Portugal', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/Sam-Portugal-1.jpg`, `${BASE_PATH}/images/Sam-Portugal-2.jpg`, `${BASE_PATH}/images/Sam-Portugal-3.jpg`], destacado: false },
    { id: 89, nombre: 'Mind 001 Vino', marca: 'Nike', categoria: 'Sneakers', precio: 1100, imagenes: [`${BASE_PATH}/images/Mind-001-Vino-1.jpg`, `${BASE_PATH}/images/Mind-001-Vino-2.jpg`, `${BASE_PATH}/images/Mind-001-Vino-3.jpg`, `${BASE_PATH}/images/Mind-001-Vino-4.jpg`], destacado: true },
    { id: 90, nombre: 'D T Black', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/D-T-Black-1.jpg`, `${BASE_PATH}/images/D-T-Black-2.jpg`, `${BASE_PATH}/images/D-T-Black-3.jpg`], destacado: false },
    { id: 91, nombre: 'N 97 Negro Rey', marca: 'Nike', categoria: 'Sneakers', precio: 950, imagenes: [`${BASE_PATH}/images/N-97-Negro-Rey-1.jpg`, `${BASE_PATH}/images/N-97-Negro-Rey-2.jpg`, `${BASE_PATH}/images/N-97-Negro-Rey-3.jpg`], destacado: false },
    { id: 92, nombre: 'Metcon Maquillaje', marca: 'Nike', categoria: 'Sneakers', precio: 750, imagenes: [`${BASE_PATH}/images/Metcon-Maquillaje-1.jpg`, `${BASE_PATH}/images/Metcon-Maquillaje-2.jpg`, `${BASE_PATH}/images/Metcon-Maquillaje-3.jpg`], destacado: false },
    { id: 93, nombre: 'AF1 Blanco Var', marca: 'Nike', categoria: 'Sneakers', precio: 850, imagenes: [`${BASE_PATH}/images/AF1-Blanco-Var-1.jpg`, `${BASE_PATH}/images/AF1-Blanco-Var-2.jpg`, `${BASE_PATH}/images/AF1-Blanco-Var-3.jpg`], destacado: false },
    { id: 94, nombre: 'Pipen Low Blanca Azul', marca: 'Nike', categoria: 'Sneakers', precio: 950, imagenes: [`${BASE_PATH}/images/Pipen-Low-Blanca-Azul-1.jpg`, `${BASE_PATH}/images/Pipen-Low-Blanca-Azul-2.jpg`, `${BASE_PATH}/images/Pipen-Low-Blanca-Azul-3.jpg`], destacado: false },
    { id: 95, nombre: 'Samba Pitón', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/Samba-Piton-1.jpg`, `${BASE_PATH}/images/Samba-Piton-2.jpg`, `${BASE_PATH}/images/Samba-Piton-3.jpg`], destacado: false },
    { id: 96, nombre: 'Agua Bendita', marca: 'Nike', categoria: 'Sneakers', precio: 950, imagenes: [`${BASE_PATH}/images/Agua-Bendita-1.jpg`, `${BASE_PATH}/images/Agua-Bendita-2.jpg`, `${BASE_PATH}/images/Agua-Bendita-3.jpg`], destacado: false },
    { id: 97, nombre: 'DC Negro Gris Rojo', marca: 'DC', categoria: 'Sneakers', precio: 750, imagenes: [`${BASE_PATH}/images/DC-Negro-Gris-Rojo-1.jpg`, `${BASE_PATH}/images/DC-Negro-Gris-Rojo-2.jpg`, `${BASE_PATH}/images/DC-Negro-Gris-Rojo-3.jpg`], destacado: false },
    { id: 98, nombre: '3 Max', marca: 'Nike', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/3-Max-1.jpg`, `${BASE_PATH}/images/3-Max-2.jpg`, `${BASE_PATH}/images/3-Max-3.jpg`], destacado: false },
    { id: 99, nombre: 'XL Suede Var', marca: 'Puma', categoria: 'Sneakers', precio: 650, imagenes: [`${BASE_PATH}/images/XL-Suede-Var-1.jpg`, `${BASE_PATH}/images/XL-Suede-Var-2.jpg`, `${BASE_PATH}/images/XL-Suede-Var-3.jpg`], destacado: false },
    { id: 100, nombre: 'On C Blanco', marca: 'On', categoria: 'Sneakers', precio: 750, imagenes: [`${BASE_PATH}/images/On-C-Blanco-1.jpg`, `${BASE_PATH}/images/On-C-Blanco-2.jpg`, `${BASE_PATH}/images/On-C-Blanco-3.jpg`], destacado: false },
    { id: 101, nombre: 'Fragment', marca: 'Fragment Design', categoria: 'Sneakers', precio: 690, imagenes: [`${BASE_PATH}/images/Fragment-1.jpg`], destacado: false }
];

// ════════════════════════════════════════════════════════════════
// FUNCIONES
// ════════════════════════════════════════════════════════════════

function displayProducts(productsToShow = products) {
    const grid = document.getElementById('productos-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    productsToShow.forEach(product => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        card.innerHTML = `
            <div class="producto-image-container">
                <img src="${product.imagenes[0]}" alt="${product.nombre}" class="producto-image" onerror="this.src='${BASE_PATH}/images/placeholder.jpg'">
                ${product.destacado ? '<span class="badge-destacado">⭐ Destacado</span>' : ''}
            </div>
            <div class="producto-info">
                <h3>${product.nombre}</h3>
                <p class="marca">${product.marca}</p>
                <p class="precio">$${product.precio.toLocaleString()}</p>
                <button onclick="enviarWhatsApp(${product.id})" class="btn-whatsapp">
                    💬 Más Información
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function searchProducts(query) {
    if (!query.trim()) {
        displayProducts(products);
        return;
    }
    
    const results = products.filter(p =>
        p.nombre.toLowerCase().includes(query.toLowerCase()) ||
        p.marca.toLowerCase().includes(query.toLowerCase())
    );
    displayProducts(results);
}

function filterByCategory(category) {
    if (category === 'todos') {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.categoria === category);
        displayProducts(filtered);
    }
}

function enviarWhatsApp(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const message = `Hola, me interesa el modelo: *${product.nombre}* de $${product.precio}. ¿Puedes pasarme más información?`;
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, '_blank');
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    console.log(`✅ Monarch MX cargado - ${products.length} productos disponibles`);
});
