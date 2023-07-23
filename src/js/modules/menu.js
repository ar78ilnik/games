export const menu = () => {
	    const header = document.querySelector('.header');
    const buttonMenu = header.querySelector('.button_menu');
    const listHeader = header.querySelector('.list_header');
    const navHeader = header.querySelector('.nav_header');

    buttonMenu.addEventListener('click', () => {
        let expanded = buttonMenu.getAttribute('aria-expanded') === 'true' || false;
        buttonMenu.setAttribute('aria-expanded', !expanded);
        buttonMenu.classList.toggle('button_menu--open');
        navHeader.classList.toggle('nav_header--open');
        listHeader.classList.toggle('list_header--open');
    })
}