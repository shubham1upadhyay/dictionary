import React from 'react';
import '../Makeup/NavBar.css'
const NavBar = ()=>{

    return (
        <div>
            <nav className='navbar'>
                <div className='nav-stuffs'>
                    <div className='left-side'>
                        <h2>Dictionary App</h2>
                    </div>
                    <div className='right-side'>
                        <button type='button'>Home</button>
                        <button type='button'>History</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;