import React from 'react';
import Slidebar from '../components/Slidebar'; 
import { useParams } from "react-router-dom";


const Syllabus = () => {
  const { id } = useParams(); 

  return (
    <div className="flex space-x-2 min-h-screen"> 
      <Slidebar />
      
      <div className="p-4 flex-grow rounded-xl border-2 border-black shadow-green-300 shadow-lg min-h-screen"> 
        <h1 className="text-3xl font-bold mb-6">Syllabus</h1>

        <div className="text-lg space-y-8">

          <div>
            <h2 className="text-2xl font-semibold mb-4">Module 1: Introduction to JAVA  {id}</h2>
            <p>
            Java is a high-level, object-oriented programming language developed by Sun Microsystems in 1995. It is platform-independent due to its "write once, run anywhere" (WORA) capability. Java is widely used for building web applications, mobile apps, and enterprise-level software. It features automatic memory management and a robust security framework.
              <br />
              <strong>Self-learning Topics:</strong> Study some more classical encryption techniques and solve more problems on all techniques. Homomorphic encryption in cloud computing.
            </p>
            <p><strong>Hours:</strong> 07</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
