package com.framestudio.contact.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.Instant;

@Getter
@Builder
public class ContactResponse {
    private Long id;
    private String name;
    private Instant createdAt;
}
