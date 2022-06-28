const Course = ({ course }) => {
  return (
    <div>
      {course.map(course => <Header key={course.id} name={course.name}/>)}
      {course.map(course => <Content key={course.id} parts={course.parts} />)}
      
      {/* <Total parts={course.parts} /> */}
    </div>
  )
}
const Header = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(parts =>
      <Part key={parts.id} parts={parts.name} exercises={parts.exercises} 
      />)}
    </div>
  )
}
const Part = ({ parts, exercises }) => {
  return (
    <p> {parts} {exercises} </p>
  )
}

// const Total = ({ parts }) => {

//   const total =
//     parts.reduce((sum,parts) => sum + parts.exercises, 0)

//   return (
//     <p>
//       Number of exercises {total}
//     </p>
//   )
// }

const App = () => {
  const course =  [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course course={course} />
}

export default App