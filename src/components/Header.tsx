import React from 'react'

import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header className="text-gray-600 body-font border">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to='/'>
                    <h1 className='mx-auto'>SpaceX</h1></Link>
            </div>
        </header>

    )
}

export default Header