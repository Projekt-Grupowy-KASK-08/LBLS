package com.lbls.labelling_application.repository;

import com.lbls.labelling_application.entity.MerData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MerDataRepository extends JpaRepository<MerData, Long> { }