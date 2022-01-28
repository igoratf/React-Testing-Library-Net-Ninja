import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("TodoFooter", () => {
  it("renders correct amount of incomplete tasks passed by prop", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={2} />);
    const paragraphElement = screen.getByText(/2 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it("render singular text if amount of incomplete tasks is one", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeVisible();
  });

  it("should render followers link", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const linkElement = screen.getByText(/Followers/i);
      expect(linkElement).toBeVisible();
  })
});
