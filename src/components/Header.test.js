import { render, screen } from "@testing-library/react"
import Header from "./Header"
import { BrowserRouter } from "react-router-dom";
import { netflixLogo } from "../../public/assets/netflixLogo";

//unit testing
describe('It should load Header component', () => {
    it('should test image link loads', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )

        const testImgSrc = screen.getByRole('img');
        expect(testImgSrc.src).toContain(netflixLogo);
    })

})