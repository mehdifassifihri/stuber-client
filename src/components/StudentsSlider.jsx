import React from 'react';
import { Carousel } from 'antd';

const students = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Mary' },
  { id: 3, name: 'Sarah' },
  { id: 4, name: 'David' },
  { id: 5, name: 'Jane' },
  { id: 6, name: 'Peter' },
  { id: 7, name: 'Alice' },
  { id: 8, name: 'Bob' },
  { id: 9, name: 'Maggie' },
  { id: 10, name: 'Tom' },
  { id: 11, name: 'Lucy' },
  { id: 12, name: 'Jack' },
];

const StudentsCarousel = () => {
  const slides = Math.ceil(students.length / 6);

  return (
    <div>
      <h2>Students</h2>
      <Carousel>
        {[...Array(slides)].map((_, index) => (
          <div key={index}>
            {students.slice(index * 6, index * 6 + 6).map((student) => (
              <div key={student.id}>{student.name}</div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default StudentsCarousel;
