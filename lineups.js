/**
 * CS2 Utility Data - Burası yeni taktik eklemenin en hızlı yoludur!
 * Tek yapman gereken aşağıdaki listeye yeni bir satır (nesne) eklemek.
 */

const lineupData = {
    mirage: {
        ct: [
            {
                type: 'smoke',
                title: 'T Ramp Smoke',
                target: 'T Ramp',
                from: 'A Firebox',
                tech: 'Regular Throw',
                images: ['mirage/ct/trampfromfirebox.webp', 'mirage/ct/trampfromfirebox2.webp']
            },
             
            {
                "type": "molotov",
                "title": "A Site Molly",
                "target": "A Site",
                "from": "CT Base",
                "tech": "Sol Tık (Düz)",
                "images": [
                    "mirage/ct/mollysitefromct.webp",
                    "mirage/ct/mollysitefromct2.webp",
                    "mirage/ct/mollysitefromct3.webp"
                ]
            },
            {
                "type": "smoke",
                "title": "Under Palace'dan Palace Smoke",
                "target": "Palace",
                "from": "Under Palace",
                "tech": "Sol Tık (Düz)",
                "images": [
                    "mirage/ct/palacefromunderpalace2.webp",
                    "mirage/ct/palacefromunderpalace.webp",
                    "mirage/ct/palacefromunderpalace3.webp"
                ]
            },
            {
                "type": "smoke",
                "title": "Kitchen Kapı'dan Palace Smoke",
                "target": "Palace",
                "from": "Kitchen Kapı",
                "tech": "Jumpthrow",
                "images": [
                    "mirage/ct/palacefromct.webp",
                    "mirage/ct/palacefromct2.webp",
                    "mirage/ct/palacefromct3.webp"
                ]
            },
            {
                "type": "flash",
                "title": "Under Palace'dan Rampa'ya Flash",
                "target": "A Site",
                "from": "Under Palace",
                "tech": "Jumpthrow",
                "images": [
                    "mirage/ct/rampfromunderpalace.webp",
                    "mirage/ct/rampfromunderpalace2.webp"
                ]
            },
            {
                "type": "molotov",
                "title": "Jungle'dan Tetris Molly",
                "target": "Tetris",
                "from": "Jungle",
                "tech": "Sol Tık (Düz)",
                "images": [
                    "mirage/ct/ramptetris.webp",
                    "mirage/ct/ramptetris1.webp",
                    "mirage/ct/ramptetris3.webp"
                ]
            },
            {
                "type": "molotov",
                "title": "Jungle'dan Rampa Molly",
                "target": "Rampa",
                "from": "Jungle",
                "tech": "Sol Tık (Düz)",
                "images": [
                    "mirage/ct/ramptetris.webp",
                    "mirage/ct/ramptetris2.webp",
                    "mirage/ct/ramptetris4.webp"
                ]
            },
            {
                "type": "flash",
                "title": "A Site Flash",
                "target": "A Site",
                "from": "CT",
                "tech": "Sol Tık (Düz)",
                "images": [
                    "mirage/ct/siteflashfromct.webp",
                    "mirage/ct/siteflashfromct2.webp"
                ]
            }
           
        ],
        t: [
            
            {
                "type": "smoke",
                "title": "B Kapı Smoke",
                "target": "B Kapı ",
                "from": "Truck",
                "tech": "Sol Tık (Düz)",
                "images": [
                    "mirage/t/bdoorfromtruck.webp",
                    "mirage/t/bdoorfromtruck2.webp",
                    "mirage/t/bdoorfromtruck3.webp"
                ]
            },
            {
                "type": "smoke",
                "title": "B Kapı Smoke",
                "target": "B Kapı ",
                "from": "Truck",
                "tech": "Sol Tık (Düz)",
                "images": [
                    "mirage/t/bdoorfromtruck.webp",
                    "mirage/t/bdoorfromtruck2.webp",
                    "mirage/t/bdoorfromtruck3.webp"
                ]
            },
            {
                "type": "smoke",
                "title": "B Kapı Smoke",
                "target": "B Kapı",
                "from": "B Apps",
                "tech": "Jumpthrow",
                "images": [
                    "mirage/t/bdoorsmokefrombapps2.webp",
                    "mirage/t/bdoorsmokefrombapps3.webp",
                    "mirage/t/bdoorsmokefrombapps.webp"
                ]
            },
            {
                "type": "flash",
                "title": "B Entry Flash",
                "target": "B Side",
                "from": "B Apps",
                "tech": "W + Jumpthrow",
                "images": [
                    "mirage/t/bentryfrombapps.webp",
                    "mirage/t/bentryfrombapps2.webp"
                ]
            },
            {
                "type": "smoke",
                "title": "B Window Smoke",
                "target": "B Window",
                "from": "B Apps",
                "tech": "Jumpthrow",
                "images": [
                    "mirage/t/bwindowfrombapps.webp",
                    "mirage/t/bwindowfrombapps2.webp",
                    "mirage/t/bwindowfrombapps3.webp"
                ]
            },
            {
                "type": "smoke",
                "title": "B Site İçinden Window Smoke",
                "target": "B Window",
                "from": "B Site",
                "tech": "Jumpthrow",
                "images": [
                    "mirage/t/bwindowfrombsite.webp",
                    "mirage/t/bwindowfrombsite2.webp",
                    "mirage/t/bwindowfrombsite3.webp"
                ]
            },
            {
                "type": "smoke",
                "title": "Palace'dan Con Smoke",
                "target": "Connector",
                "from": "Palace",
                "tech": "Sol Tık (Düz)",
                "images": [
                    "mirage/t/confrompalace.webp",
                    "mirage/t/confrompalace2.webp",
                    "mirage/t/confrompalace3.webp"
                ]
            },
            {
                "type": "flash",
                "title": "Connector Flash",
                "target": "Connector",
                "from": "Top Mid",
                "tech": "Sol Tık (Düz)",
                "images": [
                    "mirage/t/connectorflash_r.webp",
                    "mirage/t/connectorflash.webp"
                ]
            },
            {
                "type": "smoke",
                "title": "CT Smoke",
                "target": "CT Ticket",
                "from": "T Base",
                "tech": "Jumpthrow",
                "images": [
                    "mirage/t/ctspawnfromramp.webp",
                    "mirage/t/ctspawnfromramp2.webp",
                    "mirage/t/ctspawnfromramp3.webp"
                ]
            },
            {
                "type": "flash",
                "title": "B Site Flash",
                "target": "B Site",
                "from": "B Apps",
                "tech": "Sol Tık (Düz)",
                "images": [
                    "mirage/t/flashsitefrombapps.webp",
                    "mirage/t/flashsitefrombapps2.webp"
                ]
            },
            {
                "type": "smoke",
                "title": "Def Box'dan Jungle Smoke",
                "target": "Jungle",
                "from": "Default Box",
                "tech": "Sol Tık (Düz)",
                "images": [
                    "mirage/t/junglefromdefault.webp",
                    "mirage/t/junglefromdefault2.webp",
                    "mirage/t/junglefromdefault3.webp"
                ]
            },
            {
                "type": "smoke",
                "title": "Tetris'den Jungle Smoke",
                "target": "Jungle",
                "from": "Tetris",
                "tech": "Sol Tık (Düz)",
                "images": [
                    "mirage/t/junglefromtetris.webp",
                    "mirage/t/junglefromtetris2.webp",
                    "mirage/t/junglefromtetris3.webp"
                ]
            },
            {
                "type": "smoke",
                "title": "Short Sol Taraf Smoke",
                "target": "Short Sol Taraf",
                "from": "B Apps",
                "tech": "Jumpthrow",
                "images": [
                    "mirage/t/leftshortfrombapps.webp",
                    "mirage/t/leftshortfrombapps2.webp",
                    "mirage/t/leftshortfrombapps3.webp"
                ]
            },
            {
                "type": "molotov",
                "title": "Bench Molly",
                "target": "B Bench",
                "from": "B Apps",
                "tech": "Shift Walk Sol Tık",
                "images": [
                    "mirage/t/mollyfrombapps.webp",
                    "mirage/t/mollyfrombapps2.webp"
                ]
            },
            {
                "type": "molotov",
                "title": "Molly Under Palace",
                "target": "Under Palace",
                "from": "Palace",
                "tech": "Koşarak Sol Tık",
                "images": [
                    "mirage/t/mollyunderpalacefrompalace.webp",
                    "mirage/t/mollyunderpalacefrompalace2.webp",
                    "mirage/t/mollyunderpalacefrompalace3.webp"
                ]
            },
            {
                "type": "smoke",
                "title": "Short Sağ Taraf Smoke",
                "target": "Short Sağ Taraf ",
                "from": "B Apps",
                "tech": "Sol Tık (Düz)",
                "images": [
                    "mirage/t/rightshortfrombapps.webp",
                    "mirage/t/rightshortfrombapps2.webp",
                    "mirage/t/rightshortfrombapps3.webp"
                ]
            },
            {
                "type": "flash",
                "title": "B Rush Flash",
                "target": "B Site",
                "from": "B Apps",
                "tech": "Koşarak Sol Tık",
                "images": [
                    "mirage/t/rushflashbapps.webp",
                    "mirage/t/rushflashbapps2.webp"
                ]
            },
            {
                "type": "molotov",
                "title": "Sandwich Molly",
                "target": "Sandwich",
                "from": "T Ramp",
                "tech": "Sol Tık (Düz)",
                "images": [
                    "mirage/t/sandwichfromramp.webp",
                    "mirage/t/sandwichfromramp2.webp",
                    "mirage/t/sandwichfromramp3.webp"
                ]
            },
            {
                "type": "smoke",
                "title": "T Base'den Short Smoke",
                "target": "Short",
                "from": "T Base",
                "tech": "Jumpthrow",
                "images": [
                    "mirage/t/shortfrombase3.webp",
                    "mirage/t/shortfrombase2.webp",
                    "mirage/t/shortfrombase.webp"
                ]
            },
            {
                "type": "smoke",
                "title": "Top Mid'den Short Smoke",
                "target": "Short",
                "from": "Top Mide",
                "tech": "Sol Tık (Düz)",
                "images": [
                    "mirage/t/shortfromtopcon.webp",
                    "mirage/t/shortfromtopcon2.webp"
                ]
            },
            {
                "type": "smoke",
                "title": "Tetris'den Stairs Smoke",
                "target": "Stairs",
                "from": "Tetris",
                "tech": "Jumpthrow",
                "images": [
                    "mirage/t/stairsfromtetris.webp",
                    "mirage/t/stairsfromtetris2.webp",
                    "mirage/t/stairsfromtetris3.webp"
                ]
            },
            {
                "type": "smoke",
                "title": "T Rampa'dan Stairs Smoke",
                "target": "Stairs",
                "from": "T Rampa",
                "tech": "Jumpthrow",
                "images": [
                    "mirage/t/stairsfromtramp2.webp",
                    "mirage/t/stairsfromtramp.webp",
                    "mirage/t/stairsfromtramp3.webp",
                    "mirage/t/stairsfromtramp4.webp"
                ]
            },
            {
                "type": "smoke",
                "title": "T Rampa'dan Top Con Smoke",
                "target": "Top Con",
                "from": "T Rampa",
                "tech": "Jumpthrow",
                "images": [
                    "mirage/t/topconfromramp3.webp",
                    "mirage/t/topconfromramp.webp",
                    "mirage/t/topconfromramp2.webp"
                ]
            },
            {
                "type": "smoke",
                "title": "Top Mid'den Window Smoke",
                "target": "Window",
                "from": "Top Mid",
                "tech": "Koşarak Sol Tık",
                "images": [
                    "mirage/t/windowfromtopmid.webp",
                    "mirage/t/windowfromtopmid2.webp"
                ]
            }
           
        ]
    }
};

