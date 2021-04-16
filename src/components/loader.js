import GifLoader from "react-gif-loader"

export default function loader() {
    return (
        <GifLoader
            loading={true}
            imageSrc="https://pa1.narvii.com/6287/d09cc9041e92993c86ad2ffd228c2cc97af15f28_hq.gif"
            // imageStyle={imageStyle}
            overlayBackground="rgba(0,0,0,0.5)"
        />
    );
}