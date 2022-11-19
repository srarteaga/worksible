import Image from './image';

const Item = ({item}) => {

  const { title, type, description, price, url } = item;

  return (
    <div className="mt-8">
      <div className="max-w-sm rounded border border-gray overflow-hidden shadow-lg h-full">
        <div className="flex justify-center w-full mt-6">
          <div className="h-52" >
            <Image 
              type={type}
              title={title}
            />
          </div>
        </div>
        <div>
          <div className="font-medium text-lg text-center mb-2">
            <span className="font-extrabold">{title}</span>
          </div>
        </div>
         <p className="text-sm px-4 font-semibold text-gray-700 mb-4">{description}</p>
          {price ?
            <div className="flex justify-between items-center px-6 pb-4 text-xs">
              <span className="bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">Precio: € {price}</span>
                <a 
                  href={url}
                  className="bg-blue-500 hover:bg-blue-700 text-base text-white font-semibold py-2 px-3 rounded focus:outline-none focus:shadow-outline" 
                  target="_blank"
                  >
                  Ver
                </a>
            </div>
          :
          <div className="flex justify-center items-center px-6 pb-4 text-xs">
            <span className="bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">not available</span>
          </div>
        }
      </div>
    </div>
  );
}


export default Item;