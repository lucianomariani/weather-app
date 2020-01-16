import React from 'react';
import 'assets/css/App.css'
import Header from 'components/Header'
import SearchEngine from 'containers/SearchEngine'

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchEngine/>
    </div>
  );
}

export default App;
