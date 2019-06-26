package com.lwl.design.service;

import com.lwl.design.dto.SendMessageDto;

public interface MessageService {
    int sendShortMessage(SendMessageDto sendMessageDto);
}
