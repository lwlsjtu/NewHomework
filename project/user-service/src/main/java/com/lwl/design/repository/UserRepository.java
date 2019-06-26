package com.lwl.design.repository;

import com.lwl.design.dto.UserLoginDto;
import com.lwl.design.dto.UserLoginRetDto;
import com.lwl.design.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    UserEntity findByMobilephone(String mobilePhone);

    UserEntity findById(int id);
}
