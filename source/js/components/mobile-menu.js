const buttonOpen = document.body.querySelector('.header__icons-burger');
const buttonClose = document.body.querySelector('.mobile-menu__button');
const menu = document.body.querySelector('.mobile-menu')

const setMenuHandlers = () => {

    if (menu) {
        buttonOpen.addEventListener('click', () => {
            if(menu.classList.contains('closed')) {
                menu.classList.remove('closed');
            }
        });

        buttonClose.addEventListener('click', () => {
            if(!menu.classList.contains('closed')) {
                menu.classList.add('closed');
            }
        });
    }

}

export {setMenuHandlers}