import { render, screen } from "@testing-library/react"
import SignupLandingPage from "./SignupLandingPage"
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom/'

//unit testing
describe('Signup landing page component', () => {
    it('should render the component into the dom', () => {
        render(
            <BrowserRouter>
                <SignupLandingPage />);
            </BrowserRouter>
        )
        const component = screen.getByText('Unlimited movies, TV shows, and more');
        expect(component).toBeInTheDocument();
    });

    it('should load hero banner image', () => {
        render(
            <BrowserRouter>
                <SignupLandingPage />
            </BrowserRouter>
        )
        const heroImage = screen.getByAltText('hero banner');
        expect(heroImage).toBeInTheDocument();
    });

})