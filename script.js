document.addEventListener("DOMContentLoaded", start);

function start() {

document.querySelector(".burger_menu").addEventListener("click", function () {
    document.querySelector("nav").classList.toggle("mobile_hidden");
    document.querySelector("header").classList.toggle("hidden");
    document.querySelector("main").classList.toggle("hidden");
});


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

    destVoresTeam = document.querySelector("#vores_team");
    async function getVoresTeam() {
        let pagesUrl = "https://camillagejl.com/kea/2-semester/larsjon/wordpress/wp-json/wp/v2/vores_team?per_page=100";
        let jsonData = await fetch(pagesUrl);
        section = await jsonData.json();
        insertVoresTeam();
    }

    function insertVoresTeam() {
        console.log("Jeg sætter HTML ind i vores_team");
        section.forEach(section => {
            let template =
                `
            <div class="sub_section">
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

    }
/*************** Firma og events ****************/

destFirma_events = document.querySelector("#firma_events");
    async function getFirma_events() {
        let pagesUrl = "https://camillagejl.com/kea/2-semester/larsjon/wordpress/wp-json/wp/v2/firma_events?per_page=100";
        let jsonData = await fetch(pagesUrl);
        section = await jsonData.json();
        insertFirma_events();
    }

    function insertFirma_events() {
        console.log("Jeg sætter HTML ind i Firma_events");
        section.forEach(section => {
            let template =
                `
           <div class="sub_section">
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
            destFirma_events.insertAdjacentHTML("beforeend", template);
        });
    }

    getFirma_events();



/*************** Slideshow ****************/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

