import { supabase } from "@/services/supabase-client.ts";

export class MembersService {

    list = async () => {
        const { data } = await supabase.from('members').select()
        return data;
    }
}