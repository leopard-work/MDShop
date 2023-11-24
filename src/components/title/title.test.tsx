import Title from "@components/title/title";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("H1 title", () => {
  const { getByText } = render(<Title type="h1">title 1</Title>);
  expect(getByText("title 1")).toBeInTheDocument();
});

test("H2 title", () => {
  const { getByText } = render(<Title type="h2">title 2</Title>);
  expect(getByText("title 2")).toBeInTheDocument();
});

test("H3 title", () => {
  const { getByText } = render(<Title type="h3">title 3</Title>);
  expect(getByText("title 3")).toBeInTheDocument();
});

test("H4 title", () => {
  const { getByText } = render(<Title type="h4">title 4</Title>);
  expect(getByText("title 4")).toBeInTheDocument();
});

test("H5 title", () => {
  const { getByText } = render(<Title type="h5">title 5</Title>);
  expect(getByText("title 5")).toBeInTheDocument();
});

test("H6 title", () => {
  const { getByText } = render(<Title type="h6">title 6</Title>);
  expect(getByText("title 6")).toBeInTheDocument();
});
