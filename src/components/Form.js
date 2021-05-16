const Form = ({ handleMoment, userInputValue, submitPost }) => {
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
                onChange={handleMoment}
                value={userInputValue}>
            </textarea>
            {/* Create button with an event handler that will call the handleSubmit function */}
            <button 
                type="submit" 
                className="share-button"
                onClick={(event) => {
                    event.preventDefault();
                    submitPost();
                }}>
                Share your moment
            </button>
        </form>
    )
}

export default Form;