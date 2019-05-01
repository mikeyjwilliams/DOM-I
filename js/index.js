const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

/**
 *  Loop through the navigation items and display them.
 *  nodeList => navigationNl grabs 'nav a'
 *  navigationArr => array from nodeList iterates them.
 */
const navigationNl = document.querySelectorAll('nav a');
const navigationArr = Array.from(navigationNl);
for (let i = 0; i < navigationArr.length; i++) {
  navigationArr[i].textContent = siteContent["nav"]["nav-item-" + i];
}

/**
 *  Logo gets element 'logo-img' by id.
 *  setsAttribute src to display img.
 *  sets alt text with alt attribute.
 */
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

/** 
 * Cta h1 text => 'DOM IS AWESOME'
 * grab h1 in CTA.
 * create Text.
 * create <br>;
 * insert into cta->h1. 
 */
const ctaH1 = document.querySelector('.cta-text h1');
const headerText = 'DOM IS AWESOME';
ctaH1.textContent = headerText;
const ctaVerticalCenter = document.querySelector('.cta-text');

/**
 * button text => 'siteContent[btn][button]'
 * document object through => '.cta-text button'
 * pass the text content in.
 */
const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent["cta"]["button"];
console.log(ctaButton);



/**
 * img of a code snippet.
 * #cta-img => ctaImg selects document.
 * set attribute img siteContent object.
 */
const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

/**
 * h4's for .main-content
 * h4 for feature and about sections &
 * h4 for services, product, and vision. 
 */
const mainH4 = document.querySelectorAll('.text-content h4');

mainH4[0].textContent = siteContent["main-content"]["features-h4"];
mainH4[1].textContent = siteContent["main-content"]["about-h4"];
mainH4[2].textContent = siteContent["main-content"]["product-h4"];
mainH4[3].textContent = siteContent["main-content"]["services-h4"];
mainH4[4].textContent = siteContent["main-content"]["vision-h4"];

/**
 * add content too p's in '.text-content p's
 * for features, about, product, services, & vision.
 */
const mainPars = document.querySelectorAll('.text-content p');
mainPars[0].textContent = siteContent["main-content"]["features-content"];
mainPars[1].textContent = siteContent["main-content"]["about-content"];
mainPars[2].textContent = siteContent["main-content"]["product-content"];
mainPars[3].textContent = siteContent["main-content"]["services-content"];
mainPars[4].textContent = siteContent["main-content"]["vision-content"];

/**
 * image between top and bottom content.
 * attribute src name.
 * grab by id='middle-img'
 */
const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

/**
 * Contact info
 * split between
 * contactHeader and contactInfo.
 * grab by .contact h4 and .contact p
 */

const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent["contact"]["contact-h4"];
console.log(contactHeader);