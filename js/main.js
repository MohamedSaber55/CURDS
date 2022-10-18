var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDescInput = document.getElementById('productDescInput');
var maimBtn = document.getElementById('maimBtn');
var productsContainer = [];

if (localStorage.getItem('Products') != null) {
    productsContainer = JSON.parse(localStorage.getItem('Products'));
    displayProducts();
};


maimBtn.onclick = function(){
    if(maimBtn.innerHTML == 'Update'){
        changeData();
    }
    else{
        addProduct();
    }
};




function addProduct(){
    var product ={
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    };
    productsContainer.push(product);
    console.log(productsContainer);
    displayProducts();
    localStorage.setItem('Products', JSON.stringify(productsContainer));
    clearForm();
};


function clearForm(){
    productNameInput.value = '';
    productPriceInput.value = '';
    productCategoryInput.value = '';
    productDescInput.value = '';
};

function displayProducts(){
    var cartona= '';
    for(var i = 0; i < productsContainer.length; i++) {
        cartona += `<tr>
        <td>${i+1}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].desc}</td>
        <td><button type="button" onclick="updateProduct(${i});" class="btn btn-outline-warning btn-sm">Update</button></td>
        <td><button type="button" onclick="deleteProduct(${i});" class="btn btn-outline-danger btn-sm">Delete</button></td>
        </tr>`;
    };
    document.getElementById("tableBody").innerHTML = cartona;
};


function deleteProduct(deletedIndex){
    productsContainer.splice(deletedIndex,1);
    localStorage.setItem('Products', JSON.stringify(productsContainer));
    displayProducts();
};


var indexNum;

function updateProduct(updatedIndex){
    indexNum = updatedIndex;
    productNameInput.value = productsContainer[updatedIndex].name;
    productPriceInput.value = productsContainer[updatedIndex].price;
    productCategoryInput.value = productsContainer[updatedIndex].category;
    productDescInput.value = productsContainer[updatedIndex].desc;
    maimBtn.innerHTML = 'Update';

};



function changeData(){
    productsContainer[indexNum].name = productNameInput.value ;
    productsContainer[indexNum].price = productPriceInput.value ;
    productsContainer[indexNum].category = productCategoryInput.value ;
    productsContainer[indexNum].desc = productDescInput.value ;
    localStorage.setItem('Products', JSON.stringify(productsContainer));
    maimBtn.innerHTML = 'add product';
    clearForm();
    displayProducts();
};



var searchArea = document.getElementById('searchArea');
function searchProduct (term) {
    var cartona = ``;
    for(var i= 0; i < productsContainer.length; i++){
        if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true) {
            cartona += `<tr>
            <td>${i+1}</td>
            <td>${productsContainer[i].name}</td>
            <td>${productsContainer[i].price}</td>
            <td>${productsContainer[i].category}</td>
            <td>${productsContainer[i].desc}</td>
            <td><button type="button" onclick="updateProduct(${i});" class="btn btn-outline-warning btn-sm">Update</button></td>
            <td><button type="button" onclick="deleteProduct(${i});" class="btn btn-outline-danger btn-sm">Delete</button></td>
            </tr>`;
        }
    }
    document.getElementById("tableBody").innerHTML = cartona;
};