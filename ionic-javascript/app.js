const productName = document.querySelector('#productName');
const productPrice = document.querySelector('#productPrice');
const buttonSave = document.querySelector('#button-save');
const buttonCancel = document.querySelector('#button-clear');
const productList = document.querySelector('#product-list');
const totalOuput = document.querySelector('#total');

const createNewElement = (name,price) => {
   const ionCard = document.createElement('ion-card');
   const newProductItem = document.createElement('ion-card-content');
   newProductItem.textContent = name + ': Bs' + price;
   ionCard.appendChild(newProductItem);
   productList.appendChild(ionCard);
}

const clearAllInputs = () => {
    productName.value = '';
    productPrice.value = '';
}

const isEmpty = str => !str.trim().length;

let total = 0;

function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Datos invalidos';
    alert.subHeader = 'Has introducido datos invalidos';
    alert.message = 'Por favor intenta de nuevo';
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    return alert.present();
  }

buttonSave.addEventListener("click", () => {
    const name = productName.value;
    const price = productPrice.value;

    if (price <= 0 || isEmpty(name) || isEmpty (price)) {
        presentAlert();
        return;
    }

    createNewElement(name, price);
    total += +price;
    totalOuput.textContent = total;
    clearAllInputs();
});


buttonCancel.addEventListener('click', clearAllInputs);

