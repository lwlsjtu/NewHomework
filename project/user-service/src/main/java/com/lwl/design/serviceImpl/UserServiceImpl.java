package com.lwl.design.serviceImpl;

import com.lwl.design.dto.UserInfoDto;
import com.lwl.design.dto.UserLoginDto;
import com.lwl.design.dto.UserLoginRetDto;
import com.lwl.design.dto.UserRegisterDto;
import com.lwl.design.entity.UserEntity;
import com.lwl.design.entity.UserInfoEntity;
import com.lwl.design.repository.UserInfoPepository;
import com.lwl.design.repository.UserRepository;
import com.lwl.design.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserInfoPepository userInfoPepository;

    @Override
    public int userRegister(UserRegisterDto userRegisterDto) {
        UserEntity tempUser = new UserEntity();
        UserEntity newUser = new UserEntity();
        int update_time,create_time;

        tempUser=userRepository.findByMobilephone(userRegisterDto.getPhoneNumber());
        if(tempUser!=null){
            return 1;
        }else{
            update_time = (int)(System.currentTimeMillis()/1000);
            create_time = update_time;
            newUser.setMobilephone(userRegisterDto.getPhoneNumber());
            newUser.setPassword(userRegisterDto.getPassword());
            newUser.setUpdatedAt(update_time);
            newUser.setCreatedAt(create_time);
            newUser.setType("new_user");
            userRepository.save(newUser);
            return 2;
        }

    }

    @Override
    public UserLoginRetDto userLogin(UserLoginDto userLoginDto) {
        String phoneNumber = userLoginDto.getPhoneNumber();
        String password = userLoginDto.getPassword();
        UserLoginRetDto loginRet=new UserLoginRetDto();
        UserEntity tempUser = new UserEntity();

        tempUser=this.userRepository.findByMobilephone(phoneNumber);
        if(tempUser==null){
            loginRet.setUserId(0);
            loginRet.setMsg("该手机尚未注册");
            loginRet.setRole("0");
            return loginRet;
        }else{
            if(tempUser.getPassword().equals(password)){
                loginRet.setUserId(tempUser.getId());
                loginRet.setRole(tempUser.getType());
                loginRet.setMsg("登陆成功");
                return loginRet;
            }else{
                loginRet.setUserId(0);
                loginRet.setMsg("密码错误");
                loginRet.setRole("0");
                return loginRet;
            }

        }

    }

    @Override
    public int userInfoApply(UserInfoDto userInfoDto) {

        UserInfoEntity tempInfo = new UserInfoEntity();
        int infoId,update_time;
        UserEntity tempUser = new UserEntity();

        tempInfo.setAddress(userInfoDto.getAddress());
        tempInfo.setUserId(userInfoDto.getUserId());
        tempInfo.setCompany(userInfoDto.getCompany());
        tempInfo.setMail(userInfoDto.getMail());
        tempInfo.setApplyType(userInfoDto.getApplyType());
        tempInfo.setName(userInfoDto.getName());
        tempInfo.setWork(userInfoDto.getWork());
        tempInfo.setState(1);
        update_time = (int)(System.currentTimeMillis()/1000);
        tempInfo.setApplyTime(update_time);

        userInfoPepository.save(tempInfo);
        infoId=userInfoPepository.findByUserId(userInfoDto.getUserId()).getId();
        tempUser = userRepository.findById(userInfoDto.getUserId());
        tempUser.setInfoId(infoId);
        userRepository.save(tempUser);

        return 1;
    }

    @Override
    public List<UserInfoEntity> getInfoList(int state, int index, int size, int direction) {
        Sort sort;
        if(direction==1){
            sort = new Sort(Sort.Direction.ASC,"applyTime");
        }else {
            sort = new Sort(Sort.Direction.DESC,"applyTime");
        }
        System.out.println(state);
        System.out.println(index);
        System.out.println(size);
        System.out.println(direction);
        Pageable pageable = new PageRequest(index,size,sort);
        UserInfoEntity exInfo=new UserInfoEntity();
        exInfo.setState(state);

        ExampleMatcher exampleMatcher=ExampleMatcher.matching().withMatcher("state",ExampleMatcher.GenericPropertyMatchers.exact()).withIgnorePaths("id");//一定要忽略id
        Example<UserInfoEntity> example = Example.of(exInfo,exampleMatcher);
        System.out.println(example.getProbe().getState());
        Page<UserInfoEntity> page = userInfoPepository.findAll(example,pageable);
        System.out.println(page.getContent());
        System.out.println(page.getTotalElements());
        return page.getContent();




    }

    @Override
    public String getName(int userId) {
        UserInfoEntity userInfo = new UserInfoEntity();

        userInfo = userInfoPepository.findByUserId(userId);
        return userInfo.getName();
    }
}
