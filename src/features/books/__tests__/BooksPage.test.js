import React from "react";
import { render } from "../test-utils";
import BooksPage from "../BooksPage";

describe("BooksPage component", () => {
  it("should show progress status", () => {
    const initialState = {
      books: {
        status: "initial",
        error: null,
        data: [],
      },
    };

    const component = render(<BooksPage />, initialState);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should error message", () => {
    const initialState = {
      books: {
        status: "error",
        error: "Error 404",
        data: [],
      },
    };

    const component = render(<BooksPage />, initialState);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should a book list", () => {
    const initialState = {
      books: {
        status: "succeded",
        error: null,
        data: [
          {
            id: 1,
            title: "Aperiam qui saepe cumque.",
            totalPages: 111,
            rating: "2.48",
            isbn: "8920461264006",
            publishedAt: "2017-01-11T20:08:54+00:00",
            img:
              "https://via.placeholder.com/640x480.png/00ff88?text=books+sed",
          },
          {
            id: 2,
            title: "Soluta repudiandae modi fuga neque enim.",
            totalPages: 819,
            rating: "4.22",
            isbn: "8872543528578",
            publishedAt: "1982-03-25T23:12:37+00:00",
            img:
              "https://via.placeholder.com/640x480.png/003399?text=books+eligendi",
          },
          {
            id: 3,
            title:
              "Quidem praesentium et nobis dignissimos delectus quas quia facere.",
            totalPages: 287,
            rating: "1.69",
            isbn: "2738955534063",
            publishedAt: "1993-02-01T12:25:31+00:00",
            img:
              "https://via.placeholder.com/640x480.png/009988?text=books+maxime",
          },
        ],
      },
    };

    const component = render(<BooksPage />, initialState);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
