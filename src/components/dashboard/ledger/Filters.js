import React, { useState } from 'react';

const Filters = ({
  authTransactions,
  authMethods,
  authCategories,
  displayedTransactions,
  setDisplayedTransactions,
}) => {
  const methodOptions = authMethods.map((am, i) => {
    return <option key={i}>{am}</option>;
  });

  const [activeMethod, setActiveMethod] = useState(null);

  const filterMethod = (e) => {
    const filtered = authTransactions.filter(
      (dt) => dt.method === e.target.value
    );
    setDisplayedTransactions(filtered);
    setActiveCategory(null);
    setActiveMethod(e.target.value);
    e.target.value = 'Method';
  };

  const categoryOptions = authCategories.map((ac, i) => {
    return <option key={i}>{ac}</option>;
  });

  const [activeCategory, setActiveCategory] = useState(null);

  const filterCategory = (e) => {
    const filtered = authTransactions.filter(
      (dt) => dt.category === e.target.value
    );
    setDisplayedTransactions(filtered);
    setActiveMethod(null);
    setActiveCategory(e.target.value);
    e.target.value = 'Category';
  };

  const clearFilters = () => {
    setDisplayedTransactions(authTransactions);
    setActiveMethod(null);
    setActiveCategory(null);
  };

  return (
    <div className="filters">
      <h3>Filter </h3>
      <div className="filtersDiv">
        <div className="filterDiv">
          <select defaultValue="Method" onChange={filterMethod}>
            <option disabled>Method</option>
            {methodOptions}
          </select>
        </div>
        <div className="filterDiv">
          <select defaultValue="Category" onChange={filterCategory}>
            <option disabled>Category</option>
            {categoryOptions}
          </select>
        </div>
      </div>
      {activeMethod && <h3>{activeMethod}</h3>}
      {activeCategory && <h3>{activeCategory}</h3>}
      {(activeMethod || activeCategory) && (
        <button onClick={clearFilters}>Clear Filter</button>
      )}
    </div>
  );
};

export default Filters;
