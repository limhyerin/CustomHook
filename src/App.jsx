import useInput from './hooks/useInput';
import './App.css';

function App() {
  const [name,onChangeNameHandler] = useInput('');
  const [password, onChangePasswordHandler] = useInput('');

  return (
    <div>
      <input type='text' value={name} onChange={onChangeNameHandler}/>
      <input type='text' value={password} opnChange={onChangePasswordHandler}/>
    </div>
  );
}

export default App;
