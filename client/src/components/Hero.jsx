import React, { useState } from 'react'
import SubjectCard from './SubjectCard'
import '../index.css'

const subjects = [
    [
      "Physics Cycle",
      [
        {
          x : "Engineering Mathematics-1", y : "MAT_2226"
        },
        {
          x : "English", y : "CSE_2254"
        },
        { 
          x : "Basic Electronics", y : "CSE_2252"
        }
      ],
      [
        {
          x : "Engineering Physics", y : "CSE_2253"
        },
        {
          x : "Mechanics of Solids", y : "CSE_2251"
        },
        {
          x : "Basic Mechanical Engineering", y : "CSE_2251"
        }
      ]
    ],
    [
      "Chemistry Cycle",
      [
        {
        x : "Engineering Mathematics-2", y : "MAT_2226"
        },
        {
          x : "Environmental Sciences", y : "CSE_2254"
        },
        {
          x : "Problem Solving Using Computers", y : "CSE_2252"
        }
      ],
      [
        {
        x : "Basic Electronic Technology", y : "CSE_2253"
        },
        {
          x : "Engineering Chemistry", y : "CSE_2251"
        },
        {
          x : "Engineering Biology", y : "CSE_2251"
        }
      ]
    ],
    [
      "Semester 3",
      [
        {
        x : "Engineering Mathematics-3", y : "MAT_2226"
        },
        {
          x : "Computer Organization and Architecture", y : "CSE_2254"
        },
        {
          x : "Data Structures", y : "CSE_2252"
        }
      ],
      [
        {
        x : "Digital System Design", y : "CSE_2253"
        },
        {
          x : "Object-Oriented Programming Systems", y : "CSE_2251"
        }
      ]
    ],
    [
      "Semester 4",
      [
        {
          x : "Engineering Mathematics-4", y : "MAT_2226"
        },
        {
          x : "Formal Language and Automata Theory", y : "CSE_2254"
        },
        { 
          x : "Design and Analysis of Algorithms", y : "CSE_2252"
        }
      ],
      [
        {
        x : "Embedded Systems", y : "CSE_2253"
        },
        {
          x : "Database Systems", y : "CSE_2251"
        }
      ]
    ],
    [
      "Semester 5",
      [
        {
          x : "Essentials Of Management", y : "MAT_2226"
        },
        {
          x : "Priciples Of Cryptography", y : "CSE_2254"
        },
        {
          x : "Software Engineering", y : "CSE_2252"
        }
      ],
      [
        {
        x : "Operating Systems", y : "CSE_2253"
        },
        {
          x : "Computer Networks", y : "CSE_2251"
        }
      ]
    ],
    [
      "Semester 6",
      [
        {
          x : "Engineering Economics and Financial Management", y : "MAT_2226"
        },
        {
          x : "Parallel Computer Architecture", y : "CSE_2254"
        },
        {
          x : "Compiler Design", y : "CSE_2252"
        }
      ]
    ]
  ];
  

function Hero() {

  const [dynamicSubjects, setDynamicSubjects] = useState(subjects);

  function handleSearch(e){
    const filteredArray = subjects.map((cycle) => {
      let a = [];
      let temp = [];
      cycle.forEach((ele, i) => {
        if(i === 0)
          a.push(ele)
        else
          temp = [...temp, ...(ele.filter((subject) => subject.x.toLowerCase().includes(e.target.value)))]
      })
      if(temp.length <= 3)
        a.push(temp)
      else
      {
        a.push(temp.slice(0,3))
        a.push(temp.slice(3))
      }
      return a.slice(1).every((x) => Array.isArray(x) && x.length===0) ? [] : a;
    })
    setDynamicSubjects(filteredArray);
  }

  return (
    <div className='min-h-screen bg-zinc-900'>
      
      <div className='flex justify-center'>
        <input type='text' placeholder='Search...'
          className='border rounded-2xl border-black focus:outline-none focus:border-black p-4 pr-16 
          bg-black text-white mx-auto placeholder:text-orange-600 placeholder:font-extralight'
          onChange={handleSearch}>
        </input>
      </div>

      <div className='pt-10 text-orange-600'>
        {dynamicSubjects.map((cycle, cycleIndex) => {
          return <div key={cycleIndex} className='mt-12'>
                  {cycle.map((ele, eleIndex) => {
                    if(eleIndex == 0)
                      return <p className='text-center text-4xl underline mb-5' key={eleIndex}>{ele}</p>
                    return <div key={eleIndex} className='flex justify-center space-x-48'>
                            {ele.map((subject, subjectIndex) => 
                              <SubjectCard key={subjectIndex} x={subject.x} y={subject.y} />
                            )}
                          </div>
                  })}
                </div>
        })}
      </div>
    </div>
  )
}

export default Hero