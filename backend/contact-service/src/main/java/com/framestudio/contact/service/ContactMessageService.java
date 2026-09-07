package com.framestudio.contact.service;

import com.framestudio.contact.dto.ContactRequest;
import com.framestudio.contact.dto.ContactResponse;
import com.framestudio.contact.entity.ContactMessage;
import com.framestudio.contact.repository.ContactMessageRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ContactMessageService {

    private final ContactMessageRepository repository;
    private final EmailNotificationService emailNotificationService;

    public ContactMessageService(ContactMessageRepository repository, EmailNotificationService emailNotificationService) {
        this.repository = repository;
        this.emailNotificationService = emailNotificationService;
    }

    public ContactResponse submit(ContactRequest request) {
        ContactMessage message = ContactMessage.builder()
                .name(request.getName())
                .phone(request.getPhone())
                .email(request.getEmail())
                .location(request.getLocation())
                .propertyType(request.getPropertyType())
                .propertySize(request.getPropertySize())
                .requirement(request.getRequirement())
                .budget(request.getBudget())
                .preferredContactTime(request.getPreferredContactTime())
                .message(request.getMessage())
                .build();

        ContactMessage saved = repository.save(message);

        // Email is best-effort — never blocks or fails the save above.
        emailNotificationService.notifyNewEnquiry(saved);

        return ContactResponse.builder()
                .id(saved.getId())
                .name(saved.getName())
                .createdAt(saved.getCreatedAt())
                .build();
    }
}
