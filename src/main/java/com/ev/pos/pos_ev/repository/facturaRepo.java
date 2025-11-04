package com.ev.pos.pos_ev.repository;

import com.ev.pos.pos_ev.domain.Factura;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface facturaRepo extends JpaRepository<Factura,Integer> {

}
