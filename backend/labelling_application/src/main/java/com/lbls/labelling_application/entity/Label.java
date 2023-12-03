package com.lbls.labelling_application.entity;


import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name="label")
public class Label {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="label")
    private String label;

    @Column(name="label_start")
    private int labelStart;

    @Column(name="label_end")
    private int labelEnd;

    @Column(name="channel")
    private int channel;

    @Column(name="mer_data_id")
    private int merDataId;
}