'use client';

import { UserCircleIcon } from '@heroicons/react/24/outline';
import { CustomerField } from '../lib/definitions';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Sorting() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('name', term);
    } else {
      params.delete('name');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative">
      <select
        id="sorting"
        name="sorting"
        className="peer mt-2 block cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
        defaultValue=""
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      >
        <option value="" disabled>
          Sorting by
        </option>
        {[
          { name: 'Sorting by Name', value: 'name' },
          { name: 'Sorting by Email', value: 'email' },
          { name: 'Sorting by Date', value: 'date' },
        ].map((date) => (
          <option key={date.name} value={date.value}>
            {date.name}
          </option>
        ))}
      </select>
      <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
    </div>
  );
}
