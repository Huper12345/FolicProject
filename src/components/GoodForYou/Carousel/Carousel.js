import React from "react";
import { cloneElement } from "react";
import { useEffect, useState, Children } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Carousel.css";

const PAGE_WIDTH = 100;

export const Carousel = ({
  children,
  arrowL = "Arrow Left",
  arrowR = "Arrow Right",
}) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;

      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;

      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));

      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            maxWidth: `${PAGE_WIDTH}%`,
            minWidth: `${PAGE_WIDTH}%`,
          },
        });
      })
    );
  }, []);

  return (
    <div className="Sub-container">
      <FaChevronLeft className={arrowL} onClick={handleLeftArrowClick} />
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
      <FaChevronRight className={arrowR} onClick={handleRightArrowClick} />
    </div>
  );
};
