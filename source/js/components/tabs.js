const ENTER_KEYCODE = 13;
const SPACE_KEYCODE = 32;
const tabs = document.body.querySelectorAll('.data__tab');
const items = document.body.querySelectorAll('.data__item');

const chooseTab = (index) => {

    if(tabs.length === items.length) {
        tabs.forEach(tab => {
            if(tab.classList.contains('active')) {
                tab.classList.remove('active');
            }
        });
    
        items.forEach(item => {
            if(!item.classList.contains('none')) {
                item.classList.add('none');
            }
        });
    
        tabs[index].classList.add('active');
        items[index].classList.remove('none');
    } else {
        console.log('Error: Tabs and Items number doesn`t match!');
    }
}

const setTabs = () => {
    chooseTab(0);

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            chooseTab(index);
        })

        tab.addEventListener('keydown', (evt) => {
            if (evt.keyCode === ENTER_KEYCODE || evt.keyCode === SPACE_KEYCODE) {
                chooseTab(index);
            }
        });
    });
}

export {setTabs}
