$(() => {

    const products = [
        { name: 'SALIS', price: 1500, id: 1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'img/1.jpg', category: 'Free style' },
        { name: 'CATIY', price: 2000, id: 2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'img/2.jpg', category: 'Free style' },
        { name: 'DREIE', price: 2250, id: 3, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'img/3.jpg', category: 'Free style' },
        { name: 'TINVI', price: 2300, id: 4, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'img/4.jpg', category: 'Party Time' },
        { name: 'DESIL', price: 2890, id: 5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'img/5.jpg', category: 'Party Time' },
        { name: 'JAMIQ', price: 2050, id: 6, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'img/6.jpeg', category: 'Party Time' },
        { name: 'QUEIN', price: 1230, id: 7, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'img/7.jpg', category: 'Stay Cozy' },
        { name: 'PHIBI', price: 2790, id: 8, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'img/8.jpg', category: 'Stay Cozy' },
        { name: 'BELLE', price: 1520, id: 9, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'img/9.jpg', category: 'Stay Cozy' },
        { name: 'HIBIS', price: 1230, id: 10, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'img/10.jpg', category: 'Beach Fun' },
        { name: 'LISAI', price: 1890, id: 11, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'img/11.jpg', category: 'Beach Fun' },
        { name: 'RUBIS', price: 1330, id: 12, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'img/12.jpg', category: 'Beach fun' },
        { name: 'OLIVI', price: 1900, id: 13, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'img/13.jpg', category: 'Winter Mys' },
        { name: 'PHIBI', price: 2380, id: 14, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'img/14.jpg', category: 'Winter Mys' },
        { name: 'ALISA', price: 1120, id: 15, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'img/15.jpg', category: 'Winter Mys' }
    ];

 
    // ----------------- to show all products on the page -------------------//
    const appendList = (array) => {
        const template = array.map((item, id) => {
            return `<div class="card product d-inline-flex mt-5 mb-2 mr-3 ml-3" style="width: 15rem;" id="${item.id}">
            <img src="${item.picture}" class="card-img-top" alt="${item.description}">
            <div class="card-body mr-auto ml-auto">
            <h5 class="card-title">${item.name} - <span class="category">${item.category}</span> <small>${item.price}kr</small></h5>
            <p class="card-text">${item.description}</p>
            <button type="button" id="${item.id}">Buy Now!</button>
            </div>`;
        });
        $('.product-list').html(template);
    }
    appendList(products);

    //--------------------Cart & add to cart ---------------------// 
    let cart = [];
    const addToCart = (array, id) => {
        let a = array.find(i => i.id === id);
        cart.push(a);
        const item = `<li class="item pl-3 pb-1" id="${a.id}">
                <div class="d-flex">
                <span class="pb-1 cartitem"><i class="fas fa-heart"></i> ${a.name}</span> <p class="ml-5 pl-5"> ${a.price} kr</p>
                <button type="button" class="btn text-dark d-flex mt-0 pt-0 mr-0 pr-0"><i class="fas fa-times"></i></button>
                </div>
                </li>`;
        $('.cart-list').append(item);
        $('span.amount').text(cart.length);
    }


    //-------------------- To calculateTotal Price -----------------//
    const totalAmount = () => {
        let total = 0;
        cart.forEach(function (a) {
            total += a.price;

        })
        return total;
    }   
    
    const buyClick = ()=>{
        $('.product').on('click', 'button', (e) => {
            let id = e.currentTarget.id;
            addToCart(products, +id);
            $(".totalAmount").text(totalAmount);
        });        
    }
    buyClick();

    // --------------------to sort price from low to high or high to low from top navigation -----------------//
    let sortPriceFromLow = document.querySelector("#sort-price-low-high");
    sortPriceFromLow.addEventListener("click", () => {
        let sortArray = products.sort((a, b) => a.price > b.price ? 1 : -1);
        appendList(sortArray);
        // $('.product').on('click', 'button', (e) => {
        //     let id = e.currentTarget.id;
        //    addToCart(products, +id);
        //     $(".totalAmount").text(totalAmount);
        // });
        buyClick();
    });

    let sortPriceFromHigh = document.querySelector("#sort-price-high-low");
    sortPriceFromHigh.addEventListener("click", () => {
        let sortArray = products.sort((a, b) => a.price < b.price ? 1 : -1);
        appendList(sortArray);
        // $('.product').on('click', 'button', (e) => {
        //     let id = e.currentTarget.id;
        //     addToCart(products, +id);
        //     $(".totalAmount").text(totalAmount);
        // });
        buyClick();
    });

    // ------------------- search product ---------------------------//
    /* although it can search out the things but seached out product  can not be added into cart.. */

    let searchField = document.querySelector(".searchfield");
    searchField.addEventListener("keyup", function (e) {
        // console.log (e.target.value);
        let myTarget = e.target.value;
        let filterList = products.filter((product) => {
                return product.name.toLowerCase().indexOf(myTarget.toLowerCase()) !== -1;
            }
        )
        appendList(filterList);
 
        // $('.product').on('click', 'button', (e) => {
        //     let id = e.currentTarget.id;
        //     addToCart(products, +id); 
        //     $(".totalAmount").text(totalAmount);
        // });
        buyClick();
    })


    //----------------remove from cart one by one ------------------------//
    const removeFromCart = (array, removedItem) => {
        array.splice(removedItem, 1);
    }

    // const populateCart = (array) => {
    //     let item = `<li class"item" id="${array.id}">
    //             <span class="cartitem">${array.name}</span>
    //             <button type="button" class="cancelbtn"><i class="fas fa-times"></i></button>
    //             </li>`;
    //     $('span.amount').text(array.length);
    // }

    // Item removed function
    $('.cart-list').on('click', 'button', (e) => {
        let item = $(e.currentTarget).closest('li').remove();
        removeFromCart(cart, item);
        // populateCart(cart);
        $(".totalAmount").text(totalAmount);
        $('span.amount').text(cart.length);
    });


    //---------------------------- Clear All -------------------------//
    const removeAll = () => {
        $('.cart-list').text('');
        cart = [];
    };

    $('.clear-all').on('click', (e) => {
        removeAll();
        $('span.amount').text(cart.length);
        $(".totalAmount").text(totalAmount); 
     
        // $('.product').on('click', 'button', (e) => {
        //     let id = e.currentTarget.id;            
        //     addToCart(products, +id);
        //     $(".totalAmount").text(totalAmount);
        // });
    }); 
     
}); 
