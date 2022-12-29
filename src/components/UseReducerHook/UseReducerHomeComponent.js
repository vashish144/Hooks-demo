import React from 'react'
import FirstLesson from './FirstLesson/FirstLesson'
import { UseReducerWithContextHook } from './SecondLesson/UseReducerWithContextHook'
import ThirdLesson from './ThirdLesson/ThirdLesson'

const UseReducerHomeComponent = () => {
  return (
    <div>
     {/* first Lesson */}
     {/* <FirstLesson/> */}

     {/* second Lesson */}
     <UseReducerWithContextHook/>
   
   {/* Third Lesson */}
   {/* <ThirdLesson/> */}
    </div>
  )
}

export default UseReducerHomeComponent