import { render, screen } from '@testing-library/react';
import Duration from './index.tsx';
import '@testing-library/jest-dom';

describe('Проверка пропсов', () => {
  test('Проверка без передачи пропсов', () => {
    render(<Duration />);
    const zero = screen.getByText(/0/);
    expect(zero).toBeInTheDocument();
  });

  test('Проверка с передачей пропсов', () => {
    const props = '10';
    render(<Duration minutes={props} />);
    const reg = new RegExp(props, 'i');
    const minutes = screen.getByText(reg);
    expect(minutes).toBeInTheDocument();
  });
});
