- Q-1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.

- Ans:- The "Product" entity is related to the "Product_Category" entity through a many-to-one relation which means 

1. one product category can have multiple products associated with it.

2. And Each product belong to exactly one product category.

3.  The Product Category entity has a primary key (id) that uniquely identifies each record in the table, while the Product entity also has its own.

4. Each product have a category_id which is link to the product category id. Here category_id is **foregin key**.

5. It means that when you query for product, you can identify their associated product category. However, when you query for a product category, you'll get a list of products associated with that category.


- Q-2. How could you ensure that each product in the "Product" table has a valid category assigned to it?

- Ans:- We can ensure that each product in the "Product" table has a vaild category assigned to it by implementing foreign key constraints at database level. The foreign key constraints ensure that value in one table's column match the value in another tabl's column, typically the primary key of the refrenced table.