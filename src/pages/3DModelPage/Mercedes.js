import { Link } from "react-router-dom"
import Mercedes3D from "../../components/3DModel/Mercedes3D"

export default function Mercedes() {
    return (
        <div className="w-full h-full">
        <Link to="/" className="m-4">Return home</Link>
        <div className=" flex flex-col items-center">
            <div className="text-2xl md:text-4xl">Mercedes Benz AMG SL - 65</div>
            <div className="text-md md:text-lg m-4 text-center">The R230 generation of the Mercedes-Benz SL-Class was introduced at the 2001 Frankfurt Motor Show and 2001 Bologna Motor Show, replacing the R129. The R230 underwent revisions in 2006 and 2008, and was superseded by the new SL-Class R231 in 2011. This work is based on "Mercedes Benz AMG SL - 65" (https://sketchfab.com/3d-models/mercedes-benz-amg-sl-65-267dc92df2a3465cb224abf7732be4df) by MEGA MODELS (https://sketchfab.com/rathnayakakalindu) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)</div>
        </div>
        <Mercedes3D />
    </div>
    )
}
