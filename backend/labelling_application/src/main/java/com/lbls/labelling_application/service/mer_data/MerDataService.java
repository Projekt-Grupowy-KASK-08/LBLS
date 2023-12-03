package com.lbls.labelling_application.service.mer_data;

import com.lbls.labelling_application.entity.MerData;

public interface MerDataService {

    MerData save(MerData merData);

    MerData findById(int id);
}
