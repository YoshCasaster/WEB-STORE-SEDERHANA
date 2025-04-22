// testimonial.js - Testimonial data management
const testimonials = [
    {
        id: "t1",
        name: "Client 1",
        image: "https://i.pinimg.com/736x/e1/a4/82/e1a482b455245e791b7c5626b12a9ecc.jpg",
        alt: "Testimonial Client 1"
    },
    {
        id: "t2",
        name: "Client 2",
        image: "https://i.pinimg.com/736x/e1/a4/82/e1a482b455245e791b7c5626b12a9ecc.jpg",
        alt: "Testimonial Client 2"
    },
    {
        id: "t3",
        name: "Client 3",
        image: "https://i.pinimg.com/736x/e1/a4/82/e1a482b455245e791b7c5626b12a9ecc.jpg",
        alt: "Testimonial Client 3"
    },
    {
        id: "t4",
        name: "Client 4",
        image: "https://i.pinimg.com/736x/e1/a4/82/e1a482b455245e791b7c5626b12a9ecc.jpg",
        alt: "Testimonial Client 4"
    },
    {
        id: "t5",
        name: "Client 5",
        image: "https://i.pinimg.com/736x/e1/a4/82/e1a482b455245e791b7c5626b12a9ecc.jpg",
        alt: "Testimonial Client 5"
    },
    {
        id: "t6",
        name: "Client 6",
        image: "https://i.pinimg.com/736x/e1/a4/82/e1a482b455245e791b7c5626b12a9ecc.jpg",
        alt: "Testimonial Client 6"
    }
];

// Function to generate HTML for testimonial gallery
function generateTestimonialGallery() {
    let galleryHTML = '<div class="testimonial-gallery">';
    
    testimonials.forEach(testimonial => {
        galleryHTML += `
            <div class="gallery-item" data-testimonial-id="${testimonial.id}">
                <img src="${testimonial.image}" alt="${testimonial.alt}">
                <div class="gallery-item-overlay">
                    <span class="client-name">${testimonial.name}</span>
                </div>
            </div>
        `;
    });
    
    galleryHTML += '</div>';
    return galleryHTML;
}

// Function to load testimonials
function loadTestimonials() {
    const testimonialSection = document.getElementById('testimonial');
    if (testimonialSection) {
        const testimonialContent = `
            <div class="testimonial-header">
                <h3>TESTIMONIAL</h3>
                <p>Silahkan di lihat - lihat</p>
            </div>
            ${generateTestimonialGallery()}
        `;
        testimonialSection.innerHTML = testimonialContent;
    }
}

// Load testimonials when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching may already be handled in your main JS
    // This will populate the testimonial section when the page loads
    if (document.getElementById('testimonial')) {
        loadTestimonials();
    }
});

// Export for use in other scripts if needed
window.testimonialManager = {
    testimonials,
    loadTestimonials
};
