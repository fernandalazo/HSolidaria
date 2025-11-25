import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header";

describe("Header - badge del carrito", () => {

  test("debería mostrar el contador incluso cuando el carrito está vacío", () => {
    const cart = [];

    render(
      <Header
        cart={cart}
        removeFromCart={() => {}}
        decreaseQuantity={() => {}}
        increaseQuantity={() => {}}
        clearCart={() => {}}
        onOpenLogin={() => {}}
        onOpenRegister={() => {}}
      />
    );
    
    expect(screen.getByText("0")).toBeInTheDocument();
  });

});
