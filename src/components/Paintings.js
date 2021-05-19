const Paintings = (props) => {
    const { paintingsData } = props;
    
    return (
        <ul className="painting-container" aria-hidden="true">
            {
                paintingsData.map((painting) => {
                    return (
                        <li key={painting.key}>
                            <img src={painting.url} alt="" />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Paintings;