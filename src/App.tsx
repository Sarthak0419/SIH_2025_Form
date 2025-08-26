import Footer from "./components/Footer";
import Form from "./components/Form";
import NavBar from "./components/NavBar";

const App = () => {
  // Set the favicon dynamically
  const fav: HTMLHeadElement | null = document.querySelector("head");
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = "favicon/favicon-32.png";
  fav!.appendChild(link);

  return (
    <>
      <NavBar />
      <Form />
      <Footer />
    </>
  );
};

export default App;
