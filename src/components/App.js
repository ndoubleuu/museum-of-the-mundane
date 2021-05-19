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
import Paintings from "./Paintings.js";

// Store reference to Firebase database in a variable
const dbRef = firebase.database().ref();

function App() {
  // Create state objects
  const [ moments, setMoments ] = useState([]);
  const [ userInput, setUserInput ] = useState("");
  const [ errorMessage, setErrorMessage ] = useState("");
  const [ modalIsDisplayed, setModalDisplay ] = useState(false);
  const [ selectedItem, setSelectedItem ] = useState("");
  const [ paintings, setPaintings ] = useState([]); 

  // useEffect hook for form submissions 
  useEffect(() => {
    // Listen for a value and respond to the value
    dbRef.on("value", (response) => {
      // Initialize empty array
      const momentsArray = [];
      // Store data from Firebase database in a variable
      const data = response.val();

      // Loop through the data
      for (let key in data) {
        // Store the data in objects (with a key and the user's input value)
        let momentObject = { key: key, post: data[key] }

        // Push the new objects to the database
        momentsArray.push(momentObject);  
      }

      // Update state with new data array
      setMoments(momentsArray);
    })
  }, []);

  // useEffect hook for Unsplash API call
  useEffect(() => {
    // Store base URL in a variable
    const url = new URL("https://api.unsplash.com/search/photos");

    const searchParams = new URLSearchParams(
      {
        query: "painting art",
        per_page: moments.length,
        orientation: "landscape",
        content_filter: "high",
        client_id: 'jMtnqKPTKByXvos8bjg_QxEKv_CJRpzyUK82VWS3cNU'
      }
    ); 

    url.search = searchParams;

    fetch(url).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      // Map through the data to return a new array of objects with only the image url and the image id
      const paintingsArray = jsonResponse.results.map((paintingObject) => {
        return {
          url: paintingObject.urls.regular,
          key: paintingObject.id
        }
      });
      
      // Update paintings state with new array
      setPaintings(paintingsArray);
    });
    // Dependencies array- request data from the API again whenever the moments state is updated (i.e. when a new "moment"/post is added to or removed from the momentsArray)
  }, [moments]);

  // useEffect hook for event listener which closes modal when user presses esc key
  useEffect(() => {
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setModalDisplay(false);
      }
    });
  }, []);

  // Define a function which will save user's input within state
  const handleUserInput = (event) => {
    let inputValue = event.target.value;
    // Update state to the input value
    setUserInput(inputValue);
  }

  // Define a function that will submit user's input to Firebase
  const handleSubmit = () => {
    // Error handling- 
      // if input is an empty string, alert user; if input is not empty, submit the new post and display it on the page 
    userInput ? acceptSubmit() : handleError()
    // Reset value input
    setUserInput("");
  }

  // Define a function that pushes the user's post to database and clears the error message
  const acceptSubmit = () => {
    dbRef.push(userInput);
    setErrorMessage("");
  }

  // Function that will display error message
  const handleError = () => {
    setErrorMessage("Don't forget to write about a happy instance.");
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

  // Define a function that will hide modal when exit-modal button is clicked
  const hideModal = () => {
    setModalDisplay(false);
  }

  return (
    <Fragment>

      <Header />

      <main>
        <div className="wrapper">

          <div className="section">
            <Description />
            <Form handleMoment={handleUserInput} userInputValue={userInput} submitPost={handleSubmit} errorHandle={errorMessage} />
          </div>
          <div className="exhibit section">
            <Gallery momentsData={moments} confirmDelete={displayModal} />
            <Paintings paintingsData={paintings} />
          </div>

        </div>

        <Modal showModal={modalIsDisplayed} exitModal={hideModal} removePost={confirmRemovePost} itemSelected={selectedItem} />
      </main>

      <footer>
        Created by <a href="https://nicodewu.com/">Nicole Wu</a> at <a href="https://junocollege.com/">Juno College</a>, 2021. Header image by <a href="https://unsplash.com/@artmatters">Artur Matosyan</a>. All images provided by <a href="https://unsplash.com/">Unsplash</a>.
      </footer>
    
    </Fragment>
  );
}

export default App;
