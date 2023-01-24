import React from 'react';
import { cloneElement } from 'react';
import { useEffect, useState, Children } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Carousel.css';

const PAGE_WIDTH = 100;

export const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    console.log('leftArrwoClick');

    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;

      console.log(newOffset);
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    console.log('RightArrwoClick');

    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;

      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));

      console.log(newOffset, maxOffset);
      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            maxWidth: `${PAGE_WIDTH}%`,
            minWidth: `${PAGE_WIDTH}%`,
          },
        });
      })
    );
  }, []);

  return (
    <div className="Sub-container">
      <FaChevronLeft className="Arrow Left" onClick={handleLeftArrowClick} />
      <div className="Main-container">
        <div className="Window">
          <div
            className="All-pages-container"
            style={{
              transform: `translateX(${offset}%)`,
            }}
          >
            {pages}
          </div>
        </div>
      </div>
      <FaChevronRight className="Arrow Right" onClick={handleRightArrowClick} />
    </div>
  );
};
