const mockOrders = {
  101: { item: "Laptop", status: "Shipped" },
  102: { item: "Phone", status: "Delivered" },
  103: { item: "Headphones", status: "Processing" }
};

function fetchOrderStatus(orderId, callback) {
    setTimeout(() =>{
        if(mockOrders[orderId]){
            callback(null,mockOrders[orderId]);
        }else{
            callback("Order not found",null);
        }

    },1500);
  // TODO 1: use setTimeout (1500ms)

  // TODO 2: if order exists → callback(null, orderData)

  // TODO 3: if order does NOT exist → callback("Order not found", null)
}

function displayOrderStatus(error, data) {
    if(error){
        console.log("Error:",error);
    }else{
        console.log(`Item: ${data.item}, Status: ${data.status}`);
    }
  // TODO 4: if error → log [ 'Error:', 'Order not found' ]

  // TODO 5: if data → log:
  // Item: Laptop, Status: Shipped
}

/* DO NOT MODIFY */
fetchOrderStatus(101, displayOrderStatus);
fetchOrderStatus(999, displayOrderStatus);
