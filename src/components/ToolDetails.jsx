// This component shows tool metadata, and offers some actions to the user like uploading a new tool image, and adding a review.

import React from "react";
import renderStars from "@/src/components/Stars.jsx";
import FavoriteButton from "@/src/components/FavoriteButton.jsx";

const ToolDetails = ({
  tool,
  userId,
  handleToolImage,
  setIsOpen,
  isOpen,
  children,
  toolId,
}) => {
  return (
    <section className="img__section">
      <img src={tool.photo} alt={tool.name} />

      <div className="actions">
        {userId && (
          <img
            alt="review"
            className="review"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            src="/review.svg"
          />
        )}
        <label
          onChange={(event) => handleToolImage(event.target)}
          htmlFor="upload-image"
          className="add"
        >
          <input
            name=""
            type="file"
            id="upload-image"
            className="file-input hidden w-full h-full"
          />

          <img className="add-image" src="/add.svg" alt="Add image" />
        </label>
      </div>

      <div className="details__container">
        <div className="details">
          <h2>{tool.name}</h2>

          <div className="tool__rating">
            <ul>{renderStars(tool.avgRating)}</ul>

            <span>({tool.numRatings})</span>
          </div>

          <p>
            {tool.categories && tool.categories.length > 0
              ? tool.categories.join(", ")
              : "Uncategorized"}
          </p>
          <p style={{ fontSize: "14px" }}>
            {tool.pricingDetails || (tool.pricingModel && tool.pricingModel.length > 0
              ? tool.pricingModel.join(", ")
              : "N/A")}
          </p>
          {tool.website && (
            <p>
              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", textDecoration: "underline" }}
              >
                Visit Website
              </a>
            </p>
          )}
          {tool.additionalInfo && (
            <p style={{ fontSize: "12px", opacity: 0.8 }}>
              {tool.additionalInfo}
            </p>
          )}
          <FavoriteButton toolId={toolId} />
          {children}
        </div>
      </div>
    </section>
  );
};

export default ToolDetails;
