import {useParams} from "react-router-dom";

const BookDetail = () => {
    const {slug} = useParams();
    return (
        <>
            <div className="container">
                Book detail
            </div>
        </>
    )
}
export default BookDetail;