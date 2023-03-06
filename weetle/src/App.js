import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import "./style.css";
import Home from "./components/home/Home";
import Primary from "./components/cards/Primary";
import Service from "./components/services/Service";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Calendar from "./components/minute-components/forms/Calendar";
import Checkbox from "./components/minute-components/forms/checkbox/Checkbox";
import Dropdown from "./components/minute-components/forms/dropdown/Dropdown";
import Input from "./components/minute-components/forms/input/Input";
import File from "./components/minute-components/forms/input/File";
import Email from "./components/minute-components/forms/input/Email";
import PrimaryButton from "./components/minute-components/forms/buttons/PrimaryButton";
import SecondaryButton from "./components/minute-components/forms/buttons/SecondaryButton";
import Image from "./components/minute-components/image/Image";
import Accordian from "./components/minute-components/accordians/Accordian";
import Carousel from "./components/minute-components/carousel/Carousel";
import Cards from "./components/cards/Cards";
import PrimaryHead from "./components/headings/PrimaryHead";
import SecondaryHead from "./components/headings/SecondaryHead";
function App() {
  return (
    <div className="App">
      {/* -------------------Navbars------------------- */}

      <div className="pre_process_head">
        <div className="make_extra_bold">Navbars:</div>
      </div>
      <Navbar type="primary" url={"https://i.ibb.co/mDpBP1s/logo-evolve.png"} />
      <Navbar
        type="secondary"
        url={"https://i.ibb.co/mDpBP1s/logo-evolve.png"}
      />
      {/* -------------------Headings------------------- */}

      <div className="pre_process_head">
        <div className="make_extra_bold">Headings:</div>
      </div>
      <PrimaryHead name="Heading 1" />
      <SecondaryHead name="Heading 2" />
      {/* -------------------Home Page------------------- */}

      <div className="pre_process_head">
        <div className="make_extra_bold">Home Component:</div>
      </div>
      <Home
        company_name={"EVOLVE.IO"}
        about_company={
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type partial."
        }
      />

      {/* -------------------Services------------------- */}

      <div className="pre_process_head">
        <div className="make_extra_bold">Services Component:</div>
      </div>
      <Service
        header={
          "We provide quality plus aesthetic content related to personality and it's unique connection with other segments of life"
        }
      />
      <div className="cards_services">
        <Cards
          type="primary"
          header={"Design & Dev"}
          body={
            "In order to deliver a better overall experience, we place a lot of emphasis on the design of the content and the development of the product."
          }
        />
        <Cards
          type="secondary"
          header={"Design & Dev"}
          body={
            "In order to deliver a better overall experience, we place a lot of emphasis on the design of the content and the development of the product."
          }
        />
      </div>
      {/* -------------------Contact------------------- */}

      <div className="pre_process_head">
        <div className="make_extra_bold">Contact Component:</div>
      </div>
      <Contact company_name={"EVOLVE.IO"} company_mail_id={"xyz@gmail.com"} />

      {/* -------------------Footer------------------- */}

      <div className="pre_process_head">
        <div className="make_extra_bold">Footer Component:</div>
      </div>
      <Footer
        email={"evolvewithaesthetico@gmail.com"}
        contact={"999xxxxxxx"}
        instagramlink={"#"}
        linkedinlink={"#"}
        twitterlink={"#"}
      />
      {/* -------------------Form Elements------------------- */}

      <div className="pre_process_head">
        <div className="make_extra_bold">Form Elements:</div>
      </div>
      <Calendar />
      <Checkbox />

      <Dropdown />
      <Input id="1" name="First Name" />
      <File id="1" />
      <Email />
      {/* -------------------Buttons------------------- */}

      <div className="pre_process_head">
        <div className="make_extra_bold">Buttons:</div>
      </div>
      <PrimaryButton name="Button" />
      <SecondaryButton name="Button" />
      {/* -------------------Image------------------- */}

      <div className="pre_process_head">
        <div className="make_extra_bold">Image:</div>
      </div>
      <Image
        url="https://i.ibb.co/CKcBRbC/13-Interesting-Facts-About-Bangalore-I-Mi-Stay.jpg"
        height="200px"
        bnw={true}
      />
      {/* -------------------Accordian------------------- */}

      <div className="pre_process_head">
        <div className="make_extra_bold">Accordians:</div>
      </div>
      <Accordian head="Header" body="body" type="primary" />
      <Accordian head="Header" body="body" type="secondary" />
      {/* -------------------Carousel------------------- */}

      <div className="pre_process_head">
        <div className="make_extra_bold">Carousel:</div>
      </div>
      <Carousel />
    </div>
  );
}

export default App;
