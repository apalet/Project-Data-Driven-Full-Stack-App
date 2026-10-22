"use client";

import React from "react";
import Link from "next/link";
import renderStars from "@/src/components/Stars.jsx";

export default function ComparisonTable({ tools }) {
  if (tools.length === 0) {
    return <p>No tools to compare.</p>;
  }

  return (
    <div className="comparison-table">
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            {tools.map((tool) => (
              <th key={tool.id}>
                <div className="comparison-table__header">
                  <div className="comparison-table__image">
                    <img src={tool.photo} alt={tool.name} />
                  </div>
                  <div>
                    <Link href={`/tool/${tool.id}`}>{tool.name}</Link>
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rating</td>
            {tools.map((tool) => (
              <td key={tool.id}>
                <div className="comparison-table__rating">
                  <ul>{renderStars(tool.avgRating)}</ul>
                  <span>({tool.numRatings})</span>
                </div>
              </td>
            ))}
          </tr>
          <tr>
            <td>Categories</td>
            {tools.map((tool) => (
              <td key={tool.id}>
                {tool.categories && tool.categories.length > 0
                  ? tool.categories.join(", ")
                  : "N/A"}
              </td>
            ))}
          </tr>
          <tr>
            <td>Pricing</td>
            {tools.map((tool) => (
              <td key={tool.id}>
                {tool.pricingDetails || (tool.pricingModel && tool.pricingModel.length > 0
                  ? tool.pricingModel.join(", ")
                  : "N/A")}
              </td>
            ))}
          </tr>
          <tr>
            <td>Platforms</td>
            {tools.map((tool) => (
              <td key={tool.id}>
                {tool.supportedPlatforms && tool.supportedPlatforms.length > 0
                  ? tool.supportedPlatforms.join(", ")
                  : "N/A"}
              </td>
            ))}
          </tr>
          <tr>
            <td>Key Features</td>
            {tools.map((tool) => (
              <td key={tool.id}>
                {tool.keyFeatures && tool.keyFeatures.length > 0
                  ? tool.keyFeatures.join(", ")
                  : "N/A"}
              </td>
            ))}
          </tr>
          <tr>
            <td>Website</td>
            {tools.map((tool) => (
              <td key={tool.id}>
                {tool.website ? (
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                ) : (
                  "N/A"
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td>Additional Info</td>
            {tools.map((tool) => (
              <td key={tool.id}>
                {tool.additionalInfo || "N/A"}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <div className="comparison-table__back">
        <Link href="/">Back to Tools</Link>
      </div>
    </div>
  );
}
