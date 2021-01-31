import { Attr, CompileOptions } from './models';

export const wrapAttrs = (str?: string) => (str ? `(${str})` : '');

const allowValue = (str: string) => !/[{}_]/.test(str);

export const formatAttrsForTag = (attrs: readonly Attr[], options: CompileOptions) =>
  attrs.reduce<{
    readonly className: string;
    readonly id: string;
    readonly attrs: readonly Attr[];
  }>(
    (acc, { key, value }) => {
      if (key === 'id' && allowValue(value)) {
        return {
          ...acc,
          id: value,
        };
      }
      if (key === 'class' && allowValue(value) && !options.inlineCSS) {
        return {
          ...acc,
          className: value,
        };
      }
      return {
        ...acc,
        attrs: acc.attrs.concat({ key, value }),
      };
    },
    { className: '', id: '', attrs: [] }
  );

const wrapInQuotes = (str: string, options: Pick<CompileOptions, 'doubleQuotes'>) => {
  if (str === undefined) return null;
  if (options.doubleQuotes && str.includes(`"`)) return `'${str}'`;
  if (options.doubleQuotes && !str.includes(`"`)) return `"${str}"`;
  return str.includes(`'`) ? `"${str}"` : `'${str}'`;
};

const keepMultilineAttrValue = (str: string) => str?.replace(/\n/g, '\\\n');

export const compileAttrs = (attrs: readonly Attr[], options: CompileOptions) =>
  attrs
    .map(({ key, value }) =>
      [key, keepMultilineAttrValue(wrapInQuotes(value, options))]
        .filter(str => str != null)
        .join('=')
    )
    .join(options.attrSep);
