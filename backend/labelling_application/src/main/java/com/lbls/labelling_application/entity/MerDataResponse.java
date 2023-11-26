package com.lbls.labelling_application.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MerDataResponse {

    private long id;

    private Double[] dataCh1;

    private Double[] dataCh2;
}
