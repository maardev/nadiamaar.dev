import * as migration_20260501_181131 from './20260501_181131';
import * as migration_20260501_202306 from './20260501_202306';
import * as migration_20260502_145011 from './20260502_145011';
import * as migration_20260502_161020 from './20260502_161020';

export const migrations = [
  {
    up: migration_20260501_181131.up,
    down: migration_20260501_181131.down,
    name: '20260501_181131',
  },
  {
    up: migration_20260501_202306.up,
    down: migration_20260501_202306.down,
    name: '20260501_202306',
  },
  {
    up: migration_20260502_145011.up,
    down: migration_20260502_145011.down,
    name: '20260502_145011',
  },
  {
    up: migration_20260502_161020.up,
    down: migration_20260502_161020.down,
    name: '20260502_161020'
  },
];
