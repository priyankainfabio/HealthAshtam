const slides = [
  {
    kicker: "Root cause reversal",
    title: "Start with small daily shifts.",
    text: "The latest research has confirmed that lifestyle disorders can be reversed with changes in daily habits.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=80"
  },
  {
    kicker: "PEID + DRY + CAD",
    title: "Science, stillness and sustainable nutrition.",
    text: "Root cause reversal is implemented through proprietary techniques of Personalized Enriched Intermittent Diet, Deep Relaxation Yoga and Chakra Activated Dhyan.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1400&q=80"
  },
  {
    kicker: "8-step process",
    title: "A gentler path to a healthier lifestyle.",
    text: "Let HealthAshtam help you make minor changes to gently find the path to a happier healthier lifestyle.",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1400&q=80"
  }
];

const treatments = [
  {
    title: "PEID - Personalized Enriched Intermittent Diet",
    lead: "Root cause reversal of lifestyle disorders is implemented through proprietary techniques of PEID, DRY and CAD.",
    body: "Food provides you with Sustainable Nutrition. Sustainable Nutrition keeps you Healthy and ensures that nutrients are provided to your cells.",
    note: "Synergizing the benefits of Sustainable Nutrition with Intermittent Fasting increases the benefits severalfold.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
    alt: "Sustainable nutrition ingredients"
  },
  {
    title: "Cleanse Your Body",
    lead: "Cleanse Your Body focuses on eliminating toxins slowly and naturally.",
    body: "Sustainable Nutrition removes toxins from your body and supports a healthier metabolism.",
    note: "This helps weight reduce naturally without rebounding.",
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1200&q=80",
    alt: "Fresh natural detox ingredients"
  },
  {
    title: "Sustainable Nutrition",
    lead: "Sustainable Nutrition keeps you healthy and supports better daily energy.",
    body: "It helps your liver produce the required enzymes to digest food so nutrients can reach your cells.",
    note: "Food is treated as steady nourishment, not starvation.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
    alt: "Healthy balanced meal"
  },
  {
    title: "Physical Activity",
    lead: "Physical Activity supports the 8-step process through gentle, consistent movement.",
    body: "HealthAshtam promotes minor changes that help people find the path to a happier healthier lifestyle.",
    note: "The goal is a lifestyle you can continue.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    alt: "Person stretching outdoors"
  },
  {
    title: "DRY - Deep Relaxation Yoga",
    lead: "DRY is proposed as a tool for reducing internal stress levels.",
    body: "DRY encompasses yogic asanas with meditative awareness and systematic pranayama practice.",
    note: "The aim is a relaxed body with better balance.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    alt: "Deep relaxation yoga practice"
  },
  {
    title: "Positive Emotion",
    lead: "Positive Emotion supports the mental and emotional pillar of HealthAshtam.",
    body: "Health is based on taking a series of steps so you enjoy physical, mental, emotional and spiritual health.",
    note: "Small shifts in routine can support a calmer state.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    alt: "Happy wellness community"
  },
  {
    title: "Relaxed Sleep",
    lead: "Relaxed Sleep is part of the 8-step process for lifestyle disorder reversal.",
    body: "A relaxed mind and body support healthier daily rhythm and recovery.",
    note: "The process looks at the whole lifestyle, not only one symptom.",
    image: "https://images.unsplash.com/photo-1511295742362-92c96b1cf484?auto=format&fit=crop&w=1200&q=80",
    alt: "Peaceful bedroom for sleep"
  },
  {
    title: "Nature Connect",
    lead: "Nature Connect brings daily living closer to natural rhythm.",
    body: "HealthAshtam promotes the perspective that health is based on more than one pivot.",
    note: "Nature is part of the mind, body and spirit balance.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    alt: "Forest nature path"
  },
  {
    title: "CAD - Chakra Activated Dhyan",
    lead: "CAD helps you experience the world of Quantum Physics and Spiritual Energy.",
    body: "Using age-old techniques in a methodical manner, CAD unblocks lower Chakras and activates higher Chakras.",
    note: "It supports rejuvenation at physical, mental, emotional and spiritual levels.",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1200&q=80",
    alt: "Meditation practice"
  },
  {
    title: "Heal Yourself",
    lead: "Heal Yourself is the outcome HealthAshtam moves toward gently.",
    body: "Let us help you make minor changes to find the path to a happier healthier lifestyle.",
    note: "The program brings science together with mind, body and spirit.",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=1200&q=80",
    alt: "Healthy lifestyle ingredients"
  }
];

