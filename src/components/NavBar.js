import NavItem from "./NavItem";

export default function NavBar() {
    return (
        <div className="nav-bar">
            <NavItem to="/battle" className="circle nav-item" activeClassName="nav-item--active">
                戰鬥
            </NavItem>
            <NavItem to="/kingdom" className="circle nav-item" activeClassName="nav-item--active">
                王國
            </NavItem>
            <NavItem to="/adventure" className="circle nav-item" activeClassName="nav-item--active">
                冒險
            </NavItem>
            <NavItem to="/cookie" className="circle nav-item" activeClassName="nav-item--active">
                餅乾
            </NavItem>
            <NavItem to="/pvp" className="circle nav-item" activeClassName="nav-item--active">
                PVP
            </NavItem>


        </div>
    );
}