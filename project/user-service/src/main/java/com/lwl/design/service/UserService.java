package com.lwl.design.service;

import com.lwl.design.dto.UserInfoDto;
import com.lwl.design.dto.UserLoginDto;
import com.lwl.design.dto.UserLoginRetDto;
import com.lwl.design.dto.UserRegisterDto;
import com.lwl.design.entity.UserInfoEntity;

import java.util.List;

public interface UserService {
    int userRegister(UserRegisterDto userRegisterDto);

    UserLoginRetDto userLogin(UserLoginDto userLoginDto);

    int userInfoApply(UserInfoDto userInfoDto);

    List<UserInfoEntity> getInfoList(int state,int index,int size,int direction);

    String getName(int userId);
}
