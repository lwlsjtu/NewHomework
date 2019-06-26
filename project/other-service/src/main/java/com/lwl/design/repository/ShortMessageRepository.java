package com.lwl.design.repository;

import com.lwl.design.dto.SendMessageDto;
import com.lwl.design.entity.ShortMessageEntity;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShortMessageRepository extends JpaRepository<ShortMessageEntity,Long> {

    <S extends ShortMessageEntity> Page<S> findAll(Example<S> example, Pageable pageable);
}
