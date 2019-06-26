package com.lwl.design.service;

import com.lwl.design.dto.AddCompanyDto;
import com.lwl.design.entity.CompanyEntity;
import org.springframework.data.domain.Page;

public interface CompanyService {
    int addCompany(AddCompanyDto addCompanyDto);

    <S extends CompanyEntity> Page<S> listByTime(int update_time,int pageSize,int index,int direction);

}
