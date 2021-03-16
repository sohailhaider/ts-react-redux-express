import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import { ITunes } from './iTunes';
import { store } from '../../app/store';
import { Provider } from 'react-redux';

test("Render iTunes Search Engine", () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <ITunes />
        </Provider>
      );
    expect(getByTestId('engineTitle')).toBeInTheDocument()
})

test("Render iTunes Search Engine - check all components to be present", () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <ITunes />
        </Provider>
      );
    expect(getByTestId('engineTitle')).toHaveTextContent("iTunes Search Engine")
    expect(getByTestId('searchBtn')).toBeInTheDocument()
    expect(getByTestId('searchBtn')).toBeEnabled()
    expect(getByTestId('searchField')).toBeInTheDocument()
    expect(getByTestId('searchField')).toBeEnabled()
})