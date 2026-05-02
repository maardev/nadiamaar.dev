import 'dotenv/config'
import { createLocalReq, getPayload } from 'payload'
import { seed } from './index'
import config from '@payload-config'

const run = async () => {
  const payload = await getPayload({ config })
  const req = await createLocalReq({}, payload)
  await seed({ payload, req })
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
