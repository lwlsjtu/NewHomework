package com.lwl.design.authserver.repository;

import com.lwl.design.authserver.entity.UserEntity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    UserEntity findByMobilephone(String mobilePhone);

    UserEntity findById(int id);


}
