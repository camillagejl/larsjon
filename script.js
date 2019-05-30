document.addEventListener("DOMContentLoaded", start);

function start() {
    console.log('is touch:', is_touch_device());

    // Tjekker, om enheden er touch eller har en mus, og tilføjer den tilsvarende klasse til "html". Denne klasse bruges
    // bøgerne, for at vide, om man kan hover over bøgerne eller ej.
    document.querySelector('html').classList.remove('is_touch_device', 'is_not_touch_device');
    document.querySelector('html').classList.add(
        is_touch_device() ? 'is_touch_device' : 'is_not_touch_device'
    );

    function is_touch_device() {
        var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
        var mq = function (query) {
            return window.matchMedia(query).matches;
        }

        if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
            return true;
        }

        // include the 'heartz' as a way to have a non matching MQ to help terminate the join
        // https://git.io/vznFH
        var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
        return mq(query);
    }


    document.querySelector(".burger_menu").addEventListener("click", function () {
        document.querySelector("nav").classList.toggle("mobile_hidden");
        document.querySelector("header").classList.toggle("hidden");
        document.querySelector("main").classList.toggle("hidden");
    });

    // --------------------- nav menu ------------------

    //https://codemyui.com/sticky-sidebar-navigation-on-scroll/?fbclid=IwAR1BWZ7mLpb_EUsm7mUra_6SpXtGt5LDsqpUuPtFRa4HwJagNzSU0Po-vpU

    let mainNavLinks = document.querySelectorAll("nav ul li a");
    // let mainSections = document.querySelectorAll("main section");

    let lastId;
    let cur = [];

    window.addEventListener("scroll", event => {
        let fromTop = window.scrollY + 450;

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
    let jsonData = await fetch(pagesUrl);
    section = await jsonData.json();
    insertHvemErVi();
}

function insertHvemErVi() {
    section.forEach(section => {
        let template =
            `
            <section>
                <div class="content">
                    <div class="image_content">
                        <img src="${section.billede.guid}">
                    </div>
                    <div class="text_content">
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

getHvemErVi();


// ----- VORES TEAM -----

destVoresTeam = document.querySelector(".vores_team_grid");

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
            <div class="team_member">
                        <div class="image_content">
                            <img src="${section.billede.guid}">
                        </div>
                        <div class="text_content">
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
                        <img src="${section.billede.guid}">
                    </div>
                    <div class="text_content">
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
                        <img src="${section.billede.guid}">
                    </div>
                    <div class="text_content">
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
                        <img src="${section.billede.guid}">
                    </div>
                    <div class="text_content">
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
<div class="bog">
                    <img src="${section.billede.guid}">
                    <div class="bog__details text_content">
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
    destKontakt.querySelector("#kontakt_tlf").innerHTML = `${section.kontakt_tlf}`;
    destKontakt.querySelector("#kontakt_email").innerHTML = `${section.kontakt_email}`;
    destKontakt.querySelector("#presse_overskrift").textContent = `${section.presse_overskrift}`;
    destKontakt.querySelector("#presse_tlf").innerHTML = `${section.presse_tlf}`;
    destKontakt.querySelector("#presse_email").innerHTML = `${section.presse_email}`;

}

getKontakt();


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
                    galleri.querySelector(".desktop_gallery").innerHTML += `<img src="${image.guid}">`;

                    let template =
                        `
                            <div class="mySlides fade">
<!--                            <div class="numbertext"></div>-->
                            <img src="${image.guid}"></div>
`;
                    galleri.querySelector(".slideshow-container").insertAdjacentHTML("beforeend", template);

                });

            }
        });

    });
    showSlides();
}

getGallery();


/*************** Slideshow ****************/

function showSlides() {
    document.querySelectorAll(".slideshow-container").forEach(function (slideshow) {
        // console.log("Starting slideshow", slideshow);
        let i;
        let slides = slideshow.getElementsByClassName("mySlides");
        let currentSlide = 0;

        let nextSlide = function () {
            // console.log("Next slide ["+currentSlide+"]", slideshow);
            // Hide all
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            // Next slide, and show that slide
            currentSlide++;
            if (currentSlide > slides.length) {
                currentSlide = 1
            }
            slides[currentSlide - 1].style.display = "block";

            // Wait 2 sec before switching again
            setTimeout(nextSlide, 2000);
        };

        if (slides.length === 0) {
            console.log("No images loaded in slideshow", slideshow);
        } else {
            nextSlide();
        }
    });
}