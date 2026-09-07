package com.framestudio.contact;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ContactServiceApplicationTests {

    @Test
    void contextLoads() {
        // Verifies the Spring application context starts successfully.
        // Uses the file-based H2 database configured in application.yml
        // (creates/updates ./data/contact.mv.db on first run).
    }
}
