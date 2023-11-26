package com.lbls.labelling_application.controller.label;

import com.lbls.labelling_application.entity.Label;
import com.lbls.labelling_application.service.label.LabelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LabelDefaultController implements LabelController{

    private final LabelService labelService;

    @Autowired
    public LabelDefaultController(LabelService labelService){
        this.labelService = labelService;
    }

    @Override
    public Label getLabel(Long labelId) {
        Label label = labelService.findById(labelId);
        if (label == null)
            throw new RuntimeException("Label id not found - " + labelId);
        return label;
    }

    @Override
    public Label putLabel(Label label) {
        return labelService.save(label);
    }

    @Override
    public String deleteLabel(Long labelId) {
        Label tempLabel = labelService.findById(labelId);
        if(tempLabel == null)
            throw new RuntimeException("Label id not found - " + labelId);
        labelService.deleteById(labelId);
        return "Deleted label id - " + labelId;
    }
}
