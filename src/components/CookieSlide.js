import CookieDetail from "./CookieDetail"

export default function CookieSlide({cookies}) {
    return(
        <div>
        {cookies.map(cookie =>(
            <CookieDetail cookie={cookie}/>
        ))}
        </div>
    );
}