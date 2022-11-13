package com.SPRINGREST.SPRINGREST.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.SPRINGREST.SPRINGREST.dao.CourseDao;
import com.SPRINGREST.SPRINGREST.entities.Courses;


@Service
public class CourseServiceImpl implements CourseService {

	
	//List<Courses> list;
	@Autowired
	private CourseDao courseDao;	
	
	public CourseServiceImpl()
	{
//		
//		list=new ArrayList<>();
//		list.add(new Courses(145,"jaava course" , "this course is amazing"));
//		list.add(new Courses(12,"c++ course" , "this course is amazing"));
	}
	@Override
	public List<Courses> getCourses() {
		// TODO Auto-generated method stub

return courseDao.findAll();
	}
	@SuppressWarnings("deprecation")
	@Override
	public Courses getCourse(long courseId)
	{
		// TODO Auto-generated method stub
//		Courses c=null;
//		for(Courses course :list)
//		{
//			if(course.getId()==courseId)
//			{
//				c=course;
//				break;
//			}
//		}
//		return c;
		return courseDao.getById(courseId);
	}
	@Override
	public Courses addCourse(Courses course) {
		
	//	list.add(course);
		// TODO Auto-generated method stub
		courseDao.save(course);
		return course;
	}
	@Override
public Courses updateCourse(Courses course) {
		// TODO Auto-generated method stub
//		list.forEach(e->
//		
//				{
//					if(e.getId()==course.getId()) {
//				e.setTitle(course.getTitle());
//					e.setDescription(course.getDescription());
//				}
//				}
//				);
		courseDao.save(course);
				return course;
				
	}
	@Override
	public void deleteCourse(long parseLong) {
		// TODO Auto-generated method stub
//		list=this.list.stream()
//.filter(e->e.getId()!=parseLong).collect(Collectors.toList());	}
		Courses entity =courseDao.getById(parseLong);
		courseDao.delete(entity);
}
}
