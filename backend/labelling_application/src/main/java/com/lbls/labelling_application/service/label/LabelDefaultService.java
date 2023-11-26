package com.lbls.labelling_application.service.label;

import com.lbls.labelling_application.entity.Label;
import com.lbls.labelling_application.repository.LabelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class LabelDefaultService implements LabelService{

    private final LabelRepository labelRepository;

    @Autowired
    public LabelDefaultService(LabelRepository labelRepository){
        this.labelRepository = labelRepository;
    }


    @Override
    public Label findById(Long id) {
        Optional<Label> label = labelRepository.findById(id);
        if(label.isPresent())
            return label.get();
        else
            throw new RuntimeException("Did not find label id - " + id);
    }

    @Override
    public Label save(Label label) {
        return labelRepository.save(label);
    }

    @Override
    public void deleteById(Long id) {
        labelRepository.deleteById(id);
    }
}
