package com.lwl.design.controller;

import com.lwl.design.dto.AddCompanyDto;
import com.lwl.design.entity.CompanyEntity;
import com.lwl.design.repository.CompanyRepository;
import com.lwl.design.service.CompanyService;
import com.lwl.design.util.ReturnMsg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 公司管理的Controller
 *
 * @author lwl
 * @since 1.0.0
 */
@RestController
@RequestMapping("/company")
public class CompanyController {

    @Autowired
    CompanyService companyService;

    @Autowired
    CompanyRepository companyRepository;

    @RequestMapping(value="/add",method = RequestMethod.POST)
    public ReturnMsg addCompany(@RequestBody AddCompanyDto addCompanyDto){
        ReturnMsg returnMsg = new ReturnMsg();
        int result = this.companyService.addCompany(addCompanyDto);
        if(result==1){
            returnMsg.setResult(result);
            returnMsg.setMessage("添加失败，已有该公司");
            return  returnMsg;
        }else{
            returnMsg.setResult(result);
            returnMsg.setMessage("添加成功");
            return  returnMsg;
        }
    }

    @RequestMapping(value="/list",method = RequestMethod.GET)
    public List<CompanyEntity> findAllCompany(){
        return this.companyRepository.findAll();
    }
}
