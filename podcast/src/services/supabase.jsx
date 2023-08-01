// This file contains utility functions to interact with the Supabase API for user authentication and favourites storage

import { createClient } from '@supabase/supabase-jsx';

const supabaseUrl = 'https://sejcxyjexkiqoxnlqfzy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlamN4eWpleGtpcW94bmxxZnp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA3OTEzNDQsImV4cCI6MjAwNjM2NzM0NH0.dyVKH1XcSKjSaLoR7Lj_cLm2nff08Nhzi-OeaQajaW4';

const supabase = createClient(supabaseUrl, supabaseKey);

export async function loginUser(email, password) {
  try {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) throw error;
    return user;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
}

export async function logoutUser() {
  try {
    await supabase.auth.signOut();
  } catch (error) {
    console.error('Error logging out user:', error);
    throw error;
  }
}

export async function fetchUserFavourites(userId) {
  try {
    const { data, error } = await supabase.from('favourites').select().eq('user_id', userId);
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching user favourites:', error);
    throw error;
  }
}

// Other utility functions for managing user favourites in Supabase can be added here
