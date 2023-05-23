'use client'

import React from 'react'
import Timeago from 'react-timeago'

type Props = {
    time: string
}

function LiveTimeStamp({time}: Props) {
  return (
    <div>
        <Timeago date={time}/>
    </div>
  )
}

export default LiveTimeStamp