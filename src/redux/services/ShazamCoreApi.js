import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const ShazamCoreApi = createApi({
  reducerPath: 'ShazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '4efc023aefmsha3ec6904cd068c4p183f55jsn70e8bec70b83'
      );
      headers.set('X-RapidAPI-Host', 'shazam.p.rapidapi.com');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopChartsList: builder.query({ query: () => 'charts/list' }),
    getTopChartsTrack: builder.query({ query: () => 'charts/track' }),
    getSongsByGenre: builder.query({
      query: (genre) => `v1/charts/genre-world?genre_code=${genre}`,
    }),
    getSongsByCountry: builder.query({
      query: (countryCode) => `v1/charts/country?country_code=${countryCode}`,
    }),
    getSongsBySearch: builder.query({
      query: (term) => `search?term=${term}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `v2/artists/details?artist_id=${artistId}`,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `v1/tracks/details?track_id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `v1/tracks/related?track_id=${songid}`,
    }),
  }),
});

export const {
  useGetTopChartsListQuery,
  useGetTopChartsTrackQuery,
  useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = ShazamCoreApi;
