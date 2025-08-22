import { supabase } from "@/services/supabase-client.ts";

export class EventsService {

   list = async () => {
        const { data } = await supabase.from('events').select()
        return data.map((event: any) => {
            return {
                ...event,
                datetime: new Date(event.datetime)
            }
        })
    }
}