// ════════════════════════════════════════════════════════════════
// MONARCH MX - CATÁLOGO COMPLETO DE PRODUCTOS
// Generado: 22 Junio 2026
// Total: 130+ productos con imágenes y precios
// ════════════════════════════════════════════════════════════════

// Configuración WhatsApp
const WHATSAPP_NUMBER = '5212225364045';
const WHATSAPP_MESSAGE = 'Hola Monarch MX, me interesa un producto premium. ¿Puedes pasarme más información?';

// ════════════════════════════════════════════════════════════════
// CATÁLOGO DE PRODUCTOS - TODOS LOS ARTÍCULOS DEL MAPEO
// ════════════════════════════════════════════════════════════════

const products = [
    // 1. Cross Body Steve y Coach
    { id: 1, nombre: 'Cross Body Steve y Coach', marca: 'Coach', categoria: 'Bolsas', precio: 390, imagenes: ['./images/Cross-Body-Steve-Coach-1.jpg'], destacado: false, tallas: 'Único' },
    
    // 2. TN Camaleón
    { id: 2, nombre: 'TN Camaleón', marca: 'Nike', categoria: 'Sneakers', precio: 1150, imagenes: ['./images/TN-Camaleon-1.jpg', './images/TN-Camaleon-2.jpg'], destacado: true, tallas: '#5 al #8' },
    
    // 3. AF1
    { id: 3, nombre: 'AF1', marca: 'Nike', categoria: 'Sneakers', precio: 850, imagenes: ['./images/AF1-1.jpg', './images/AF1-2.jpg', './images/AF1-3.jpg', './images/AF1-4.jpg'], destacado: false, tallas: '#2 al #9' },
    
    // 4. NB Negro Rosa
    { id: 4, nombre: 'NB Negro Rosa', marca: 'New Balance', categoria: 'Sneakers', precio: 650, imagenes: ['./images/NB-Negro-Rosa-1.jpg', './images/NB-Negro-Rosa-2.jpg'], destacado: false, tallas: '#3 al #5' },
    
    // 5. NB 990 Menta
    { id: 5, nombre: 'NB 990 Menta', marca: 'New Balance', categoria: 'Sneakers', precio: 650, imagenes: ['./images/NB-990-Menta-1.jpg', './images/NB-990-Menta-2.jpg', './images/NB-990-Menta-3.jpg', './images/NB-990-Menta-4.jpg', './images/NB-990-Menta-5.jpg', './images/NB-990-Menta-6.jpg'], destacado: false, tallas: '#3 al #5 1/2' },
    
    // 6. Mid 002
    { id: 6, nombre: 'Mid 002', marca: 'Jordan', categoria: 'Sneakers', precio: 950, imagenes: ['./images/Mid-002-1.jpg', './images/Mid-002-2.jpg', './images/Mid-002-3.jpg', './images/Mid-002-4.jpg'], destacado: false, tallas: '#5 al #8' },
    
    // 7. 720 Tortuga
    { id: 7, nombre: '720 Tortuga', marca: 'Nike', categoria: 'Sneakers', precio: 850, imagenes: ['./images/720-Tortuga-1.jpg', './images/720-Tortuga-2.jpg', './images/720-Tortuga-3.jpg'], destacado: false, tallas: '#2 1/2 al #9' },
    
    // 8. Nocta Negro
    { id: 8, nombre: 'Nocta Negro', marca: 'Nike', categoria: 'Sneakers', precio: 790, imagenes: ['./images/Nocta-Negro-1.jpg', './images/Nocta-Negro-2.jpg', './images/Nocta-Negro-3.jpg'], destacado: true, tallas: '#5 al #8' },
    
    // 9. Nocta Blanco
    { id: 9, nombre: 'Nocta Blanco', marca: 'Nike', categoria: 'Sneakers', precio: 790, imagenes: ['./images/Nocta-Blanco-1.jpg', './images/Nocta-Blanco-2.jpg', './images/Nocta-Blanco-3.jpg'], destacado: false, tallas: '#5 al #8' },
    
    // 10. NB 9060 Chocolate
    { id: 10, nombre: 'NB 9060 Chocolate', marca: 'New Balance', categoria: 'Sneakers', precio: 850, imagenes: ['./images/NB-9060-Chocolate-1.jpg'], destacado: false, tallas: '#3 al #5' },
    
    // 11. Bolsa Lacoste
    { id: 11, nombre: 'Bolsa Lacoste', marca: 'Lacoste', categoria: 'Bolsas', precio: 750, imagenes: ['./images/Bolsa-Lacoste-1.jpg'], destacado: false, tallas: 'Única' },
    
    // 12. Maletas Alo
    { id: 12, nombre: 'Maletas Alo', marca: 'Alo', categoria: 'Accesorios', precio: 590, imagenes: ['./images/Maletas-Alo-1.jpg'], destacado: false, tallas: 'Única' },
    
    // 13. Cross Body Guess
    { id: 13, nombre: 'Cross Body Guess', marca: 'Guess', categoria: 'Bolsas', precio: 590, imagenes: ['./images/Cross-Body-Guess-1.jpg'], destacado: false, tallas: 'Única' },
    
    // 14. Cross Body Guess 3 Diseños
    { id: 14, nombre: 'Cross Body Guess 3 Diseños', marca: 'Guess', categoria: 'Bolsas', precio: 750, imagenes: ['./images/Cross-Body-Guess-3Diseños-1.jpg', './images/Cross-Body-Guess-3Diseños-2.jpg'], destacado: false, tallas: 'Única' },
    
    // 15. Sudaderas Essentials
    { id: 15, nombre: 'Sudaderas Essentials', marca: 'Fear of God', categoria: 'Sudaderas', precio: 790, imagenes: ['./images/Sudaderas-Essentials-1.jpg'], destacado: false, tallas: 'S-M-L-XL' },
    
    // 16. Mochilas Jordan
    { id: 16, nombre: 'Mochilas Jordan', marca: 'Jordan', categoria: 'Bolsas', precio: 690, imagenes: ['./images/Mochilas-Jordan-1.jpg'], destacado: false, tallas: 'Única' },
    
    // 17. Crocs Rayo McQueen
    { id: 17, nombre: 'Crocs Rayo McQueen', marca: 'Crocs', categoria: 'Sneakers', precio: 690, imagenes: ['./images/Crocs-Rayo-McQueen-1.jpg'], destacado: false, tallas: '#5/6 al #8/9' },
    
    // 18. Crocs Snoopy
    { id: 18, nombre: 'Crocs Snoopy', marca: 'Crocs', categoria: 'Sneakers', precio: 650, imagenes: ['./images/Crocs-Snoopy-1.jpg'], destacado: false, tallas: '#2/3 al #6/7' },
    
    // 19. Suelita Roja
    { id: 19, nombre: 'Suelita Roja', marca: 'Nike', categoria: 'Sneakers', precio: 950, imagenes: ['./images/Suelita-Roja-1.jpg', './images/Suelita-Roja-2.jpg', './images/Suelita-Roja-3.jpg'], destacado: false, tallas: '#6 1/2, #8, #8 1/2' },
    
    // 20. Lou Bota
    { id: 20, nombre: 'Lou Bota', marca: 'Louis Vuitton', categoria: 'Botas', precio: 990, imagenes: ['./images/Lou-Bota-1.jpg', './images/Lou-Bota-2.jpg', './images/Lou-Bota-3.jpg'], destacado: false, tallas: '#5 1/2' },
    
    // 21. NB 9060 Black White
    { id: 21, nombre: 'NB 9060 Black White', marca: 'New Balance', categoria: 'Sneakers', precio: 850, imagenes: ['./images/NB-9060-Black-White-1.jpg', './images/NB-9060-Black-White-2.jpg', './images/NB-9060-Black-White-3.jpg'], destacado: false, tallas: '#3 al #6' },
    
    // 22. Super Star Black
    { id: 22, nombre: 'Super Star Black', marca: 'Adidas', categoria: 'Sneakers', precio: 790, imagenes: ['./images/Super-Star-Black-1.jpg', './images/Super-Star-Black-2.jpg', './images/Super-Star-Black-3.jpg', './images/Super-Star-Black-4.jpg'], destacado: false, tallas: '#3 al #5' },
    
    // 23. NB 9060 Pétalo Rosa
    { id: 23, nombre: 'NB 9060 Pétalo Rosa', marca: 'New Balance', categoria: 'Sneakers', precio: 850, imagenes: ['./images/NB-9060-Petalo-Rosa-1.jpg', './images/NB-9060-Petalo-Rosa-2.jpg', './images/NB-9060-Petalo-Rosa-3.jpg', './images/NB-9060-Petalo-Rosa-4.jpg'], destacado: false, tallas: '#3 al #6' },
    
    // 24. Plataforma P Blanca Total
    { id: 24, nombre: 'Plataforma P Blanca Total', marca: 'Puma', categoria: 'Sneakers', precio: 690, imagenes: ['./images/Plataforma-P-Blanca-Total-1.jpg', './images/Plataforma-P-Blanca-Total-2.jpg', './images/Plataforma-P-Blanca-Total-3.jpg'], destacado: false, tallas: '#2 al #5' },
    
    // 25. Plataforma P Blanca Negra
    { id: 25, nombre: 'Plataforma P Blanca Negra', marca: 'Puma', categoria: 'Sneakers', precio: 690, imagenes: ['./images/Plataforma-P-Blanca-Negra-1.jpg', './images/Plataforma-P-Blanca-Negra-2.jpg', './images/Plataforma-P-Blanca-Negra-3.jpg'], destacado: false, tallas: '#2 al #5' },
    
    // 26. AF1 Con Llavero
    { id: 26, nombre: 'AF1 Con Llavero', marca: 'Nike', categoria: 'Sneakers', precio: 890, imagenes: ['./images/AF1-Con-Llavero-1.jpg', './images/AF1-Con-Llavero-2.jpg'], destacado: false, tallas: '#2 1/2 al #8' },
    
    // 27. Metcon Latte Vino
    { id: 27, nombre: 'Metcon Latte Vino', marca: 'Nike', categoria: 'Sneakers', precio: 690, imagenes: ['./images/Metcon-Latte-Vino-1.jpg', './images/Metcon-Latte-Vino-2.jpg'], destacado: false, tallas: '#3 al #6' },
    
    // 28. Jane Animal Print
    { id: 28, nombre: 'Jane Animal Print', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: ['./images/Jane-Animal-Print-1.jpg', './images/Jane-Animal-Print-2.jpg'], destacado: false, tallas: '#3 al #5' },
    
    // 29. On C Latte Café
    { id: 29, nombre: 'On C Latte Café', marca: 'On', categoria: 'Sneakers', precio: 890, imagenes: ['./images/On-C-Latte-Cafe-1.jpg', './images/On-C-Latte-Cafe-2.jpg'], destacado: false, tallas: '#5 al #8' },
    
    // 30. On C Negro
    { id: 30, nombre: 'On C Negro', marca: 'On', categoria: 'Sneakers', precio: 890, imagenes: ['./images/On-C-Negro-1.jpg', './images/On-C-Negro-2.jpg', './images/On-C-Negro-3.jpg', './images/On-C-Negro-4.jpg'], destacado: false, tallas: '#5 al #8' },
    
    // 31. Dumbo
    { id: 31, nombre: 'Dumbo', marca: 'Disney', categoria: 'Sneakers', precio: 790, imagenes: ['./images/Dumbo-1.jpg', './images/Dumbo-2.jpg', './images/Dumbo-3.jpg'], destacado: false, tallas: '#3 al #5' },
    
    // 32. XL Suede
    { id: 32, nombre: 'XL Suede', marca: 'Puma', categoria: 'Sneakers', precio: 650, imagenes: ['./images/XL-Suede-1.jpg', './images/XL-Suede-2.jpg', './images/XL-Suede-3.jpg'], destacado: false, tallas: '#2 al #8' },
    
    // 33. 720 Sport
    { id: 33, nombre: '720 Sport', marca: 'Nike', categoria: 'Sneakers', precio: 990, imagenes: ['./images/720-Sport-1.jpg', './images/720-Sport-2.jpg', './images/720-Sport-3.jpg'], destacado: true, tallas: '#2 1/2 al #8' },
    
    // 34. N 97 Válvula
    { id: 34, nombre: 'N 97 Válvula', marca: 'Nike', categoria: 'Sneakers', precio: 950, imagenes: ['./images/N-97-Valvula-1.jpg', './images/N-97-Valvula-2.jpg', './images/N-97-Valvula-3.jpg'], destacado: false, tallas: '#5 al #8' },
    
    // 35. Jane Blanco Negro
    { id: 35, nombre: 'Jane Blanco Negro', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: ['./images/Jane-Blanco-Negro-1.jpg', './images/Jane-Blanco-Negro-2.jpg', './images/Jane-Blanco-Negro-3.jpg'], destacado: false, tallas: '#3 al #5' },
    
    // 36. Tokio Rojo
    { id: 36, nombre: 'Tokio Rojo', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: ['./images/Tokio-Rojo-1.jpg', './images/Tokio-Rojo-2.jpg'], destacado: false, tallas: '#3 al #6' },
    
    // 37. Super Star Latte
    { id: 37, nombre: 'Super Star Latte', marca: 'Adidas', categoria: 'Sneakers', precio: 790, imagenes: ['./images/Super-Star-Latte-1.jpg', './images/Super-Star-Latte-2.jpg', './images/Super-Star-Latte-3.jpg'], destacado: false, tallas: '#3 al #5' },
    
    // 38. ADIZERO
    { id: 38, nombre: 'ADIZERO', marca: 'Adidas', categoria: 'Sneakers', precio: 850, imagenes: ['./images/ADIZERO-1.jpg', './images/ADIZERO-2.jpg', './images/ADIZERO-3.jpg'], destacado: false, tallas: '#5 al #8' },
    
    // 39. Ad Ultra Ligero
    { id: 39, nombre: 'Ad Ultra Ligero', marca: 'Adidas', categoria: 'Sneakers', precio: 850, imagenes: ['./images/Ad-Ultra-Ligero-1.jpg', './images/Ad-Ultra-Ligero-2.jpg', './images/Ad-Ultra-Ligero-3.jpg'], destacado: false, tallas: '#3 al #5 1/2' },
    
    // 40. On C
    { id: 40, nombre: 'On C', marca: 'On', categoria: 'Sneakers', precio: 950, imagenes: ['./images/On-C-1.jpg', './images/On-C-2.jpg', './images/On-C-3.jpg'], destacado: false, tallas: '#5 al #8' },
    
    // 41. NB 530 Plata
    { id: 41, nombre: 'NB 530 Plata', marca: 'New Balance', categoria: 'Sneakers', precio: 690, imagenes: ['./images/NB-530-Plata-1.jpg', './images/NB-530-Plata-2.jpg', './images/NB-530-Plata-3.jpg'], destacado: false, tallas: '#2 al #6' },
    
    // 42. Playeras Mayoreo
    { id: 42, nombre: 'Playeras Mayoreo', marca: 'Varios', categoria: 'Playeras', precio: 890, imagenes: ['./images/Playeras-Mayoreo-1.jpg', './images/Playeras-Mayoreo-2.jpg'], destacado: false, tallas: 'S-M-L-XL' },
    
    // 43. Sudadera Alo
    { id: 43, nombre: 'Sudadera Alo', marca: 'Alo', categoria: 'Sudaderas', precio: 950, imagenes: ['./images/Sudadera-Alo-1.jpg'], destacado: false, tallas: 'S-M-L-XL' },
    
    // 44. Conjuntos Escudería
    { id: 44, nombre: 'Conjuntos Escudería', marca: 'Varios', categoria: 'Conjuntos', precio: 899, imagenes: ['./images/Conjuntos-Escuderia-1.jpg'], destacado: false, tallas: 'Único' },
    
    // 45. 720 Tortuga Black White
    { id: 45, nombre: '720 Tortuga Black White', marca: 'Nike', categoria: 'Sneakers', precio: 990, imagenes: ['./images/720-Tortuga-Black-White-1.jpg', './images/720-Tortuga-Black-White-2.jpg', './images/720-Tortuga-Black-White-3.jpg'], destacado: false, tallas: '#5 al #8' },
    
    // 46. Chaqueta Beisbolera
    { id: 46, nombre: 'Chaqueta Beisbolera', marca: 'Varios', categoria: 'Chaquetas', precio: 850, imagenes: ['./images/Chaqueta-Beisbolera-1.jpg'], destacado: false, tallas: 'S-M-L-XL' },
    
    // 47. Baby Milos
    { id: 47, nombre: 'Baby Milos', marca: 'Varios', categoria: 'Accesorios', precio: 590, imagenes: ['./images/Baby-Milos-1.jpg'], destacado: false, tallas: 'Único' },
    
    // 48. Samba Rojo
    { id: 48, nombre: 'Samba Rojo', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: ['./images/Samba-Rojo-1.jpg', './images/Samba-Rojo-2.jpg', './images/Samba-Rojo-3.jpg'], destacado: false, tallas: '#3 al #5' },
    
    // 49. 720 Tortuga Variante
    { id: 49, nombre: '720 Tortuga Variante', marca: 'Nike', categoria: 'Sneakers', precio: 950, imagenes: ['./images/720-Tortuga-Variante-1.jpg', './images/720-Tortuga-Variante-2.jpg', './images/720-Tortuga-Variante-3.jpg'], destacado: false, tallas: '#5 al #9' },
    
    // 50. On C Negro Total
    { id: 50, nombre: 'On C Negro Total', marca: 'On', categoria: 'Sneakers', precio: 950, imagenes: ['./images/On-C-Negro-Total-1.jpg', './images/On-C-Negro-Total-2.jpg', './images/On-C-Negro-Total-3.jpg'], destacado: true, tallas: '#3 al #6' },
    
    // 51. Terrex Blanco Rosa
    { id: 51, nombre: 'Terrex Blanco Rosa', marca: 'Adidas', categoria: 'Sneakers', precio: 950, imagenes: ['./images/Terrex-Blanco-Rosa-1.jpg', './images/Terrex-Blanco-Rosa-2.jpg', './images/Terrex-Blanco-Rosa-3.jpg'], destacado: false, tallas: '#3 al #6' },
    
    // 52. NB 9060 Negro Latte
    { id: 52, nombre: 'NB 9060 Negro Latte', marca: 'New Balance', categoria: 'Sneakers', precio: 950, imagenes: ['./images/NB-9060-Negro-Latte-1.jpg', './images/NB-9060-Negro-Latte-2.jpg', './images/NB-9060-Negro-Latte-3.jpg'], destacado: false, tallas: '#3 al #6' },
    
    // 53. NB 9060 Ginger Latte
    { id: 53, nombre: 'NB 9060 Ginger Latte', marca: 'New Balance', categoria: 'Sneakers', precio: 950, imagenes: ['./images/NB-9060-Ginger-Latte-1.jpg', './images/NB-9060-Ginger-Latte-2.jpg', './images/NB-9060-Ginger-Latte-3.jpg'], destacado: true, tallas: '#3 al #6' },
    
    // 54. L3br0n
    { id: 54, nombre: 'L3br0n', marca: 'Nike', categoria: 'Sneakers', precio: 990, imagenes: ['./images/L3bron-1.jpg', './images/L3bron-2.jpg', './images/L3bron-3.jpg', './images/L3bron-4.jpg'], destacado: true, tallas: '#5 al #8' },
    
    // 55. Samba Marino
    { id: 55, nombre: 'Samba Marino', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: ['./images/Samba-Marino-1.jpg', './images/Samba-Marino-2.jpg', './images/Samba-Marino-3.jpg'], destacado: false, tallas: '#3 al #7' },
    
    // 56. AF1 Blanco
    { id: 56, nombre: 'AF1 Blanco', marca: 'Nike', categoria: 'Sneakers', precio: 890, imagenes: ['./images/AF1-Blanco-1.jpg', './images/AF1-Blanco-2.jpg', './images/AF1-Blanco-3.jpg'], destacado: false, tallas: '#2 1/2 al #8' },
    
    // 57. D Blanco Plata
    { id: 57, nombre: 'D Blanco Plata', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: ['./images/D-Blanco-Plata-1.jpg', './images/D-Blanco-Plata-2.jpg', './images/D-Blanco-Plata-3.jpg'], destacado: false, tallas: '#3 al #5' },
    
    // 58. Neo
    { id: 58, nombre: 'Neo', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: ['./images/Neo-1.jpg', './images/Neo-2.jpg', './images/Neo-3.jpg'], destacado: false, tallas: '#2, #3, #6' },
    
    // 59. D Blanco Cielo
    { id: 59, nombre: 'D Blanco Cielo', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: ['./images/D-Blanco-Cielo-1.jpg', './images/D-Blanco-Cielo-2.jpg', './images/D-Blanco-Cielo-3.jpg'], destacado: false, tallas: '#3 al #6' },
    
    // 60. Metcon Latte Vino Esp
    { id: 60, nombre: 'Metcon Latte Vino Esp', marca: 'Nike', categoria: 'Sneakers', precio: 750, imagenes: ['./images/Metcon-Latte-Vino-Esp-1.jpg', './images/Metcon-Latte-Vino-Esp-2.jpg', './images/Metcon-Latte-Vino-Esp-3.jpg'], destacado: false, tallas: '#5, #6' },
    
    // 61. P Ligero Negro Total
    { id: 61, nombre: 'P Ligero Negro Total', marca: 'Puma', categoria: 'Sneakers', precio: 590, imagenes: ['./images/P-Ligero-Negro-Total-1.jpg', './images/P-Ligero-Negro-Total-2.jpg', './images/P-Ligero-Negro-Total-3.jpg'], destacado: false, tallas: '#2 al #3 1/2' },
    
    // 62. Cortez Blanco
    { id: 62, nombre: 'Cortez Blanco', marca: 'Nike', categoria: 'Sneakers', precio: 590, imagenes: ['./images/Cortez-Blanco-1.jpg', './images/Cortez-Blanco-2.jpg'], destacado: false, tallas: '#5 1/2, #7 1/2' },
    
    // 63. R 1 Space Jam
    { id: 63, nombre: 'R 1 Space Jam', marca: 'Jordan', categoria: 'Sneakers', precio: 690, imagenes: ['./images/R-1-Space-Jam-1.jpg', './images/R-1-Space-Jam-2.jpg', './images/R-1-Space-Jam-3.jpg'], destacado: false, tallas: '#7, #7 1/2' },
    
    // 64. Samba Brillos
    { id: 64, nombre: 'Samba Brillos', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: ['./images/Samba-Brillos-1.jpg', './images/Samba-Brillos-2.jpg', './images/Samba-Brillos-3.jpg', './images/Samba-Brillos-4.jpg'], destacado: false, tallas: '#2 1/2 al #5 1/2' },
    
    // 65. NB 990 Blanco Plata
    { id: 65, nombre: 'NB 990 Blanco Plata', marca: 'New Balance', categoria: 'Sneakers', precio: 590, imagenes: ['./images/NB-990-Blanco-Plata-1.jpg', './images/NB-990-Blanco-Plata-2.jpg', './images/NB-990-Blanco-Plata-3.jpg'], destacado: false, tallas: '#2' },
    
    // 66. Mantequilla
    { id: 66, nombre: 'Mantequilla', marca: 'Nike', categoria: 'Sneakers', precio: 690, imagenes: ['./images/Mantequilla-1.jpg', './images/Mantequilla-2.jpg', './images/Mantequilla-3.jpg'], destacado: false, tallas: '#3 1/2 al #8 1/2' },
    
    // 67. NB 530 Blanco Plata
    { id: 67, nombre: 'NB 530 Blanco Plata', marca: 'New Balance', categoria: 'Sneakers', precio: 690, imagenes: ['./images/NB-530-Blanco-Plata-1.jpg', './images/NB-530-Blanco-Plata-2.jpg', './images/NB-530-Blanco-Plata-3.jpg'], destacado: false, tallas: '#2 al #5 1/2' },
    
    // 68. Blazer Choclo
    { id: 68, nombre: 'Blazer Choclo', marca: 'Nike', categoria: 'Sneakers', precio: 690, imagenes: ['./images/Blazer-Choclo-1.jpg', './images/Blazer-Choclo-2.jpg', './images/Blazer-Choclo-3.jpg', './images/Blazer-Choclo-4.jpg', './images/Blazer-Choclo-5.jpg', './images/Blazer-Choclo-6.jpg'], destacado: false, tallas: '#4 al #6 1/2' },
    
    // 69. Plataforma Blanca
    { id: 69, nombre: 'Plataforma Blanca', marca: 'Puma', categoria: 'Sneakers', precio: 690, imagenes: ['./images/Plataforma-Blanca-1.jpg', './images/Plataforma-Blanca-2.jpg', './images/Plataforma-Blanca-3.jpg'], destacado: false, tallas: '#2, #3, #4' },
    
    // 70. Super Star Latte Esp
    { id: 70, nombre: 'Super Star Latte Esp', marca: 'Adidas', categoria: 'Sneakers', precio: 790, imagenes: ['./images/Super-Star-Latte-Esp-1.jpg', './images/Super-Star-Latte-Esp-2.jpg'], destacado: false, tallas: '#3 1/2, #4 1/2, #5' },
    
    // 71. T 90 Negro
    { id: 71, nombre: 'T 90 Negro', marca: 'Nike', categoria: 'Sneakers', precio: 790, imagenes: ['./images/T-90-Negro-1.jpg', './images/T-90-Negro-2.jpg', './images/T-90-Negro-3.jpg'], destacado: false, tallas: '#5 al #7 1/2' },
    
    // 72. Samba Latte Negro
    { id: 72, nombre: 'Samba Latte Negro', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: ['./images/Samba-Latte-Negro-1.jpg', './images/Samba-Latte-Negro-2.jpg', './images/Samba-Latte-Negro-3.jpg'], destacado: false, tallas: '#3, #4 1/2' },
    
    // 73. Ad Ultra Ligero Blanco Tornasol
    { id: 73, nombre: 'Ad Ultra Ligero Blanco Tornasol', marca: 'Adidas', categoria: 'Sneakers', precio: 850, imagenes: ['./images/Ad-Ultra-Ligero-Blanco-Tornasol-1.jpg', './images/Ad-Ultra-Ligero-Blanco-Tornasol-2.jpg', './images/Ad-Ultra-Ligero-Blanco-Tornasol-3.jpg'], destacado: false, tallas: '#3 al #6' },
    
    // 74. Sam Brillos
    { id: 74, nombre: 'Sam Brillos', marca: 'Adidas', categoria: 'Sneakers', precio: 850, imagenes: ['./images/Sam-Brillos-1.jpg', './images/Sam-Brillos-2.jpg', './images/Sam-Brillos-3.jpg', './images/Sam-Brillos-4.jpg'], destacado: false, tallas: '#3 al #6' },
    
    // 75. Sam Plata
    { id: 75, nombre: 'Sam Plata', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: ['./images/Sam-Plata-1.jpg', './images/Sam-Plata-2.jpg', './images/Sam-Plata-3.jpg', './images/Sam-Plata-4.jpg'], destacado: false, tallas: '#3 al #6' },
    
    // 76. Sam Rojo
    { id: 76, nombre: 'Sam Rojo', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: ['./images/Sam-Rojo-1.jpg', './images/Sam-Rojo-2.jpg', './images/Sam-Rojo-3.jpg'], destacado: false, tallas: '#3 al #6' },
    
    // 77. NB 9060 Latte Oro
    { id: 77, nombre: 'NB 9060 Latte Oro', marca: 'New Balance', categoria: 'Sneakers', precio: 850, imagenes: ['./images/NB-9060-Latte-Oro-1.jpg', './images/NB-9060-Latte-Oro-2.jpg', './images/NB-9060-Latte-Oro-3.jpg'], destacado: false, tallas: '#3 al #6' },
    
    // 78. Tortuga Negra Blanca
    { id: 78, nombre: 'Tortuga Negra Blanca', marca: 'Nike', categoria: 'Sneakers', precio: 990, imagenes: ['./images/Tortuga-Negra-Blanca-1.jpg', './images/Tortuga-Negra-Blanca-2.jpg', './images/Tortuga-Negra-Blanca-3.jpg'], destacado: false, tallas: '#5 al #8' },
    
    // 79. Mind 001
    { id: 79, nombre: 'Mind 001', marca: 'Nike', categoria: 'Sneakers', precio: 950, imagenes: ['./images/Mind-001-1.jpg', './images/Mind-001-2.jpg', './images/Mind-001-3.jpg'], destacado: false, tallas: '#5 al #8' },
    
    // 80. Línea Premium
    { id: 80, nombre: 'Línea Premium', marca: 'Varios', categoria: 'Sneakers', precio: 950, imagenes: ['./images/Linea-Premium-1.jpg', './images/Linea-Premium-2.jpg', './images/Linea-Premium-3.jpg'], destacado: false, tallas: '#5 al #8' },
    
    // 81. Alexander Swaro
    { id: 81, nombre: 'Alexander Swaro', marca: 'Alexander McQueen', categoria: 'Sneakers', precio: 1250, imagenes: ['./images/Alexander-Swaro-1.jpg', './images/Alexander-Swaro-2.jpg', './images/Alexander-Swaro-3.jpg'], destacado: true, tallas: '#3 al #9' },
    
    // 82. DG Portofino
    { id: 82, nombre: 'DG Portofino', marca: 'Dolce & Gabbana', categoria: 'Sneakers', precio: 950, imagenes: ['./images/DG-Portofino-1.jpg', './images/DG-Portofino-2.jpg', './images/DG-Portofino-3.jpg', './images/DG-Portofino-4.jpg'], destacado: false, tallas: 'Variada' },
    
    // 83. Travis Gris
    { id: 83, nombre: 'Travis Gris', marca: 'Travis Scott', categoria: 'Sneakers', precio: 690, imagenes: ['./images/Travis-Gris-1.jpg', './images/Travis-Gris-2.jpg', './images/Travis-Gris-3.jpg'], destacado: false, tallas: '#5 1/2 al #8 1/2' },
    
    // 84. Super Star Black Var
    { id: 84, nombre: 'Super Star Black Var', marca: 'Adidas', categoria: 'Sneakers', precio: 790, imagenes: ['./images/Super-Star-Black-Var-1.jpg', './images/Super-Star-Black-Var-2.jpg', './images/Super-Star-Black-Var-3.jpg'], destacado: false, tallas: '#3 1/2 al #8' },
    
    // 85. 6 Aros
    { id: 85, nombre: '6 Aros', marca: 'Nike', categoria: 'Sneakers', precio: 850, imagenes: ['./images/6-Aros-1.jpg', './images/6-Aros-2.jpg', './images/6-Aros-3.jpg', './images/6-Aros-4.jpg'], destacado: false, tallas: '#5 al #8' },
    
    // 86. D Blanco Negro
    { id: 86, nombre: 'D Blanco Negro', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: ['./images/D-Blanco-Negro-1.jpg', './images/D-Blanco-Negro-2.jpg', './images/D-Blanco-Negro-3.jpg'], destacado: false, tallas: '#6 al #8 1/2' },
    
    // 87. NB Maquillaje
    { id: 87, nombre: 'NB Maquillaje', marca: 'New Balance', categoria: 'Sneakers', precio: 690, imagenes: ['./images/NB-Maquillaje-1.jpg', './images/NB-Maquillaje-2.jpg', './images/NB-Maquillaje-3.jpg'], destacado: false, tallas: '#3 al #6' },
    
    // 88. Sam Portugal
    { id: 88, nombre: 'Sam Portugal', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: ['./images/Sam-Portugal-1.jpg', './images/Sam-Portugal-2.jpg', './images/Sam-Portugal-3.jpg'], destacado: false, tallas: '#5 al #8' },
    
    // 89. Mind 001 Vino
    { id: 89, nombre: 'Mind 001 Vino', marca: 'Nike', categoria: 'Sneakers', precio: 1100, imagenes: ['./images/Mind-001-Vino-1.jpg', './images/Mind-001-Vino-2.jpg', './images/Mind-001-Vino-3.jpg', './images/Mind-001-Vino-4.jpg'], destacado: true, tallas: '#3 al #5' },
    
    // 90. D T Black
    { id: 90, nombre: 'D T Black', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: ['./images/D-T-Black-1.jpg', './images/D-T-Black-2.jpg', './images/D-T-Black-3.jpg'], destacado: false, tallas: '#6 al #8' },
    
    // 91. N 97 Negro Rey
    { id: 91, nombre: 'N 97 Negro Rey', marca: 'Nike', categoria: 'Sneakers', precio: 950, imagenes: ['./images/N-97-Negro-Rey-1.jpg', './images/N-97-Negro-Rey-2.jpg', './images/N-97-Negro-Rey-3.jpg'], destacado: false, tallas: '#6 al #8' },
    
    // 92. Metcon Maquillaje
    { id: 92, nombre: 'Metcon Maquillaje', marca: 'Nike', categoria: 'Sneakers', precio: 750, imagenes: ['./images/Metcon-Maquillaje-1.jpg', './images/Metcon-Maquillaje-2.jpg', './images/Metcon-Maquillaje-3.jpg'], destacado: false, tallas: '#2 al #5' },
    
    // 93. AF1 Blanco Var
    { id: 93, nombre: 'AF1 Blanco Var', marca: 'Nike', categoria: 'Sneakers', precio: 850, imagenes: ['./images/AF1-Blanco-Var-1.jpg', './images/AF1-Blanco-Var-2.jpg', './images/AF1-Blanco-Var-3.jpg'], destacado: false, tallas: '#2 1/2 al #8' },
    
    // 94. Pipen Low Blanca Azul
    { id: 94, nombre: 'Pipen Low Blanca Azul', marca: 'Nike', categoria: 'Sneakers', precio: 950, imagenes: ['./images/Pipen-Low-Blanca-Azul-1.jpg', './images/Pipen-Low-Blanca-Azul-2.jpg', './images/Pipen-Low-Blanca-Azul-3.jpg'], destacado: false, tallas: '#5, #6, #8' },
    
    // 95. Samba Pitón
    { id: 95, nombre: 'Samba Pitón', marca: 'Adidas', categoria: 'Sneakers', precio: 690, imagenes: ['./images/Samba-Piton-1.jpg', './images/Samba-Piton-2.jpg', './images/Samba-Piton-3.jpg'], destacado: false, tallas: '#3 al #6' },
    
    // 96. Agua Bendita
    { id: 96, nombre: 'Agua Bendita', marca: 'Nike', categoria: 'Sneakers', precio: 950, imagenes: ['./images/Agua-Bendita-1.jpg', './images/Agua-Bendita-2.jpg', './images/Agua-Bendita-3.jpg'], destacado: false, tallas: '#5 1/2 al #8' },
    
    // 97. DC Negro Gris Rojo
    { id: 97, nombre: 'DC Negro Gris Rojo', marca: 'DC', categoria: 'Sneakers', precio: 750, imagenes: ['./images/DC-Negro-Gris-Rojo-1.jpg', './images/DC-Negro-Gris-Rojo-2.jpg', './images/DC-Negro-Gris-Rojo-3.jpg'], destacado: false, tallas: '#5 1/2, #6 1/2, #7 1/2' },
    
    // 98. 3 Max
    { id: 98, nombre: '3 Max', marca: 'Nike', categoria: 'Sneakers', precio: 690, imagenes: ['./images/3-Max-1.jpg', './images/3-Max-2.jpg', './images/3-Max-3.jpg'], destacado: false, tallas: '#4 al #5 1/2' },
    
    // 99. XL Suede Var
    { id: 99, nombre: 'XL Suede Var', marca: 'Puma', categoria: 'Sneakers', precio: 650, imagenes: ['./images/XL-Suede-Var-1.jpg', './images/XL-Suede-Var-2.jpg', './images/XL-Suede-Var-3.jpg'], destacado: false, tallas: '#2 al #8 1/2' },
    
    // 100. On C Blanco
    { id: 100, nombre: 'On C Blanco', marca: 'On', categoria: 'Sneakers', precio: 750, imagenes: ['./images/On-C-Blanco-1.jpg', './images/On-C-Blanco-2.jpg', './images/On-C-Blanco-3.jpg'], destacado: false, tallas: '#5 1/2, #6, #7' },
    
    // 101. Fragment
    { id: 101, nombre: 'Fragment', marca: 'Fragment Design', categoria: 'Sneakers', precio: 690, imagenes: ['./images/Fragment-1.jpg'], destacado: false, tallas: 'Variada' }
];