/**
 * Kartları sayfaya basan fonksiyon
 */
function renderLineups(mapName) {
    const mapData = lineupData[mapName];
    if (!mapData) return;

    const ctGrid = document.getElementById('ct-grid');
    const tGrid = document.getElementById('t-grid');

    if (ctGrid) {
        ctGrid.innerHTML = mapData.ct.length ? mapData.ct.map(createCardHTML).join('') : '<p>Henüz CT taktici yok.</p>';
    }
    if (tGrid) {
        tGrid.innerHTML = mapData.t.length ? mapData.t.map(createCardHTML).join('') : '<p>Henüz T taktici yok.</p>';
    }

    // Kartlar oluştuktan sonra lightbox tıklama olaylarını bağla
    if (typeof bindLightboxEvents === 'function') {
        bindLightboxEvents();
    }
}

function createCardHTML(lineup) {
    const imagesHTML = lineup.images.map((img, index) => `
        <div class="image-wrapper">
            <img src="${img}" alt="${lineup.title} - Görsel ${index + 1}" loading="lazy">
            <span class="image-label">Görüntü ${index + 1}</span>
        </div>
    `).join('');

    return `
        <details class="lineup-card" name="lineup-group">
            <summary class="lineup-header">
                <div class="header-left">
                    <span class="utility-type ${lineup.type}">${lineup.type}</span>
                    <h3>${lineup.title}</h3>
                </div>
                <span class="toggle-icon">▼</span>
            </summary>
            
            <div class="lineup-content">
                <div class="lineup-details">
                    <p><strong>Hedef:</strong> ${lineup.target}</p>
                    <p><strong>Nereden:</strong> ${lineup.from}</p>
                    <p><strong>Teknik:</strong> ${lineup.tech}</p>
                </div>
                <div class="lineup-images">
                    ${imagesHTML}
                </div>
            </div>
        </details>
    `;
}
