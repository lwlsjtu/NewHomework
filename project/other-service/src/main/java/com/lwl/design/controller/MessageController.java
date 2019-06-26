package com.lwl.design.controller;

import com.lwl.design.dto.SendMessageDto;
import com.lwl.design.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * 信息发送的Controller
 *
 * @author lwl
 * @since 1.0.0
 */
@RestController
@RequestMapping("/message")
public class MessageController {

    @Autowired
    MessageService messageService;

    /**
     * 注册用户
     * @return
     */
    @RequestMapping(value="/send",method = RequestMethod.POST)
    public int register(@RequestBody SendMessageDto sendMessageDto){
        return this.messageService.sendShortMessage(sendMessageDto);
    }

}
