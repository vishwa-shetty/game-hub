import { render, screen } from "@testing-library/react";
import Footer from "../../src/components/layout/Footer";

describe("Footer", () => {
  it("should render on the screen", () => {
    render(<Footer />);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent(/vishwa/i);
    expect(link).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/vishwa-kalshetty/"
    );
  });
});
