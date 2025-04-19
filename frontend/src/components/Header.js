import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
    background-color: #4a90e2;
    padding: 1rem;
    color: white;
`;

const Header = () => {
    return (
        <Navbar>
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <strong>Catatan App</strong>
                </a>
            </div>
        </Navbar>
    );
};

export default Header;