import React, { useState } from 'react'
import SubjectCard from './SubjectCard'
import '../index.css'

const subjects = ["Engineering Mathematics-1", "English", "Basic Electronics", "Engineering Physics",
                  "Mechanics of Solids", "Basic Mechanical Engineering",
                  "Engineering Mathematics-2", "Environmental Sciences", "Problem Solving Using Computers",
                  "Basic Electronic Technology", "Engineering Chemistry", "Engineering Biology",
                  "Engineering Mathematics-3" ,"Computer Organization and Architecture", "Data Structures",
                  "Digital System Design", "Object-Oriented Programming Systems",
                  "Engineering Mathematics-4", "Formal Language and Automata Theory", 
                  "Design and Analysis of Algorithms", "Embedded Systems", "Database Systems",
                  "Essentials Of Management", "Priciples Of Cryptography", "Software Engineering",
                  "Operating Systems", "Computer Networks",
                  "Engineering Economics and Financial Management", "Parallel Computer Architecture",
                  "Compiler Design"];

function Hero() {

  const [dynamicSubjects, setDynamicSubjects] = useState(subjects);
  let temp = [];
  let index = 0;

  function handleSearch(e){
    setDynamicSubjects(subjects.filter((subject) => subject.toLowerCase().includes(e.target.value.toLowerCase())))
  }
  console.log(dynamicSubjects)

  return (
    <div className='min-h-screen bg-zinc-900'>
      
      <div className='flex justify-center'>
        <input type='text' placeholder='Search for subjects.....'
          className='border rounded-2xl border-black focus:outline-none focus:border-black p-4 pr-16 bg-black text-white 
          mx-auto placeholder:text-orange-600'
          onChange={handleSearch}>
        </input>
      </div>

      <div className='flex justify-center'>
        <div className='pt-10 text-orange-600'>
          {dynamicSubjects.forEach((subject, i, a) => 
            {
              temp[i] = <div key={subject} className='flex justify-center space-x-10'>
                          {index <= a.length-1 && <SubjectCard x={a[index]} />}
                          {index+1 <= a.length-1 && <SubjectCard x={a[index+1]} />}
                          {index+2 <= a.length-1 && <SubjectCard x={a[index+2]} />}
                        </div>
              index=index+3;
            })
          }
          {temp.map((subject) => subject)}
        </div>
      </div>
    </div>
  )
}

export default Hero