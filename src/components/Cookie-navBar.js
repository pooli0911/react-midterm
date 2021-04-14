import { NavLink } from 'react-router-dom';

export default function CookieNavBar() {
    return(
        <div className="cookie-nav-bar">
            <NavLink to ="" className="box cookie-nav-item" activeClassName="nav-item--active">
                防禦型
            </NavLink>
            <NavLink to ="" className="box cookie-nav-item" activeClassName="nav-item--active">
                突擊型
            </NavLink>
            <NavLink to ="" className="box cookie-nav-item" activeClassName="nav-item--active">
                魔法型
            </NavLink>
            <NavLink to ="" className="box cookie-nav-item" activeClassName="nav-item--active">
                爆破型
            </NavLink>
            <NavLink to ="" className="box cookie-nav-item" activeClassName="nav-item--active">
                奇襲型
            </NavLink>
            <NavLink to ="" className="box cookie-nav-item" activeClassName="nav-item--active">
                射擊型
            </NavLink>
            <NavLink to ="" className="box cookie-nav-item" activeClassName="nav-item--active">
                恢復型
            </NavLink>
            <NavLink to ="" className="box cookie-nav-item" activeClassName="nav-item--active">
                支援型
    
            </NavLink>
        </div>
    );

}