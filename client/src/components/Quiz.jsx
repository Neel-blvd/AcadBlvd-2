import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import QuestionSelector from './QuestionSelector'
import ScaleLoader from 'react-spinners/ScaleLoader'
import submitButton from '../public/quizSubmit.png'

function Quiz() {

    const {subjectTitle} = useParams();
    const [activeQuestionNo, setActiveQuestionNo] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(null);
    const [contents, setContents] = useState([]);
    const [optionSelectedArray, setOptionSelectedArray] = useState(Array(10).fill(0));
    const [attemptedQuestions, setAttemptedQuestions] = useState(0);
    
    useEffect(() => {
        const getQuestions = () => {
            setTimeout(async() => {
                const x = await fetch(`http://localhost:5000/quizzes/${subjectTitle}`);
                const y = await x.json();
                setContents(y.contents);
                // setOptionSelectedArray(Array(contents.length).fill(0));
            }, 1000)
        }
        getQuestions();
    }, [])

    useEffect(() => {
        setActiveQuestion(contents[activeQuestionNo-1]);
    }, [activeQuestionNo, contents])


    function optionSelector(option_no){
        if(optionSelectedArray[activeQuestionNo - 1] == option_no)
        {
            const updatedArray = [...optionSelectedArray]; 
            updatedArray[activeQuestionNo - 1] = 0; // De-selecting an option
            setAttemptedQuestions(attemptedQuestions - 1);
            setOptionSelectedArray(updatedArray);
        }
        else
        {
            const updatedArray = [...optionSelectedArray]; 
            updatedArray[activeQuestionNo - 1] = option_no; // Selecting an option
            if(optionSelectedArray[activeQuestionNo - 1] == 0)
                setAttemptedQuestions(attemptedQuestions + 1);
            setOptionSelectedArray(updatedArray);
        }
    }


    
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
                    <div className='flex items-end'>
                        <div>
                            <div className='flex ml-5'>
                                <QuestionSelector qno={1} activeQuestionNo={activeQuestionNo} 
                                    setActiveQuestionNo={setActiveQuestionNo}
                                    optionSelected={optionSelectedArray[0]} />
                                <QuestionSelector qno={2} activeQuestionNo={activeQuestionNo} 
                                    setActiveQuestionNo={setActiveQuestionNo}
                                    optionSelected={optionSelectedArray[1]} />
                                <QuestionSelector qno={3} activeQuestionNo={activeQuestionNo} 
                                    setActiveQuestionNo={setActiveQuestionNo}
                                    optionSelected={optionSelectedArray[2]} />
                                <QuestionSelector qno={4} activeQuestionNo={activeQuestionNo} 
                                    setActiveQuestionNo={setActiveQuestionNo}
                                    optionSelected={optionSelectedArray[3]} />
                                <QuestionSelector qno={5} activeQuestionNo={activeQuestionNo} 
                                    setActiveQuestionNo={setActiveQuestionNo}
                                    optionSelected={optionSelectedArray[4]} />
                            </div>
                            <div className='flex mt-5 ml-5'>
                                <QuestionSelector qno={6} activeQuestionNo={activeQuestionNo} 
                                    setActiveQuestionNo={setActiveQuestionNo}
                                    optionSelected={optionSelectedArray[5]} />
                                <QuestionSelector qno={7} activeQuestionNo={activeQuestionNo} 
                                    setActiveQuestionNo={setActiveQuestionNo}
                                    optionSelected={optionSelectedArray[6]} />
                                <QuestionSelector qno={8} activeQuestionNo={activeQuestionNo} 
                                    setActiveQuestionNo={setActiveQuestionNo}
                                    optionSelected={optionSelectedArray[7]} />
                                <QuestionSelector qno={9} activeQuestionNo={activeQuestionNo} 
                                    setActiveQuestionNo={setActiveQuestionNo}
                                    optionSelected={optionSelectedArray[8]} />
                                <QuestionSelector qno={10} activeQuestionNo={activeQuestionNo} 
                                    setActiveQuestionNo={setActiveQuestionNo}
                                    optionSelected={optionSelectedArray[9]} />
                            </div>
                        </div>
                        <div>
                            <p className='ml-10'>
                                Attemped <p className='text-green-600 inline'>{attemptedQuestions}</p> of 10
                            </p>
                            <img src={submitButton} className='w-15 ml-10'></img>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-10 mb-10'>
                    <div className='w-11/12 text-white mx-auto text-xl'>
                        {activeQuestion.question}
                    </div>
                </div>
                <div className='flex justify-around text-orange-600 space-x-5 mb-5'>
                    <input type='radio' id='option1' name='options' className='hidden' value={activeQuestion.answers[0]}
                        onClick={() => optionSelector(1)}></input>
                    <label htmlFor='option1' className={`shadow-sm shadow-orange-600 rounded-xl p-2 px-10 text-xl border-orange-600
                        ${optionSelectedArray[activeQuestionNo - 1] == 1 ? 'bg-black border-none' : ''} cursor-pointer`}>
                        {activeQuestion.answers[0]}
                    </label>
                    <input type='radio' id='option2' name='options' className='hidden' value={activeQuestion.answers[1]}
                        onClick={() => optionSelector(2)}></input>
                    <label htmlFor='option2' className={`shadow-sm shadow-orange-600 rounded-xl p-2 px-10 text-xl border-orange-600
                        ${optionSelectedArray[activeQuestionNo - 1] == 2 ? 'bg-black border-none' : ''} cursor-pointer`}>
                        {activeQuestion.answers[1]}
                    </label>
                </div>
                <div className='flex justify-around text-orange-600 space-x-5'>
                    <input type='radio' id='option3' name='options' className='hidden' value={activeQuestion.answers[2]}
                        onClick={() => optionSelector(3)}></input>
                    <label htmlFor='option3' className={`shadow-sm shadow-orange-600 rounded-xl p-2 px-10 text-xl border-orange-600
                        ${optionSelectedArray[activeQuestionNo - 1] == 3 ? 'bg-black border-none' : ''} cursor-pointer`}>
                        {activeQuestion.answers[2]}
                    </label>
                    <input type='radio' id='option4' name='options' className='hidden' value={activeQuestion.answers[3]}
                        onClick={() => optionSelector(4)}></input>
                    <label htmlFor='option4' className={`shadow-sm shadow-orange-600 rounded-xl p-2 px-10 text-xl border-orange-600
                        ${optionSelectedArray[activeQuestionNo - 1] == 4 ? 'bg-black border-none' : ''} cursor-pointer`}>
                        {activeQuestion.answers[3]}
                    </label>
                </div>
            </div>
        }
    </div>
  )
}

export default Quiz