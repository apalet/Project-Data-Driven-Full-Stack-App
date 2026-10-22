"use client";

// This components handles the tool listings page
// It receives data from src/app/page.jsx, such as the initial tools and search params from the URL

import Link from "next/link";
import { React, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import renderStars from "@/src/components/Stars.jsx";
import { getToolsSnapshot } from "@/src/lib/firebase/firestore.js";
import Filters from "@/src/components/Filters.jsx";

const ToolItem = ({ tool, selectedTools, toggleSelection }) => (
  <li key={tool.id}>
    <div style={{ position: "relative" }}>
      <input
        type="checkbox"
        checked={selectedTools.has(tool.id)}
        onChange={() => toggleSelection(tool.id)}
        style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          zIndex: 10,
          width: "24px",
          height: "24px",
          cursor: "pointer",
          accentColor: "#3B82F6",
        }}
      />
      <Link href={`/tool/${tool.id}`}>
        <ActiveTool tool={tool} />
      </Link>
    </div>
  </li>
);

const ActiveTool = ({ tool }) => (
  <div>
    <ImageCover photo={tool.photo} name={tool.name} />
    <ToolDetails tool={tool} />
  </div>
);

const ImageCover = ({ photo, name }) => (
  <div className="image-cover">
    <img src={photo} alt={name} />
  </div>
);

const ToolDetails = ({ tool }) => (
  <div className="tool__details">
    <h2>{tool.name}</h2>
    <ToolRating tool={tool} />
    <ToolMetadata tool={tool} />
  </div>
);

const ToolRating = ({ tool }) => (
  <div className="tool__rating">
    <ul>{renderStars(tool.avgRating)}</ul>
    <span>({tool.numRatings})</span>
  </div>
);

const ToolMetadata = ({ tool }) => (
  <div className="tool__meta">
    <p>
      {tool.categories && tool.categories.length > 0
        ? tool.categories[0]
        : "Uncategorized"} | {tool.pricingModel && tool.pricingModel.length > 0 ? tool.pricingModel[0] : "N/A"}
    </p>
  </div>
);

export default function ToolListings({
  initialTools,
  searchParams,
}) {
  const router = useRouter();

  // The initial filters are the search params from the URL, useful for when the user refreshes the page
  const initialFilters = {
    category: searchParams.category || "",
    platform: searchParams.platform || "",
    pricingModel: searchParams.pricingModel || "",
    sort: searchParams.sort || "",
  };

  const [tools, setTools] = useState(initialTools);
  const [filters, setFilters] = useState(initialFilters);
  const [selectedTools, setSelectedTools] = useState(new Set());

  const toggleSelection = (toolId) => {
    const newSelected = new Set(selectedTools);
    if (newSelected.has(toolId)) {
      newSelected.delete(toolId);
    } else {
      if (newSelected.size >= 3) {
        alert("You can compare up to 3 tools at a time");
        return;
      }
      newSelected.add(toolId);
    }
    setSelectedTools(newSelected);
  };

  useEffect(() => {
    routerWithFilters(router, filters);
  }, [router, filters]);

  // this snapshot function provides a callback mechanism
  // so that the callback is invoked every time a change is made to the tool's collection.
  useEffect(() => {
    return getToolsSnapshot((data) => {
      setTools(data);
    }, filters);
  }, [filters]);

  return (
    <article>
      <Filters filters={filters} setFilters={setFilters} />
      {selectedTools.size > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <Link
            href={`/compare?ids=${Array.from(selectedTools).join(",")}`}
            style={{
              display: "inline-block",
              padding: "12px 24px",
              backgroundColor: "#3B82F6",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "600",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#2563EB"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#3B82F6"}
          >
            Compare {selectedTools.size} tool{selectedTools.size > 1 ? "s" : ""}
          </Link>
        </div>
      )}
      <ul className="tools">
        {tools.map((tool) => (
          <ToolItem
            key={tool.id}
            tool={tool}
            selectedTools={selectedTools}
            toggleSelection={toggleSelection}
          />
        ))}
      </ul>
    </article>
  );
}

function routerWithFilters(router, filters) {
  const queryParams = new URLSearchParams();

  for (const [key, value] of Object.entries(filters)) {
    if (value !== undefined && value !== "") {
      queryParams.append(key, value);
    }
  }

  const queryString = queryParams.toString();
  router.push(`?${queryString}`);
}
