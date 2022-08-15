import React from 'react'
import DevCard from './DevCard'

const TeamContent = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center'>
      <DevCard url='https://avatars0.githubusercontent.com/u/17098281?s=460&v=4' title='John Doe' description='John Doe is a full-stack developer who is passionate about building web applications.' />
    </div>
  )
}

export default TeamContent