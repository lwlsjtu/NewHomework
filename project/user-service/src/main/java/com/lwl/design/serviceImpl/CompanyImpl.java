package com.lwl.design.serviceImpl;

import com.lwl.design.dto.AddCompanyDto;
import com.lwl.design.entity.CompanyEntity;
import com.lwl.design.repository.CompanyRepository;
import com.lwl.design.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
public class CompanyImpl implements CompanyService {

    @Autowired
    CompanyRepository companyRepository;


    //返回1表示已存在，2表示成功
    @Override
    public int addCompany(AddCompanyDto addCompanyDto) {
        CompanyEntity tempCom=new CompanyEntity();
        CompanyEntity newCom = new CompanyEntity();
        int update_time,create_time;

        tempCom = this.companyRepository.findByName(addCompanyDto.getName());
        if(tempCom!=null){
            return 1;
        }else{
            update_time = (int)(System.currentTimeMillis()/1000);
            create_time = update_time;
            newCom.setAddress(addCompanyDto.getAddress());
            newCom.setArea(addCompanyDto.getArea());
            newCom.setCorporationName(addCompanyDto.getCorporationName());
            newCom.setCorporationPhone(addCompanyDto.getCorporationPhone());
            newCom.setName(addCompanyDto.getName());
            newCom.setCreatedAt(create_time);
            newCom.setUpdatedAt(update_time);
            this.companyRepository.save(newCom);
            return 2;
        }


    }

    @Override
    public <S extends CompanyEntity> Page<S> listByTime(int update_time, int pageSize, int index, int direction) {
        return null;
    }
}
