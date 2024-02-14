import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import StepperBar from "./StepperBar";

describe("StepperBar", () => {
    it("renders checked step", () => {
        const steps: Steps[] = [
            {
                id: 1,
                title: "Product",
                state: "checked",
            },
        ];
        render(<StepperBar steps={steps} />);

        const title = screen.getByText(steps[0].title);
        const img = screen.getByAltText(steps[0].state);

        expect(title).toBeInTheDocument();
        expect(img).toBeInTheDocument();
    });

    it("renders current step ", () => {
        const steps: Steps[] = [
            {
                id: 2,
                title: "Credit card",
                state: "current",
            },
        ];
        render(<StepperBar steps={steps} />);

        const title = screen.getByText(steps[0].title);
        const img = screen.getByAltText(steps[0].state);

        expect(title).toBeInTheDocument();
        expect(img).toBeInTheDocument();
    });

    it("renders incompleted step ", () => {
        const steps: Steps[] = [
            {
                id: 3,
                title: "Summary",
                state: "incompleted",
            },
        ];
        render(<StepperBar steps={steps} />);

        const title = screen.getByText(steps[0].title);
        const img = screen.queryByAltText(steps[0].state);

        expect(title).toBeInTheDocument();
        expect(img).toBe(null);
    });
});
