const accordionHeaders = document.querySelectorAll(".accordion-header");
const accordionContents = document.querySelectorAll(".accordion-content");

accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector(".accordion-content");
        const isActive = accordionContent.classList.contains("active");

        const headers = document.querySelectorAll(".accordion-header");
        const images = document.querySelectorAll(".image-area img");

        headers.forEach(header => {
            header.addEventListener("click", () => {
                const item = header.parentElement;
                const imgId = item.getAttribute("data-img"); // pega o número da imagem

                // remove active de todas
                images.forEach(img => img.style.display = "none");

                // mostra só a certa
                const target = document.getElementById("img" + imgId);
                if (target) target.style.display = "block";
            });
        });
        // Fecha todos os outros
        accordionContents.forEach((content) => {
            content.classList.remove("active");
            content.style.maxHeight = "0";
            content.style.padding = "0 10px";
        });

        // Se não estava ativo, abre agora
        if (!isActive) {
            accordionContent.classList.add("active");
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            accordionContent.style.padding = "10px";
        }
    });
});


const headers = document.querySelectorAll(".accordion-header");
const images = document.querySelectorAll(".image-area img");

headers.forEach(header => {
    header.addEventListener("click", () => {
        const item = header.parentElement;
        const imgId = item.getAttribute("data-img");

        // esconde todas
        images.forEach(img => img.style.display = "none");

        // mostra só a certa
        const target = document.getElementById("img" + imgId);
        if (target) target.style.display = "block";
    });
});