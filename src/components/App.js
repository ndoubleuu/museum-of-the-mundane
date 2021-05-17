// Imports from React
import { useEffect, useState } from "react";
import { Fragment } from "react";
// Import styles
import "../styles/App.css";
// Import Firebase
import firebase from "../config/firebase.js";
// Import components
import Header from "./Header.js";
import Description from "./Description.js";
import Form from "./Form.js";
import Gallery from "./Gallery.js";

// Store reference to Firebase database in a variable
const dbRef = firebase.database().ref();

function App() {
  // Create state objects
  const [ moments, setMoments ] = useState([]);
  const [ userInput, setUserInput ] = useState("");
  const [ errorMessage, setErrorMessage ] = useState("");

  useEffect(() => {
    // Listen for a value and respond to value
    dbRef.on("value", (response) => {
      // Initialize empty array
      const newDataArray = [];
      // Store data from Firebase database in a variable
      const data = response.val();

      // Loop through the data
      for (let key in data) {
        // Store the data in objects (with a key and the user's input value)
        let momentObject = { key: key, post: data[key] }

        // Push the new objects to the database
        newDataArray.push(momentObject);  
      }

      // Update state with new data array
      setMoments(newDataArray);
    })
  }, []);

  const handleUserInput = (event) => {
    let inputValue = event.target.value;
    // Update state to the input value
    setUserInput(inputValue);
  }

  // Define a function that pushes the user's post to database and clears the error message which will be called int he handleSubmit function when the input is NOT an empty string
  const acceptSubmit = () => {
    dbRef.push(userInput);
    setErrorMessage("");
  }

  // Define a function that will submit user's input to Firebase
  const handleSubmit = () => {
    // Error handling- 
      // if input is an empty string, alert user; if input is not empty, submit the new post and display it on the page 
    userInput ? acceptSubmit() : handleError()
    // Reset value input
    setUserInput("");
  }

  const handleError = () => {
    setErrorMessage("Don't forget to write a happy instance.");
  }

  // Define a function that will remove user inputs from the database and page
  const handleRemove = (moment) => {
    dbRef.child(moment).remove();
  }

  return (
    <Fragment>

      <Header />

      <main>
        <div className="wrapper">
          <section>
            <Description />
            <Form handleMoment={handleUserInput} userInputValue={userInput} submitPost={handleSubmit} errorHandle={errorMessage} />
          </section>
          <Gallery momentsData={moments} removePost={handleRemove} />
        </div>
      </main>

      <footer>
        Created by <a href="https://nicodewu.com/">Nicole Wu</a> at <a href="https://junocollege.com/">Juno College</a>, 2021. Image by <a href="https://unsplash.com/@artmatters">Artur Matosyan</a>, from <a href="https://unsplash.com/">Unsplash</a>. 
      </footer>
    
    </Fragment>
  );
}

export default App;
