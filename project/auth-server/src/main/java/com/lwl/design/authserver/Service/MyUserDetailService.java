package com.lwl.design.authserver.Service;

import com.lwl.design.authserver.entity.MyAuthority;
import com.lwl.design.authserver.entity.User;
import com.lwl.design.authserver.entity.UserEntity;
import com.lwl.design.authserver.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Primary
@Service
public class MyUserDetailService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        UserEntity userEntity = new UserEntity();
        userEntity = userRepository.findByMobilephone(s);
        User user= new User();
        List<MyAuthority> authorityList = new ArrayList<>();
        MyAuthority myAuthority =new MyAuthority();
        user.setPassword(userEntity.getPassword());
        user.setUsername(userEntity.getMobilephone());
        myAuthority.setAuthority(userEntity.getType());
        authorityList.add(myAuthority);
        user.setAuthorities(authorityList);
        return user;
    }
}
