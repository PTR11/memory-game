import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "../components/Card";
import { CardType } from "../utils/types";

describe("Card Component", () => {
   const mockCallback = jest.fn();

   const defaultCard: CardType = {
      id: "1",
      image: "🐶",
      clicked: false,
      matched: false,
      matchingCardId: "2",
   };

   it("renders the card with a question mark when not clicked", () => {
      render(<Card card={defaultCard} callback={mockCallback} />);

      // Check if the FontAwesome question mark icon is rendered
      const questionIcon = screen.getByTestId("fa-question");
      expect(questionIcon).toBeInTheDocument();
   });

   it("renders the card's image when clicked", () => {
      const clickedCard = { ...defaultCard, clicked: true };
      render(<Card card={clickedCard} callback={mockCallback} />);

      // Check if the card's image is displayed
      const cardImage = screen.getByText("🐶");
      expect(cardImage).toBeInTheDocument();
   });

   it("calls the callback function when the card is clicked", () => {
      render(<Card card={defaultCard} callback={mockCallback} />);
      // Simulate clicking the card
      const questionIcon = screen.getByTestId("fa-question");

      fireEvent.click(questionIcon);

      // Ensure the callback function is called
      expect(mockCallback).toHaveBeenCalledWith(defaultCard);
   });

   it("does not call the callback function if the card is already clicked", () => {
      const clickedCard = { ...defaultCard, clicked: true };
      render(<Card card={clickedCard} callback={mockCallback} />);

      // Simulate clicking the card
      const cardElement = screen.getByText("🐶");
      fireEvent.click(cardElement);

      // Ensure the callback function is not called
      expect(mockCallback).not.toHaveBeenCalled();
   });
});
