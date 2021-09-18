import { Link } from "react-router-dom"
import Ford3D from "../../components/3DModel/Ford3D"

export default function Ford() {
    return (
        <div className="w-full h-full">
            <Link to="/" className="m-4">Return home</Link>
            <div className=" flex flex-col items-center">
                <div className="text-2xl md:text-4xl">Ford Mustang</div>
                <div className="text-md md:text-lg m-4 text-center">The Ford Mustang is a series of American automobiles manufactured by Ford. In continuous production since 1964, the Mustang is currently the longest-produced Ford car nameplate. Currently in its sixth generation, it is the fifth-best selling Ford car nameplate.</div>
            </div>
            <Ford3D />
        </div>
    )
}
