import React, { useEffect, useState } from 'react';
import './App.css';
import { Course } from './interfaces';
import CourseItem from './CourseItem';

const App = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/courses')
        .then(res => res.json())
        .then(courses => {
          console.log(courses);
          setCourses(courses);
        });
  },[]);

  return (
    <div className='App'>
      <ul>
        {courses.map((item) => (
          <CourseItem key={item.id} course={item} />
          // <li key={item.id}>{item.number} - {item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
