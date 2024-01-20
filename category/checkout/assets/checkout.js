document.addEventListener("DOMContentLoaded", function () {
    const payment = document.querySelector(".button"); 
    payment.addEventListener("click", function () {
        alert('Payment success')
    })

    var cartList = JSON.parse(localStorage.getItem('cart'));
    var total =document.getElementsByClassName('total');
    console.log(total)
    var tongTien=0;
        for (var i = 0; i < cartList.length; i++) {
        // Call the function to append a new row with the given product
        // appendTableRow(cartList[i]);
        addCartItem(cartList[i]) ; 
        tongTien += cartList[i].soLuong * cartList[i].priceNew;

    };

    // total.textContent = 'Total: $' 
    
    // Tạo một phần tử <p>
var newParagraph = document.createElement('p');

// // Đặt thuộc tính và nội dung cho phần tử <p>
// newParagraph.style.fontWeight = 'bold';
// newParagraph.style.paddingTop = '20px';
// newParagraph.style.paddingLeft = '10px';
newParagraph.className = 'total';

// Tạo nội dung văn bản cho phần tử <p>
var newContent = document.createTextNode('Total:' + tongTien);
newParagraph.appendChild(newContent);

// Lấy ra phần tử có class là 'order-details'
var orderDetailsDiv = document.querySelector('.order-details');

// Thêm phần tử <p> vào bên trong phần tử <div>
orderDetailsDiv.appendChild(newParagraph);

    function addCartItem(product) {
    
    var cartList = document.querySelector('.product-info_body');


    var div = document.createElement('div');
    div.className = 'product-info';

    div.innerHTML = `
 
    <div class="img"><img src="<${product.image}" alt="Product Image"></div>
    <div class="imge-text tile-product"><Span >${product.nameProduce}</Span></div>
    <div class="imge-text price-product"><Span>${product.priceNew}đ</Span></div>
    <div class="imge-text price-product"><Span>X${product.soLuong}</Span></div>
    `;

    // Append the new list item to the cart list
    cartList.appendChild(div);
}
}
);