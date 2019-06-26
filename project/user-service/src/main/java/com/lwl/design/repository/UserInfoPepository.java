package com.lwl.design.repository;

import com.lwl.design.entity.UserInfoEntity;
import org.apache.catalina.User;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserInfoPepository extends JpaRepository<UserInfoEntity,Long> {
    UserInfoEntity findByUserId(int userId);

    <S extends UserInfoEntity> Page<S> findAll(Example<S> example, Pageable pageable);

    UserInfoEntity findById(int id);
}
