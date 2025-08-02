package com.ss.mailrcv.repository;

import com.ss.mailrcv.model.Subscriber;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface subscriberRepository extends JpaRepository<Subscriber, Long> {
    boolean existsByEmail(String email);


}
