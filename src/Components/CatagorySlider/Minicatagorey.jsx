"use client";
import React from "react";
import CategorySlider from "./CategorySlider";

import img1 from "@/assets/categorys/jacket.jpeg";
import img2 from "@/assets/categorys/sweater.jpeg";
import img3 from "@/assets/categorys/hoodie.jpeg";
import img4 from "@/assets/categorys/polo.jpg";
import img5 from "@/assets/categorys/bottoms.jpg";
import img6 from "@/assets/categorys/panjabi.jpg";
import img7 from "@/assets/categorys/t-shirt.jpg";
import img8 from "@/assets/categorys/ss2024.jpg";
import img9 from "@/assets/categorys/casualshirt.jpg";
import img10 from "@/assets/categorys/blazer.jpeg";

const Category = () => {
  const CategoryItem = [
    {
      id: 1,
      name: "Jacket",
      image: img1,
    },
    {
      id: 2,
      name: "Sweater",
      image: img2,
    },
    {
      id: 3,
      name: "Hoodie",
      image: img3,
    },
    {
      id: 4,
      name: "Polo",
      image: img4,
    },
    {
      id: 5,
      name: "Bottoms",
      image: img5,
    },
    {
      id: 6,
      name: "Panjabi",
      image: img6,
    },
    {
      id: 7,
      name: "T-shirt",
      image: img7,
    },
    {
      id: 8,
      name: "SS2024",
      image: img8,
    },
    {
      id: 9,
      name: "Casual Shirt",
      image: img9,
    },

    {
      id: 12,
      name: "Blazer",
      image: img10,
    },
    {
      id: 1,
      name: "Jacket",
      image: img1,
    },
    {
      id: 2,
      name: "Sweater",
      image: img2,
    },
    {
      id: 3,
      name: "Hoodie",
      image: img3,
    },
    {
      id: 4,
      name: "Polo",
      image: img4,
    },
    {
      id: 5,
      name: "Bottoms",
      image: img5,
    },
    {
      id: 6,
      name: "Panjabi",
      image: img6,
    },
    {
      id: 7,
      name: "T-shirt",
      image: img7,
    },
    {
      id: 8,
      name: "SS2024",
      image: img8,
    },
    {
      id: 9,
      name: "Casual Shirt",
      image: img9,
    },

    {
      id: 12,
      name: "Blazer",
      image: img10,
    },
    {
      id: 1,
      name: "Jacket",
      image: img1,
    },
    {
      id: 2,
      name: "Sweater",
      image: img2,
    },
    {
      id: 3,
      name: "Hoodie",
      image: img3,
    },
    {
      id: 4,
      name: "Polo",
      image: img4,
    },
    {
      id: 5,
      name: "Bottoms",
      image: img5,
    },
    {
      id: 6,
      name: "Panjabi",
      image: img6,
    },
    {
      id: 7,
      name: "T-shirt",
      image: img7,
    },
    {
      id: 8,
      name: "SS2024",
      image: img8,
    },
    {
      id: 9,
      name: "Casual Shirt",
      image: img9,
    },

    {
      id: 12,
      name: "Blazer",
      image: img10,
    },
  ];

  return (
    <div clasName="">
      <CategorySlider CategoryItem={CategoryItem} />
    </div>
  );
};

export default Category;
