import React from 'react';
import NameCard from '../NameCard/NameCard';

import './ResultsContainer.css';

const ResultsContainer = ({ suggestedNames }) => {
    const suggestNamejsx = suggestedNames.map((suggestedName) => {
        return <NameCard suggestedName={suggestedName} />;
    });
    return <div className="results-container">{suggestNamejsx}</div>;
};

export default ResultsContainer;
