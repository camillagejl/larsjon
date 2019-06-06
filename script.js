document.addEventListener("DOMContentLoaded", start);

function start() {
    console.log('is touch:', is_touch_device());

    // Tjekker, om enheden er touch eller har en mus, og tilføjer den tilsvarende klasse til "html". Denne klasse bruges
    // til bøgerne, for at vide, om man kan hover over bøgerne eller ej.
    document.querySelector('html').classList.remove('is_touch_device', 'is_not_touch_device');
    document.querySelector('html').classList.add(
        is_touch_device() ? 'is_touch_device' : 'is_not_touch_device'
    );

    function is_touch_device() {
        var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
        var mq = function (query) {
            return window.matchMedia(query).matches;
        };

        if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
            return true;
        }

        // include the 'heartz' as a way to have a non matching MQ to help terminate the join
        // https://git.io/vznFH
        var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
        return mq(query);
    }


    // --------------------- nav menu ------------------
    let mainNavLinks = document.querySelectorAll("nav ul li a");

    document.querySelector(".burger_menu").addEventListener("click", function () {
        document.querySelector("nav").classList.toggle("menu_position");
        document.querySelector('html').classList.toggle('hide_overflow');
        document.querySelector('#burger_icon').classList.toggle('hidden');
        document.querySelector('#burger_icon_x').classList.toggle('hidden');
    });

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function () {
            document.querySelector("nav").classList.toggle("menu_position");
            document.querySelector('html').classList.toggle('hide_overflow');
            document.querySelector('#burger_icon').classList.toggle('hidden');
            document.querySelector('#burger_icon_x').classList.toggle('hidden');
        });
    });

    // Menu-linjen viser hvor man er på siden
    // https://codemyui.com/sticky-sidebar-navigation-on-scroll/?fbclid=IwAR1BWZ7mLpb_EUsm7mUra_6SpXtGt5LDsqpUuPtFRa4HwJagNzSU0Po-vpU

    let lastId;
    let cur = [];

    window.addEventListener("scroll", event => {
        let fromTop = window.scrollY + 350;

        mainNavLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add("current");
            } else {
                link.classList.remove("current");
            }
        });
    });


}


// ----- HVEM ER VI? -----

destHvemErVi = document.querySelector("#hvemervi");

async function getHvemErVi() {
    let pagesUrl = "https://camillagejl.com/kea/2-semester/larsjon/wordpress/wp-json/wp/v2/hvemervi?per_page=100";
    // Vi henter dataen fra en json-fil der hører til "hvem er vi?" podden som vi har liggende i Wordpress //
    let jsonData = await fetch(pagesUrl);
    section = await jsonData.json();
    insertHvemErVi(); // Vi aktiverer HvemErVi funktionen for at sætte indholdet ind //
}

function insertHvemErVi() {
    section.forEach(section => {
        let template =
            `
            <section>
                <div class="content">
                    <div class="image_content">
                        <img src="${section.billede.guid}" alt="Billede til: ${section.title.rendered}">
                    </div>
                    <div class="text_content" id="${section.slug}">
                        <h2>${section.overskrift}</h2>
                        <p>
                            ${section.indhold}
                        </p>
                    </div>
                </div>
            </section>
`;
        destHvemErVi.insertAdjacentHTML("beforeend", template);
    });
}

// Vi sætter billede, overskrift og indhold ind i vores template. Disse svarer til vores fields i pods. //
getHvemErVi();


// ----- VORES TEAM -----

destVoresTeam = document.querySelector(".grid");

async function getVoresTeam() {
    let pagesUrl = "https://camillagejl.com/kea/2-semester/larsjon/wordpress/wp-json/wp/v2/vores_team?per_page=100";
    let jsonData = await fetch(pagesUrl);
    section = await jsonData.json();
    insertVoresTeam();
}

function insertVoresTeam() {
    section.forEach(section => {
        let template =
            `
            <div class="team_member sub_section">
                        <div class="image_content">
                            <img src="${section.billede.guid}" alt="Billede til: ${section.title.rendered}">
                        </div>
                        <div class="text_content" id="${section.slug}">
                            <h3>${section.navn}</h3>
                            <h4>${section.stilling}</h4>
                            <p>
                                ${section.indhold}
                            </p>

                        </div>
                    </div>
`;
        destVoresTeam.insertAdjacentHTML("beforeend", template);
    });
}

