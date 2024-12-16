import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Genres from "../../../src/components/genre/Genres";
import { Genres as GenereType } from "../../../src/models/games";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

describe("Genre", () => {
  it("should render on the screen", () => {
    const data: GenereType[] = [
      {
        id: 1,
        name: "Action",
        image_background:
          "https://media.rawg.io/media/crop/600/400/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
      },
    ];

    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Genres />
        </BrowserRouter>
      </QueryClientProvider>
    );
    data?.forEach((genre) => {
      const button = screen.getByRole("button", { name: genre.name });
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent(genre.name);
    });
  });
});
