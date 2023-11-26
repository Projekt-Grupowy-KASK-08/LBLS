package com.lbls.labelling_application.controller.label;

import com.lbls.labelling_application.entity.Label;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


@RequestMapping("/api")
public interface LabelController {

    @GetMapping("/labels/{labelId}")
    @ResponseStatus(HttpStatus.OK)
    public Label getLabel(@PathVariable Long labelId);

    @PutMapping("/labels")
    @ResponseStatus(HttpStatus.CREATED)
    public Label putLabel(@RequestBody Label label);

    @DeleteMapping("/labels/{labelId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public String deleteLabel(@PathVariable Long labelId);


}
