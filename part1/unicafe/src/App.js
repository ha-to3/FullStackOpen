import { useState } from 'react'

const Button = ({handleClick,text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>

  )
}
const Statistics = ({good,neutral,bad}) => {
  const all = good+neutral+bad 
  const avg = (good+bad)/all
  const pos = (good*100)/(all)

  return (
    <div>
      {all===0 ? ('No Feedback given') : (
        <table>
          <tbody>
            <StatisticLine text="good" value ={good} />
            <StatisticLine text="neutral" value ={neutral} />
            <StatisticLine text="bad" value ={bad} />
            <StatisticLine text="all" value ={all} />
            <StatisticLine text="average" value ={avg} />
            <StatisticLine text="positive" value ={pos} />
          </tbody>
        </table>
        )
      }
    </div>
  )

}
const StatisticLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      {text==="positive" ? <td>{value}%</td> : <td>{value}</td>}
    </tr>
  )
}

const Heading = ({text}) => <h1> {text}</h1>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToNeutral = () => {
    setNeutral(neutral+1)
  }
  const setToGood = () => {
    setGood(good+1)
  }
  const setToBad = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <Heading text='give feedback'/>
      <Button handleClick={setToGood} text='Good'/>
      <Button handleClick={setToNeutral} text='Neutral'/>
      <Button handleClick={setToBad} text='Bad'/>
      <Heading text='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App