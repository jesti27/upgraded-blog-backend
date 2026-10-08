import * as migration_20260925_091653 from './20260925_091653';
import * as migration_20260928_121709 from './20260928_121709';

export const migrations = [
  {
    up: migration_20260925_091653.up,
    down: migration_20260925_091653.down,
    name: '20260925_091653',
  },
  {
    up: migration_20260928_121709.up,
    down: migration_20260928_121709.down,
    name: '20260928_121709'
  },
];
