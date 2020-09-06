import React from "react";
import App from "./App";

import {
  render,
  cleanup,
  waitForElement,
  fireEvent,
  getByText,
  getAllByTestId,
  getByAltText,
  getByPlaceholderText,
  waitForElementToBeRemoved,
  queryByText,
  queryByAltText,
  prettyDOM,
} from "@testing-library/react";

describe("Application", () => {
  it("changes to the index page", async () => {
    const { getByText } = render(<App />);

    expect(getByText("Hire the right tutor today!")).toBeInTheDocument();

    // await waitForElement(() => getByText("Hire the right tutor today!"));
  });
});
