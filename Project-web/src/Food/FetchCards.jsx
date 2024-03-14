import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
    </div>
  );
};

const SubCard = ({ subItem }) => {
  return (
    <div className="sub-card">
      <img src={subItem.image} alt={subItem.name} />
      <h4>{subItem.name}</h4>
      <p>{subItem.description}</p>
      <p>Price: ${subItem.price}</p>
    </div>
  );
};

const Navbar = ({ categories, setCurrentCategory }) => {
  return (
    <nav className="navbar">
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => setCurrentCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

const App = () => {
  const [currentCategory, setCurrentCategory] = React.useState(FoodData[0]);

  return (
    <div className="app">
      <Navbar
        categories={FoodData.map((item) => item.name)}
        setCurrentCategory={setCurrentCategory}
      />
      <div className="cards-container">
        {currentCategory.subItemsData.subItems.map((subItem, index) => (
          <SubCard key={index} subItem={subItem} />
        ))}
      </div>
    </div>
  );
};

export default App;
