const Header = ({ text }) => (
  <h1>{text}</h1>
)

const Part = ({ part }) => (
  <li>{part.name}: {part.exercises}</li>
)

const Content = ({ parts }) => {
  const totalExercises = parts.reduce(
    (total, part) => total += part.exercises, 
    0
  );

  return (
    <>
      <b>Course parts:</b>
      <ul>
        {parts.map(part =>
          <Part key={part.id} part={part} />
        )}
      </ul>
      <b>Total of {totalExercises} exercises</b>
    </>
  )
}

const Course = ({ course }) => (
  <>
    <Header text={course.name} />
    <Content parts={course.parts} />
  </>
)

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course course={course} />
}

export default App
