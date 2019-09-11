import React from 'react'

const Header = (props) => (<>
  <h2>{props.course}</h2>
</>)

const Part = (props) => (<>
  <p>
    {props.part.name} {props.part.exercises}
  </p>
</>)

const Content = (props) => {
  const { parts } = props
  return (
    <>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </>
  )
}

const Total = ({ parts }) => {
  const sum = parts.map(part => part.exercises)
    .reduce((acc, cur) => acc + cur)
  return (
    <>
      <p><b>total of {sum} exercises</b></p>
    </>
  )
}

const Course = ({ course }) => (<>
  <Header course={course.name} />
  <Content parts={course.parts} />
  {<Total parts={course.parts} />}
</>)

export default Course
