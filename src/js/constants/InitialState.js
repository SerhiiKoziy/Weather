export const INITIAL_STATE = {


    data: {
        currentCategory: 'all',
        categories:['all', 'audiobook', 'ebook', 'movie', 'music', 'musicVideo', 'podcast', 'tvShow', 'shortFilm', 'software'],

        categoriesEntities:{
            movie:['movieArtist', 'movie'],
            podcast:['podcastAuthor', 'podcast'],
            music:['musicArtist', 'musicTrack', 'album', 'musicVideo', 'mix'],
            musicVideo:['musicArtist', 'musicVideo'],
            audiobook:['audiobookAuthor', 'audiobook'],
            shortFilm:['shortFilmArtist', 'shortFilm', 'album', 'musicVideo', 'mix'],
            tvShow:['tvEpisode', 'tvSeason'],
            software:['software', 'iPadSoftware', 'macSoftware'],
            ebook:['ebook'],
            all:['movie', 'album', 'allArtist', 'podcast', 'musicVideo', 'mix', 'audiobook', 'tvSeason', 'allTrack'],
        },
    },


};
