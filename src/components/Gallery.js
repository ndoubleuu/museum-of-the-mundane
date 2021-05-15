// Create button to remove input values
        // Add an event handler on the remove button which will call the function that removes the input from the Firebase database

const Gallery = () => {
    return (
        // Create a <ul> to hold all submitted user input values
        <ul>
            {/* Map through the array of user inputs to render each of them onto the page  */}
            <li>
                <p>I had a great hair day today!</p>
                <button className="delete-input">
                    <span className="sr-only">Delete input</span>
                    <i className="far fa-times-circle"></i>
                </button>
            </li>
        </ul>
    )
}

export default Gallery;