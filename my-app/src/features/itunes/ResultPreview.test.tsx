import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import ResultPreview from './ResultPreview'

test("Search Result single Preview Renders", () => {
    const { getByTestId } = render(<ResultPreview />);
    expect(getByTestId('resultPreview')).toBeInTheDocument()
});
test("Search Result single - Verify Artist Name", () => {
    const { getByTestId } = render(<ResultPreview 
        artistName="Alan Walker"
        />);
    expect(getByTestId('artistName')).toHaveTextContent("Alan Walker");
});
test("Search Result single - Verify collection Price & currency", () => {
    const { getByTestId } = render(<ResultPreview
        collectionPrice={13}
        currency="GBP"
        />);
    expect(getByTestId('collectionPriceCurrency')).toHaveTextContent("13 GBP");
});
test("Search Result single - Verify trackName", () => {
    const { getByTestId } = render(<ResultPreview
        trackName="RACE track"
        />);
    expect(getByTestId('trackName')).toHaveTextContent("RACE track");
});
test("Search Result single - Verify collectionNameCountry", () => {
    const { getByTestId } = render(<ResultPreview
        collectionName="The Great Collection"
        country="USA"
        />);
        expect(getByTestId('collectionNameCountry')).toHaveTextContent("The Great Collection - USA");
});
test("Search Result single - Verify type audiobook", () => {
    const { getByTestId } = render(<ResultPreview
        type="audiobook"
        />);
        expect(getByTestId('type')).toHaveTextContent("audiobook");
});
test("Search Result single - Verify type track-song", () => {
    const { getByTestId } = render(<ResultPreview
        type="track - song"
        />);
        expect(getByTestId('type')).toHaveTextContent("track - song");
});