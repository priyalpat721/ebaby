package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Inventory;
import com.example.springtemplate.models.Seller;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface InventoryRestRepository extends CrudRepository<Inventory, Integer> {
    @Query(value = "SELECT * FROM inventorys WHERE inventorys.sid=:sellerId",
            nativeQuery = true)
    public Inventory findInventoryBySellerId(@Param("sellerId") Integer id);
}
