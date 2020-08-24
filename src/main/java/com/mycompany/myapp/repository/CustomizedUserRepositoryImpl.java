package com.mycompany.myapp.repository;

import com.mycompany.myapp.jooq.tables.JhiUser;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CustomizedUserRepositoryImpl implements CustomizedUserRepository {

    private final DSLContext jooq;

    @Autowired
    public CustomizedUserRepositoryImpl(DSLContext jooq) {

        this.jooq = jooq;
    }

    public int countUsers() {

        return jooq.fetchCount(JhiUser.JHI_USER);
    }
}
