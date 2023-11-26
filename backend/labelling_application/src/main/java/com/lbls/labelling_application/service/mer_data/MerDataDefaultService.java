package com.lbls.labelling_application.service.mer_data;

import com.lbls.labelling_application.entity.Label;
import com.lbls.labelling_application.entity.MerData;
import com.lbls.labelling_application.repository.MerDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MerDataDefaultService implements MerDataService{

    private final MerDataRepository merDataRepository;

    @Autowired
    public MerDataDefaultService(MerDataRepository merDataRepository){
        this.merDataRepository = merDataRepository;
    }

    @Override
    public MerData save(MerData merData) {
        return merDataRepository.save(merData);
    }

    @Override
    public MerData findById(Long id) {
        Optional<MerData> merData = merDataRepository.findById(id);
        if(merData.isPresent())
            return merData.get();
        else
            throw new RuntimeException("Did not find label id - " + id);
    }
}
