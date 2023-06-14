import { useState } from "react";
import axios from 'axios';


export const useSavingsHook = () => {
  const [currentSavingsGoal, setCurrentSavingsGoal] = useState(null);
  const [pastSavingsGoal, setPastSavingsGoal] = useState("");

  const viewSavingsGoal = () => {
    axios({
      url: `http://localhost:3030/savings`,
      method: "GET",
      dataResponse: "json"
    })
      .then((res) => {
        console.log("incoming current savings goal data", res.data)
        setCurrentSavingsGoal(res.data.current_savings_goals[0])
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  }

  const viewPastSavingsGoal = () => {
    axios({
      url: `http://localhost:3030/savings/complete`,
      method: "GET",
      dataResponse: "json"
    })
      .then((res) => {
        console.log("incoming past savings goal data", res.data)
        setPastSavingsGoal(res.data.completed_savings_goals[0])
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  }

  return {
    viewSavingsGoal,
    currentSavingsGoal,
    viewPastSavingsGoal,
    pastSavingsGoal
  }
}
