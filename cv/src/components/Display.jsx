const Display = ({ details }) => {
    const fields = [];
    for (let key in details) {
        if (details[key] && key !== 'id') {
            fields.push(<p >{key}: {details[key]}</p>);
        }
    }

    return (
        <div className="container" id={details.id}>
            <h1>{details.name} {details.surname}</h1>
            {fields.map((field) => field)}
        </div>
    );
};

export default Display;
