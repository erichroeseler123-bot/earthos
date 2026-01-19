import { venues } from '@/data/venues'

export const runtime = 'nodejs'

export async function GET(request: Request) {
  return Response.json({
    ok: true,
    venueCount: Object.keys(venues).length,
  })
}

