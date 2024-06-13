export default function SpecButton({label, onClick, clazz}) {

    return (
        <button 
            onClick={(e) => onClick(e)}
            className={`${clazz} bg-softPastel-mintGreen hover:bg-softPastel-lightPink text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}>
                {label}
        </button>
    )
}