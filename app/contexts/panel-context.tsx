import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type FC,
  type PropsWithChildren,
  type SetStateAction
} from 'react'

type PanelContextType = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const PanelContext = createContext<PanelContextType | undefined>(undefined)

const PanelProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <PanelContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </PanelContext.Provider>
  )
}

const usePanel = () => {
  const context = useContext(PanelContext)
  if (context === undefined) {
    throw new Error('usePanel must be used within a PanelProvider')
  }
  return context
}

export { PanelProvider, usePanel }
