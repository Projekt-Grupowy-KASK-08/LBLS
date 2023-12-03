package com.lbls.labelling_application.controller.mer_data;

import com.lbls.labelling_application.entity.MerData;
import com.lbls.labelling_application.entity.MerDataResponse;
import com.lbls.labelling_application.service.mer_data.MerDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.Base64;
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
        int merDataId = Integer.parseInt(id);
        MerData merData = merDataService.findById(merDataId);

        if (merData == null)
            throw new RuntimeException("MerData id not found - " + merDataId);

        String[] dataCh1 = merData.getDataCh1().split("\\n");
        String[] dataCh2 = merData.getDataCh2().split("\\n");

        Double[] numericalDataCh1 = new Double[dataCh1.length];
        Double[] numericalDataCh2 = new Double[dataCh2.length];


        for (int i = 0; i < dataCh1.length; i++)
            numericalDataCh1[i] = Double.parseDouble(dataCh1[i]);

        for (int i = 0; i < dataCh2.length; i++) {
            numericalDataCh2[i] = Double.parseDouble(dataCh2[i]);
        }

        return new MerDataResponse(
                merData.getId(),
                numericalDataCh1,
                numericalDataCh2
                );
    }
}
