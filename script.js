// Navegação por tabs
function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length && tabContent.length) {
        const ativoClass = 'ativo';
        tabContent[0].classList.add(ativoClass);

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove(ativoClass);
            });
            tabContent[index].classList.add(ativoClass);
        };

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    };
};

initTabNav();
    

// Accordion List
function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');

    if (accordionList.length) {
        const ativoClass = 'ativo';
        accordionList[0].classList.add(ativoClass);
        accordionList[0].nextElementSibling.classList.add(ativoClass);

        function activeAccordion() {
            this.classList.toggle(ativoClass);
            this.nextElementSibling.classList.toggle(ativoClass);
        };

        accordionList.forEach((item) =>{
            item.addEventListener('click', activeAccordion);
        });
    };
}

initAccordion();

function initSmoothScroll() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href); //seleciona section com id referente ao href
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        //Forma alternativa
        // const topo = section.offsetTop;
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth'
        // });
    }

    linksInternos.forEach((link) =>{
        link.addEventListener('click', scrollToSection);
    });
};

initSmoothScroll();

function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    const windowMetade = window.innerHeight * 0.6;

    if (sections.length) {
        function animaScroll() {
            sections.forEach((section) =>{
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible) 
                    section.classList.add('ativo');
                else
                    section.classList.remove('ativo');
            });
        };
        animaScroll();
        window.addEventListener('scroll', animaScroll);
    };
};

initAnimacaoScroll();
    
    