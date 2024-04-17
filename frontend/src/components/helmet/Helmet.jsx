
const Helmet = (props) => {
    document.title = "Qurno - " + props.title;
    return <div className="w-100">
        {props.children}
    </div>;
}

export default Helmet