import { render } from "@testing-library/react";
import { InfoCard } from "./index";


describe("NavItem components", () => {
  it("should render correctly", () => {
    const { container } = render(<InfoCard  />);

    expect(container).toMatchSnapshot();
  });

 
});
