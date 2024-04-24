import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeItem from "./components/UpdateCoffee/coffeeItem/coffeeItem";

function App() {
  const data = useLoaderData();
  
    return (
        <>
            <h2>coffee store.{data.length}</h2>
            {
              data.map(x => <CoffeeItem key={x._id} x={x}></CoffeeItem>)
            }
        </>
    );
}

export default App;
