import Text from "@components/text/text";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Text lead", () => {
  const { getByText } = render(<Text type="lead">text lead</Text>);
  expect(getByText("text lead")).toBeInTheDocument();
});

test("Text large", () => {
  const { getByText } = render(<Text type="large">text large</Text>);
  expect(getByText("text large")).toBeInTheDocument();
});

test("Text base", () => {
  const { getByText } = render(<Text type="lead">text base</Text>);
  expect(getByText("text base")).toBeInTheDocument();
});

test("Text small", () => {
  const { getByText } = render(<Text type="lead">text small</Text>);
  expect(getByText("text small")).toBeInTheDocument();
});

test("Text extrasmall", () => {
  const { getByText } = render(<Text type="extrasmall">text extrasmall</Text>);
  expect(getByText("text extrasmall")).toBeInTheDocument();
});

test("Text extraextrasmall", () => {
  const { getByText } = render(
    <Text type="extraextrasmall">text extraextrasmall</Text>,
  );
  expect(getByText("text extraextrasmall")).toBeInTheDocument();
});
