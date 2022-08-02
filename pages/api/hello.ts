import type { Readable } from 'node:stream';
import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
    api: {
        bodyParser: {
            bodyParser: false,
        },
    },
}

async function buffer(readable: Readable) {
    const chunks = [];
    for await (const chunk of readable) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks);
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const buf = await buffer(req.body);
        const rawBody = buf.toString('utf8');

        // Can do something here...
        res.json({ rawBody });
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}