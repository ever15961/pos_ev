package com.ev.pos.pos_ev.service;

import com.ev.pos.pos_ev.domain.Factura;
import com.ev.pos.pos_ev.repository.facturaRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class facturaService {
    private final facturaRepo facturaRepo;

    public facturaService(facturaRepo facturaRepo) {
        this.facturaRepo = facturaRepo;
    }

    public List<Factura> findAll() {
        return facturaRepo.findAll();
    }

    public Factura Guardar(Factura factura){
      return  facturaRepo.save(factura);
    }
}
