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
  // Create state object to hold user input values
  const [ moments, setMoments ] = useState([]);
  const [ userInput, setUserInput ] = useState("");

  useEffect(() => {
    // Listen for a value and respond to value
    dbRef.on("value", (response) => {
      // Initialize empty array
      const newDataArray = [];
      // Store data from Firebase database in a variable
      const data = response.val();
      // console.log(data);

      // Loop through the data
      for (let key in data) {
        // console.log(data[key]);
        
        // Store the data in objects (with a key and the user's input value)
        let momentObject = { key: key, post: data[key] }
        console.log(momentObject);

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

  // Define a function that will submit user's input to Firebase
  const handleSubmit = () => {
    // Submit new post to the page
    dbRef.push(userInput);
    // Reset value input
    setUserInput("");
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
            <Form handleMoment={handleUserInput} userInputValue={userInput} submitPost={handleSubmit} />
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
