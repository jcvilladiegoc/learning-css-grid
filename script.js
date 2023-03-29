console.log('Script JS was imported successful');

var showMenu = false;

const toogleShowMenu = () => {
    showMenu = !showMenu;
    nav_menu.setAttribute('class', showMenu ? 'show': '');
}