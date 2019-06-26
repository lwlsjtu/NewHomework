package com.lwl.design.serviceImpl;

import com.lwl.design.dto.SendMessageDto;
import com.lwl.design.dto.UserRegisterDto;
import com.lwl.design.entity.UserEntity;
import com.lwl.design.entity.UserInfoEntity;
import com.lwl.design.remoteservice.ShortMessageService;
import com.lwl.design.repository.UserInfoPepository;
import com.lwl.design.repository.UserRepository;
import com.lwl.design.service.AdminService;
import com.lwl.design.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    UserInfoPepository userInfoPepository;

    @Autowired
    ShortMessageService shortMessageService;

    @Autowired
    UserRepository userRepository;

    @Override
    public int checkUserInfo(int info_id, int admin_id, int suggestion) {
        UserEntity tempUser = new UserEntity();
        UserInfoEntity tempInfo = new UserInfoEntity();
        int userId;
        SendMessageDto msgDto = new SendMessageDto();
        System.out.println(info_id);
        tempInfo = userInfoPepository.findById(info_id);
        System.out.println(tempInfo);
        userId = tempInfo.getUserId();
        tempUser = userRepository.findById(userId);
        msgDto.setSenderId(admin_id);
        msgDto.setReceiverId(info_id);

        if(suggestion==0){
            tempInfo.setState(2);
            userInfoPepository.save(tempInfo);
            msgDto.setContent("您的个人信息审核申请未通过。");
            shortMessageService.sendShortMessage(msgDto);
            return 1;
        }else{
            tempInfo.setState(3);
            userInfoPepository.save(tempInfo);
            tempUser.setType(tempInfo.getApplyType());
            msgDto.setContent("您的个人信息审核已通过，可进行后续操作");
            userRepository.save(tempUser);
            shortMessageService.sendShortMessage(msgDto);
            return 2;
        }

    }
}
