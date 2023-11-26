package com.lbls.labelling_application.controller.mer_data;

import com.lbls.labelling_application.entity.MerData;
import com.lbls.labelling_application.entity.MerDataResponse;
import com.lbls.labelling_application.service.mer_data.MerDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.util.Arrays;

@RestController
public class MerDataDefaultController implements MerDataController {

    private final MerDataService merDataService;

    @Autowired
    public MerDataDefaultController(MerDataService merDataService){
        this.merDataService = merDataService;
    }


    @Override
    public MerDataResponse getMerData(String id) {
        Long merDataId = Long.parseLong(id);
        MerData merData = merDataService.findById(merDataId);

        if (merData == null)
            throw new RuntimeException("MerData id not found - " + merDataId);

        String[] data = new String(merData.getData(), StandardCharsets.UTF_8)
                .split("\\n");

        Double[] numericalData = new Double[data.length];

        for (int i = 0; i < data.length; i++) {
            numericalData[i] = Double.parseDouble(data[i]);
        }

        return new MerDataResponse(
                merData.getId(),
                numericalData
                );
    }
}
