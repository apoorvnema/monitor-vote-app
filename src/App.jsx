import './App.css'
import CandidateDetails from './components/CandidateDetails/CandidateDetails';
import Header from './components/Header/Header'
import { VotesProvider } from './store/VotesContext';

function App() {

  return (
    <VotesProvider>
      <Header />
      <div className='board'>
        <CandidateDetails />
      </div>
    </VotesProvider>
  )
}

export default App
