import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../ErrorFallback';
import { Loading } from '../Loading';
import { AccountDetails } from './AccountDetails';
import { MovieDetails } from './MovieDetails';

interface Props {
  userId: number;
  movieId: number;
}
export function UserDetails({ userId, movieId }: Props) {
  return (
    <div>
      <h4 className='text-center mt-5'>User details</h4>
      <AccountDetails userId={userId} />
      <h4 className='text-center mt-5'>Favorite movie</h4>
      <MovieDetails movieId={movieId} />
    </div>
  );
}
