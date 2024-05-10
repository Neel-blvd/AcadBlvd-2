import React, { useState } from 'react'
import QuestionSelector from './QuestionSelector'

function UserStatisticDetailed( {quizzescontent} ) {

    const [activeQuestionNo, setActiveQuestionNo] = useState(1);
    const isCorrect = 
    quizzescontent[activeQuestionNo - 1].correctanswer == quizzescontent[activeQuestionNo - 1].attemptedanswer;

  return (
    <div className='flex flex-col items-center'>
        
        <div className='flex ml-5 mt-10'>
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

        <div className='w-full mt-10 mb-10'>
            <div className='w-11/12 text-white mx-auto text-xl'>
                {quizzescontent[activeQuestionNo - 1].question}
            </div>

            <div className='flex justify-around text-orange-600 space-x-5 mb-5 mt-5'>
                <div className={`shadow-sm shadow-orange-600 rounded-xl p-2 px-10 text-xl border-orange-600
                    ${ quizzescontent[activeQuestionNo - 1].answers[0] == 
                        quizzescontent[activeQuestionNo - 1].correctanswer ? 'text-green-600 shadow-green-500 shadow-lg' : '' }
                    ${ quizzescontent[activeQuestionNo - 1].answers[0] == 
                        quizzescontent[activeQuestionNo - 1].attemptedanswer ? ( isCorrect ?
                        'text-green-600 shadow-green-600 shadow-lg' : 'text-red-600 shadow-red-600 shadow-lg' ) : '' } `}>
                    {quizzescontent[activeQuestionNo - 1].answers[0]}
                </div>
                {!isCorrect && <p className='w-fit absolute text-lg text-red-600'>Incorrect</p>}
                {isCorrect && <p className='w-fit absolute text-lg text-green-600'>Correct</p>}
                <div className={`shadow-sm shadow-orange-600 rounded-xl p-2 px-10 text-xl border-orange-600
                    ${ quizzescontent[activeQuestionNo - 1].answers[1] == 
                        quizzescontent[activeQuestionNo - 1].correctanswer ? 'text-green-600 shadow-green-500 shadow-lg' : '' } 
                    ${ quizzescontent[activeQuestionNo - 1].answers[1] == 
                        quizzescontent[activeQuestionNo - 1].attemptedanswer ? ( isCorrect ?
                        'text-green-600 shadow-green-600 shadow-lg' : 'text-red-600 shadow-red-600 shadow-lg' ) : '' } `}>
                    {quizzescontent[activeQuestionNo - 1].answers[1]}
                </div>
            </div>
            <div className='flex justify-around text-orange-600 space-x-5'>
                <div className={`shadow-sm shadow-orange-600 rounded-xl p-2 px-10 text-xl border-orange-600
                    ${ quizzescontent[activeQuestionNo - 1].answers[2] == 
                        quizzescontent[activeQuestionNo - 1].correctanswer ? 'text-green-600 shadow-green-500 shadow-lg' : '' } 
                    ${ quizzescontent[activeQuestionNo - 1].answers[2] == 
                        quizzescontent[activeQuestionNo - 1].attemptedanswer ? ( isCorrect ?
                        'text-green-600 shadow-green-600 shadow-lg' : 'text-red-600 shadow-red-600 shadow-lg' ) : '' } `}>
                    {quizzescontent[activeQuestionNo - 1].answers[2]}
                </div>
                <div className={`shadow-sm shadow-orange-600 rounded-xl p-2 px-10 text-xl border-orange-600
                    ${ quizzescontent[activeQuestionNo - 1].answers[3] == 
                        quizzescontent[activeQuestionNo - 1].correctanswer ? 'text-green-600 shadow-green-500 shadow-lg' : '' } 
                    ${ quizzescontent[activeQuestionNo - 1].answers[3] == 
                        quizzescontent[activeQuestionNo - 1].attemptedanswer ? ( isCorrect ?
                        'text-green-600 shadow-green-600 shadow-lg' : 'text-red-600 shadow-red-600 shadow-lg' ) : '' } `}>
                    {quizzescontent[activeQuestionNo - 1].answers[3]}
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserStatisticDetailed