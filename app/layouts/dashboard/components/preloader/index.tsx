import { CgSpinner } from 'react-icons/cg'

export const PagePreloader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
      <CgSpinner className="h-10 w-10 animate-spin text-white" />
    </div>
  )
}
