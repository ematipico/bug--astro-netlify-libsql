import { createClient } from "@libsql/client";

export const client = createClient({
    url: 'file:local.db'
})
