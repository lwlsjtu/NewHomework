package com.lwl.design.repository;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import com.lwl.design.entity.CompanyEntity;

public interface CompanyRepository extends JpaRepository<CompanyEntity,Long> {
    CompanyEntity findByName(String name);
    <S extends CompanyEntity> Page<S> findAll(Example<S> example, Pageable pageable);
}
