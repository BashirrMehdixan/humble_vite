import {useParams} from 'react-router-dom';

const SoftwareDetail = () => {
    const {slug} = useParams();
    return (
        <>
            <div className="container">
                Software detail
            </div>
        </>
    )
}

export default SoftwareDetail;