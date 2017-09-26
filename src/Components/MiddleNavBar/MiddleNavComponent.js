import React, { Component } from 'react';
import styled from 'styled-components';
// import { Dropdown, Sales, Search } from './Common';
import 'bootstrap/dist/css/bootstrap.css';

export default class MiddleNavComponent extends Component {
    render() {
        return (
            <MiddleDiv className="">
                <ul className="row container">
                    <li>
                        <h2 className="col-2-md"><img src="https://www.iconexperience.com/_img/o_collection_png/orange_dark_grey/24x24/plain/jar_cookies.png" />Sale</h2>
                    </li>
                    <li>
                        <h3 className="col-2-lg"><img src="https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/24x24/plain/jar_cookies.png" />Sale</h3>
                    </li>
                    <li>
                        <h3 className="col-2-lg"><img src="https://www.iconexperience.com/_img/o_collection_png/blue_dark_grey/24x24/plain/jar_cookies.png" />Sale</h3>
                    </li>
                    <li>
                        <h3 className="col-2-lg"><img src="https://www.iconexperience.com/_img/o_collection_png/blue_dark_grey/24x24/plain/jar_cookies.png" />Sale</h3>
                    </li>
                    <li>
                        <h3 className="col-2-lg"><img src="https://www.iconexperience.com/_img/o_collection_png/blue_dark_grey/24x24/plain/jar_cookies.png" />Sale</h3>
                    </li>
                </ul>
            </MiddleDiv>
        );
    };
};


const MiddleDiv = styled.div`
  background-color: white;
  height: 5vh;
  display: flex;
  col-4-md;
`;
