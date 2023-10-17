import { cn } from './cn.ts';
const firstGroup = 'first second third';
const secondGroup = 'fourth fifth sixth';

describe('Проверка утилиты классов', () => {
  test('Проверка классов без условий', () => {
    const classNames = cn(firstGroup, secondGroup);
    expect(classNames).toBe(`${firstGroup} ${secondGroup}`);
  });

  test('Проверка классов с условиями', () => {
    const classNames = cn([true, firstGroup], [false, secondGroup]);
    expect(classNames).toBe(firstGroup);
  });
});
