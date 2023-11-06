import { Children, createContext } from "react"

const CartContext=createContext();




const Context = ({children}) => {
  return (
    <CartContext.Provider>
     {children}
     </CartContext.Provider>
  )
}

export default Context