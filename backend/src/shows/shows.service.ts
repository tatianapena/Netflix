import { Injectable } from '@nestjs/common';
import { supabase } from 'src/supabase/supabase.client';

@Injectable()
export class ShowsService {

  async getAllShowsGroupedByCategory() {
    const { data: categories, error } = await supabase
      .from('categories')
      .select('id, name, shows(*)');
  
    if (error) throw new Error(error.message);
    return categories;
  }

  async getShowDetail(id: number) {
    const { data, error } = await supabase
      .from('shows')
      .select('*, episodes(*)')
      .eq('id', id)
      .single();
  
    if (error) throw new Error(error.message);
    return data;
  }
}
