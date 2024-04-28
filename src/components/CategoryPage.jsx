import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';


const CategoryPage = () => {
  
  const categoryCards = useLoaderData();
  

  return (
    <div>
      <h3>categories: {categoryCards.length}</h3>
      <div className="craftsContainer mx-auto bg-[whitesmoke] transition border-2 border-accent hover:scale-105  hover:border-secondary border-opacity-30 rounded-3xl">
        {
          categoryCards.map(category => <CategoryCard key={category._id} categories={category}></CategoryCard>)
        }
      </div>
    </div>
  );
};

export default CategoryPage;