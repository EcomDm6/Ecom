import React from 'react';
import './SaleComponent.css'

import EachItemComponent from '../EachItem/EachItemComponent';

const SaleContainer = () => {
        return (
            <div className="SaleMainContainer">Top 5 sales
              <EachItemComponent />
            </div>
        );
};

export default SaleContainer;
