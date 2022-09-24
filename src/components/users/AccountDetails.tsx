import useSWR from 'swr';
import type { Account } from '../../types/types';
import { LabelInput } from './LabelInput';
interface Props {
  userId: number;
}
export function AccountDetails({ userId }: Props) {
  const { data } = useSWR<Account, Error>(
    `${import.meta.env.VITE_BASE_API_URL}/accounts/${userId}?sleep=1000`
  );

  const account = data!;

  return (
    <div className='row'>
      <LabelInput label='Firstname' value={account.firstname} readOnly />
      <LabelInput label='Surname' value={account.surname} readOnly />
      <LabelInput label='Email address' value={account.email} readOnly />
    </div>
  );
}
