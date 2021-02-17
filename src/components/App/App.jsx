import React, { useState } from 'react';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import Header from './../Header/Header';

import './App.css';

const name = require('@rstacruz/startup-name-generator');

const App = () => {
    const [headerText, setHeaderText] = useState('Name IT !');
    const [headerExpanded, setHeaderExpanded] = useState(true);
    const [suggestedNames, setSuggestedNames] = useState([]);

    const handleInputChange = (inputText) => {
        setHeaderExpanded(!inputText);
        setSuggestedNames(inputText ? name(inputText) : []);
    };

    return (
        <div>
            <Header headerExpanded={headerExpanded} headTitle={headerText} />
            <SearchBox onInputChange={handleInputChange} />
            <ResultsContainer suggestedNames={suggestedNames} />
        </div>
    );
};

// class App extends React.Component {
//     state = {
//         headerText: 'Name IT !',
//         headerExpanded: true,
//         suggestedNames: [],
//     };

//     handleInputChange = (inputText) => {
//         this.setState({
//             headerExpanded: !inputText,
//             suggestedNames: inputText ? name(inputText) : [],
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <Header
//                     headerExpanded={this.state.headerExpanded}
//                     headTitle={this.state.headerText}
//                 />
//                 <SearchBox onInputChange={this.handleInputChange} />
//                 <ResultsContainer suggestedNames={this.state.suggestedNames} />
//             </div>
//         );
//     }
// }

// // first functional based component

// // function App() {
// //     return <h1> This is functional based component </h1>
// // }

// //  after making the component, we have to export it
// // so that, it can be imported anywhere we want

export default App;
