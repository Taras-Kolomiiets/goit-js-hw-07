const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = (array) => {
  const galleryListContainer = document.querySelector('#gallery');
  galleryListContainer.classList.add('gallery-container');

  const newArray = array.map(item => {
    const itemUrl = item.url;
    const itemAlt = item.alt;
    return galleryListContainer.insertAdjacentHTML('afterbegin', `<li><img class="image" src = ${itemUrl},
   alt = ${itemAlt} width="300" height="180"></li>`);
  })

  return newArray;
};

galleryList(images);