import { useNavigate } from "react-router-dom";


const Friend = (props) => {
    const { name, phone, website, company,id } = props.friend;
    const navigate = useNavigate();
    const showFriendDetails = () => {
        const path = `/friend/${id}`;
        navigate(path);
    }
    
    return (
        <div className="bg-green-500 m-6 text-left px-3 py-5 rounded text-green-200 ">
            <div className="flex items-center justify-center ">
                <img src="https://via.placeholder.com/600/92c952" alt="" className="w-20 h-20 rounded-full  -top-10 relative" />
            </div>
            <h1>Name: {name}</h1>
            <h1>Mobile: {phone}</h1>
            <h1>Website: {website}</h1>
            <h1>Company: {company.name}</h1>
            <button onClick={showFriendDetails} className="bg-green-700  py-2 mt-2 w-full rounded hover:bg-green-900">Details</button>
        </div>
    );
};

export default Friend;