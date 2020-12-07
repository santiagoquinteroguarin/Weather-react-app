import React from 'react';

const Header = ({titleHeader}) => {
    return (
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a href="#!" className="brand-logo">{titleHeader}</a>
            </div>
        </nav>
    );
}

export default Header;