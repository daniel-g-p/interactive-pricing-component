const slider = document.querySelector("#slider input");
const progressBar = document.querySelector("#slider div");
const sliderImage = document.querySelector("#slider img");
const pageViews = document.querySelectorAll("h2 span");
const price = document.querySelectorAll("h3");
const toggle = document.querySelector("#toggle");
const toggleBall = document.querySelector("#toggle div");
const periods = document.querySelectorAll(".period")
const period = document.querySelectorAll(".price span");

const pricingPlans = [
    { views: "10K", price: 8.00 },
    { views: "50K", price: 12.00 },
    { views: "100K", price: 16.00 },
    { views: "500K", price: 24.00 },
    { views: "1M", price: 36.00 }
];

slider.addEventListener("input", () => {
    progressBar.setAttribute("style", `width: ${slider.value * 25}%`);
    sliderImage.setAttribute("style", `left: ${slider.value * 25}%`);
    pageViews.forEach(num => num.innerHTML = `${pricingPlans[slider.value].views}`);
    if (toggle.classList.contains("yearly")) {
        price.forEach(num => num.innerHTML = `$${(pricingPlans[slider.value].price * 0.75).toFixed(2)}`);
    } else {
        price.forEach(num => num.innerHTML = `$${pricingPlans[slider.value].price.toFixed(2)}`);
    };
});

toggle.addEventListener("click", () => {
    toggle.classList.toggle("yearly");
    periods.forEach(p => p.classList.toggle("active"));
    if (toggle.classList.contains("yearly")) {
        toggleBall.setAttribute("style", "margin-left: 1.5rem");
        price.forEach(num => num.innerHTML = `$${(pricingPlans[slider.value].price * 0.75).toFixed(2)}`);
    } else {
        toggleBall.setAttribute("style", "margin-left: 0");
        price.forEach(num => num.innerHTML = `$${pricingPlans[slider.value].price.toFixed(2)}`);
    };
});