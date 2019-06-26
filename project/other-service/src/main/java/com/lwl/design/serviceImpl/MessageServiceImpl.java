package com.lwl.design.serviceImpl;

import com.lwl.design.dto.SendMessageDto;
import com.lwl.design.entity.ShortMessageEntity;
import com.lwl.design.repository.ShortMessageRepository;
import com.lwl.design.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    ShortMessageRepository shortMessageRepository;

    @Override
    public int sendShortMessage(SendMessageDto sendMessageDto) {
        ShortMessageEntity msg =new ShortMessageEntity();
        int send_time;

        msg.setContent(sendMessageDto.getContent());
        msg.setSenderId(sendMessageDto.getSenderId());
        msg.setReceiverId(sendMessageDto.getReceiverId());
        msg.setState(1);
        send_time = (int)(System.currentTimeMillis()/1000);
        msg.setCreatedAt(send_time);
        shortMessageRepository.save(msg);

        return 1;
    }
}
