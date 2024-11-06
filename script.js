
const features = [
    { title: "Personalized Itineraries", info: "Experience a journey tailored to your interests, pace, and budget. From family-friendly adventures to solo escapes, we customize every detail to make your trip unforgettable.", img:"src/no eyes.jpg" },
    { title: "Local Expertise", info: "With guides who are passionate locals, discover hidden gems, authentic experiences, and unique stories that go beyond typical tourist sites. We bring you closer to the heart of each destination.Experience a journey tailored to your interests, pace, and budget. From family-friendly adventures to solo escapes, we customize every detail to make your trip unforgettable.", img: "src/horror eyes.jpg"}, 
    { title: "24/7 Support", info: "Enjoy peace of mind with our dedicated support team available around the clock. From unexpected delays to last-minute changes, we’re here to ensure your trip goes smoothly.", img:"src/eyes of the hills.jpg"}
]

const container = document.getElementById("features")

features.forEach(feature => {
    const featureBlock = document.createElement("div");
    featureBlock.classList.add("feature-block");
    
    featureBlock.innerHTML = `
    <img src="${feature.img}">
    <div class="feature-info">
        <div class="feature-title">${feature.title}</div>
        <div class="feature-p">${feature.info}</div>
    </div>
    `

    container.appendChild(featureBlock)
})

