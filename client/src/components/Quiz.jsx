import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import QuestionSelector from './QuestionSelector'
import ScaleLoader from 'react-spinners/ScaleLoader'

function Quiz() {

    const {subjectTitle} = useParams();
    const [activeQuestionNo, setActiveQuestionNo] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(null);
    const [contents, setContents] = useState([]);
    
    useEffect(() => {
        const getQuestions = () => {
            setTimeout(async() => {
                const x = await fetch(`http://localhost:5000/quizzes/${subjectTitle}`);
                const y = await x.json();
                setContents(y.contents);
            }, 1000)
        }
        getQuestions();
    }, [])

    useEffect(() => {
        setActiveQuestion(contents[activeQuestionNo-1]);
    }, [activeQuestionNo, contents])

    
  return (
    <div className='min-h-screen bg-zinc-900'>
        <p className='text-orange-600 text-3xl w-fit mx-auto border-b mb-5 border-orange-600 pb-1'>
            Quiz
        </p>
        <p className='text-white text-2xl w-fit mx-auto border-b mb-10 pb-1'>
            {subjectTitle}
        </p>
        {!activeQuestion
        ?
            <div className='w-fit mt-32 mx-auto'>
                <ScaleLoader
                    color="rgba(284, 100, 29, 1)"
                    height={60}
                    radius={80}
                    speedMultiplier={1}
                    width={10}
                />
            </div>
        :
            <div>
                <div className='mx-auto w-fit text-orange-600'>
                    <div className='flex mt-5 ml-5'>
                        <QuestionSelector qno={1} activeQuestionNo={activeQuestionNo} 
                            setActiveQuestionNo={setActiveQuestionNo} />
                        <QuestionSelector qno={2} activeQuestionNo={activeQuestionNo} 
                            setActiveQuestionNo={setActiveQuestionNo} />
                        <QuestionSelector qno={3} activeQuestionNo={activeQuestionNo} 
                            setActiveQuestionNo={setActiveQuestionNo} />
                        <QuestionSelector qno={4} activeQuestionNo={activeQuestionNo} 
                            setActiveQuestionNo={setActiveQuestionNo} />
                        <QuestionSelector qno={5} activeQuestionNo={activeQuestionNo} 
                            setActiveQuestionNo={setActiveQuestionNo} />
                    </div>
                    <div className='flex mt-5 ml-5'>
                        <QuestionSelector qno={6} activeQuestionNo={activeQuestionNo} 
                            setActiveQuestionNo={setActiveQuestionNo} />
                        <QuestionSelector qno={7} activeQuestionNo={activeQuestionNo} 
                            setActiveQuestionNo={setActiveQuestionNo} />
                        <QuestionSelector qno={8} activeQuestionNo={activeQuestionNo} 
                            setActiveQuestionNo={setActiveQuestionNo} />
                        <QuestionSelector qno={9} activeQuestionNo={activeQuestionNo} 
                            setActiveQuestionNo={setActiveQuestionNo} />
                        <QuestionSelector qno={10} activeQuestionNo={activeQuestionNo} 
                            setActiveQuestionNo={setActiveQuestionNo} />
                    </div>
                </div>
                
                <p className='text-white'>
                    {activeQuestion.question}
                </p>
                <p>
                    {activeQuestion.answers[0]}
                </p>
                <p>
                    {activeQuestion.answers[1]}
                </p>
                <p>
                    {activeQuestion.answers[2]}
                </p>
                <p>
                    {activeQuestion.answers[3]}
                </p>
            </div>
        }
    </div>
  )
}

export default Quiz