import { useState } from 'react'

const Header = ({ text }) => (
  <h1>{text}</h1>
) 

const Button = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
)

const Display = ({ text, value }) => (
  <p>{text}: {value}</p>
)

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = `${good / total * 100}%`;

  return (
    <div>
      <Header text="Give feedback" />

      <Button text="Good" onClick={() => setGood(good + 1)} />
      <Button text="Neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" onClick={() => setBad(bad + 1)} />

      <Header text="Statistics"/>

      <Display text="Good" value={good} />
      <Display text="Neutral" value={neutral} />
      <Display text="Bad" value={bad} />

      <Display text="Total" value={total} />
      <Display text="Average" value={average} />
      <Display text="Positive" value={positive} />
    </div>
  )
}

export default App;