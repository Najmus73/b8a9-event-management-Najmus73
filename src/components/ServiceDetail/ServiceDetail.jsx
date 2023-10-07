import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetailPage from "../ServiceDetailsPage/ServiceDetailsPage";

const ServiceDetail = () =>{

    const data_service = useLoaderData()
    
    const {id} = useParams()
 
    const service = data_service.find(data=>data.id == id);

    return(
        <div>
             <ServiceDetailPage service={service}></ServiceDetailPage>
        </div>
    )
}

export default ServiceDetail;