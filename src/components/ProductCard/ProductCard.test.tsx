import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from './index.tsx';

const title = 'title';
const price = 10;
const src = 'source';
const calories = 44;

const getRegExp = (props: string | number) => new RegExp(props.toString(), 'i');

describe('Проверка пропсов', () => {
  test('Проверка с передачей пропсов', () => {
    render(
      <ProductCard title={title} src={src} price={price} calories={calories} />
    );
    const getTitle = screen.getByText(getRegExp(title));
    const getPrice = screen.getByText(getRegExp(title));
    const getImage = screen.getByAltText('productImage');
    const getCalories = screen.getByText(getRegExp(title));
    [getCalories, getPrice, getTitle].forEach((el) =>
      expect(el).toBeInTheDocument()
    );
    expect(getImage).toHaveAttribute('src', src);
  });
});
