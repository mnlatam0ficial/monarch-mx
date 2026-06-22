// ==========================================
// MONARCH MX - JAVASCRIPT FUNCTIONALITY
// ==========================================

// Configuration
const WHATSAPP_NUMBER = '5212225364045';
const WHATSAPP_MESSAGE = 'Qué rollo, vengo de la página de Monarch. Me interesa un modelo premium, ¿me pasas info para asegurar el anticipo y armar el pedido?';

// Product Database (campos eliminados: descripcion, estado, stock)
const products = [
    {
        id: 1,
        nombre: 'AF1 Premium',
        marca: 'Nike',
        categoria: 'Sneakers',
        precio: 1890,
        imagenes: [
            'https://via.placeholder.com/400x400?text=AF1+Premium+1',
            'https://via.placeholder.com/400x400?text=AF1+Premium+2',
            'https://via.placeholder.com/400x400?text=AF1+Premium+3'
        ],
        destacado: true
    },
    {
        id: 2,
        nombre: 'TN Camaleón',
        marca: 'Nike',
        categoria: 'Sneakers',
        precio: 1150,
        imagenes: [
            'https://via.placeholder.com/400x400?text=TN+Camaleon+1',
            'https://via.placeholder.com/400x400?text=TN+Camaleon+2'
        ],
        destacado: true
    },
    {
        id: 3,
        nombre: 'NB 990 Menta',
        marca: 'New Balance',
        categoria: 'Sneakers',
        precio: 1290,
        imagenes: [
            'https://via.placeholder.com/400x400?text=NB+990+Menta+1'
        ],
        destacado: false
    },
    {
        id: 4,
        nombre: 'Mid 002',
        marca: 'Jordan',
        categoria: 'Sneakers',
        precio: 1990,
        imagenes: [
            'https://via.placeholder.com/400x400?text=Mid+002+1',
            'https://via.placeholder.com/400x400?text=Mid+002+2',
            'https://via.placeholder.com/400x400?text=Mid+002+3'
        ],
        destacado: true
    },
    {
        id: 5,
        nombre: '720 Tortuga',
        marca: 'Nike',
        categoria: 'Sneakers',
        precio: 1590,
        imagenes: [
            'https://via.placeholder.com/400x400?text=Air+Max+720+1'
        ],
        destacado: false
    },
    {
        id: 6,
        nombre: 'Nocta Negro',
        marca: 'Nike',
        categoria: 'Sneakers',
        precio: 1490,
        imagenes: [
            'https://via.placeholder.com/400x400?text=Nocta+Negro+1',
            'https://via.placeholder.com/400x400?text=Nocta+Negro+2'
        ],
        destacado: true
    },
    {
        id: 7,
        nombre: 'NB Negro Rosa',
        marca: 'New Balance',
        categoria: 'Sneakers',
        precio: 990,
        imagenes: [
            'https://via.placeholder.com/400x400?text=NB+Negro+Rosa+1'
        ],
        destacado: false
    },
    {
        id: 8,
        nombre: 'Cross Body Premium',
        marca: 'Coach',
        categoria: 'Bolsas',
        precio: 1590,
        imagenes: [
            'https://via.placeholder.com/400x400?text=Cross+Body+1',
            'https://via.placeholder.com/400x400?text=Cross+Body+2'
        ],
        destacado: true
    },
    {
        id: 9,
        nombre: 'Sudadera Essentials',
        marca: 'Fear of God',
        categoria: 'Sudaderas',
        precio: 1290,
        imagenes: [
            'https://via.placeholder.com/400x400?text=Sudadera+1'
        ],
        destacado: false
    },
    {
        id: 10,
        nombre: 'Gorra Premium',
        marca: 'Supreme',
        categoria: 'Gorras',
        precio: 590,
        imagenes: [
            'https://via.placeholder.com/400x400?text=Gorra+Premium+1',
            'https://via.placeholder.com/400x400?text=Gorra+Premium+2'
        ],
        destacado: false
    },
    {
        id: 11,
        nombre: 'Cinturón Piel',
        marca: 'Gucci',
        categoria: 'Accesorios',
        precio: 890,
        imagenes: [
            'https://via.placeholder.com/400x400?text=Cinturon+1'
        ],
        destacado: false
    },
    {
        id: 12,
        nombre: 'Cartera Plegable',
        marca: 'Louis Vuitton Style',
        categoria: 'Accesorios',
        precio: 690,
        imagenes: [
            'https://via.placeholder.com/400x400?text=Cartera+1',
            'https://via.placeholder.com/400x400?text=Cartera+2'
        ],
        destacado: true
    }
];

// Global Variables
let currentProduct = null;
let filteredProducts = [...products];

// ==========================================
// DOM MANIPULATION & RENDERING
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    renderFeatured();
    setupEventListeners();
});

