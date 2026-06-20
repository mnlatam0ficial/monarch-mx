// ==========================================
// MONARCH MX - JAVASCRIPT FUNCTIONALITY
// ==========================================

// Configuration
const WHATSAPP_NUMBER = '5215559876543';
const WHATSAPP_MESSAGE = 'Qué rollo, vengo de la página de Monarch. Me interesa un modelo premium, ¿me pasas info para asegurar el anticipo y armar el pedido?';

// Product Database
const products = [
    {
        id: 1,
        nombre: 'AF1 Premium',
        marca: 'Nike',
        categoria: 'Sneakers',
        precio: 1890,
        descripcion: 'Air Force 1 importado con llavero y placas de metal. Calidad de importación premium.',
        imagen: 'https://via.placeholder.com/400x400?text=AF1+Premium',
        estado: 'nuevo',
        destacado: true,
        stock: 5
    },
    {
        id: 2,
        nombre: 'TN Camaleón',
        marca: 'Nike',
        categoria: 'Sneakers',
        precio: 1150,
        descripcion: 'TN de temperatura variable. Negro con calor, cambia a rosa o azul.',
        imagen: 'https://via.placeholder.com/400x400?text=TN+Camaléon',
        estado: 'nuevo',
        destacado: true,
        stock: 8
    },
    {
        id: 3,
        nombre: 'NB 990 Menta',
        marca: 'New Balance',
        categoria: 'Sneakers',
        precio: 1290,
        descripcion: 'New Balance 990 en blanco o menta negro. Calidad importada premium.',
        imagen: 'https://via.placeholder.com/400x400?text=NB+990+Menta',
        estado: 'nuevo',
        destacado: false,
        stock: 6
    },
    {
        id: 4,
        nombre: 'Mid 002',
        marca: 'Jordan',
        categoria: 'Sneakers',
        precio: 1990,
        descripcion: 'Mid 002 con calidad de importación premium. Detalles perfectos.',
        imagen: 'https://via.placeholder.com/400x400?text=Mid+002',
        estado: 'nuevo',
        destacado: true,
        stock: 4
    },
    {
        id: 5,
        nombre: '720 Tortuga',
        marca: 'Nike',
        categoria: 'Sneakers',
        precio: 1590,
        descripcion: 'Air Max 720 Tortuga. Calidad de importación. Talla 2.5 a 9.',
        imagen: 'https://via.placeholder.com/400x400?text=Air+Max+720',
        estado: 'nuevo',
        destacado: false,
        stock: 7
    },
    {
        id: 6,
        nombre: 'Nocta Negro',
        marca: 'Nike',
        categoria: 'Sneakers',
        precio: 1490,
        descripcion: 'Nike x Drake Nocta en negro. Edición limitada premium.',
        imagen: 'https://via.placeholder.com/400x400?text=Nocta+Negro',
        estado: 'nuevo',
        destacado: true,
        stock: 3
    },
    {
        id: 7,
        nombre: 'NB Negro Rosa',
        marca: 'New Balance',
        categoria: 'Sneakers',
        precio: 990,
        descripcion: 'New Balance negro con detalles en rosa. Combinación elegante.',
        imagen: 'https://via.placeholder.com/400x400?text=NB+Negro+Rosa',
        estado: 'nuevo',
        destacado: false,
        stock: 9
    },
    {
        id: 8,
        nombre: 'Cross Body Premium',
        marca: 'Coach',
        categoria: 'Bolsas',
        precio: 1590,
        descripcion: 'Bolsa cross body Steve & Coach. Cuero premium importado.',
        imagen: 'https://via.placeholder.com/400x400?text=Cross+Body',
        estado: 'nuevo',
        destacado: true,
        stock: 5
    },
    {
        id: 9,
        nombre: 'Sudadera Essentials',
        marca: 'Fear of God',
        categoria: 'Sudaderas',
        precio: 1290,
        descripcion: 'Sudadera premium Essentials en algodón de alta calidad.',
        imagen: 'https://via.placeholder.com/400x400?text=Sudadera',
        estado: 'nuevo',
        destacado: false,
        stock: 8
    },
    {
        id: 10,
        nombre: 'Gorra Premium',
        marca: 'Supreme',
        categoria: 'Gorras',
        precio: 590,
        descripcion: 'Gorra ajustable Supreme. Calidad premium de importación.',
        imagen: 'https://via.placeholder.com/400x400?text=Gorra+Premium',
        estado: 'nuevo',
        destacado: false,
        stock: 12
    },
    {
        id: 11,
        nombre: 'Cinturón Piel',
        marca: 'Gucci',
        categoria: 'Accesorios',
        precio: 890,
        descripcion: 'Cinturón de piel genuina con hebilla premium. Importado.',
        imagen: 'https://via.placeholder.com/400x400?text=Cinturon',
        estado: 'nuevo',
        destacado: false,
        stock: 6
    },
    {
        id: 12,
        nombre: 'Cartera Plegable',
        marca: 'Louis Vuitton Style',
        categoria: 'Accesorios',
        precio: 690,
        descripcion: 'Cartera plegable en cuero. Diseño elegante y minimalista.',
        imagen: 'https://via.placeholder.com/400x400?text=Cartera',
        estado: 'nuevo',
        destacado: true,
        stock: 10
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
                <img src="${product.imagen}" alt="${product.nombre}" class="product-image">
                ${product.destacado ? '<span class="product-badge featured">Destacado</span>' : ''}
            </div>
            <div class="product-info">
                <div class="product-brand">${product.marca}</div>
                <h3 class="product-name">${product.nombre}</h3>
                <p class="product-description">${product.descripcion}</p>
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
                    <img src="${product.imagen}" alt="${product.nombre}" class="product-image">
                    <span class="product-badge featured">Destacado</span>
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.marca}</div>
                    <h3 class="product-name">${product.nombre}</h3>
                    <p class="product-description">${product.descripcion}</p>
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
                            product.marca.toLowerCase().includes(searchTerm) ||
                            product.descripcion.toLowerCase().includes(searchTerm);
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
// MODAL FUNCTIONALITY
// ==========================================

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    
    document.getElementById('modalImage').src = product.imagen;
    document.getElementById('modalTitle').textContent = product.nombre;
    document.getElementById('modalBrand').textContent = product.marca;
    document.getElementById('modalDescription').textContent = product.descripcion;
    document.getElementById('modalPrice').textContent = `$${formatPrice(product.precio)} MXN`;
    
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
// LAZY LOADING IMAGES
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
// ANALYTICS & TRACKING
// ==========================================

function trackEvent(category, action, label) {
    // Google Analytics integration (if needed)
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Track product views
document.addEventListener('click', function(e) {
    if (e.target.closest('.product-card')) {
        trackEvent('products', 'view_product', currentProduct?.nombre || 'unknown');
    }
    
    if (e.target.closest('.whatsapp-btn') || e.target.closest('.floating-whatsapp')) {
        trackEvent('engagement', 'whatsapp_click', currentProduct?.nombre || 'general');
    }
});
