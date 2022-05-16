const dbConn  = require('./db.js');

var Order = function (order) {
  this.orderid = order.orderid;
  this.customer_name = order.customer_name;
  this.customer_email = order.customer_email;
  this.current_orders = order.current_orders;
  this.delivery_address = order.delivery_address;
  this.created_at = new Date();
};

// get all products
Order.getAllOrders = (result) => {
  dbConn.query("SELECT * FROM orders WHERE is_deleted!=1", (err, res) => {
    if (err) {
      console.log("Error while fetching orders", err);
      result(null, err);
    } else {
      console.log("orders fetched successfully");
      result(null, res);
    }
  });
};

Order.getOrderByID = (id, result) => {
  console.log(id);
  dbConn.query("SELECT * FROM orders WHERE orderid=?", id, (err, res) => {
    if (err) {
      console.log("Error while fetching order by id", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// create new product
Order.createOrder = (orderReqData, result) => {
    console.log(orderReqData)
  dbConn.query("INSERT INTO orders SET ? ", orderReqData, (err, res) => {
    if (err) {
      console.log("Error while inserting data");
      result(null, err);
    } else {
      console.log("Order created successfully");
      result(null, res);
    }
  });
};

// update product
Order.updateOrders = (id, orderReqData, result) => {
  dbConn.query(
    "UPDATE orders SET customer_name=?,customer_email=?,current_orders=?,address=? WHERE id = ?",
    [
      orderReqData.customer_name,
      orderReqData.customer_email,
      orderReqData.current_orders,
      orderReqData.delivery_address,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error while updating the order");
        result(null, err);
      } else {
        console.log("Order updated successfully");
        result(null, res);
      }
    }
  );
};

// delete product
Order.deleteOrder = (id, result) => {
  console.log("dSFSD",id)
  dbConn.query("DELETE FROM orders WHERE orderid=?", [id], (err, res) => {
    if (err) {
      console.log("Error while deleting the order");
      result(null, err);
    } else {
      result(null, res);
    }
  });
  // dbConn.query("UPDATE orders SET is_deleted=? WHERE orderid = ?", [true, JSON.stringify(id)], (err, res)=>{
  //     if(err){
  //         console.log('Error while deleting the product');
  //         result(null, err);
  //     }else{
  //         console.log("Order deleted successfully");
  //         result(null, res);
  //     }
  // });
};

module.exports = Order;
