let destinasi1 = document.querySelector('#drop-destinasi1')
let dropdown1 = document.querySelector('#dropdown1')
let destinasi2 = document.querySelector('#drop-destinasi2')
let dropdown2 = document.querySelector('#dropdown2')
let destinasi3 = document.querySelector('#drop-destinasi3')
let dropdown3 = document.querySelector('#dropdown3')
let destinasi4 = document.querySelector('#drop-destinasi4')
let dropdown4 = document.querySelector('#dropdown4')
let destinasi5 = document.querySelector('#drop-destinasi5')
let dropdown5 = document.querySelector('#dropdown5')


dropdown1.addEventListener('click', function() {
    destinasi1.classList.toggle('show');
    if (destinasi1.classList.contains('show')) {
        dropdown1.style.transform = "rotate(180deg)";
    } else {
        dropdown1.style.transform = "rotate(0deg)";
    }
})
dropdown2.addEventListener('click', function() {
    destinasi2.classList.toggle('show');
    if (destinasi2.classList.contains('show')) {
        dropdown2.style.transform = "rotate(180deg)";
    } else {
        dropdown2.style.transform = "rotate(0deg)";
    }
})
dropdown3.addEventListener('click', function() {
    destinasi3.classList.toggle('show');
    if (destinasi3.classList.contains('show')) {
        dropdown3.style.transform = "rotate(180deg)";
    } else {
        dropdown3.style.transform = "rotate(0deg)";
    }
})
dropdown4.addEventListener('click', function() {
    destinasi4.classList.toggle('show');
    if (destinasi4.classList.contains('show')) {
        dropdown4.style.transform = "rotate(180deg)";
    } else {
        dropdown4.style.transform = "rotate(0deg)";
    }
})
dropdown5.addEventListener('click', function() {
    destinasi5.classList.toggle('show');
    if (destinasi5.classList.contains('show')) {
        dropdown5.style.transform = "rotate(180deg)";
    } else {
        dropdown5.style.transform = "rotate(0deg)";
    }
})

let message = document.querySelector('#message')
let chatbox = document.querySelector('#chatbox')

message.addEventListener('click', function() {
    chatbox.classList.toggle('popup');
})

// Mengambil elemen-elemen yang diperlukan
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider > div'); // Mengambil elemen anak di slider
const sliderBtns = document.querySelectorAll('.slider-btn a');

// Fungsi untuk mengatur tampilan slider berdasarkan indeks
function setSlide(index) {
    const slideWidth = slides[0].offsetWidth + 300; // Lebar slide termasuk gap
    slider.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
    });

    updateActiveButton(index);
}

// Fungsi untuk memperbarui tombol aktif
function updateActiveButton(index) {
    sliderBtns.forEach(btn => btn.classList.remove('active')); // Hilangkan gaya aktif dari semua tombol
    sliderBtns[index].classList.add('active'); // Tambahkan gaya aktif pada tombol yang dipilih
}

// Menambahkan event listener ke setiap tombol
sliderBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        setSlide(index);
    });
});

// Fungsi untuk menghitung slide terdekat berdasarkan posisi scroll
function handleScroll() {
    const slideWidth = slides[0].offsetWidth + 300;
    const scrollPosition = slider.scrollLeft;
    const currentIndex = Math.round(scrollPosition / slideWidth);

    // Perbarui tombol aktif sesuai slide terdekat
    updateActiveButton(currentIndex);
}

// Event listener untuk scroll
slider.addEventListener('scroll', handleScroll);

// Set kondisi awal: aktifkan tombol pertama
setSlide(0); // Atur slider ke slide pertama saat halaman dimuat



const koridorImages = document.querySelectorAll('.kor-image');
const koridorElements = document.querySelectorAll('.list-koridor div');

koridorElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        const index = element.dataset.index;
        koridorImages.forEach((img) => img.style.display = 'none');
        koridorImages[index].style.display = 'block';
    });

    element.addEventListener('mouseleave', () => {
        koridorImages.forEach((img) => img.style.display = 'none');
        koridorImages[0].style.display = 'block';
    });
});

