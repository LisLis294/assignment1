import Image from 'next/image'

const Animal = props => {
    return(
        <div className="flex items-center p-5">
            <Image className="rounded-lg animate-pulse"height={200} width={200} src={`/assignment-data/${props.img}`}></Image>
            <div>
                <h2 className="px-5">{(props.state).charAt(0).toUpperCase()+(props.state).slice(1)} {props.type}</h2>
                <div>
                    <h3 className="px-5">Price: {'\u0024'}{props.adoption_fee}</h3>
                </div>
            </div>
        </div>
    )
}
export default Animal