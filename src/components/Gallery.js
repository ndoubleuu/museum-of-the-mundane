import { Fragment } from 'react';

// Create button to remove input values
        // Add an event handler on the remove button which will call the function that removes the input from the Firebase database

const Gallery = ({ momentsData }) => {
    return (
        <Fragment>
            {/* // Create a <ul> to hold all submitted user input values */}
            <ul>
            {
            momentsData.map((moment) => {
                // Map through the array of user inputs to render each of them onto the page
                // console.log(moment);
                return(
                    <li key={ moment.key }>
                        <p>{ moment.post }</p>
                        <button className="delete-input">
                            <span className="sr-only">Delete post</span>
                            <i className="far fa-times-circle"></i>
                        </button>
                    </li>  
                )
                
            })
            }
            </ul>
        </Fragment>
    )
}

export default Gallery;