var map = L.map('map', {zoom: 14, minZoom:14, maxZoom: 16, maxBounds: [
    [-0.940, 119.800], // Batas selatan barat
    [-0.6745933946414844, 119.94882739405341]  // Batas utara timur
],
maxBoundsViscosity: 1.0}).setView([-0.8984, 119.8504], 13); // Koordinat Palu, Sulawesi Tengah

var baseMaps = {
    "Terrain": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }),
    "Dark": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; Esri & OpenStreetMap contributors'
    }),
};

// Menambahkan salah satu peta sebagai default (misalnya, OpenStreetMap)
baseMaps["Dark"].addTo(map);

var halte = L.icon({
    iconUrl: 'assets/img/halte.png', // Ganti dengan URL ikon Anda
    iconSize: [40, 40], // Ukuran ikon [lebar, tinggi]
    iconAnchor: [15, 45], // Posisi anchor ikon
    popupAnchor: [0, -45] // Posisi anchor popup
});

var busJalan = L.icon({
    iconUrl: 'assets/img/busJalan.png', // Ganti dengan URL ikon Anda
    iconSize: [25, 25], // Ukuran ikon [lebar, tinggi]
    iconAnchor: [15, 45], // Posisi anchor ikon
    popupAnchor: [0, -45] // Posisi anchor popup
});

var placeholder = L.icon({
    iconUrl: 'assets/img/placeholder.png', // Ganti dengan URL ikon Anda
    iconSize: [40, 40], // Ukuran ikon [lebar, tinggi]
    iconAnchor: [15, 45], // Posisi anchor ikon
    popupAnchor: [0, -45] // Posisi anchor popup
});

var compass = new L.Control.Compass({
    position: 'bottomleft'   // Letak kompas di peta
}).addTo(map);


var busLayer = L.layerGroup();
var halteLayer = L.layerGroup();

L.control.layers(baseMaps, {
    "Tampilkan Bus": busLayer,
    "Tampilkan Halte": halteLayer
}).addTo(map);

// Menampilkan layer awal (bus dan halte)
busLayer.addTo(map);
halteLayer.addTo(map);



var busLocations = [
    { name: "Bus 1", coords: [-0.8971900710615499, 119.8764763787391] },
    { name: "Bus 2", coords: [-0.9002825786690831, 119.85886985041444] },
    { name: "Bus 3", coords: [-0.9192198655053473, 119.88200811944131] },
    { name: "Bus 4", coords: [-0.7549766024624681, 119.86560227764582] },
    { name: "Bus 5", coords: [-0.8715287756334514, 119.83346815147216] },
    { name: "Bus 6", coords: [-0.8444693990066124, 119.88311880482561] },
    { name: "Bus 7", coords: [-0.9020726825128073, 119.88867881133697] },
    { name: "Bus 8", coords: [-0.9192754959802769, 119.90076605988989] },
    { name: "Bus 9", coords: [-0.8982937015704023, 119.85188207031305] },
    { name: "Bus 10", coords: [-0.9111143674950715, 119.87633940409856] },
    
    // 14 Bus tambahan dengan lokasi acak
    { name: "Bus 11", coords: [-0.890123, 119.875432] },
    { name: "Bus 12", coords: [-0.9049526560445921, 119.88898139720838] },
    { name: "Bus 13", coords: [-0.898765, 119.845678] },
    { name: "Bus 14", coords: [-0.903213, 119.854123] },
    { name: "Bus 15", coords: [-0.895678, 119.870123] },
    { name: "Bus 16", coords: [-0.912345, 119.877654] },
    { name: "Bus 17", coords: [-0.8782405134722113, 119.83627950489605] },
    { name: "Bus 18", coords: [-0.8950567199009613, 119.85704497553371] },
    { name: "Bus 19", coords: [-0.905432, 119.849876] },
    { name: "Bus 20", coords: [-0.893210, 119.869876] },
    { name: "Bus 21", coords: [-0.8741909294172395, 119.8742900590261] },
    { name: "Bus 22", coords: [-0.8836887494940895, 119.88691227347854] },
    { name: "Bus 23", coords: [-0.9064206595848766, 119.87970650289115] },
    { name: "Bus 24", coords: [-0.889765, 119.872134] }
];

