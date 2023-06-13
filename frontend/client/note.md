<!--
-------------------------------
Project Structure
-------------------------------
// Nav bar
// login buttons
// sign up
// links to the rest of site

// -------------------
// REGULAR NAV:
// *****
// DROPDOWN INSIDE REGULAR NAV:
// budget tracker -> create a budget, add income, add expense, view monthly budget
// savings goals -> current goal, past goals, add goal
// debt -> add debt, see debt progress, see past debt achievements, make debt payment
// *****
// no drop down for stocks and learn
// learn -> finance 101 tips etc
// stocks -> just one page
// -------------------

------------------------------------
Example axios call from photolabs:
------------------------------------
// const [photos, setPhotos] = useState([]);

// useEffect(() => {
//   axios({
//     url: "http://localhost:3030/income/05/2023",
//     method: "GET",
//     dataResponse: "json"
//   })
//     .then((res) => {
//       console.log("check the data coming", res.data)
//       setPhotos(prev => res.data)
//     })
//     .catch((error) => {
//       console.error('Error fetching photos:', error);
//     });
// }, []); -->


<!--
---------------------------------
Example: Component structure
---------------------------------

import React, { useCallback, useState, useContext } from 'react';
import NavigationBar from '../components/NavigationBar'

const HomePage = () => {

  return (
    <div>
      <NavigationBar />
    </div>
  )
}

export default HomePage; -->


<!--
---------------------------------
NavBar: Component structure
---------------------------------
import React, { useCallback, useState, useContext } from 'react';


const NavigationBar = () => {

  // state for dropDownOpen

  const dropDown = () => {
    //update the state
  };

  // in div we need ul and li, for all the drop downs based on what user clicks

  return (
    <div>

      <Budget/>

    </div>
  )
}

export default NavigationBar;