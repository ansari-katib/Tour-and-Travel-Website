import React from "react";

// Import images directly at the top of the file
import kashmir_food from "../assets/kashmir_food.webp";
import manali_food from "../assets/manali_food.webp";
import assam_food from "../assets/assam_food.jpg";
import rajasthan_food from "../assets/rajisthan_food.jpg";
import punjab_food from "../assets/punjab_food.webp";

// Array of food data
const foodData = [
  {
    id: 1,
    region: "Kashmir",
    dish: "Rogan Josh",
    description: "Rogan Josh is a signature dish of Kashmiri cuisine, made with tender lamb cooked in a rich, flavorful curry. It is one of the most popular dishes in Kashmir, often paired with steamed rice and naan.",
    image: kashmir_food,
  },
  {
    id: 2,
    region: "Manali",
    dish: "Chana Madra",
    description: "Chana Madra is a traditional Himachali dish made with chickpeas and a variety of spices. It is cooked in a rich, creamy yogurt-based sauce, often enjoyed with rice or paratha.",
    image: manali_food,
  },
  {
    id: 3,
    region: "Assam",
    dish: "Assam Laksa",
    description: "Assam Laksa is a tangy and spicy noodle soup made with tamarind, fish, and a variety of fresh herbs and spices. It is one of the most popular dishes in Assam, known for its distinct flavor.",
    image: assam_food,
  },
  {
    id: 4,
    region: "Rajasthan",
    dish: "Dal Baati Churma",
    description: "Dal Baati Churma is a traditional Rajasthani dish consisting of dal (lentils), baati (hard wheat rolls), and churma (sweet crumbled wheat). This dish is often enjoyed with ghee and is a staple in Rajasthan.",
    image: rajasthan_food,
  },
  {
    id: 5,
    region: "Punjab",
    dish: "Amritsari Kulcha",
    description: "Amritsari Kulcha is a popular bread-based dish from Punjab, stuffed with a variety of fillings like potato, paneer, and onions, and baked in a tandoor. It's usually served with chutney and yogurt.",
    image: punjab_food,
  },
];

const Food = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Famous Foods from Indian Destinations
      </h1>
      <p className="text-center text-lg text-gray-600 mb-12">
        Explore some of the most delicious and iconic foods from different regions of India.
      </p>

      {/* Mapping through food data */}
      {foodData.map((food) => (
        <div
          key={food.id}
          className={`flex flex-col lg:flex-row ${food.id % 2 === 0 ? "lg:flex-row-reverse" : ""} items-center justify-between mb-16`}
        >
          <div className="w-full lg:w-1/2">
            <img
              src={food.image}
              alt={food.dish}
              className="w-full h-64 object-cover rounded-lg shadow-md" // Consistent height with object-cover for proper scaling
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{food.region} - {food.dish}</h2>
            <p className="text-lg text-gray-600">{food.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Food;
