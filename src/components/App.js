// Imports from React
import { useEffect, useState } from "react";
import { Fragment } from "react";
// Import styles
import "../styles/App.css";
// Import Firebase
import firebase from "../config/firebase.js";
// Import components
import Header from "./Header";
import Form from "./Form";
import Gallery from "./Gallery";

// Store call to Firebase database in a variable
const dbRef = firebase.database().ref();

function App() {
  // Create state object to hold user input values
  const [ moments, setMoments ] = useState([]);
  const [ userInput, setUserInput ] = useState("");

  useEffect(() => {
    console.log('I am being called from useEffect hook!');

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

  const handleUserInput = () => {
    console.log("This is coming from handle user input function");
  }

  return (
    // Return a parent container which will hold the different sections of the page 
    <Fragment>

      <Header />

      <main>
          <div className="wrapper">

          <section>
            <div className="description">
                <p>From the smell of freshly brewed coffee in the morning, to the wildflowers blooming right outside your door...</p>
                <p>There is beauty in everyday life.</p> 
                <p>We’d love to hear about the little joyful things in your life. Add to our curated collection of everyday happy instances.</p>  
            </div>

            <Form handleMoment={handleUserInput} />
          </section>

          <Gallery momentsData={moments} />
        </div>
      </main>

      <footer>
        Created by <a href="https://nicodewu.com/">Nicole Wu</a> at <a href="https://junocollege.com/">Juno College</a>, 2021. Image by Artur Matosyan, from <a href="">Unsplash</a>. 
      </footer>
    
    </Fragment>
  );
}

export default App;
