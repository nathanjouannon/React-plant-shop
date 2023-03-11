import SunLogo from '../assets/sun.svg'
import WaterLogo from '../assets/water.svg'


const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

function CareScale({scaleValue, careType}) {
    const range = [1,2,3];
    const scaleType = careType === "water" ? (
            <img src={WaterLogo} alt='water-icon' />
        ) : (
            <img src={SunLogo} alt='sun-icon' />
        )

    return (
        <div onClick={() => alert(`Cette plante requiert ${quantityLabel[scaleValue]} ${ careType === 'light' ? 'de Lumière' : "d'arrosage"}`)}>
            {range.map((rangeElmt) => 
                scaleValue >= rangeElmt ? <span key={rangeElmt.toString()}>{scaleType}</span>: null
            )}
        </div>
    )
};

export default CareScale; 