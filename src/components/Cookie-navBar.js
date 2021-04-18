import NavItem from "./NavItem";

export default function CookieNavBar() {
    return (
        <div className="cookie-nav-bar">
            <NavItem to="/cookie/tank" className="box cookie-nav-item" activeClassName="nav-item--active">
                防禦型
            </NavItem>
            <NavItem to="/cookie/attack" className="box cookie-nav-item" activeClassName="nav-item--active">
                突擊型
            </NavItem>
            <NavItem to="/cookie/magic" className="box cookie-nav-item" activeClassName="nav-item--active">
                魔法型
            </NavItem>
            <NavItem to="/cookie/bump" className="box cookie-nav-item" activeClassName="nav-item--active">
                爆破型
            </NavItem>
            <NavItem to="/cookie/fly_attack" className="box cookie-nav-item" activeClassName="nav-item--active">
                奇襲型
            </NavItem>
            <NavItem to="/cookie/adcarry" className="box cookie-nav-item" activeClassName="nav-item--active">
                射擊型
            </NavItem>
            <NavItem to="/cookie/heal" className="box cookie-nav-item" activeClassName="nav-item--active">
                恢復型
            </NavItem>
            <NavItem to="/cookie/support" className="box cookie-nav-item" activeClassName="nav-item--active">
                支援型
            </NavItem>
        </div>
    );

}