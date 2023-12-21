import Select, { type Props } from 'react-select';

import { styles } from '../configs/react-select-styles.config';

export function SelectInput({ ...rest }: Props) {
  return <Select styles={styles} {...rest} />;
}
