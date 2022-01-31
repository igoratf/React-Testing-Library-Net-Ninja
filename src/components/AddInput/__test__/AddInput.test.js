import { fireEvent, render, screen } from "@testing-library/react"
import AddInput from "../AddInput";

const mockSetTodo = jest.fn();

describe("AddInput", () => {

   it("should render input element", () => {
      render(<AddInput todos={[]} setTodos={mockSetTodo} />)
      const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
      expect(inputElement).toBeInTheDocument();
   });

   it("should be able to type in input", () => {
      render(<AddInput todos={[]} setTodos={mockSetTodo} />);
      const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
      fireEvent.change(inputElement, { target: { value: "Learn RTL" } });;
      expect(inputElement.value).toBe("Learn RTL");
   });

   it("should have empty input when add button is clicked", () => {
      render(<AddInput todos={[]} setTodos={mockSetTodo} />);
      const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
      const buttonElement = screen.getByRole("button", { name: /Add/i});
      fireEvent.click(buttonElement);
      expect(inputElement.value).toBe("");
   });

})