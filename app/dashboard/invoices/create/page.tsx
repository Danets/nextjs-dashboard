import Form from '@/app/dashboard/invoices/create-form';
import Breadcrumbs from '@/app/dashboard/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';

export default async function Page() {
  const customers = await fetchCustomers();

  const breadcrumbs = [
    { label: 'Invoices', href: '/dashboard/invoices' },
    {
      label: 'Create Invoice',
      href: '/dashboard/invoices/create',
      active: true,
    },
  ];

  return (
    <main>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Form customers={customers} />
    </main>
  );
}
