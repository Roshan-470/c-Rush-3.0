// script.js (संपूर्ण अंतिम कोड)

// --- Global State ---
let currentPlace = null; 
const SERVER_URL = 'http://localhost:3000'; 

// सर्व Categories मध्ये एकसमान Subcategory लॉजिक
const categoryMap = {
    worship: { 
        name: 'Worship Sites', 
        icon: 'fas fa-pray', 
        subcategories: ['Hindu Temple', 'Mosque', 'Church', 'Pagoda/Buddhist-Vihara', 'Jain Temple'], 
        apiCategory: 'Worship' 
    }, 
                
    historical: { 
        name: 'Historical Sites', 
        icon: 'fas fa-landmark', 
        subcategories: ['Fort', 'Heritage Site'], 
        apiCategory: 'Historical' 
    }, 
                
    natural: { 
        name: 'Natural Beauties', 
        icon: 'fas fa-tree', 
        subcategories: ['Natural'], 
        apiCategory: 'Natural' 
    },
                
    others: { 
        name: 'Other Attractions', 
        icon: 'fas fa-star', 
        subcategories: ['Other Attractions'], 
        apiCategory: 'Others' 
    }
};

// --- Core Navigation and UI Functions ---

function showLoading() {
    document.getElementById('loading-overlay').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loading-overlay').style.display = 'none';
}

function initializeBootstrap() {
    // Re-initialize Bootstrap components like tooltips, dropdowns, etc.
    const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
    const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))
}

