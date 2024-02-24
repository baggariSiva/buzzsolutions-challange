import { render, screen } from "@testing-library/react";
import ImageContainer from "../";

describe("ImageContainer", () => {
  it("renders without crashing", () => {
    render(<ImageContainer searchQuery="test" />);
    expect(screen.getByText(/No images found/i)).toBeInTheDocument();
  });

    it("matches snapshot", () => {
        const { asFragment } = render(<ImageContainer searchQuery="test" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("displays images when api data is fetched", async () => {
        const mockData = {
            photos: {
                page: 1,
                pages: 1,
                perpage: 10,
                photo: [
                    {
                        id: "1",
                        title: "test1",
                        url_c: "http://test1.com",
                    },
                    {
                        id: "2",
                        title: "test2",
                        url_c: "http://test2.com",
                    },
                ],
                total: 2,
            },
        };
        jest.spyOn(global, "fetch").mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockData),
            ok: true,
        } as any);

        render(<ImageContainer searchQuery="test" />);
        expect(await screen.findByAltText("test1")).toBeInTheDocument();
        expect(await screen.findByAltText("test2")).toBeInTheDocument();
    });

    it("displays no images found when api data is empty", async () => {
        const mockData = {
            photos: {
                page: 1,
                pages: 1,
                perpage: 10,
                photo: [],
                total: 0,
            },
        };
        jest.spyOn(global, "fetch").mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockData),
            ok: true,
        } as any);

        render(<ImageContainer searchQuery="test" />);
        expect(await screen.findByText(/No images found/i)).toBeInTheDocument();
    });
});
