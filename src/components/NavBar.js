import NavItem from "./NavItem";

export default function NavBar() {
    return (
        <div className="nav-bar">
            <div className="first">
                <NavItem to="/home/battle" className="circle nav-item" activeClassName="nav-item--active">
                    戰鬥
            </NavItem>
                <NavItem to="/home/kingdom" className="circle nav-item" activeClassName="nav-item--active">
                    王國
            </NavItem>
                <NavItem to="/home/adventure" className="circle nav-item" activeClassName="nav-item--active">
                    冒險
            </NavItem>
            </div>
            <div className="second">
                <NavItem to="/home/cookie" className="circle nav-item" activeClassName="nav-item--active">
                    餅乾
            </NavItem>
                <NavItem to="/home/pvp" className="circle nav-item" activeClassName="nav-item--active">
                    PVP
            </NavItem>
            </div>


        </div>
    );
}