import { VENUES } from '@/data/venues'

export const runtime = 'nodejs'

export async function GET() {
  return Response.json({
    ok: true,
    venueCount: Object.keys(VENUES).length,
  })
}
