export default function HamMenu({ onClick, isOnTouch }) {
    return (
        <>
            {isOnTouch ? (
                <span onClick={onClick} className="menu open" id="ani-2">
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                </span>
            ) : (
                <span onClick={onClick} className="menu" id="ani-2">
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                </span>
            )}
        </>
    );
}