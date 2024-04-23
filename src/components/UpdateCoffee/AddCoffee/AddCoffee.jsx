import { useState } from "react";
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {
            name,
            quantity,
            supplier,
            test,
            category,
            details,
            photo,
        };
        console.log(newCoffee);
        form.name.value = "";
        form.quantity.value = "";
        form.supplier.value = "";
        form.test.value = "";
        form.category.value = "";
        form.details.value = "";
        form.photo.value = "";

        fetch("http://localhost:3000/coffee", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newCoffee),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                    
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    return (
        <div className="w-4/5 mx-auto bg-gray-200 p-10">
            <h2 className="text-3xl font-extrabold">Add New Coffee</h2>
            <form onSubmit={handleCoffee}>
                <div className="mt-10 flex gap-5 justify-center items-center">
                    <div className="w-full">
                        <div className="">
                            <span className="">Name</span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Coffee Name"
                            className=" w-full input input-bordered "
                        />
                    </div>
                    <div className="w-full">
                        <div className="">
                            <span className="">Available Quantity</span>
                        </div>
                        <input
                            type="number"
                            name="quantity"
                            placeholder="Enter Available quantity"
                            className=" w-full input input-bordered "
                        />
                    </div>
                </div>
                <div className="mt-10 flex gap-5 justify-center items-center">
                    <div className="w-full">
                        <div className="">
                            <span className="">Supplier</span>
                        </div>
                        <input
                            type="text"
                            name="supplier"
                            placeholder="Enter Coffee Supplier"
                            className=" w-full input input-bordered "
                        />
                    </div>
                    <div className="w-full">
                        <div className="">
                            <span className="">Taste</span>
                        </div>
                        <input
                            type="text"
                            name="test"
                            placeholder="Enter Coffee Taste"
                            className=" w-full input input-bordered "
                        />
                    </div>
                </div>
                <div className="mt-10 flex gap-5 justify-center items-center">
                    <div className="w-full">
                        <div className="">
                            <span className="">Category</span>
                        </div>
                        <input
                            type="text"
                            name="category"
                            placeholder="Enter Coffee Category"
                            className=" w-full input input-bordered "
                        />
                    </div>
                    <div className="w-full">
                        <div className="">
                            <span className="">Details</span>
                        </div>
                        <input
                            type="text"
                            name="details"
                            placeholder="Enter Coffee Details"
                            className=" w-full input input-bordered "
                        />
                    </div>
                </div>
                <div className="mt-10 flex gap-5 justify-center items-center">
                    <div className="w-full">
                        <div className="">
                            <span className="">Photo URL</span>
                        </div>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Enter Photo URL"
                            className=" w-full input input-bordered "
                        />
                    </div>
                </div>
                <div className="mt-5">
                    <button className="btn btn-primary w-full">
                        Add Coffee
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;
