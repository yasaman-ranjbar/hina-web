import { describe } from "node:test";
import { render, screen } from "@testing-library/react";
import Button from "./button";

describe("Button Component", () => {
  test("render a default button", () => {
    const { getByText } = render(<Button>Click here</Button>);
    expect(getByText("Click here")).toBeInTheDocument();
  });

  test("disables the button when isDisabled prop is true", () => {
    render(<Button isDisabled={true}>Click here</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("applies the correct class for different button variants", () => {
    const { rerender } = render(<Button variant="primary">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-primary"); //we can testing weather class name 'btn-primary' has it? use toHaveClass

    rerender(<Button variant="info">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-info");
  });
    
    test("applies the correct css class for different button sizes", () => {
      const { rerender } = render(<Button size="small">click here</Button>);
      expect(screen.getByRole("button")).toHaveClass(`btn-sm`);

      rerender(<Button size="large">click here</Button>);
      expect(screen.getByRole("button")).toHaveClass(`btn-lg`);
    });
});