getVoresTeam();


/*************** Firma og events ****************/

destFirma_events = document.querySelector("#firma_events");

async function getFirma_events() {
    let pagesUrl = "https://camillagejl.com/kea/2-semester/larsjon/wordpress/wp-json/wp/v2/firma_events?per_page=100";
    let jsonData = await fetch(pagesUrl);
    section = await jsonData.json();
    insertFirma_events();
}

function insertFirma_events() {
    section.forEach(section => {
        let template =
            `                   
                <section>
                <div class="content">
                    <div class="image_content">
                        <img src="${section.billede.guid}" alt="Billede til: ${section.title.rendered}">
                    </div>
                    <div class="text_content" id="${section.slug}">
                        <h2>${section.overskrift}</h2>
                        <p>
                            ${section.indhold}
                        </p>
                    </div>
                </div>
            </section>
`;
        destFirma_events.insertAdjacentHTML("beforeend", template);
    });
}

getFirma_events();


// ----- BLOMSTERSKOLEN -----

destKurser = document.querySelector("#kurser_info");
destForedrag = document.querySelector("#foredrag");

async function getBlomsterskolen() {
    let pagesUrl = "https://camillagejl.com/kea/2-semester/larsjon/wordpress/wp-json/wp/v2/blomsterskolen?per_page=100";
    let jsonData = await fetch(pagesUrl);
    section = await jsonData.json();
    insertBlomsterskolen();
}

function insertBlomsterskolen() {
    section.forEach(section => {
        let template =
            `
            <section>
                <div class="content">
                    <div class="image_content">
                        <img src="${section.billede.guid}" alt="Billede til: ${section.title.rendered}">
                    </div>
                    <div class="text_content" id="${section.slug}">
                        <h2>${section.overskrift}</h2>
                            ${section.indhold}
                    </div>
                </div>
            </section>
`;

        if (section.kategori[0] == "Kurser") {
            destKurser.insertAdjacentHTML("beforeend", template);
        }

        if (section.kategori[0] == "Foredrag") {
            destForedrag.insertAdjacentHTML("beforeend", template);
        }
    });
}

getBlomsterskolen();


// ----- KURSER -----

destKurserSection = document.querySelector("#kurser");

async function getKurser() {
    let pagesUrl = "https://camillagejl.com/kea/2-semester/larsjon/wordpress/wp-json/wp/v2/kurser?per_page=100";
    let jsonData = await fetch(pagesUrl);
    section = await jsonData.json();
    insertKurser();
}

function insertKurser() {
    section.forEach(section => {
        let template =
            `
                <div class="content_column">
                    <div class="image_content">
                        <img src="${section.billede.guid}" alt="Billede til: ${section.title.rendered}">
                    </div>
                    <div class="text_content" id="${section.slug}">
                        <h2>${section.overskrift}</h2>
                        <p>
                            ${section.indhold}
                        </p>
                    </div>
                </div>
`;

        destKurserSection.insertAdjacentHTML("beforeend", template);
    });
}

getKurser();


// ----- BØGER -----

destBoeger = document.querySelector("#boeger .grid-3");

async function getBoeger() {
    let pagesUrl = "https://camillagejl.com/kea/2-semester/larsjon/wordpress/wp-json/wp/v2/boeger?per_page=100";
    let jsonData = await fetch(pagesUrl);
    section = await jsonData.json();
    insertBoeger();
}

function insertBoeger() {
    section.forEach(section => {
        let template =
            `
<div class="bog sub_section">
                    <img src="${section.billede.guid}" alt="Billede til: ${section.title.rendered}">
                    <div class="bog__details text_content" id="${section.slug}">
                        <h3>${section.titel}</h3>
                        <h4>${section.udgivelse}</h4>
                        <p>${section.indhold}</p>
                    </div>
                </div>
`;

        destBoeger.insertAdjacentHTML("beforeend", template);
    });
}

getBoeger();


// ----- Find & Kontakt -----

