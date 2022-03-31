import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "./Cart";
import '@testing-library/jest-dom/extend-expect';

test("check amount of product", () => {
    render(<Cart
        cartItems={[{
            "id": 10,
            "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
            "price": 109,
            "amount": 109,
        
            "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5\u201d hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
            "rating": {
                "rate": 2.9,
                "count": 470
            }
        }]} 
        addToCart={jest.fn()}
        removeFromCart={jest.fn()}
    />);
    const buttonEl = screen.getByTestId('add_product');
    const item_amount = screen.getByTestId('item_amount');
    userEvent.click(buttonEl);
    expect(item_amount).toHaveTextContent(109);
});

test("check checkout button is disable initially", () => {
    render(<Cart
        cartItems={[{
            "id": 10,
            "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
            "price": 109,
            "amount": 109,
        
            "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5\u201d hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
            "rating": {
                "rate": 2.9,
                "count": 470
            }
        }]} 
        addToCart={jest.fn()}
        removeFromCart={jest.fn()}
    />);
    const buttonCheckout = screen.getByTestId('checkout_button');
    expect(buttonCheckout).toHaveAttribute('disabled');
});