import { ColorSchemeName, useColorScheme as _useColorScheme } from 'react-native';

/**
 * @ColorSchemaName  | light | dark
 * use the default of the system
 */
export default function useColorScheme(): NonNullable<ColorSchemeName> {
  return _useColorScheme() as NonNullable<ColorSchemeName>;
}