function renderNavAndFooter(place) {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');

    // Create the Categories Dropdown dynamically
    let dropdownItems = '';
    for (const key in categoryMap) {
        const cat = categoryMap[key];
        dropdownItems += `<li><a class="dropdown-item" href="#" onclick="loadCategoryPage('${key}'); return false;">${cat.name}</a></li>`;
    }

    const navbarContent = `
        <nav class="navbar navbar-expand-lg fixed-top" style="background: var(--sepia-dark); box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" onclick="loadPlaces()" style="color: var(--sepia-light); font-family: 'Playfair Display', serif;">
                    <i class="fas fa-map-marker-alt me-2"></i>Maharashtra Heritage
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style="border-color: var(--sepia-medium);">
                    <i class="fas fa-bars" style="color: var(--sepia-light);"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" onclick="loadPlaces()" style="color: var(--sepia-light);">
                                <i class="fas fa-home me-1"></i>Home
                            </a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: var(--sepia-light);">
                                <i class="fas fa-list me-1"></i>Categories
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style="background: var(--sepia-medium);">
                                ${dropdownItems}
                            </ul>
                        </li>

                        <li class="nav-item">
                            <span class="nav-link" style="color: var(--sepia-accent); font-weight: bold;">
                                <i class="fas fa-city me-1"></i>${place}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    header.innerHTML = navbarContent;
    footer.innerHTML = `
        <footer class="text-center py-3" style="background: var(--sepia-dark); color: var(--sepia-light);">
            © 2024 Maharashtra Heritage Explorer
        </footer>
    `;

    // Initialize dropdowns after loading content
    initializeBootstrap();
}

// --- Page Loading Functions ---

async function loadPlaces() {
    showLoading();
    currentPlace = null; 
    try {
        const response = await fetch(`${SERVER_URL}/api/places`);
        const data = await response.json();
        renderPlacesPage(data.places);
    } catch (error) {
        document.getElementById('app-container').innerHTML = '<p class="error-message">Error connecting to the server. Please ensure the server is running on port 3000.</p>';
    }
    hideLoading();
}

// 🚨 ADDED FUNCTION: Map View Handler 🚨
function viewMap(place) {
    // map.html कडे Redirect करा आणि 'place' parameter सोबत घेऊन जा.
    window.location.href = `map.html?place=${encodeURIComponent(place)}`;
}


function renderPlacesPage(places) {
    const placeCards = places.map(place => {
        let info = ''; // प्रत्येक ठिकाणासाठी माहिती 
        if (place === 'Mumbai') {
            info = 'Gateway to India, historic forts, and spiritual landmarks.';
        } else if (place === 'Pune') {
            info = 'Historical seat of the Peshwas, known for its majestic forts.';
        } else if (place === 'Chhatrapati Sambhaji Nagar') {
            info = 'Home to the magnificent UNESCO World Heritage Ajanta & Ellora Caves.';
        } else {
            info = `Explore heritage sites in ${place}.`;
        }
        
        return `
            <div class="col-sm-6 col-lg-4 mb-4">
                <div class="place-card">
                    <h3>${place}</h3>
                    <p>${info}</p>
                    
                    <button class="btn btn-sm mt-2 me-2" 
                        style="background: var(--sepia-accent); color: var(--sepia-light); border: none;" 
                        onclick="viewMap('${place}'); event.stopPropagation();">
                        <i class="fas fa-map me-1"></i> View Map
                    </button>

                    <button class="btn btn-sm mt-2" 
                        style="background: var(--sepia-dark); color: var(--sepia-light); border: none;" 
                        onclick="startExploration('${place}'); event.stopPropagation();">
                        <i class="fas fa-list me-1"></i> View Sites
                    </button>
                    
                </div>
            </div>
        `;
    }).join('');

    const content = `
        <div class="container page-content" style="padding-top: 120px;">
            <h2 style="font-family: 'Playfair Display', serif; margin-bottom: 2rem;">Select a City to Explore</h2>
            <div class="row mt-5">
                ${placeCards}
            </div>
        </div>
    `;
    
    document.getElementById('app-container').innerHTML = content;
    renderNavAndFooter('Select Place');
}

function startExploration(place) {
    currentPlace = place;
    loadMainCategoriesPage();
}

function loadMainCategoriesPage() {
    if (!currentPlace) return loadPlaces();
    
    const categoryKeys = Object.keys(categoryMap);
    const cards = categoryKeys.map(key => {
        const cat = categoryMap[key];
        return `
            <div class="col-sm-6 col-lg-4 mb-4">
                <div class="category-card" onclick="loadSubcategoryGrid('${key}')"> 
                    <i class="${cat.icon}"></i>
                    <h3>${cat.name}</h3>
                    <p>Discover ${cat.name} in ${currentPlace}.</p>
                    <button class="btn btn-sm mt-2" style="background: var(--sepia-accent); color: var(--sepia-light); border: none;" onclick="loadSubcategoryGrid('${key}'); event.stopPropagation();">
                        Explore Now
                    </button>
                </div>
            </div>
        `;
    }).join('');

    const content = `
        <div class="container page-content" style="padding-top: 120px;">
            <h2 style="font-family: 'Playfair Display', serif; margin-bottom: 2rem;">Explore Categories in ${currentPlace}</h2>
            <div class="row mt-5">
                ${cards}
            </div>
        </div>
    `;
    document.getElementById('app-container').innerHTML = content;
    renderNavAndFooter(currentPlace);
    initializeBootstrap();
}


function loadCategoryPage(categoryKey) {
    loadSubcategoryGrid(categoryKey);
}


function loadSubcategoryGrid(categoryKey) {
    if (!currentPlace) return loadPlaces();

    const cat = categoryMap[categoryKey];
    let cards = '';
    
    // Subcategory Cards तयार करणे
    cat.subcategories.forEach(subCatName => {
        let icon;
        if (subCatName === 'Fort') icon = 'fas fa-chess-rook';
        else if (subCatName === 'Heritage Site') icon = 'fas fa-university';
        else if (subCatName === 'Hindu Temple') icon = 'fas fa-om';       
        else if (subCatName === 'Mosque') icon = 'fas fa-mosque';         
        else if (subCatName === 'Church') icon = 'fas fa-church';         
        else if (subCatName === 'Pagoda/Buddhist-Vihara') icon = 'fas fa-buddhist'; 
        else if (subCatName === 'Jain Temple') icon = 'fas fa-hands-praying';
        else if (subCatName === 'Natural') icon = 'fas fa-mountain'; 
        else if (subCatName === 'Other Attractions') icon = 'fas fa-star'; 
        else icon = 'fas fa-map-pin';
        
        cards += `
            <div class="col-sm-6 col-lg-4 mb-4">
                <div class="category-card" onclick="loadSitesForSubcategory('${subCatName}', '${categoryKey}')">
                    <i class="${icon}"></i>
                    <h3>${subCatName}</h3> 
                    <p>Explore ${subCatName} landmarks in ${currentPlace}.</p>
                    <button class="btn btn-sm mt-2" style="background: var(--sepia-accent); color: var(--sepia-light); border: none;" onclick="loadSitesForSubcategory('${subCatName}', '${categoryKey}'); event.stopPropagation();">
                        Explore Now
                    </button>
                </div>
            </div>
        `;
    });
    
    const content = `
        <div class="container page-content" style="padding-top: 120px;">
            <button class="btn mb-4" style="background: var(--sepia-medium); color: var(--text-primary);" onclick="loadMainCategoriesPage()">
                <i class="fas fa-arrow-left me-2"></i>Back to Categories
            </button>
            <h2 style="font-family: 'Playfair Display', serif; margin-bottom: 2rem;">${cat.name} Subcategories in ${currentPlace}</h2>
            <div class="row mt-5">
                ${cards}
            </div>
        </div>
    `;
    
    document.getElementById('app-container').innerHTML = content;
    renderNavAndFooter(currentPlace);
    initializeBootstrap();
}

// loadSitesForSubcategory (API Filter Logic)
async function loadSitesForSubcategory(subcategoryName, parentCategoryKey) {
    showLoading();
    
    const cat = categoryMap[parentCategoryKey];
    let apiFilter = subcategoryName;

    // 'Natural' साठी खास हाताळणी (server.js मधील API logic नुसार)
    if (subcategoryName === 'Natural') { 
        apiFilter = cat.apiCategory; 
    }

    // API Endpoint ला filter पाठवा
    const response = await fetch(`${SERVER_URL}/api/sites?place=${currentPlace}&category=${apiFilter}`);
    const data = await response.json();
    
    renderSitesPage(data.sites, subcategoryName, parentCategoryKey); 
    hideLoading();
    initializeBootstrap();
}


function renderSitesPage(sites, title, backFunctionKey) {
    
    const siteCards = sites.length > 0 
        ? sites.map(site => `
            <div class="site-card card mb-4" style="background: var(--sepia-light); border: 1px solid var(--sepia-medium); border-radius: 10px;">
                <div class="card-body">
                    <h4 class="card-title" style="font-family: 'Playfair Display', serif; color: var(--text-primary);">${site.name}</h4>
                    <p class="card-text" style="color: var(--text-secondary);">${site.description}</p>
                    <p class="card-text badge" style="background: var(--sepia-medium); color: var(--text-primary);">${site.category}</p>
                    
                    <button class="btn btn-sm" 
                        style="background: var(--sepia-accent); color: var(--sepia-light); border: none;" 
                        onclick="loadSiteDetails(
                            '${site.name.replace(/'/g, "\\'")}', 
                            '${site.category.replace(/'/g, "\\'")}', 
                            '${site.description.replace(/'/g, "\\'")}'
                        )">
                        Explore Now <i class="fas fa-arrow-right ms-1"></i>
                    </button>
                </div>
            </div>
        `).join('')
        : `<div class="alert alert-warning" style="background: var(--sepia-light); color: var(--text-secondary); border: 1px solid var(--sepia-medium); border-radius: 10px;">
            No sites found for this subcategory in ${currentPlace}.
          </div>`;

    
    const backButtonHandler = `loadSubcategoryGrid('${backFunctionKey}')`;

    const content = `
        <div class="container page-content" style="padding-top: 120px;">
            <button class="btn mb-4" style="background: var(--sepia-medium); color: var(--text-primary);" onclick="${backButtonHandler}">
                <i class="fas fa-arrow-left me-2"></i>Back to Subcategories
            </button>
            <h2 style="font-family: 'Playfair Display', serif; margin-bottom: 2rem;">${title} Results in ${currentPlace}</h2>
            <div id="sites-content" class="mt-4">
                ${siteCards}
            </div>
        </div>
    `;
    document.getElementById('app-container').innerHTML = content;
    renderNavAndFooter(currentPlace);
}

// loadSiteDetails: Redirect to site_detail.html
function loadSiteDetails(siteName, siteCategory, siteDescription) {
    const encodedName = encodeURIComponent(siteName);
    const encodedCategory = encodeURIComponent(siteCategory);
    const encodedDescription = encodeURIComponent(siteDescription);
    
    window.location.href = `site_detail.html?name=${encodedName}&category=${encodedCategory}&description=${encodedDescription}`;
}

document.addEventListener('DOMContentLoaded', loadPlaces);
