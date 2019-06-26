package com.lwl.design.authserver.entity;

import org.springframework.security.core.GrantedAuthority;

public class MyAuthority implements GrantedAuthority {


    String Authority;

    public void setAuthority(String authority) {
        Authority = authority;
    }
    @Override
    public String getAuthority() {
        return Authority;
    }
}
