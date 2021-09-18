import { Link } from "react-router-dom"
import RollsRoyce3D from "../../components/3DModel/RollsRoyce3D"

export default function RollsRoyce() {
    return (
        <div className="w-full h-full">
            <Link to="/" className="m-4">Return home</Link>
            <div className=" flex flex-col items-center">
                <div className="text-2xl md:text-4xl">Rolls Royce Ghost</div>
                <div className="text-md md:text-lg m-4 text-center">The Rolls-Royce Ghost is a full-sized luxury car manufactured by Rolls-Royce Motor Cars. The "Ghost" nameplate, named in honour of the Silver Ghost, a car first produced in 1906, was announced in April 2009 at the Auto Shanghai show. The production model was officially unveiled at the 2009 Frankfurt Motor Show. This work is based on "Rolls Royce Ghost" (https://sketchfab.com/3d-models/rolls-royce-ghost-1f614e803fc24946b83bdc2dd9926d62) by kurojishi (https://sketchfab.com/kurojishi) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)</div>
            </div>
            <RollsRoyce3D />
        </div>
    )
}
