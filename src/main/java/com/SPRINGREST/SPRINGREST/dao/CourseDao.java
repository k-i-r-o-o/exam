package com.SPRINGREST.SPRINGREST.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SPRINGREST.SPRINGREST.entities.Courses;

public interface CourseDao extends JpaRepository<Courses ,Long> {

}
