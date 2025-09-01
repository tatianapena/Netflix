import { Injectable } from '@nestjs/common';
import { supabase } from 'src/supabase/supabase.client';

@Injectable()
export class CategoriesService {
  async getAll() {
    const { data, error } = await supabase.from('categories').select('*');
    if (error) throw new Error(error.message);
    return data;
  }

  async getById(id: number) {
    const { data, error } = await supabase
      .from('categories')
      .select('*, shows(*)')
      .eq('id', id)
      .single();
    if (error) throw new Error(error.message);
    return data;
  }
}
