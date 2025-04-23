import ColorList from './ColorList';
import '../assets/styles/App.css'
import AddColorForm from './AddColorForm';

function App() {


  return (
    <div className="App mt-12 text-zinc-300">
      <div className="container">
        <ColorList />
        <AddColorForm />
      </div>
    </div>
  );
}

export default App
