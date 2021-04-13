import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="nav-bar">
            <NavLink to="/battle" className="circle nav-item" activeClassName="nav-item--active">
                戰鬥
            </NavLink>
            <NavLink to="/kingdom" className="circle nav-item" activeClassName="nav-item--active">
                王國
            </NavLink>
            <NavLink to="/adventure" className="circle nav-item" activeClassName="nav-item--active">
                冒險
            </NavLink>
            <NavLink to="/cookie" className="circle nav-item" activeClassName="nav-item--active">
                餅乾
            </NavLink>
            <NavLink to="/pvp" className="circle nav-item" activeClassName="nav-item--active">
                PVP
            </NavLink>


        </div>
    );
}