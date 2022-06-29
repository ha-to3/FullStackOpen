const Course = ({ course }) => {
    return (
      <div>
        {course.map(course => 
          <div key={course.id}>
          <Header name={course.name}/>
          <Content parts={course.parts}/>
          <Total parts={course.parts} /> 
        </div> )}
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
  
  const Total = ({ parts }) => {
    const total =
      parts.reduce((sum,parts) => sum + parts.exercises, 0)
  
    return (
      <h4>
        total of {total} exercises
      </h4>
    )
  }
  
  export default Course