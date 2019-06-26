package com.lwl.design.remoteservice;

import com.lwl.design.dto.SendMessageDto;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * 信息
 *
 * @author lwl(601982839@qq.com)
 * @since 1.0.0
 */
@FeignClient("OTHERSERVICE")
public interface ShortMessageService {
    /**
     * 发送信息
     * @return
     */
    @RequestMapping(value="/message/send",method = RequestMethod.POST)
    int sendShortMessage(@RequestBody SendMessageDto sendMessageDto);
}
