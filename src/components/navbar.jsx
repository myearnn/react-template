import {BrowserRouter, Router, Route, Link} from 'react-router-dom'

function Navbar (){
    //const 
    const navbar = [
        {
            link: '/',
            menu: 'Home'
        },
        {
            link: '/contact',
            menu: 'Contact'
        },
    ]
    return (
        <nav className="clearfix">
            <a class="navbar-logo" href="#">React Logo</a>
            <ul className='menu'>
                {
                    navbar.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.link}>{item.menu}</Link>
                            </li>
                        );
                    })
                }
            </ul>
            
            
        </nav>
    )
}

export default Navbar