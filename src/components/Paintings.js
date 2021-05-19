const Paintings = (props) => {
    const { paintingsData } = props;
    
    return (
        <ul className="painting-container">
            {
                paintingsData.map((painting) => {
                    return (
                        <li key={painting.key}>
                            <img src={painting.url} alt={painting.altText} />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Paintings;