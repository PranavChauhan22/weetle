# WEETLE
<img src="weetle/src/components/images/logos/weetle_black_logo (1).png" width=100%/>

## Documentation
Head over to [WEETLE documentation](https://weetle-evolve.web.app/) for more smooth information flow.

## Get your WEETLE website within 24 hours
Fill out this [form](https://bit.ly/weetle_evolve) and get your customized WEETLE website within 24 hours :)

## Get Involved
Join the [EVOLVE community](https://discord.gg/zPRP2UNwpK) 

## Getting Started

Clone the repository

```bash
git clone <repo-url>
cd ./weetle/weetle
npm add
npm start
```

# Key elements


## Navbar

```jsx title="src/App.js"
import React from 'react';
import Navbar from './components/navbar/Navbar';

export default function App() {
  return (
    <div>
      <Navbar type="primary" url={"https://i.ibb.co/mDpBP1s/logo-evolve.png"}/>
      <Navbar type="secondary" url={"https://i.ibb.co/mDpBP1s/logo-evolve.png"}/>
    </div>
  );
}
```

Check the modified changes on [http://localhost:3000](http://localhost:3000).


```js title="Information of usage"
Use the themes primary or secondary respectively for the preferred navbar
```

## Home

```jsx title="src/App.js"
import React from 'react';
import Home from './components/home/Home';

export default function App() {
  return (
    <div>
      <Home company_name={"EVOLVE.IO"} about_company={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type partial."}/>
    </div>
  );
}
```

## Services

```jsx title="src/App.js"
import React from 'react';
import Service from "./components/services/Service";
import Cards from "./components/cards/Cards";

export default function App() {
  return (
    <div>
          <Service
        header={
          "We provide quality plus aesthetic content related to personality and it's unique connection with other segments of life"
        }
      />
      <div className="cards_services">
        <Cards type="primary" header={"Design & Dev"} body={"In order to deliver a better overall experience, we place a lot of emphasis on the design of the content and the development of the product."}/>
        <Cards type="secondary" header={"Design & Dev"} body={"In order to deliver a better overall experience, we place a lot of emphasis on the design of the content and the development of the product."}/>
        <Cards type="primary" header={"Design & Dev"} body={"In order to deliver a better overall experience, we place a lot of emphasis on the design of the content and the development of the product."}/>
      </div>
    </div>
  );
}
```



## Contact

```jsx title="src/App.js"
import React from 'react';
import Contact from "./components/contact/Contact";

export default function App() {
  return (
    <div>
      <Contact company_name={"EVOLVE.IO"} company_mail_id={"xyz@gmail.com"}/>
    </div>
  );
}
```




## Cards
```jsx title="src/App.js"
import React from 'react';
import Cards from "./components/cards/Cards";

export default function App() {
  return (
      <div className="cards_services">
        <Cards type="primary" header={"Design & Dev"} body={"In order to deliver a better overall experience, we place a lot of emphasis on the design of the content and the development of the product."}/>
        <Cards type="secondary" header={"Design & Dev"} body={"In order to deliver a better overall experience, we place a lot of emphasis on the design of the content and the development of the product."}/>
      </div>
  );
}
```



```js title="Information of usage"
Use primary theme for the left card and secondary for the right card
```


## Footer

```jsx title="src/App.js"
import React from 'react';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div>
      <Footer email={"evolvewithaesthetico@gmail.com"} contact={"999xxxxxxx"} instagramlink={"#"} linkedinlink={"#"} twitterlink={"#"}/>
    </div>
  );
}
```


## Buttons

```jsx title="src/App.js"
import React from 'react';
import PrimaryButton from './components/minute-components/forms/buttons/PrimaryButton';
import SecondaryButton from './components/minute-components/forms/buttons/SecondaryButton';

export default function App() {
  return (
    <div>
      <PrimaryButton name="Button"/>
      <SecondaryButton name="Button"/>
    </div>
  );
}
```

```js title="Information of usage"
Left one is based on primary theme and right one on secondary theme resp.
```

## Headings

```jsx title="src/App.js"
import React from 'react';
import PrimaryHead from "./components/headings/PrimaryHead";
import SecondaryHead from "./components/headings/SecondaryHead";

export default function App() {
  return (
    <div>
      <PrimaryHead name="Heading 1"/>
      <SecondaryHead name="Heading 2"/>
    </div>
  );
}
```


```js title="Information of usage"
Upper one indicates primary heading and bottom one indicates secondary heading
```

