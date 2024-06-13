export default function PrimaryButton({label, onClick, clazz}) {

    return (
        <button 
            onClick={(e) => onClick(e)}
            className={`${clazz} bg-softPastel-lightPink hover:bg-softPastel-mintGreen text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}>
                {label}
        </button>
    )
}