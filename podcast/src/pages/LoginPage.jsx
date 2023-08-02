// // This file contains utility functions to interact with the Supabase API for user authentication and favourites storage

// import { createClient } from '@supabase/supabase-jsx';

// const supabaseUrl = 'https://sejcxyjexkiqoxnlqfzy.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlamN4eWpleGtpcW94bmxxZnp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA3OTEzNDQsImV4cCI6MjAwNjM2NzM0NH0.dyVKH1XcSKjSaLoR7Lj_cLm2nff08Nhzi-OeaQajaW4';

// const supabase = createClient(supabaseUrl, supabaseKey);

// export async function loginUser(email, password) {
//   try {
//     const { user, error } = await supabase.auth.signIn({ email, password });
//     if (error) throw error;
//     return user;
//   } catch (error) {
//     console.error('Error logging in user:', error);
//     throw error;
//   }
// }

// export async function logoutUser() {
//   try {
//     await supabase.auth.signOut();
//   } catch (error) {
//     console.error('Error logging out user:', error);
//     throw error;
//   }
// }

// export async function fetchUserFavourites(userId) {
//   try {
//     const { data, error } = await supabase.from('favourites').select().eq('user_id', userId);
//     if (error) throw error;
//     return data;
//   } catch (error) {
//     console.error('Error fetching user favourites:', error);
//     throw error;
//   }
// }

// export async function addFavourite(userId, showId) {
//   try {
//     const { data, error } = await supabase.from('favourites').insert({
//       user_id: userId,
//       show_id: showId,
//     });
//     if (error) throw error;
//     return data;
//   } catch (error) {
//     console.error('Error adding favourite:', error);
//     throw error;
//   }
// }

// export async function removeFavourite(userId, showId) {
//   try {
//     const { data, error } = await supabase.from('favourites').delete().eq('user_id', userId).eq('show_id', showId);
//     if (error) throw error;
//     return data;
//   } catch (error) {
//     console.error('Error removing favourite:', error);
//     throw error;
//   }
// }

// // Other utility functions for managing user favourites in Supabase can be added here

// This file contains utility functions to interact with the Supabase API for user authentication and favourites storage

import { createClient } from '@supabase/supabase-jsx';

const supabaseUrl = 'https://sejcxyjexkiqoxnlqfzy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlamN4eWpleGtpcW94bmxxZnp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA3OTEzNDQsImV4cCI6MjAwNjM2NzM0NH0.dyVKH1XcSKjSaLoR7Lj_cLm2nff08Nhzi-OeaQajaW4';

const supabase = createClient(supabaseUrl, supabaseKey);
let favoritesSubscription; // Keep track of the favorites subscription

// Function to handle real-time changes to favorites
function onFavoriteChange(payload) {
  // Handle the real-time changes here (e.g., update UI or trigger a callback)
  console.log('Real-time change to favorites:', payload);
}

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

    // Subscribe to real-time changes for the user's favorites
    favoritesSubscription = await fetchUserFavourites(userId, onFavoriteChange);

    return data;
  } catch (error) {
    console.error('Error fetching user favourites:', error);
    throw error;
  }
}

export async function addFavourite(userId, showId) {
  try {
    const { data, error } = await supabase.from('favourites').insert({
      user_id: userId,
      show_id: showId,
    });
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error adding favourite:', error);
    throw error;
  }
}

export async function removeFavourite(userId, showId) {
  try {
    const { data, error } = await supabase.from('favourites').delete().eq('user_id', userId).eq('show_id', showId);
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error removing favourite:', error);
    throw error;
  }
}

// Function to fetch the public URL for sharing user favorites
export async function getPublicFavoritesURL(userId) {
  try {
    // Fetch the user's favorites from the database
    const { data, error } = await supabase.from('favourites').select().eq('user_id', userId);
    if (error) throw error;

    // Create a public endpoint or use your server to return the data as JSON
    // Here, we are assuming the server has an endpoint '/api/favorites' that returns JSON
    const publicURL = '/api/favorites'; // Replace this with your actual public endpoint

    return publicURL;
  } catch (error) {
    console.error('Error fetching public URL for sharing favorites:', error);
    throw error;
  }
}
