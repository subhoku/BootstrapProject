
import Buttons from "./components/button";
import Input from "./components/inputfield";
import Table from "./components/table";
import Heading from "./components/heading";
import Footer from "./components/footer";
const App = () => {
  return (
    <div className="container mt-3">
      <Heading/>
      <Input />
      <Buttons />
      <Table/>
      <Footer/>
    </div>
  );
};



export default App
