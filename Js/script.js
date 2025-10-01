const accordionHeaders = document.querySelectorAll(".accordion-header");
const accordionContents = document.querySelectorAll(".accordion-content");
const imagemLateral = document.getElementById("imagem-lateral");

accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector(".accordion-content");
        const isActive = accordionContent.classList.contains("active");

        const novaImagem = header.getAttribute("dat-img");
        imagemLateral.setAttribute("src", novaImagem);

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
