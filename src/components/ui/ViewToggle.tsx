import React from 'react';

interface ViewToggleProps {
  viewMode: 'list' | 'grid';
  setViewMode: (mode: 'list' | 'grid') => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ viewMode, setViewMode }) => {
  const iconColor = 'bg-gray-600';

  return (
    <div className="flex items-center bg-gray-200 rounded-md p-1">
      <button
        onClick={() => setViewMode('grid')}
        className={`p-2 rounded-md ${
          viewMode === 'grid' ? 'bg-white' : 'bg-transparent'
        }`}
        aria-label="Grid View"
      >
        <div className="grid grid-cols-2 gap-0.5">
          <div className={`w-2 h-2 ${iconColor}`}></div>
          <div className={`w-2 h-2 ${iconColor}`}></div>
          <div className={`w-2 h-2 ${iconColor}`}></div>
          <div className={`w-2 h-2 ${iconColor}`}></div>
        </div>
      </button>
      <button
        onClick={() => setViewMode('list')}
        className={`p-2 rounded-md ${
          viewMode === 'list' ? 'bg-white' : 'bg-transparent'
        }`}
        aria-label="List View"
      >
        <div className="flex flex-col gap-0.5">
          <div className={`w-4 h-0.5 ${iconColor}`}></div>
          <div className={`w-4 h-0.5 ${iconColor}`}></div>
          <div className={`w-4 h-0.5 ${iconColor}`}></div>
          <div className={`w-4 h-0.5 ${iconColor}`}></div>
        </div>
      </button>
    </div>
  );
};

export default ViewToggle;