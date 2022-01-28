import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
   // GET BY - get by selector and fails test if element is not found
   // 1. text
  it("renders same text passed into title prop", () => {
    render(<Header title="my header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });

  // 2. role
  /* it("renders same text passed into title prop", () => {
   render(<Header title="my header" />);
   const headingElement = screen.getByRole('heading', { name: "my header"});
   expect(headingElement).toBeInTheDocument();
 }); */


   // FIND BY - Asynchronous (must use async/await) and fails test if element is not found
   it("renders same text passed into title prop", async () => {
      render(<Header title="my header" />);
      const headingElement = await screen.findByText(/my header/i);
      expect(headingElement).toBeInTheDocument();
   });

   // QUERY BY - Won't fail test if element is not found
   it("renders same text passed into title prop", async () => {
      render(<Header title="my header" />);
      const headingElement = await screen.queryByText(/dog/i);
      expect(headingElement).not.toBeInTheDocument();
   });
});
