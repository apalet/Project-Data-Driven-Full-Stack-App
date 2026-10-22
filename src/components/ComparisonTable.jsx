"use client";

import React from "react";
import Link from "next/link";
import renderStars from "@/src/components/Stars.jsx";

export default function ComparisonTable({ tools }) {
  if (tools.length === 0) {
    return <p>No tools to compare.</p>;
  }

  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                textAlign: "left",
                backgroundColor: "rgb(13 42 69)",
                color: "white",
              }}
            >
              Feature
            </th>
            {tools.map((tool) => (
              <th
                key={tool.id}
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  textAlign: "center",
                  backgroundColor: "rgb(13 42 69)",
                  color: "white",
                  minWidth: "200px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "8px",
                      borderRadius: "8px",
                      backgroundColor: "var(--bg-primary)",
                    }}
                  >
                    <img
                      src={tool.photo}
                      alt={tool.name}
                      style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                    />
                  </div>
                  <div>
                    <Link
                      href={`/tool/${tool.id}`}
                      style={{ color: "white", textDecoration: "underline" }}
                    >
                      {tool.name}
                    </Link>
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                fontWeight: "bold",
              }}
            >
              Rating
            </td>
            {tools.map((tool) => (
              <td
                key={tool.id}
                style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center" }}
              >
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                  <ul style={{ display: "flex", margin: 0, padding: 0 }}>
                    {renderStars(tool.avgRating)}
                  </ul>
                  <span>({tool.numRatings})</span>
                </div>
              </td>
            ))}
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                fontWeight: "bold",
              }}
            >
              Categories
            </td>
            {tools.map((tool) => (
              <td
                key={tool.id}
                style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center" }}
              >
                {tool.categories && tool.categories.length > 0
                  ? tool.categories.join(", ")
                  : "N/A"}
              </td>
            ))}
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                fontWeight: "bold",
              }}
            >
              Pricing
            </td>
            {tools.map((tool) => (
              <td
                key={tool.id}
                style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center", fontSize: "12px" }}
              >
                {tool.pricingDetails || (tool.pricingModel && tool.pricingModel.length > 0
                  ? tool.pricingModel.join(", ")
                  : "N/A")}
              </td>
            ))}
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                fontWeight: "bold",
              }}
            >
              Platforms
            </td>
            {tools.map((tool) => (
              <td
                key={tool.id}
                style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center" }}
              >
                {tool.supportedPlatforms && tool.supportedPlatforms.length > 0
                  ? tool.supportedPlatforms.join(", ")
                  : "N/A"}
              </td>
            ))}
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                fontWeight: "bold",
              }}
            >
              Key Features
            </td>
            {tools.map((tool) => (
              <td
                key={tool.id}
                style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center" }}
              >
                {tool.keyFeatures && tool.keyFeatures.length > 0
                  ? tool.keyFeatures.join(", ")
                  : "N/A"}
              </td>
            ))}
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                fontWeight: "bold",
              }}
            >
              Website
            </td>
            {tools.map((tool) => (
              <td
                key={tool.id}
                style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center" }}
              >
                {tool.website ? (
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "rgb(13 42 69)" }}
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
            <td
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                fontWeight: "bold",
              }}
            >
              Additional Info
            </td>
            {tools.map((tool) => (
              <td
                key={tool.id}
                style={{ border: "1px solid #ddd", padding: "12px", textAlign: "center", fontSize: "12px" }}
              >
                {tool.additionalInfo || "N/A"}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <div style={{ marginTop: "20px" }}>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "rgb(13 42 69)",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
          }}
        >
          Back to Tools
        </Link>
      </div>
    </div>
  );
}
