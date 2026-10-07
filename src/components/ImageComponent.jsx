const ImageComponent = ({src, style, classN, text, hstyle}) => {
  return <div className={classN}>
    <img src={src} alt="" style={style} className="img-fluid " />
    <h2 style={hstyle}>{text}</h2>
  </div>;
};

export default ImageComponent;
 