import useSWR from 'swr';
import type { Movie } from '../../types/types';
import { LabelInput } from './LabelInput';
import { LabelTextarea } from './LabelTextarea';

interface Props {
  movieId: number;
}
export function MovieDetails({ movieId }: Props) {
  const { data } = useSWR<Movie, Error>(
    `${import.meta.env.VITE_BASE_API_URL}/top-rated-movies/${movieId}?sleep=500`
  );

  const movie = data!;

  return (
    <div className='row'>
      <LabelInput label='Title' value={movie?.title} readOnly />
      <LabelInput label='Release date' value={movie.release_date} readOnly />
      <LabelTextarea
        label='Overview'
        value={movie.overview}
        readOnly
        rows={5}
      />
    </div>
  );
}