destKontakt = document.querySelector("#find_kontakt");

async function getKontakt() {
    let pagesUrl = "https://camillagejl.com/kea/2-semester/larsjon/wordpress/wp-json/wp/v2/kontakt/111";
    let jsonData = await fetch(pagesUrl);
    section = await jsonData.json();
    insertKontakt();
}

function insertKontakt() {
    destKontakt.querySelector("#adresse_overskrift").textContent = `${section.adresse_overskrift}`;
    destKontakt.querySelector("#adresse").innerHTML = `${section.adresse}`;
    destKontakt.querySelector("#aabningstider_overskrift").textContent = `${section.aabningstider_overskrift}`;
    destKontakt.querySelector("#aabningstider").innerHTML = `${section.aabningstider}`;
    destKontakt.querySelector("#kontakt_overskrift").textContent = `${section.kontakt_overskrift}`;
    destKontakt.querySelector("#kontakt_tlf").innerHTML = `Tlf: <a href="tel:${section.kontakt_tlf}">${section.kontakt_tlf}</a>`;
    destKontakt.querySelector("#kontakt_email").innerHTML = `Email: <a href="mailto:${section.kontakt_email}">${section.kontakt_email}</a>`;
    destKontakt.querySelector("#presse_overskrift").textContent = `${section.presse_overskrift}`;
    destKontakt.querySelector("#presse_tlf").innerHTML = `Tlf: <a href="tel:${section.presse_tlf}">${section.presse_tlf}</a>`;
    destKontakt.querySelector("#presse_email").innerHTML = `Email: <a href="mailto:${section.presse_email}">${section.presse_email}</a>`;

}

getKontakt();


// ----- Webshop -----

destWebshop = document.querySelector("#webshop");

async function getWebshop() {
    let pagesUrl = "https://camillagejl.com/kea/2-semester/larsjon/wordpress/wp-json/wp/v2/webshop/220";
    let jsonData = await fetch(pagesUrl);
    section = await jsonData.json();
    insertWebshop();
}

function insertWebshop() {
    destWebshop.querySelector("h2").textContent = `${section.overskrift}`;
    destWebshop.querySelector("p").innerHTML = `${section.indhold}`;

}

getWebshop();


// ----- GALLERIER -----

destGallery = document.querySelectorAll(".gallery");

async function getGallery() {
    let pagesUrl = "https://camillagejl.com/kea/2-semester/larsjon/wordpress/wp-json/wp/v2/galleri?per_page=100";
    let jsonData = await fetch(pagesUrl);
    section = await jsonData.json();
    insertGallery();
}

function insertGallery() {
    destGallery.forEach(galleri => {
        let galleryNumber = galleri.getAttribute("data-gallery-number");

        section.forEach(section => {
            if (section.galleri_nummer == galleryNumber) {

                section.billeder.forEach(image => {
                    galleri.querySelector(".desktop_gallery").innerHTML += `<img src="${image.guid}" alt="Galleri-billede">`;

                    let template =
                        `
                            <div class="mySlides fade">
<!--                            <div class="numbertext"></div>-->
                            <img src="${image.guid}" alt="Galleri-billede"></div>
`;
                    galleri.querySelector(".slideshow-container").insertAdjacentHTML("beforeend", template);

                });

            }
        });

    });
    showSlides();
}

getGallery();





// ----- Bottom gallery -----

destBottomGallery = document.querySelector("#bottom_gallery");

async function getBottomGallery() {
    let pagesUrl = "https://camillagejl.com/kea/2-semester/larsjon/wordpress/wp-json/wp/v2/galleri/226";
    let jsonData = await fetch(pagesUrl);
    section = await jsonData.json();
    insertBottomGallery();
}

function insertBottomGallery() {

    section.billeder.forEach(image => {
        destBottomGallery.innerHTML += `<img src="${image.guid}" alt="Galleri-billede">`;


    });

}

getBottomGallery();



/*************** Slideshow ****************/