busLocations.forEach(function(bus) {
    var marker = L.marker(bus.coords, { icon: busJalan }).addTo(map);
    marker.bindPopup("<b>Posisi Bus</b><br>" + bus.name).openPopup();
    busLayer.addLayer(marker);
});

var pantoloan = L.marker([-0.7083225129838916, 119.85717594472423], {icon: halte}).addTo(map);
pantoloan.bindPopup("<b>Koridor 01</b><br>Pelabuhan Pantoloan").openPopup();

var tamanGor = L.marker([-0.8962935334683956, 119.87152201399213], {icon: halte}).addTo(map);
tamanGor.bindPopup("<b>Koridor 01, 02, 03M, 03Y</b><br>Taman GOR").openPopup();

var balaiKota = L.marker([-0.8992757504131088, 119.89004821389541], {icon: halte}).addTo(map);
balaiKota.bindPopup("<b>Koridor 02</b><br>Balai Kota").openPopup();

var manonda = L.marker([-0.9033001892403326, 119.85187800637569], {icon: halte}).addTo(map);
manonda.bindPopup("<b>Koridor 02</b><br>Pasar Inpres Manonda").openPopup();

var bandara = L.marker([-0.9186235446282526, 119.90591876295876], {icon: halte}).addTo(map);
bandara.bindPopup("<b>Koridor 03M, 03Y, 04</b><br>Bandara Mutiara SIS Al-Jufri").openPopup();

var tipo = L.marker([-0.861691510126032, 119.82640439443291], {icon: halte}).addTo(map);
tipo.bindPopup("<b>Koridor 04</b><br>Terminal Tipo").openPopup();

var mylocation = L.marker([-0.9046816637364391, 119.85719238352775], {icon: placeholder}).addTo(map);

var locations = [
    { name: "Puskesmas Tawaeli", coords: [-0.7338407550327789, 119.86344335735888] },
    { name: "Puskesmas Kayumalue", coords: [-0.755936556267089, 119.86509754175404] },
    { name: "Taipa Beach", coords: [-0.7817588403907986, 119.86054648295602] },
    { name: "Brimob", coords: [-0.7866839301220164, 119.87278639954381] },
    { name: "Terminal Mamboro", coords: [-0.8056757371920881, 119.8829766530732] },
    { name: "Huntap Tondo 1", coords: [-0.8285389754048974, 119.90225003771153] },
    { name: "Islamic Center Untad", coords: [-0.8427967197838669, 119.89518617241072] },
    { name: "Universitas Terbuka", coords: [-0.8359395055112632, 119.88603872614767] },
    { name: "Undata", coords: [-0.8576187175614293, 119.88400378395914] },
    { name: "Puskesmas Talise", coords: [-0.875806328985757, 119.87355917066517] },
    { name: "Polresta", coords: [-0.8898532643076232, 119.87001038394516] },
    { name: "Korem", coords: [-0.8945619023114051, 119.8698003995537] },
    { name: "Titik 0 Km", coords: [-0.8968645748861822, 119.86882979955347] },
    { name: "Telkom", coords: [-0.8966926198585693, 119.88007882616067] },
    { name: "Moh Hatta", coords: [-0.8963248023901789, 119.8733099284463] },
    { name: "Hasanuddin", coords: [-0.8972202025710676, 119.86961815280853] },
    { name: "Gajah Mada", coords: [-0.8980872748859239, 119.86325677295517] },
    { name: "Sis Aljufri", coords: [-0.9021450650414081, 119.85819345731967] },
    { name: "SMPN 3", coords: [-0.9026231926669143, 119.8560239839441] },
    { name: "Anutapura", coords: [-0.8990790999261201, 119.84926656622024] },
    { name: "Masjid Raya", coords: [-0.8935725544647264, 119.85229799499447] },
    { name: "Wahid Hasyim", coords: [-0.8932050196290701, 119.85898328395288] },
    { name: "Kimaja", coords: [-0.891869019538835, 119.86417561284324] },
    { name: "Hi Hayun", coords: [-0.8922413388016054, 119.86808047693663] },
    { name: "SMPN 2", coords: [-0.8998697199815172, 119.87345899953338] },
    { name: "Kartini", coords: [-0.9011031751573151, 119.88109618395309] },
    { name: "Puskesmas Birobuli", coords: [-0.9190579463012689, 119.89530937289642] },
    { name: "Basrah 1", coords: [-0.9188808066626376, 119.88883704069386] },
    { name: "Basrah 2", coords: [-0.9188813729494272, 119.87765924052087] },
    { name: "TMP", coords: [-0.9191173769806016, 119.8805560270196] },
    { name: "711", coords: [-0.9168132684075675, 119.87633192619239] },
    { name: "Pasar Masomba", coords: [-0.9081975204702778, 119.8791778284412] },
    { name: "Monginsidi", coords: [-0.9039147477227953, 119.87460875734999] },
    { name: "KPP Pratama", coords: [-0.9136800306506299, 119.8904660463807] },
    { name: "Kejaksaan", coords: [-0.9099403655806827, 119.88959079952919] },
    { name: "Rumah Sakit Bayangkara", coords: [-0.8889229744290549, 119.86814448624376] },
    { name: "Tombolututu", coords: [-0.8836283535134855, 119.87923065731674] },
    { name: "Inspektorat", coords: [-0.8867159743226897, 119.87567585734655] },
    { name: "SMAN 1", coords: [-0.8937549921118731, 119.87482228395055] },
    { name: "Silae", coords: [-0.8716411228371908, 119.83320536596054] },
    { name: "PGM", coords: [-0.8832635569470146, 119.84237098397277] },
    { name: "Palu Plaza", coords: [-0.8992815953608493, 119.86070539730491] },
    { name: "Pue Bongo 1", coords: [-0.920108694863649, 119.85630700619393] },
    { name: "Pue Bongo 2", coords: [-0.9090684283611575, 119.85616725752963] },
    { name: "Bundaran Palupi", coords: [-0.9220738312143476, 119.85858714175453] },
    { name: "Pasar TavanJuka", coords: [-0.9224315213923467, 119.8649140839432] },
    { name: "Puskesmas Mabelopura", coords: [-0.9185210860355997, 119.87547872617795] }
];

