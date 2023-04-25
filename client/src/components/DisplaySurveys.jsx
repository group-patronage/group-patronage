import React from 'react'
import SurveyCard from './SurveyCard';



function DisplaySurveys({ title }) {
  return (
    <div>
        <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({5})</h1>
        <SurveyCard />
    </div>

  )
}

export default DisplaySurveys;