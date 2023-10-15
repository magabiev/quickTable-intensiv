type classArg = [boolean, string];
const checkCondition = ([bool, className]: classArg) => (bool ? className : '');

export const cn = (...classesByCondition: (classArg | string)[]): string => {
  return classesByCondition.reduce<string>(
    (acc, el) => `${acc} ${Array.isArray(el) ? checkCondition(el) : el}`,
    ''
  );
};
