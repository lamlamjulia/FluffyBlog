package com.fluffy.flufflyblog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;


@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
public class FlufflyBlogApplication {
    public static void main(String[] args) {
        SpringApplication.run(FlufflyBlogApplication.class, args);
    }

}
