package com.lwl.design.controller;

import com.lwl.design.dto.CheckUserInfoDto;
import com.lwl.design.dto.UserInfoListDto;
import com.lwl.design.entity.UserInfoEntity;
import com.lwl.design.repository.UserRepository;
import com.lwl.design.service.AdminService;
import com.lwl.design.service.UserService;
import com.lwl.design.util.ReturnMsg;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 管理员类Controller
 *
 * @author lwl
 * @since 1.0.0
 */
@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private AdminService adminService;

    /**
     *用户注册信息列表
     * @return
     */
    @RequestMapping(value="/getUserInfoList",method = RequestMethod.POST)
    public List<UserInfoEntity> getUserInfoList(@RequestBody UserInfoListDto userInfoListDto){
        return userService.getInfoList(userInfoListDto.getState(),userInfoListDto.getIndex(),userInfoListDto.getSize(),userInfoListDto.getDirection());
    }

    @RequestMapping(value="/checkUserInfo",method = RequestMethod.POST)
    public ReturnMsg getUserInfoList(@RequestBody CheckUserInfoDto checkUserInfoDto){
        ReturnMsg returnMsg =new ReturnMsg();

        int result =adminService.checkUserInfo(checkUserInfoDto.getInfoId(),checkUserInfoDto.getAdminId(),checkUserInfoDto.getSuggestion());
        if(result==1){
            returnMsg.setMessage("不通过审核");
        }else{
            returnMsg.setMessage("通过审核");
        }
        return returnMsg;
    }
}
