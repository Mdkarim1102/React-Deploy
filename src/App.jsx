import ConverterForm from "./components/ConverterForm";
const App = () => {
  return (
    <div className="currency-converter" >
      
      <h2 className="converter-title">Currency Converter</h2>
      <ConverterForm />

      <footer className="app-footer">
       © 2026 | Created by Rare.issme 
      </footer>
    </div>
  )
}
export default App;