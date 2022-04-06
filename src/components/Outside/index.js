import React from 'react'
import '../../scss/OutSide.scss'
import FeaedBack from './components/Feedback'
import GoTop from './components/GoTop'

const Outside = () => {
  return (
    <div class="outSide">
        <GoTop></GoTop>
        <FeaedBack></FeaedBack>
    </div>
  )
}

export default Outside