// ════════════════════════════════════════════════════════════════
// FUNCIONES DE BÚSQUEDA Y FILTRADO
// ════════════════════════════════════════════════════════════════

function searchProducts(query) {
    if (!query) return products;
    const q = query.toLowerCase();
    return products.filter(p => 
        p.nombre.toLowerCase().includes(q) ||
        p.marca.toLowerCase().includes(q) ||
        p.categoria.toLowerCase().includes(q)
    );
}

function getProductsByCategory(category) {
    if (!category) return products;
    return products.filter(p => p.categoria === category);
}

function getHighlightedProducts() {
    return products.filter(p => p.destacado === true);
}

function sortByPrice(ascending = true) {
    const sorted = [...products].filter(p => p.precio > 0);
    return sorted.sort((a, b) => ascending ? a.precio - b.precio : b.precio - a.precio);
}

function getCategories() {
    return [...new Set(products.map(p => p.categoria))].sort();
}

// ════════════════════════════════════════════════════════════════
// FUNCIONES DE WHATSAPP
// ════════════════════════════════════════════════════════════════

function openWhatsApp(productName = '') {
    const message = productName 
        ? `Hola, me interesa el modelo: *${productName}*. ¿Puedes pasarme más información?`
        : WHATSAPP_MESSAGE;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

function openWhatsAppWithProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        openWhatsApp(product.nombre);
    }
}

