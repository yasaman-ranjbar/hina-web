import { render, screen } from "@testing-library/react"
import { Badge } from "./badge"



describe('badge component', () => {
    test("applies the correct css class for different badge variants", () => {
        const { rerender } = render(<Badge variant="primary">content</Badge>);
        expect(screen.getByText("content")).toHaveClass(`badge-primary`);

         rerender(<Badge variant="info">content</Badge>);
         expect(screen.getByText("content")).toHaveClass(`badge-info`);
    });
})