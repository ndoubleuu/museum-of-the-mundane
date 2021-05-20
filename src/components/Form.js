const Form = (props) => {
    // Destructure props
    const { handleMoment, userInputValue, submitPost, errorHandle } = props;

    return (
        // Create a form with an input and submit button that will allow users to enter their "happy instance"
        <div className="form-container">
            <form action="submit" id="share">
                <label htmlFor="input" className="sr-only">
                    Enter your day's happy instance here.
                </label>
                <textarea 
                    id="input" 
                    name="input" 
                    maxLength="90"
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
                <p className="submit-error">{errorHandle}</p>
            </form>
        </div>
    )
}

export default Form;