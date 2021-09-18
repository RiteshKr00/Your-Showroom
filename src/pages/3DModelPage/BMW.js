import { Link } from "react-router-dom"
import BMW3D from "../../components/3DModel/BMW3D"

export default function BMWi8() {
    return (
        <div className="w-full h-full">
            <Link to="/" className="m-4">Return home</Link>
            <div className=" flex flex-col items-center">
                <div className="text-2xl md:text-4xl">BMW M3 Sedan</div>
                <div className="text-md md:text-lg m-4 text-center">BMW is an iconic luxury car maker head-quartered in Germany, who has a large fleet of models in India. Recently it also added two new variants in its popular M series. Among those two, BMW M Series M3 Sedan is the four door variant, which is powered by a 3.0-litre petrol engine under the hood. This work is based on "BMW M3 Sedan topaz blue car" (https://sketchfab.com/3d-models/bmw-m3-sedan-topaz-blue-car-981462d1149b48628fc3d8d993a3f959) by stefrolland (https://sketchfab.com/stefrolland) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)</div>
            </div>
            <BMW3D />
        </div>
    )
}
