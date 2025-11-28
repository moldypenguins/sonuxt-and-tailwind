/**
 * @name index.ts
 * @version 2025/11/28
 * @summary Environment
 **/

import type Environment from './env'
import _default from './default'
import _local from './local'

const env: Environment = { ..._default, ..._local }
export default env
