type Genre ={
    id: number;
    name: string;
}

type ProductionCompany ={
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}

type  ProductionCountry ={
    iso_3166_1: string;
    name: string;
}

type SpokenLanguage ={
    english_name: string;
    iso_639_1: string;
    name: string;
}

interface BelongsToCollection {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
}

export type MovieDetails = {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: BelongsToCollection | null;
    budget: number;
    genres: Genre[];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number | null;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}