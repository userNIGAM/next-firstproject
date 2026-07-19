import ResourceCard from "../components/ResourcesCard"
import {resources} from "../data/data"

export default function Resources() {
    return(
        <>
            <div>
                <div>
                    <h2>Resources</h2>
                    <div>
                        {
                            resources.map((item)=>(
                                <ResourceCard key={item.id} resource={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}