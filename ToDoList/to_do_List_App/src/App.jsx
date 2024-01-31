
import Buttons from "./components/button";
import Input from "./components/inputfield";
import Table from "./components/table";
import Heading from "./components/heading";
const App = () => {
  return (
    <div className="container mt-3">
      <Heading/>
      <Input />
      <Buttons />
      <Table/>
    </div>
  );
};



export default App
