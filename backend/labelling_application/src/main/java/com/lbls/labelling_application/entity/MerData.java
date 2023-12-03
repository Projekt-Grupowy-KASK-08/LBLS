package com.lbls.labelling_application.entity;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Type;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name="mer_data")
public class MerData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "data_ch1")
    private String dataCh1;

    @Column(name = "data_ch2")
    private String dataCh2;

    @Column(name = "path_ch1")
    private String pathCh1;

    @Column(name = "path_ch2")
    private String pathCh2;

}