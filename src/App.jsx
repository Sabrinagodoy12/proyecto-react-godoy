import "./App.css";
import { Button } from "./components/Button";

// const styles = {
//   Button: {
//     color: "yellow",
//     backgroundColor: "black",
//   },
// };

const isTrue = !true;

// function App() {
//   return <>{isTrue ? <h1>Holis</h1> : <Button style={styles.button} />}</>;
// }

function App (){
  return (
    <>
    {isTrue ? (
      <h1>Alo</h1>
    ) : (
      <>
      {[0, 1, 2, 3, 4].map(()=> (
        <Button/>
      ))}
    </>)}
    </>
  );
}

export default App;
