import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

export default class MiddleNavComponent extends Component {
    render() {
        return (
            <MiddleDiv className="">
                <ul className="row container">
                    <li>
                        <h2 className=""><img src="https://www.iconexperience.com/_img/o_collection_png/orange_dark_grey/24x24/plain/jar_cookies.png" alt=""/>Sale</h2>
                    </li>
                    <li>
                        <h3 className=""><img src="https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/24x24/plain/jar_cookies.png" alt="" />Most Popular</h3>
                    </li>
                    <li>
                        <h3 className=""><img src="https://www.iconexperience.com/_img/o_collection_png/blue_dark_grey/24x24/plain/jar_cookies.png" alt="" />Shop</h3>
                    </li>
                    <li>
                        <h3 className=""><img src="https://www.iconexperience.com/_img/o_collection_png/blue_dark_grey/24x24/plain/jar_cookies.png" alt="" />Favorites</h3>
                    </li>
                    <li>
                        <h3 className=""><img src="https://www.iconexperience.com/_img/o_collection_png/blue_dark_grey/24x24/plain/jar_cookies.png" alt="" />Purchase History</h3>
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
`;
