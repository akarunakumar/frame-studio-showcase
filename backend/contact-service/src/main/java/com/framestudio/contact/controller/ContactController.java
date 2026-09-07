package com.framestudio.contact.controller;

import com.framestudio.contact.dto.ApiResponse;
import com.framestudio.contact.dto.ContactRequest;
import com.framestudio.contact.dto.ContactResponse;
import com.framestudio.contact.service.ContactMessageService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * The entire public API for the simple showcase site. One endpoint,
 * always public, no authentication — this is the trimmed-down
 * replacement for the full version's lead-service.
 */
@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactMessageService contactMessageService;

    public ContactController(ContactMessageService contactMessageService) {
        this.contactMessageService = contactMessageService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<ContactResponse>> submit(@Valid @RequestBody ContactRequest request) {
        ContactResponse response = contactMessageService.submit(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Thank you — we'll be in touch shortly", response));
    }
}
