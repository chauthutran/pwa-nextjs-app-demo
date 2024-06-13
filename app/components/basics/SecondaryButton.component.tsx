export default function SecondaryButton({label, onClick, clazz}) {

    return (
        <button 
            onClick={(e) => onClick(e)}
            className={`${clazz} bg-softPastel-lightBlue hover:bg-softPastel-lavender text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}>
                {label}
        </button>
    )
}