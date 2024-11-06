// import React, { useState } from 'react'
// import CompA from './CompA';


// const data = [
//     {
//       id: 1,
//       title: 'buttermilk pancakes',
//       category: 'breakfast',
//       price: 15.99,
//       img: './images/item-1.jpeg',
//       desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
//     },
//     {
//       id: 2,
//       title: 'diner double',
//       category: 'lunch',
//       price: 13.99,
//       img: './images/item-2.jpeg',
//       desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
//     },
//     {
//       id: 3,
//       title: 'godzilla milkshake',
//       category: 'shakes',
//       price: 6.99,
//       img: './images/item-3.jpeg',
//       desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
//     },
//     {
//       id: 4,
//       title: 'country delight',
//       category: 'breakfast',
//       price: 20.99,
//       img: './images/item-4.jpeg',
//       desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
//     },
//     {
//       id: 5,
//       title: 'egg attack',
//       category: 'lunch',
//       price: 22.99,
//       img: './images/item-5.jpeg',
//       desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
//     },
//     {
//       id: 6,
//       title: 'oreo dream',
//       category: 'shakes',
//       price: 18.99,
//       img: './images/item-6.jpeg',
//       desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
//     },
//     {
//       id: 7,
//       title: 'bacon overflow',
//       category: 'breakfast',
//       price: 8.99,
//       img: './images/item-7.jpeg',
//       desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
//     },
//     {
//       id: 8,
//       title: 'american classic',
//       category: 'lunch',
//       price: 12.99,
//       img: './images/item-8.jpeg',
//       desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
//     },
//     {
//       id: 9,
//       title: 'quarantine buddy',
//       category: 'shakes',
//       price: 16.99,
//       img: './images/item-9.jpeg',
//       desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
//     },
//   ];
  


// const App = () => {

//     const[items, setItems] = useState(data)
//     const[filteredItems, setFilteredItems] = useState(data)


    

//   return (
//     <div id='main'>
        
//         <h1>Our Menu</h1>

//         <div>
//             <button onClick={() => {
//                 const cat = "all"

//                 // const nArr = items.filter((item) => {
//                 //     return item.category == cat
//                 // })

//                 setFilteredItems(data)
//                 // console.log(nArr)


//             }}>All</button>
//             <button id='filter-btn-1' onClick={() => {
//                 const cat = "breakfast"

//                 const nArr = items.filter((item) => {
//                     return item.category == cat
//                 })

//                 setFilteredItems(nArr)
//                 // console.log(nArr)


//             }}>Breakfast</button>
//             <button id='filter-btn-2' onClick={() => {
//                 const cat = "lunch"

//                 const nArr = items.filter((item) => {
//                     return item.category == cat
//                 })

//                 setFilteredItems(nArr)
//                 // console.log(nArr)


//             }}>Lunch</button>
//             <button id='filter-btn-3' onClick={() => {
//                 const cat = "shakes"

//                 const nArr = items.filter((item) => {
//                     return item.category == cat
//                 })

//                 setFilteredItems(nArr)
//                 // console.log(nArr)


//             }}>Shakes</button>
//         </div>

//         <div style={{display:'flex', flexWrap : "wrap"}}>
//             {filteredItems.map((item) => {
//                 return <CompA item={item} />
//             })}
//         </div>

//     </div>
//   )
// }

// export default App


// App.js
import React, { useState } from 'react';
import CompA from './CompA';

const data = [
  { id: 1, title: 'buttermilk pancakes', category: 'breakfast', price: 15.99, img: './images/item-1.jpeg', desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed` },
  { id: 2, title: 'diner double', category: 'lunch', price: 13.99, img: './images/item-2.jpeg', desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats` },
  { id: 3, title: 'godzilla milkshake', category: 'shakes', price: 6.99, img: './images/item-3.jpeg', desc: `kombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.` },
  { id: 4, title: 'country delight', category: 'breakfast', price: 20.99, img: './images/item-4.jpeg', desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut` },
  { id: 5, title: 'egg attack', category: 'lunch', price: 22.99, img: './images/item-5.jpeg', desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up` },
  { id: 6, title: 'oreo dream', category: 'shakes', price: 18.99, img: './images/item-6.jpeg', desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday` },
  { id: 7, title: 'bacon overflow', category: 'breakfast', price: 8.99, img: './images/item-7.jpeg', desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland` },
  { id: 8, title: 'american classic', category: 'lunch', price: 12.99, img: './images/item-8.jpeg', desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut` },
  { id: 9, title: 'quarantine buddy', category: 'shakes', price: 16.99, img: './images/item-9.jpeg', desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.` },
];

const App = () => {
  const [filteredItems, setFilteredItems] = useState(data);

  const filterItems = (category) => {
    if (category === "all") {
      setFilteredItems(data);
    } else {
      setFilteredItems(data.filter(item => item.category === category));
    }
  };

  return (
    <div id="main">
      <h1>Our Menu</h1>
      <div>
        <button onClick={() => filterItems("all")}>All</button>
        <button id="filter-btn-1" onClick={() => filterItems("breakfast")}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => filterItems("lunch")}>Lunch</button>
        <button id="filter-btn-3" onClick={() => filterItems("shakes")}>Shakes</button>
      </div>
      <div style={{ display: 'flex', flexWrap: "wrap" }}>
        {filteredItems.map((item) => (
          <CompA key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
