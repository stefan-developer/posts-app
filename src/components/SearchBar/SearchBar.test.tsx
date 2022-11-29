import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar.component";

describe("SearchBar", () => {
  render(<SearchBar message="Render search input component" />);

  const searchInput = screen.getByPlaceholderText(
    /search.../i
  ) as HTMLInputElement;

  it("renders search input component", () => {
    expect(searchInput).toBeInTheDocument();
  });

  it("search input updates value", () => {
    const mockInputValue = "Stefan";

    searchInput.value = mockInputValue;

    expect(searchInput.value).toBe(mockInputValue);

    const mockPlaceholderText = "Search a post..";

    searchInput.placeholder = mockPlaceholderText;

    expect(searchInput.placeholder).toBe(mockPlaceholderText);
  });
});