function showSlides() {
    document.querySelectorAll(".slideshow-container").forEach(function (slideshow) {
        // console.log("Starting slideshow", slideshow);
        let i;
        let slides = slideshow.getElementsByClassName("mySlides");
        let currentSlide = 0;

        let nextSlide = function () {
            // console.log("Next slide ["+currentSlide+"]", slideshow);
            // Vi skjuler alle slides //
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            // Vi viser næste slide //
            currentSlide++;
            if (currentSlide > slides.length) {
                currentSlide = 1
            }
            slides[currentSlide - 1].style.display = "block";

            // Hvor længe hver slide skal vises //
            setTimeout(nextSlide, 2000);
        };

        if (slides.length === 0) {
            console.log("No images loaded in slideshow", slideshow);
        } else {
            nextSlide(); // næste slide vises //
        }
    });
}



//MAP
//document.addEventListener("DOMContentLoaded", hoverOver);


//--------------NEMLIG--------------
document.querySelector(".nemligbox").addEventListener("mouseover", changeColor1); //når musen rør .nemligbox, gå til funktion
document.querySelector(".nemligbox").addEventListener("mouseout", hoverOut1); //når musen kører væk fra .nemligbox, gå til funktion

//--------------LARSJON--------------
document.querySelector(".larsjon").addEventListener("mouseover", changeColor2);
document.querySelector(".larsjon").addEventListener("mouseout", hoverOut2);

//--------------BUTIK--------------
document.querySelector(".butikken").addEventListener("mouseover", changeColor3);
document.querySelector(".butikken").addEventListener("mouseout", hoverOut3);






//----------------------------NEMLIG----------------------------
function changeColor1() { //læser funktionen changeColor1
    console.log("color"); // vi tjekker at funktionen starter

    //HOVER FARVE
    let elements = document.getElementsByClassName("cls-2"); //laver en variabel der tager fat i alle classer ved navn "cls-2"
    let elements2 = document.getElementsByClassName("cls-3");

    for (let i = 0; i < elements.length; i++)
        elements[i].style.fill = "#698fb5"; // disse to linjer betyder at: for hvert koordinat der er i variablen "elements", skal der laves en style.fill med farven #698fb5
    for (let i = 0; i < elements2.length; i++)
        elements2[i].style.fill = "#698fb5";
}


function hoverOut1() {
    console.log("none");

    //HOVER-OUT FARVE
    let elements = document.getElementsByClassName("cls-2");
    let elements2 = document.getElementsByClassName("cls-3");

    for (let i = 0; i < elements.length; i++)
        elements[i].style.fill = "#698fb5";
    for (let i = 0; i < elements2.length; i++)
        elements2[i].style.fill = "#455e84";

}







//----------------------------LARSJON----------------------------
function changeColor2() {
    console.log("color");
    let elements2 = document.getElementsByClassName("cls-2");
    let elements = document.getElementsByClassName("cls-3");

    //HOVER FARVE
    for (let i = 0; i < elements2.length; i++)
        elements2[i].style.fill = "#a9b2c3";

    for (let i = 0; i < elements.length; i++)
        elements[i].style.fill = "#455e84";


}

function hoverOut2() {
    console.log("none");
    let elements2 = document.getElementsByClassName("cls-2");
    let elements = document.getElementsByClassName("cls-3");

    //HOVER-OUT FARVE
    for (let i = 0; i < elements2.length; i++)
        elements2[i].style.fill = "#698fb5";
    for (let i = 0; i < elements.length; i++)
        elements[i].style.fill = "#455e84";

}



//----------------------------BUTIKKEN----------------------------
function changeColor3() {
    console.log("color");

    //HOVER FARVE
    let elements = document.getElementsByClassName("cls-4");
    for (let i = 0; i < elements.length; i++)
        elements[i].style.fill = "#ff000d";


}

function hoverOut3() {
    console.log("none");

    //HOVER-OUT FARVE
    let elements = document.getElementsByClassName("cls-4");
    for (let i = 0; i < elements.length; i++)
        elements[i].style.fill = "#030c26";

}

function openForm() {
    document.getElementById("nyhedsbrev_form").style.display = "block";
}

function closeForm() {
    document.getElementById("nyhedsbrev_form").style.display = "none";
}

function submitNyhedsbrev() {
    document.getElementById("nyhedsbrev").style.display = "none";
    document.getElementById("nyhedsbrev_tak").style.display = "block";

}
