package com.framestudio.contact.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContactRequest {

    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Phone is required")
    private String phone;

    private String email;

    @NotBlank(message = "Location is required")
    private String location;

    @NotBlank(message = "Property type is required")
    private String propertyType;

    private String propertySize;
    private String requirement;
    private String budget;
    private String preferredContactTime;
    private String message;
}
