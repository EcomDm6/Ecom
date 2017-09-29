// @flow

import React from 'react';
import styled from 'styled-components';
import { Navbar,
        FormGroup,
        FormControl,
        Button,
        Glyphicon,
      } from 'react-bootstrap';

const SearchBar = () => (
  <SearchBarContainer>
    <Navbar.Form>
      <FormGroup>
        <FormControl
          bsSize='small'
          type='text'
          placeholder='search'
        />
        <Button
          bsStyle='primary'
          bsSize='small'
        >
          <Glyphicon
            glyph="glyphicon glyphicon-search"
          />
        </Button>
      </FormGroup>
    </Navbar.Form>
  </SearchBarContainer>

);
export default SearchBar;

const SearchBarContainer = styled.span`
width: 20vw;
height: 5vh;
position: absolute;
top: 2.8vh;
`
