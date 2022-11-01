package com.quickview.springboot;

import java.util.HashMap;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {
    
    @GetMapping("/api/hello")
    public HashMap hello(){
        HashMap result = new HashMap<>();
        result.put("message", "안녕하세요");
        
        return result;
    }
}
