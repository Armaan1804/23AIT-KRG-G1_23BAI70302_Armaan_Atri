package com.example.demo.controller;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import jakarta.annotation.PostConstruct;

@Controller
public class WebSocketController {

    private final SimpMessagingTemplate messagingTemplate;

    public WebSocketController(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    // Send message when app starts (or simulate connection trigger)
    @PostConstruct
    public void sendTestMessage() {
        new Thread(() -> {
            try {
                Thread.sleep(3000); // wait for client connection
                messagingTemplate.convertAndSend("/topic/messages", "Hello from Spring Boot!");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }).start();
    }
}