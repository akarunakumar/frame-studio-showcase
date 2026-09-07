package com.framestudio.contact;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Frame Studio Interiors — Simple Showcase Backend.
 *
 * One Spring Boot app, no gateway, no auth, no microservices. Exists
 * only to receive the public Contact form submission, save it, and
 * (if SMTP is configured) email the business owner. This is the
 * trimmed-down alternative to the full lead-service / auth-service /
 * project-service / content-service / api-gateway system used in the
 * full version of this project.
 */
@SpringBootApplication
public class ContactServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ContactServiceApplication.class, args);
    }
}
