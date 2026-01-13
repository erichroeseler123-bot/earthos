import { getLiveShows } from '@/data/shows';
import EventsBrowser from '@/components/EventsBrowser';

export default async function Splash() {
  try {
    const shows = await getLiveShows();

    if (!shows || shows.length === 0) {
      return (
        <div className="h-full flex items-center justify-center font-mono text-slate-500 p-20 text-center">
          <div className="animate-pulse tracking-[0.5em] uppercase">No_Active_Nodes_Found_In_Morrison</div>
        </div>
      );
    }

    return <EventsBrowser shows={shows} />;
  } catch (error) {
    return (
      <div className="h-full flex items-center justify-center font-mono text-red-500 p-20 text-center uppercase">
        <p className="font-bold tracking-widest text-xl mb-4">!! DCC_Sync_Collision !!</p>
        <p className="text-slate-500 text-xs">Check SeatGeek API Credentials in .env</p>
      </div>
    );
  }
}
