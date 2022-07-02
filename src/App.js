import Form from "./components/Form";
import Introduction from "./components/Introduction";
import Offer from "./components/Offer";
import Page from "./components/UI/Page";

function App() {
  return (
    <Page>
      <Introduction />
      <div>
        <Offer />
        <Form />
      </div>
    </Page>
  );
}

export default App;
