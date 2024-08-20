const faqItem = document.querySelectorAll('.faq-item');
const faqItemContent = document.querySelectorAll('.faq-item-content');

faqItem.forEach(item => item.addEventListener('click', selectItem));

function selectItem(){
    const content = this.nextElementSibling;
    const contentClasses = content.classList;
    const btnSVG = this.querySelectorAll('svg');
    const contentHeight = content.scrollHeight;

    if (contentClasses.contains('h-0')) {
        hideContent();
        changeSVG()
        content.classList.remove('h-0');
        content.classList.add(`h-[${contentHeight}px]`);
        btnSVG[0].classList.add('hidden');
        btnSVG[1].classList.remove('hidden');
    } else {
        hideContent();
        changeSVG()
        btnSVG[1].classList.add('hidden')
        btnSVG[0].classList.remove('hidden')
    };
};

function hideContent (){
    faqItemContent.forEach(item => item.classList.add('h-0'));
    faqItemContent.forEach(item => item.classList.remove(`h-[${item.scrollHeight}px]`));
};

function changeSVG (){
    faqItem.forEach(item => item.querySelectorAll('svg')[0].classList.remove('hidden'))
    faqItem.forEach(item => item.querySelectorAll('svg')[1].classList.add('hidden'))
    
}