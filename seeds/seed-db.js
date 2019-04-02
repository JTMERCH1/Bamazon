const db = require('../models');

const items = [
    {
         product_name: 'Xbox One',
         price: 500.00,
         department_name: 'Electronics',
         stock_quantity: 20,
    },
    {
        product_name: 'Call Of Duty: Black Ops 4',
        price: 35.50,
        department_name: 'Electronics',
        stock_quantity: 100,
   },
   {
        product_name: 'Hamburger Helper',
        price: 4.20,
        department_name: 'Groceries',
        stock_quantity:45,
    },
    {
        product_name: 'Gaming Chair',
        price: 200.00,
        department_name: 'Furniture',
        stock_quantity: 18,
   },
   {
       product_name: 'Division 2',
       price: 59.99,
       department_name: 'Electronics',
       stock_quantity: 150,
  },
  {
       product_name: 'Lucky Charms',
       price: 3.50,
       department_name: 'Groceries',
       stock_quantity:55,
   },
]; 

db.sequelize.sync({force: true}).then(function() {
    db.Product.bulkCreate(items).then(function(rows) {
        console.log('\n\nINSERTED\n\n');
    }).catch(function(err) {
        console.log('\n\nError:', err);
    });
});