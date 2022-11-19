import { useState, useEffect } from "react";
import { getServices } from "../api/services";
import Item from "../components/item";

const Home = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorState, setErrorState] = useState({ hasError: false });

  useEffect(() => {
    setLoading(true);
    getServices().then((data) => {
      setServices(data);
      setLoading(false);
    }).catch(handleError)
  }, [])

  
  const handleError = (err) => {
    setErrorState({ hasError: true, message: err.message });
  };

  return (
    <div data-testid="home">
      <div className="container mx-auto xl:px-28 mt-8">
        <div className="sm:mb-10 sm:flex sm:justify-between">
          <p className="text-center text-4xl">Lista de servicios</p>
        </div>
        {loading && 
          <div className="flex items-center justify-center ">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
          </div>
        }
        {errorState.hasError && <p className="text-center mt-5 text-xl">{errorState.message}</p>}
        {(services.length > 0)?
        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 md:gap-3 sm:grid-cols-2 sm:gap-2 lg:grid-cols-4 lg:gap-4">
            {services.map((item) => (
              <Item
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div> 
          :
          <p className="text-center mt-5 text-xl">No results found</p>
        }
      </div>
    </div>
  )
}

export default Home;