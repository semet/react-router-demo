import { CreateDomain, DomainListTable } from '@/features/domain-list'

export const DomainListWrapper = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="self-end">
        <CreateDomain />
      </div>
      <DomainListTable />
    </section>
  )
}
