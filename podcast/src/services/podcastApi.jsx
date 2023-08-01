// This file contains utility functions to interact with the podcast API

const API_BASE_URL = 'https://podcast-api.netlify.app';

export async function fetchShows() {
  try {
    const response = await fetch(`${API_BASE_URL}/shows`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching shows:', error);
    throw error;
  }
}

export async function fetchShowById(showId) {
  try {
    const response = await fetch(`${API_BASE_URL}/shows/${showId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching show:', error);
    throw error;
  }
}

export async function fetchShowSeasonById(showId, seasonId) {
  try {
    const response = await fetch(`${API_BASE_URL}/shows/${showId}/seasons/${seasonId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching show season:', error);
    throw error;
  }
}

// Other utility functions for interacting with the podcast API can be added here
