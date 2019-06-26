package com.lwl.design.controller;


import com.lwl.design.dto.*;
import com.lwl.design.entity.UserEntity;
import com.lwl.design.remoteservice.ShortMessageService;
import com.lwl.design.repository.UserRepository;
import com.lwl.design.service.UserService;
import com.lwl.design.util.ReturnMsg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 用户管理的Endpoint
 *
 * @author CD826
 * @since 1.0.0
 */
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private ShortMessageService shortMessageService;
    /**
     * 远程测试
     * @return
     */
    @RequestMapping(value="/messageTest",method = RequestMethod.GET)
    public int MessageTest() {
        SendMessageDto msg =new SendMessageDto();
        msg.setContent("12345");
        msg.setSenderId(3);
        msg.setReceiverId(5);
        return this.shortMessageService.sendShortMessage(msg);
    }

    /**
     * 获取用户信息列表
     * @return
     */
    @RequestMapping(method = RequestMethod.GET)
    public List<UserEntity> list() {
        return this.userRepository.findAll();
    }

    /**
     * 获取用户详情
     * @param id
     * @return
     */

    /**
     * 注册用户
     * @return
     */
    @RequestMapping(value="/register",method = RequestMethod.POST)
    public int register(@RequestBody UserRegisterDto userRegisterDto){
        return this.userService.userRegister(userRegisterDto);
    }

    /**
         * 用户登录
         * @return
         */
        @RequestMapping(value="/login",method = RequestMethod.POST)
        public UserLoginRetDto login(@RequestBody UserLoginDto userLoginDto){
            return this.userService.userLogin(userLoginDto);
    }


    /**
     * 详细信息
     * @return
     */
    @RequestMapping(value="/addInfo",method = RequestMethod.POST)
    public ReturnMsg addInfo(@RequestBody UserInfoDto userInfoDto){
        ReturnMsg returnMsg = new ReturnMsg();
        returnMsg.setResult(this.userService.userInfoApply(userInfoDto));
        returnMsg.setMessage("申请成功");
        return returnMsg;
    }

    /**
     * id返回名字
     * @return
     */
    @RequestMapping(value="/getName",method = RequestMethod.POST)
    public String getName(@RequestBody int userId){
        return this.userService.getName(userId);
    }


}