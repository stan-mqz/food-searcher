import { FoodForm } from "./components/FoodForm";
import { SelectFood } from "./components/SelectFood";

function App() {
  
  return (
    <>
      <h1 className="text-center text-4xl font-bold mt-6">
        Food Recipe Plaza 🍔
      </h1>

      <div className="flex justify-center gap-5 mt-8">
        <FoodForm />
        <SelectFood />
      </div>
    </>
  );
}

export default App;
