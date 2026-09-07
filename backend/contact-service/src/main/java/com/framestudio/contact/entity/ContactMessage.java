package com.framestudio.contact.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;

/**
 * One flat table — no lead status, no notes, no follow-ups, no
 * assignment. Just what was submitted and when. The business owner
 * reads these either from the email notification or by asking a
 * developer to query the table directly — no admin screen needed at
 * this scale.
 */
@Entity
@Table(name = "contact_messages")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ContactMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 150)
    private String name;

    @Column(nullable = false, length = 30)
    private String phone;

    @Column(length = 150)
    private String email;

    @Column(nullable = false, length = 200)
    private String location;

    @Column(name = "property_type", nullable = false, length = 50)
    private String propertyType;

    @Column(name = "property_size", length = 50)
    private String propertySize;

    @Column(columnDefinition = "TEXT")
    private String requirement;

    @Column(length = 50)
    private String budget;

    @Column(name = "preferred_contact_time", length = 100)
    private String preferredContactTime;

    @Column(columnDefinition = "TEXT")
    private String message;

    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;

    @PrePersist
    void onCreate() {
        this.createdAt = Instant.now();
    }
}
