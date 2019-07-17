# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
SELECT ProductName, CategoryName FROM Products as p LEFT JOIN Categories as c ON p.CategoryID = c.CategoryID;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
SELECT OrderId, ShipperName, OrderDate FROM Orders as o JOIN Shippers as s  WHERE o.OrderDate < "January 9, 1997" AND o.ShipperId = s.ShipperID;

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT ProductName, Quantity, o.OrderID FROM OrderDetails as o LEFT JOIN Products as p WHERE o.OrderID = "10251" AND o.ProductId = p.ProductID ORDER BY ProductName;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
SELECT OrderId, CustomerName, LastName  FROM Orders as o JOIN Customers as c ON o.CustomerId = c.CustomerId JOIN Employees as e WHERE o.EmployeeID = e.EmployeeID;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 