locations.forEach(function(location) {
    var marker = L.marker(location.coords, { icon: halte }).addTo(map);
    marker.bindPopup("<b>Halte Bus</b><br>" + location.name).openPopup();
    halteLayer.addLayer(marker);
});

var koridor1 = L.Routing.control({
    waypoints: [
        L.latLng(-0.7083225129838916, 119.85717594472423), // Titik awal
        L.latLng(-0.8962935334683956, 119.87152201399213)  // Titik tujuan
    ],
    router: L.Routing.osrmv1({
        serviceUrl: 'https://router.project-osrm.org/route/v1' // URL OSRM
    }),
    routeWhileDragging: false,
    createMarker: function() {
        return L.marker([0, 0], { icon: halte, dragabble: false }); // Menggunakan ikon kustom
    },
    lineOptions: {
        styles: [{ color: '#f56124', opacity: 0.7, weight: 5 }] // Mengubah warna jalur di sini
    },
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    instructions: false,
    show: false,
    createControl: false
}).addTo(map);

var koridor2 = L.Routing.control({
    waypoints: [
        L.latLng(-0.8992757504131088, 119.89004821389541), // Titik awal
        L.latLng(-0.9033001892403326, 119.85187800637569)  // Titik tujuan
    ],
    router: L.Routing.osrmv1({
        serviceUrl: 'https://router.project-osrm.org/route/v1' // URL OSRM
    }),
    routeWhileDragging: false,
    createMarker: function() {
        return L.marker([0, 0], { icon: halte, dragabble: false }); // Menggunakan ikon kustom
    },
    lineOptions: {
        styles: [{ color: '#ea9322', opacity: 0.7, weight: 5 }] // Mengubah warna jalur di sini
    },
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    instructions: false,
    show: false,
    createControl: false
}).addTo(map);

