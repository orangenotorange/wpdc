import { supabase } from "@/services/supabase-client.ts";

export type Event = {
    id: string
    name: string
    datetime: Date
    location: string
    description: string
}

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
    upsert  = async (event: Event) => {
        const { data, error } = await supabase.from('events').upsert(event).select()
        return data
    }
}