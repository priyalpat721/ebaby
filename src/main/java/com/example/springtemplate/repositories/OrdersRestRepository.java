package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Inventory;
import com.example.springtemplate.models.Orders;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface OrdersRestRepository extends CrudRepository<Orders, Integer> {

  @Query(value = "SELECT * FROM orders WHERE orders.bid=:buyerId",
          nativeQuery = true)
  public Orders findOrdersByBuyerId(@Param("buyerId") Integer id);

  @Query(value = "SELECT * FROM orders WHERE orders.id=:id",
          nativeQuery = true)
  public Orders findOrdersById(@Param("id") Integer id);

  @Query (value = "SELECT * FROM orders WHERE orders.product_id=:productId",
          nativeQuery = true)
  public Orders findOrdersByProductId(@Param("productId") Integer id);

}