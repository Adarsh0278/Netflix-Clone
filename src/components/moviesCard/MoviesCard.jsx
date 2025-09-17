import React from 'react'
import CardData from '/Public/cards/Cards_Data.js'

function MoviesCard({title}) {
  return (
    <div className="px-6 md:px-24 py-4">
        <h2 className="text-2xl font-bold mb-4">{title || "Popular on Netflix"}</h2>
        <div className='flex gap-4 overflow-x-auto pb-4'>
            {CardData.map((card, index) => (
                <div 
                    key={index}
                    className="flex-none w-[160px] transition-transform hover:scale-105"
                >
                    <img 
                        src={card.image} 
                        alt={card.name}
                        className="w-full h-[240px] object-cover rounded"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'fallback-image-path.jpg'
                        }}
                    />
                    <h3 className="mt-2 text-sm">{card.name}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MoviesCard