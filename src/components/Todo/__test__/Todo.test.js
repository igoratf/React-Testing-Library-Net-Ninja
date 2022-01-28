import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTasks = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
  const buttonElement = screen.getByRole("button", { name: /add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  it("should render multiple tasks", () => {
    render(<MockTodo />);
    addTasks(["Go swimming", "Go to the gym"]);
    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(2);
  });

  it("task should not have completed class when initially rendered", () => {
    render(<MockTodo />);
    addTasks(["Go swimming"]);
    const divElement = screen.getByText(/go swimming/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("task should have completed class when clicked", () => {
   render(<MockTodo />);
   addTasks(["Go swimming", "Go to the gym"]);
   const divElement = screen.getByText(/go swimming/i);
   fireEvent.click(divElement);
   expect(divElement).toHaveClass("todo-item-active");
 });
});
