package com.lbls.labelling_application.service.label;

import com.lbls.labelling_application.entity.Label;

public interface LabelService {

    Label findById(int id);

    Label save(Label label);

    void deleteById(int id);
}
