import { useDispatch } from "react-redux"


export const Footer = ({value}) => {
    const dispatch = useDispatch()
  
    return (
    <footer className="mt-40 bg-red-950 text-white">{value}
    
    <button
          onClick={() => {
            dispatch({
              type: 'increment',
            });
          }}
        >
          +
        </button>
    </footer>
    
    );

   
};