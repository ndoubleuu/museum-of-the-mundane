const Form = (props) => {
    return (
        // Create a form with an input and submit button that will allow users to enter their "happy instance"
        <form className="wrapper" action="submit">
            <label htmlFor="input" className="sr-only">
                Enter your day's happy instance here.
            </label>
            <textarea 
                id="input" 
                name="input" 
                maxLength="250" 
                rows="3" 
                cols="50" 
                placeholder="What made you smile today?" 
                onChange={props.handleMoment}>
            </textarea>
            <button type="submit" className="share-button">Share your moment</button>
        </form>
    )
}

// Add an event handler on the form submit button which calls the function in App.js that prevents default, pushes user input value to Firebase, and clears the form input

export default Form;