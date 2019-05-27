document.addEventListener("DOMContentLoaded", start);

function start() {

document.querySelector(".burger_menu").addEventListener("click", function () {
    document.querySelector("nav").classList.toggle("hidden");
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

/*************** Slideshow ****************/

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
