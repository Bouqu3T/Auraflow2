import React from 'react';

const CrystalPlanCard = ({ plan, isSelected, onSelect }) => {
  return (
    <div 
      className={`p-4 rounded-xl border-2 ${isSelected ? 'border-crystal-purple bg-light-gray' : 'border-gray-200'} transition-all duration-300 cursor-pointer`}
      onClick={() => onSelect(plan)}
    >
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 rounded-full bg-light-gray flex items-center justify-center">
          <img 
            src={plan.image} 
            alt={plan.name} 
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
          <p className="text-gray-400 text-sm mb-1">{plan.crystals.join('、')}</p>
          <p className="text-gray-600 text-sm">{plan.description}</p>
          <p className="text-crystal-purple font-bold mt-2">¥{plan.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CrystalPlanCard;