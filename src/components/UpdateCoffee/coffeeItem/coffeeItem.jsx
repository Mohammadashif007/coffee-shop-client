import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeItem = ({ x }) => {
    const { name, quantity, supplier, test, category, details, photo, _id } = x;
    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffee/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                        }
                    });
            }
        });
    };
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img src={photo} alt="Album" className="w-[200px]" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <div className="join join-vertical">
                        <Link to={`/updateCoffee/${_id}`}> <button className="btn join-item">Edit</button></Link>
                        <button className="btn join-item">View</button>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn join-item"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeItem;
