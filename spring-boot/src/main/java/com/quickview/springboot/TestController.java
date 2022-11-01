package com.quickview.springboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/vscode")
public class TestController {

        @GetMapping(value = {"", "/"})
        public String enter(){
            return "Hello VSCode";
        }
    
}
