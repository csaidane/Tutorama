import React from "react";
import App from "../../App";

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
  getByLabelText,
  prettyDOM,
} from "@testing-library/react";

describe("Application", () => {
  it("able to go from the indexpage to the login page and then the homepage", async () => {
    // 1. Render the Application.
    const { container } = render(<App />);

    console.log(prettyDOM(container));

    // 2. Shows the index Page
    expect(
      getByText(container, "Hire the right tutor today!")
    ).toBeInTheDocument();

    // 3. Able to go to the login page
    fireEvent.click(getByText(container, "Log in"));

    // 4. Logs in
    fireEvent.change(getByLabelText(container, /Email Address/i), {
      target: { value: "test@email.com" },
    });
    fireEvent.change(getByLabelText(container, /Password/i), {
      target: { value: "pass" },
    });
    fireEvent.click(getByText(container, "Sign In"));

    // Now in the home page.
    await waitForElement(() => getByAltText(container, "Log out"));
    expect(getByText(container, "Log out")).toBeInTheDocument();

    // console.log(prettyDOM(container));
  });
});
