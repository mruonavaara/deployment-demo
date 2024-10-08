import App from "./App";
import { expect, test } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

test("renders header", () => {
  render(<App />);
  const header = screen.getByText(/My Todolist/i);
  expect(header).toBeInTheDocument();
});

test("add todo", () => {
  render(<App />);
  const desc = screen.getByPlaceholderText("Description");
  fireEvent.change(desc, { target: { value: "Go to coffee" } });
  const date = screen.getByPlaceholderText("Date");
  fireEvent.change(date, { target: { value: "29.01.2023" } });
});

