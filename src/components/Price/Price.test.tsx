import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Price from './index.tsx';

describe('Проверка пропсов', () => {
  test('Проверка с передачей пропсов', () => {
    const props = 10;
    render(<Price amount={props} />);
    const reg = new RegExp(props.toString(), 'i');
    const amount = screen.getByText(reg);
    expect(amount).toBeInTheDocument();
  });
});
