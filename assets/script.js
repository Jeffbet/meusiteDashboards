document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll('.mySlides');
        let dots = document.querySelectorAll('.dot');

        slides.forEach(slide => slide.style.display = 'none');
        dots.forEach(dot => dot.classList.remove('active'));

        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('active');

        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const sections = document.querySelectorAll('section');
    const serviceItems = document.querySelectorAll('.service-item');
    const stepItems = document.querySelectorAll('.step-item');
    const exampleItems = document.querySelectorAll('.example-item');
    const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea');

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        sections.forEach(section => section.classList.toggle('dark-mode'));
        serviceItems.forEach(item => item.classList.toggle('dark-mode'));
        stepItems.forEach(item => item.classList.toggle('dark-mode'));
        exampleItems.forEach(item => item.classList.toggle('dark-mode'));
        inputs.forEach(input => input.classList.toggle('dark-mode'));
    });
});

function sendMail() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;
  
    if (!name || !email || !phone || !mensagem) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }
  
    var params = {
        name: name,
        phone: phone,
        email: email,
        mensagem: mensagem,
    };
  
    const serviceID = "service_bvv4b3c";
    const templateID = "template_pvhvu2p";
  
    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("contact-form").reset();
            console.log(res);
            showPopup();
        })
        .catch(err => console.error("Erro ao enviar e-mail:", err));
}

function showPopup() {
    var popup = document.getElementById("popup");
    popup.classList.add("show");
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.classList.remove("show");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
