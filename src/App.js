
import './App.css';
import { Table } from './Table';
import { useContext,useState } from 'react';
import { DataCotnext } from './Context';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const {state, dispatch} = useContext(DataCotnext)


 

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    
    const filteredSnacks = state.data.filter((snack) =>
    snack.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    snack.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

    dispatch({ type: 'SEARCH', payload: filteredSnacks });
    const newSearchTerm = e.target.value.toLowerCase();
  setSearchTerm(newSearchTerm);

  if (newSearchTerm === '') {
    dispatch({ type: 'SEARCH', payload: state.data });
  }

  };
  console.log(searchTerm)


  return (
    <div className="App">
      <h1>Snacks</h1>
      Search : 
      <input
        type="text"
        placeholder="Search by product name..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Table />
    </div>
  );
}

export default App;
