package com.lbls.labelling_application.controller.mer_data;


import com.lbls.labelling_application.entity.Label;
import com.lbls.labelling_application.entity.MerData;
import com.lbls.labelling_application.entity.MerDataResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

@RequestMapping("/api")
public interface MerDataController {

    @GetMapping("/merdata/{id}")
    @ResponseStatus(HttpStatus.OK)
    public MerDataResponse getMerData(@PathVariable String id);

}
