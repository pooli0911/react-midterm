import { Card } from "antd"
import { Link } from 'react-router-dom';


export default function ProductItem({ home_img }) {
    return (


        <div className="home-img-change">
            <Link>
                <img className="home-img" style={{ margin: 'auto' }, { width: '60%' }}
                    src={home_img.image}
                    alt={home_img.name} />
            </Link>
        </div>

    );


}
