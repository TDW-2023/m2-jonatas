import { CatProviders } from "../GlobalRedux/catProvider";
import CatLists from "../componentes/catlists";

export default function Home4(){

    return(
        <CatProviders>
            <div className="text-center mx-auto mt-7">
                <CatLists/>
            </div>
        </CatProviders>
    )
}