var koridor21 = L.Routing.control({
    waypoints: [
        L.latLng(-0.9033001892403326, 119.85187800637569), // Titik awal
        L.latLng(-0.8992757504131088, 119.89004821389541)  // Titik tujuan
    ],
    router: L.Routing.osrmv1({
        serviceUrl: 'https://router.project-osrm.org/route/v1' // URL OSRM
    }),
    routeWhileDragging: false,
    createMarker: function() {
        return L.marker([0, 0], { icon: halte, dragabble: false }); // Menggunakan ikon kustom
    },
    lineOptions: {
        styles: [{ color: '#ea9322', opacity: 0.7, weight: 5 }] // Mengubah warna jalur di sini
    },
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    instructions: false,
    show: false,
    createControl: false
}).addTo(map);

var koridor3m = L.Routing.control({
    waypoints: [
        L.latLng(-0.9186235446282526, 119.90591876295876), // Titik awal
        L.latLng(-0.8962935334683956, 119.87152201399213)  // Titik tujuan
    ],
    router: L.Routing.osrmv1({
        serviceUrl: 'https://router.project-osrm.org/route/v1' // URL OSRM
    }),
    routeWhileDragging: false,
    createMarker: function() {
        return L.marker([0, 0], { icon: halte, dragabble: false }); // Menggunakan ikon kustom
    },
    lineOptions: {
        styles: [{ color: 'teal', opacity: 0.7, weight: 5 }] // Mengubah warna jalur di sini
    },
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    instructions: false,
    show: false,
    createControl: false
}).addTo(map);

var koridor3y = L.Routing.control({
    waypoints: [
        L.latLng(-0.9186235446282526, 119.90591876295876), // Titik awal
        L.latLng(-0.8992757504131088, 119.89004821389541),
        L.latLng(-0.8962935334683956, 119.87152201399213)  // Titik tujuan
    ],
    router: L.Routing.osrmv1({
        serviceUrl: 'https://router.project-osrm.org/route/v1' // URL OSRM
    }),
    routeWhileDragging: false,
    createMarker: function() {
        return L.marker([0, 0], { icon: halte, dragabble: false }); // Menggunakan ikon kustom
    },
    lineOptions: {
        styles: [{ color: 'green', opacity: 0.7, weight: 5 }] // Mengubah warna jalur di sini
    },
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    instructions: false,
    show: false,
    createControl: false
}).addTo(map);

var koridor4 = L.Routing.control({
    waypoints: [
        L.latLng(-0.861691510126032, 119.82640439443291),
        L.latLng(-0.9186235446282526, 119.90591876295876)  // Titik tujuan
    ],
    router: L.Routing.osrmv1({
        serviceUrl: 'https://router.project-osrm.org/route/v1' // URL OSRM
    }),
    routeWhileDragging: false,
    createMarker: function() {
        return L.marker([0, 0], { icon: halte, dragabble: false }); // Menggunakan ikon kustom
    },
    lineOptions: {
        styles: [{ color: 'skyblue', opacity: 0.7, weight: 5 }] // Mengubah warna jalur di sini
    },
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    instructions: false,
    show: false,
    createControl: false
}).addTo(map);

koridor1.on('routesfound', function(e) {
    // Menghapus elemen kotak instruksi
    var routingContainer = document.querySelector('.leaflet-routing-container');
    if (routingContainer) {
        routingContainer.remove();
    }
})

koridor2.on('routesfound', function(e) {
    // Menghapus elemen kotak instruksi
    var routingContainer = document.querySelector('.leaflet-routing-container');
    if (routingContainer) {
        routingContainer.remove();
    }
})

koridor21.on('routesfound', function(e) {
    // Menghapus elemen kotak instruksi
    var routingContainer = document.querySelector('.leaflet-routing-container');
    if (routingContainer) {
        routingContainer.remove();
    }
})

koridor3m.on('routesfound', function(e) {
    // Menghapus elemen kotak instruksi
    var routingContainer = document.querySelector('.leaflet-routing-container');
    if (routingContainer) {
        routingContainer.remove();
    }
})

koridor3y.on('routesfound', function(e) {
    // Menghapus elemen kotak instruksi
    var routingContainer = document.querySelector('.leaflet-routing-container');
    if (routingContainer) {
        routingContainer.remove();
    }
})

koridor4.on('routesfound', function(e) {
    // Menghapus elemen kotak instruksi
    var routingContainer = document.querySelector('.leaflet-routing-container');
    if (routingContainer) {
        routingContainer.remove();
    }
})