function renderProducts() {
    const container = document.getElementById('productsContainer');
    const emptyState = document.getElementById('emptyState');
    
    if (filteredProducts.length === 0) {
        container.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    
    container.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image-container">
                <img src="${product.imagenes[0]}" alt="${product.nombre}" class="product-image">
                ${product.destacado ? '<span class="product-badge featured">Destacado</span>' : ''}
            </div>
            <div class="product-info">
                <div class="product-brand">${product.marca}</div>
                <h3 class="product-name">${product.nombre}</h3>
                <div class="product-price">
                    <span class="price">$${formatPrice(product.precio)}</span>
                </div>
                <button onclick="event.stopPropagation(); openWhatsAppWithProduct(${product.id})">
                    Ver Más
                </button>
            </div>
        </div>
    `).join('');
}

function renderFeatured() {
    const featured = products.filter(p => p.destacado).slice(0, 4);
    const container = document.getElementById('featuredContainer');
    
    if (featured.length === 0) {
        container.innerHTML = '';
        return;
    }
    
    container.innerHTML = `
        <h3 style="grid-column: 1/-1; font-size: 1.5rem; margin-bottom: 1rem; text-align: left;">
            ✨ Productos Destacados
        </h3>
        ${featured.map(product => `
            <div class="product-card" onclick="openProductModal(${product.id})">
                <div class="product-image-container">
                    <img src="${product.imagenes[0]}" alt="${product.nombre}" class="product-image">
                    <span class="product-badge featured">Destacado</span>
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.marca}</div>
                    <h3 class="product-name">${product.nombre}</h3>
                    <div class="product-price">
                        <span class="price">$${formatPrice(product.precio)}</span>
                    </div>
                    <button onclick="event.stopPropagation(); openWhatsAppWithProduct(${product.id})">
                        Ver Más
                    </button>
                </div>
            </div>
        `).join('')}
    `;
}

// ==========================================
// FILTERING & SEARCH
// ==========================================

function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categorySelect').value;
    const priceSort = document.getElementById('priceSort').value;
    
    filteredProducts = products.filter(product => {
        const matchesSearch = product.nombre.toLowerCase().includes(searchTerm) ||
                            product.marca.toLowerCase().includes(searchTerm);
        const matchesCategory = !category || product.categoria === category;
        
        return matchesSearch && matchesCategory;
    });
    
    // Apply sorting
    if (priceSort === 'low') {
        filteredProducts.sort((a, b) => a.precio - b.precio);
    } else if (priceSort === 'high') {
        filteredProducts.sort((a, b) => b.precio - a.precio);
    }
    
    renderProducts();
}

// ==========================================
// MODAL FUNCTIONALITY (con carrusel)
// ==========================================

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    
    // Actualizar información del producto
    document.getElementById('modalTitle').textContent = product.nombre;
    document.getElementById('modalBrand').textContent = product.marca;
    document.getElementById('modalPrice').textContent = `$${formatPrice(product.precio)} MXN`;
    
    // Construir carrusel de imágenes
    const carouselContainer = document.getElementById('modalCarousel');
    carouselContainer.innerHTML = '';
    
    if (product.imagenes && product.imagenes.length > 0) {
        product.imagenes.forEach((imgSrc, index) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `${product.nombre} - imagen ${index + 1}`;
            img.className = 'carousel-image';
            carouselContainer.appendChild(img);
        });
    } else {
        // Fallback si no hay imágenes
        const img = document.createElement('img');
        img.src = 'https://via.placeholder.com/400x400?text=Sin+imagen';
        img.alt = 'Sin imagen';
        img.className = 'carousel-image';
        carouselContainer.appendChild(img);
    }
    
    // Resetear scroll del carrusel al inicio
    carouselContainer.scrollLeft = 0;
    
    // Mostrar modal
    const modal = document.getElementById('productModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal(event) {
    if (event && event.target.id !== 'productModal') return;
    
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Navegación del carrusel (botones)
function scrollCarousel(direction) {
    const container = document.getElementById('modalCarousel');
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

// ==========================================
// WHATSAPP INTEGRATION
// ==========================================

function openWhatsApp() {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
}

function openWhatsAppWithProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        openWhatsApp();
        return;
    }
    
    const message = `Qué rollo, vengo de la página de Monarch. Me interesa el: ${product.nombre} (${product.marca}). ¿Me pasas info para asegurar el anticipo y armar el pedido?`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// ==========================================
// FAQ FUNCTIONALITY
// ==========================================

function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const isOpen = answer.style.display !== 'none';
    
    // Close all other FAQs
    document.querySelectorAll('.faq-answer').forEach(item => {
        item.style.display = 'none';
    });
    document.querySelectorAll('.faq-question').forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle current FAQ
    if (!isOpen) {
        answer.style.display = 'block';
        element.classList.add('active');
    }
}

// ==========================================
// NAVIGATION
// ==========================================

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function formatPrice(price) {
    return price.toLocaleString('es-MX');
}

function setupEventListeners() {
    // Close modal when clicking outside
    document.getElementById('productModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeProductModal(e);
        }
    });
    
    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProductModal();
        }
    });
    
    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 16px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
}

// ==========================================
// LAZY LOADING IMAGES (opcional)
// ==========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
}

// ==========================================
// ANALYTICS & TRACKING (opcional)
// ==========================================

function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

document.addEventListener('click', function(e) {
    if (e.target.closest('.product-card')) {
        trackEvent('products', 'view_product', currentProduct?.nombre || 'unknown');
    }
    
    if (e.target.closest('.whatsapp-btn') || e.target.closest('.floating-whatsapp')) {
        trackEvent('engagement', 'whatsapp_click', currentProduct?.nombre || 'general');
    }
});