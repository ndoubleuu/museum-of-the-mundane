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
import Modal from "./Modal.js";

// Store reference to Firebase database in a variable
const dbRef = firebase.database().ref();

function App() {
  // Create state objects
  const [ moments, setMoments ] = useState([]);
  const [ userInput, setUserInput ] = useState("");
  const [ errorMessage, setErrorMessage ] = useState("");
  const [ modalIsDisplayed, setModalDisplay ] = useState(false);
  const [ selectedItem, setSelectedItem ] = useState(undefined);

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

  // Define a function that will display modal and set selected item to moment.key (which is passed into the confirmDelete function Gallery.js)
  const displayModal = (moment) => {
    setModalDisplay(true);
    setSelectedItem(moment);
  }

  // Define a function that will hide modal AND delete the post (selectedItem, which is now set to moment.key, will be passed in as an argument to this function in Modal.js)
  const confirmRemovePost = (moment) => {
    setModalDisplay(false);
    dbRef.child(moment).remove();
  }

  // Define a function that will hide modal (when exit-modal button is clicked)
  const hideModal = () => {
    setModalDisplay(false);
  }

  // How do you do this with React hooks though?
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setModalDisplay(false);
    }
  });

  return (
    <Fragment>

      <Header />

      <main>
        <div className="wrapper">
          <section>
            <Description />
            <Form handleMoment={handleUserInput} userInputValue={userInput} submitPost={handleSubmit} errorHandle={errorMessage} />
          </section>
          <Gallery momentsData={moments} confirmDelete={displayModal} />
        </div>
        <Modal showModal={modalIsDisplayed} exitModal={hideModal} removePost={confirmRemovePost} itemSelected={selectedItem} />
      </main>

      <footer>
        Created by <a href="https://nicodewu.com/">Nicole Wu</a> at <a href="https://junocollege.com/">Juno College</a>, 2021. Image by <a href="https://unsplash.com/@artmatters">Artur Matosyan</a>, from <a href="https://unsplash.com/">Unsplash</a>. 
      </footer>
    
    </Fragment>
  );
}

export default App;
