import { render } from "@testing-library/react";
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
});
