// components/QuizCard.js
import React from 'react';
import Link from 'next/link';

export default function QuizCard({ title, author, date, image }) {
  return (
    <Link href="#" className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative pb-[75%]">
        <img 
          src={image} 
          alt={title} 
          className="absolute w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-600 mb-1">
          {date} · By: {author}
        </div>
        <h3 className="font-bold text-lg">{title}</h3> 
      </div>
    </Link>
  );
}