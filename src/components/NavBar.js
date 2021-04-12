import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return(
        <div className="nav-bar">
            <div className="circle">
            <NavLink to="/battle" className="nav-item" activeClassName="nav-item--active">
                戰鬥
            </NavLink>
            </div>
            <div className="circle">
            <NavLink to="/kingdom" className="nav-item" activeClassName="nav-item--active">
                王國
            </NavLink>
            </div>
            <div className="circle">
            <NavLink to="/adventure" className="nav-item" activeClassName="nav-item--active">
                冒險
            </NavLink>
            </div>
            <div className="circle">
            <NavLink to="/cookie" className="nav-item" activeClassName="nav-item--active">
                餅乾
            </NavLink>
            </div>
            <div className="circle">
            <NavLink to="/pvp" className="nav-item" activeClassName="nav-item--active">
                PVP
            </NavLink>
            </div>
            
        </div>
    );
}