package com.wyw.loading.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @author wyw
 * @date 2018\2\1 0001 16:26
 */
@Controller
public class LoadingController {

    @GetMapping(value = "/index")
    public String loading() {
        return "html/loading.html";
    }

}
