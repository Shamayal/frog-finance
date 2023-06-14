import {useState} from "react";
import axios from 'axios';

export const useExpensesHook = () => {
  const [ netTotal, setNetTotal ] = useState([]);

  const viewNetTotal = (month, year) => {
    // adds a 0 in front of the month if it is a single digit
    const paddedMonth = String(month).padStart(2, '0')
    axios({
      url: `http://localhost:3030/expenses/netTotal?year=${year}&month=${paddedMonth}`,
      method: "GET",
      dataResponse: "json"
    })
      .then((res) => {
        console.log("net total data:", res.data)
        setNetTotal(res.data.net_total)
      })
      .catch((error) => {
        console.error('Error fetching net total:', error);
    });
  }

  return {
    viewNetTotal,
    netTotal
  }
}