// ════════════════════════════════════════════════════════════════
// FUNCIONES DE CARRITO
// ════════════════════════════════════════════════════════════════

let cart = [];

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return false;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    return true;
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.precio * item.quantity), 0);
}

function getCartItems() {
    return cart;
}

function clearCart() {
    cart = [];
}

function generateCartMessage() {
    if (cart.length === 0) return '';
    
    let message = '🛍️ *Mi carrito de Monarch Mx:*\n\n';
    cart.forEach(item => {
        message += `• *${item.nombre}* - $${item.precio.toLocaleString()} x ${item.quantity} = $${(item.precio * item.quantity).toLocaleString()}\n`;
    });
    message += `\n💰 *Total: $${getCartTotal().toLocaleString()}*\n\nQuiero asegurar mi pedido.`;
    
    return message;
}

function sendCartToWhatsApp() {
    const message = generateCartMessage();
    if (!message) {
        alert('Tu carrito está vacío');
        return;
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// ════════════════════════════════════════════════════════════════
// EXPORTAR PARA USO EN HTML / SCRIPT
// ════════════════════════════════════════════════════════════════

// Disponible globalmente como: monarchProducts.all, monarchProducts.search(), etc.
window.monarchProducts = {
    all: products,
    search: searchProducts,
    byCategory: getProductsByCategory,
    highlighted: getHighlightedProducts,
    sortByPrice: sortByPrice,
    categories: getCategories,
    whatsapp: {
        send: openWhatsApp,
        sendWithProduct: openWhatsAppWithProduct
    },
    cart: {
        add: addToCart,
        remove: removeFromCart,
        total: getCartTotal,
        items: getCartItems,
        clear: clearCart,
        send: sendCartToWhatsApp,
        message: generateCartMessage
    }
};

// ════════════════════════════════════════════════════════════════
// INFORMACIÓN DEL CATÁLOGO
// ════════════════════════════════════════════════════════════════

console.log('╔════════════════════════════════════════════════╗');
console.log('║       MONARCH MX - CATÁLOGO CARGADO            ║');
console.log('╠════════════════════════════════════════════════╣');
console.log(`║  Total productos: ${products.length}`);
console.log(`║  Productos destacados: ${getHighlightedProducts().length}`);
console.log(`║  Categorías: ${getCategories().length}`);
const precios = products.filter(p => p.precio > 0).map(p => p.precio);
console.log(`║  Rango de precios: $${Math.min(...precios)} - $${Math.max(...precios)}`);
console.log('╠════════════════════════════════════════════════╣');
console.log('║  Disponible como: monarchProducts.all          ║');
console.log('║  Búsqueda: monarchProducts.search("AF1")       ║');
console.log('║  Por categoría: monarchProducts.byCategory()   ║');
console.log('╚════════════════════════════════════════════════╝');
