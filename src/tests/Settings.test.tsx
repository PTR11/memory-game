import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Settings from "../Settings";

describe("Settings Component", () => {
   const mockOnClose = jest.fn();
   const mockOnSave = jest.fn();
   const mockSetPairs = jest.fn();
   const mockSetCountdown = jest.fn();

   const defaultProps = {
      isOpen: true,
      pairs: 12,
      countdown: 60,
      setPairs: mockSetPairs,
      setCountdown: mockSetCountdown,
      onClose: mockOnClose,
      onSave: mockOnSave,
   };

   it("renders the settings popup with default values", () => {
      render(<Settings {...defaultProps} />);

      // Check if the title is rendered
      expect(screen.getByText("Game settings")).toBeInTheDocument();

      // Check if the input fields are rendered with default values
      expect(screen.getByDisplayValue("12")).toBeInTheDocument(); // Pairs input
      expect(screen.getByDisplayValue("60")).toBeInTheDocument(); // Countdown input

      // Check if the save button is rendered
      expect(screen.getByText("SAVE SETTINGS")).toBeInTheDocument();
   });

   it("calls setPairs when the pairs input is changed", () => {
      render(<Settings {...defaultProps} />);

      const pairsInput = screen.getByDisplayValue("12");
      fireEvent.change(pairsInput, { target: { value: "10" } });

      expect(mockSetPairs).toHaveBeenCalledWith(10);
   });

   it("calls setCountdown when the countdown input is changed", () => {
      render(<Settings {...defaultProps} />);

      const countdownInput = screen.getByDisplayValue("60");
      fireEvent.change(countdownInput, { target: { value: "45" } });

      expect(mockSetCountdown).toHaveBeenCalledWith(45);
   });

   it("calls onSave with the correct values when the save button is clicked", () => {
      render(<Settings {...defaultProps} />);

      const saveButton = screen.getByText("SAVE SETTINGS");
      fireEvent.click(saveButton);

      expect(mockOnSave).toHaveBeenCalledWith(12, 60);
   });

   it("calls onClose when the close button is clicked", () => {
      render(<Settings {...defaultProps} />);

      const closeButton = screen.getByText("×");
      fireEvent.click(closeButton);

      expect(mockOnClose).toHaveBeenCalled();
   });
});