const heroImage = document.querySelector("#heroImage");
const heroKicker = document.querySelector("#heroKicker");
const heroTitle = document.querySelector("#heroTitle");
const heroText = document.querySelector("#heroText");
const dotButtons = [...document.querySelectorAll(".hero-dots button")];
let currentSlide = 0;
let slideTimer;

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  const slide = slides[currentSlide];

  heroImage.animate([{ opacity: 0.72 }, { opacity: 1 }], {
    duration: 520,
    easing: "ease-out"
  });

  heroImage.src = slide.image;
  heroKicker.textContent = slide.kicker;
  heroTitle.textContent = slide.title;
  heroText.textContent = slide.text;

  dotButtons.forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === currentSlide);
  });
}

function restartTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => showSlide(currentSlide + 1), 4200);
}

dotButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    showSlide(index);
    restartTimer();
  });
});

restartTimer();

document.querySelector(".footer-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector("input");
  input.value = "";
  input.placeholder = "Thank you for connecting";
});

const treatmentButtons = [...document.querySelectorAll("[data-treatment]")];
const treatmentTitle = document.querySelector("#treatmentTitle");
const treatmentLead = document.querySelector("#treatmentLead");
const treatmentBody = document.querySelector("#treatmentBody");
const treatmentNote = document.querySelector("#treatmentNote");
const treatmentImage = document.querySelector("#treatmentImage");

treatmentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const treatment = treatments[Number(button.dataset.treatment)];
    treatmentButtons.forEach((item) => item.classList.toggle("active", item === button));
    treatmentTitle.textContent = treatment.title;
    treatmentLead.textContent = treatment.lead;
    treatmentBody.textContent = treatment.body;
    treatmentNote.textContent = treatment.note;
    treatmentImage.src = treatment.image;
    treatmentImage.alt = treatment.alt;
  });
});

const revealGroups = [
  ".choice-strip a",
  ".intro-copy",
  ".intro-image",
  ".program-card",
  ".mission-section .eyebrow",
  ".mission-section h2",
  ".mission-section p",
  ".mission-section strong",
  ".condition-intro",
  ".condition-grid article",
  ".treatments-section .eyebrow",
  ".treatments-section h2",
  ".treatment-tabs button",
  ".treatment-detail > div",
  ".treatment-detail figure",
  ".compact-heading",
  ".shop-grid article",
  ".services-photo",
  ".services-section > div:last-child",
  ".reviews-section .eyebrow",
  ".reviews-section h2",
  ".review-grid blockquote",
  ".site-footer > *"
];

const revealItems = revealGroups.flatMap((selector) => [...document.querySelectorAll(selector)]);

revealItems.forEach((element, index) => {
  element.classList.add("reveal");
  element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
});

document.querySelector(".intro-copy")?.classList.add("reveal-left");
document.querySelector(".intro-image")?.classList.add("reveal-right");
document.querySelector(".condition-intro")?.classList.add("reveal-left");
document.querySelector(".treatment-detail figure")?.classList.add("reveal-right");
document.querySelector(".services-photo")?.classList.add("reveal-left");
document.querySelector(".services-section > div:last-child")?.classList.add("reveal-right");

document.querySelector(".mission-corner")?.classList.add("float-soft");
document.querySelector(".footer-3d")?.classList.add("float-soft");
document.querySelector(".footer-3d")?.style.setProperty("--float-rotate", "-2deg");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  rootMargin: "0px 0px -10% 0px",
  threshold: 0.12
});

revealItems.forEach((element) => revealObserver.observe(element));

const conditionRail = document.querySelector(".condition-grid");
const conditionControls = [...document.querySelectorAll(".condition-arrows span")];

conditionControls.forEach((control, index) => {
  control.setAttribute("role", "button");
  control.setAttribute("tabindex", "0");
  control.addEventListener("click", () => {
    conditionRail?.scrollBy({
      left: (index === 0 ? -1 : 1) * Math.min(460, window.innerWidth * 0.72),
      behavior: "smooth"
    });
  });
  control.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      control.click();
    }
  });
});
