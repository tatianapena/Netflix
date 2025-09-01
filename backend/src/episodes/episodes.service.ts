import { Injectable } from '@nestjs/common';
import { supabase } from 'src/supabase/supabase.client';

@Injectable()
export class EpisodesService {
  async getEpisodesByShowId(showId: number) {
    const { data, error } = await supabase
      .from('episodes')
      .select('*')
      .eq('show_id', showId);

    if (error) throw new Error(error.message);
    return data;
  }
}
