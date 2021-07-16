const mainSelectorEl = selector => document.querySelector(selector);

const categoryAmount = (selector, childSelector) => {
    const mainUl = mainSelectorEl(selector);
    const amountOfCategory = mainUl.querySelectorAll(childSelector).length;
    console.log(`В списке ${amountOfCategory} категории`);
};

const categoryDescription = ( selector, childSelector ) => {
    const mainUl = mainSelectorEl(selector);

    mainUl.querySelectorAll(childSelector).
        forEach(item => {
            const category = item.querySelector('h2').textContent;
            const itemAmount = item.querySelectorAll('li').length;
            console.log(`Категория: ${category}`);
            console.log(`Количество элементов: ${itemAmount}`);
    })    
};



categoryAmount('ul#categories', '.item');

categoryDescription('ul#categories', '.item');