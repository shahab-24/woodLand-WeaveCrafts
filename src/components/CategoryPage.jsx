import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';


const CategoryPage = () => {
  
  const categoryCards = useLoaderData();
  

  return (
    <div className='mb-10 mt-10'>
      <h3 className='text-4xl font-bold text-center text-gray-500'>All Categories</h3>
      <div className="grid md:grid-cols-2 gap-8 mb-10 mt-10 craftsContainer mx-auto">
        {
          categoryCards.map(category => <CategoryCard key={category._id} categories={category}></CategoryCard>)
        }
      </div>
    </div>
  );
};

export default CategoryPage;