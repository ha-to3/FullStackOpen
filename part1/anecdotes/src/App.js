import { useState } from 'react'

const Button = ({onClick,text}) => 
<button onClick={onClick}> {text} </button>

const Text = ({anecdotes, votes}) => {
  return (
    <div>
    <p>{anecdotes}</p>
    <p>has {votes} votes</p>
    </div>
  )
}
const Header = ({text}) => <h1>{text}</h1>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [selected, setSelected] = useState(0)
  const [vote , setVote] = useState(Array(anecdotes.length).fill(0))
  
  const setRandom = () => {
    const rand = Math.floor(Math.random() * anecdotes.length);
    setSelected(rand)
  }

  const setVotePoll = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
  }

  const mostVoted = () => Math.max(...vote)
  
  const indexOfVote = () => vote.indexOf(mostVoted())

  return (
    <div>
      <Header text='Anecdote of the day'/>
      <Text anecdotes={anecdotes[selected]} votes={vote[selected]}/>
      <Button onClick={setVotePoll} text='vote'/>
      <Button onClick={setRandom} text='next anecdote' />
      <Header text='Anecdote with most votes'/>
      <Text anecdotes={anecdotes[indexOfVote()]} votes={mostVoted()}/>
    </div>
  )
}

export default App