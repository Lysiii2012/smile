import './App.css';
import Title from './components/Title';
import ButtonSmile from './components/ButtonSmile';
import ResultClick from './components/ResultClick';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    const savedCounts = JSON.parse(localStorage.getItem("counts"));
    this.state = {
      counts: savedCounts || Array(5).fill(0),
      showResult: false
    };

    this.clickCount = this.clickCount.bind(this);
    this.handleResultButtonClick = this.handleResultButtonClick.bind(this);
    this.deleteResult = this.deleteResult.bind(this);
  }

  clickCount(index) {
    this.setState(prevState => {
      prevState.showResult = false; 
      const newCounts = [...prevState.counts];
      newCounts[index] += 1; 
      localStorage.setItem("counts", JSON.stringify(newCounts));
      return { counts: newCounts };
    });
  }
  
  handleResultButtonClick() {
    this.setState(prevState => {
      const showResult = !prevState.showResult;
      const savedCounts = JSON.parse(localStorage.getItem("counts")) || Array(5).fill(0); 
      return { showResult, counts: savedCounts };
    });
  }

  deleteResult() {
    localStorage.removeItem("counts"); 
    this.setState({ counts: Array(5).fill(0), showResult: false });
  }

  render() {
    const { counts, showResult } = this.state;
    const smileys = ["😊", "😂", "😍", "😎", "🤩"]; 

    return (
      <div className="App">
        <Title title="Голосування за найкращій смайлик" type="first-title" />
        <ButtonSmile counts={counts} clickCount={this.clickCount} />
        <button className='show-result' onClick={this.handleResultButtonClick} style={{ opacity: showResult ? '0' : '1' }}> Показати результати </button>
        {showResult && (
          <>
            <Title title="Результати голосування" type="second-title" />
            <Title title="Переможець" type="third-title" />
            <ResultClick counts={counts} smileys={smileys} /> 
            <button onClick={this.deleteResult}>Видалити</button>
          </> 
        )}
      </div>
    );
  }
}

export default App;
