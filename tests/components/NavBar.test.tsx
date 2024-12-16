import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../../src/components/layout/NavBar";

describe("Navbar", () => {
  it("Navbar should render on the screen", () => {
    const { container } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(container).toBeInTheDocument();
  });

  it("should render logo on the screen", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const logo = screen.getAllByRole("img");
    expect(logo).toHaveLength(2);
  });

  it("should render search input on the screen", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const searchInput = screen.getByRole("textbox");
    expect(searchInput).toBeInTheDocument();
  });
});
