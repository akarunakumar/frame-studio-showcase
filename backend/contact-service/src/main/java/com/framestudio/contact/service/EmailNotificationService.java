package com.framestudio.contact.service;

import com.framestudio.contact.entity.ContactMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

/**
 * Emails the business owner when a new enquiry comes in. If SMTP
 * credentials aren't configured (SMTP_USERNAME/SMTP_PASSWORD blank),
 * this silently skips sending rather than failing the whole request —
 * the enquiry is still saved to the database either way, so nothing
 * is ever lost even before email is set up.
 */
@Service
public class EmailNotificationService {

    private static final Logger log = LoggerFactory.getLogger(EmailNotificationService.class);

    private final JavaMailSender mailSender;
    private final String fromAddress;
    private final String notifyAddress;
    private final boolean emailEnabled;

    public EmailNotificationService(
            JavaMailSender mailSender,
            @Value("${app.mail.from:}") String fromAddress,
            @Value("${app.mail.notify-address:}") String notifyAddress,
            @Value("${spring.mail.username:}") String smtpUsername) {
        this.mailSender = mailSender;
        this.fromAddress = fromAddress;
        this.notifyAddress = notifyAddress;
        this.emailEnabled = !smtpUsername.isBlank() && !notifyAddress.isBlank();
    }

    public void notifyNewEnquiry(ContactMessage msg) {
        if (!emailEnabled) {
            log.info("Email notification skipped (SMTP not configured) for enquiry #{}", msg.getId());
            return;
        }

        try {
            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setFrom(fromAddress);
            mail.setTo(notifyAddress);
            mail.setSubject("New enquiry from " + msg.getName());
            mail.setText(buildBody(msg));
            mailSender.send(mail);
            log.info("Sent email notification for enquiry #{}", msg.getId());
        } catch (Exception e) {
            // Never let an email failure fail the API request — the
            // enquiry is already saved regardless.
            log.warn("Could not send email notification for enquiry #{}: {}", msg.getId(), e.getMessage());
        }
    }

    private String buildBody(ContactMessage msg) {
        return """
                New enquiry from the website:

                Name: %s
                Phone: %s
                Email: %s
                Location: %s
                Property type: %s
                Property size: %s
                Budget: %s
                Preferred contact time: %s

                Requirement:
                %s

                Message:
                %s
                """.formatted(
                msg.getName(),
                msg.getPhone(),
                nullToDash(msg.getEmail()),
                msg.getLocation(),
                msg.getPropertyType(),
                nullToDash(msg.getPropertySize()),
                nullToDash(msg.getBudget()),
                nullToDash(msg.getPreferredContactTime()),
                nullToDash(msg.getRequirement()),
                nullToDash(msg.getMessage())
        );
    }

    private String nullToDash(String value) {
        return (value == null || value.isBlank()) ? "-" : value;
    }
}
