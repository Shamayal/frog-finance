// from video
import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import { useEffect } from "react";

import "./App.css";

import NavigationBar from "./components/NavigationBar.jsx"
import HomePage from "./routes/HomePage.jsx"
import Budget from "./routes/Budget.jsx"
import Debt from './routes/Debt.jsx'
import Savings from "./routes/Budget.jsx"

import Stocks from "./routes/Stocks";

import LearnMoney from "./routes/LearnMoney.jsx";
import LearnFinance from "./routes/LearnFinance";


function App() {

  return (
    <main className="column">
    
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* <Route path="/money/income/add" element={<Budget />}/>
          <Route path="/money/income/view" element={<Savings />} />

          <Route path="/money/expenses/add" element={<Debt />} />
          <Route path="/money/expenses/view" element={<Debt />} /> */}
{/* 
          <Route path="/money/budget/update" element={<Learn />} />
          <Route path="/money/budget/view" element={<Learn />} />

          <Route path="/savings/add" element={<Learn />} />
          <Route path="/savings/progress" element={<Learn />} />
          <Route path="/savings/achievements" element={<Learn />} />

          <Route path="/debt/add" element={<Learn />} />
          <Route path="/debt/progress" element={<Learn />} />
          <Route path="/debt/past" element={<Learn />} /> */}

          <Route path="/stocks" element={<Stocks />} />

          <Route path="/learn/money" element={<LearnMoney />} />
          <Route path="/learn/finance" element={<LearnFinance />} />

{/*       
          <Route path="/budget" element={<Budget />}/>
          <Route path="/savings" element={<Savings />} />
          <Route path="/debt" element={<Debt />} /> */}
        </Routes>
      </Router>

{/* Example from david: */}
      {/* <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <ProtectedRoute user={user}>
                <About />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
          <Route path="/products/*" element={<ProductList />} />
        </Routes>
      </Router> */}
      
    </main>
  );
}

export default App;

//put month and year states here and pass it down to components that need it
// or create context and wrap it with elements
