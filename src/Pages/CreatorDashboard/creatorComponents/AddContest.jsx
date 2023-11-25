import { useState } from "react";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";
import { AiOutlineLoading } from "react-icons/ai";
import uploadImage from "../../../Utils/uploadImage";
import useGlobal from "../../../Hooks/useGlobal";
import useSecureAxios from "../../../Hooks/useSecureAxios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddContest = () => {
    const [loading, setLoading] = useState(false);
    const { user } = useGlobal();
    const secureAxios = useSecureAxios();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
    } = useForm()

    const onSubmit = async (data) => {
        setLoading(true)
        console.log(data)

        const image = data.image[0];
        try {
            const photoUrl = await uploadImage(image);
            const contestData = {
                creatorEmail: user?.email,
                creatorName: user?.displayName,
                creatorImage: user?.photoURL,
                contestName: data?.contestName,
                contestPrice: data?.contestPrice,
                contestTask: data?.contestTask,
                contestType: data?.contestType,
                deadline: data?.deadline,
                description: data?.description,
                photoUrl,
                prizeMoney: data?.prizeMoney,
                participateCount: 0,
                status: 'pending'
            }
            const dbRes = await secureAxios.post(`/contests`, contestData)
            if (dbRes?.data?.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Succesfully created contest ${data?.contestName}`,
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
                navigate(`/dashboard/creator/myCreations`)
            }
        } catch (error) {
            toast.error(error.message || 'Oops')
        }

        setLoading(false)
    }

    return (
        <div>
            <h1 className="text-center font-medium text-lg md:text-2xl">Add a contest</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 px-5 gap-2 md:gap-x-5 py-3">
                    {/* name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest name</span>
                        </label>
                        <input {...register("contestName")} required type="text" placeholder="Type here" className="input input-bordered " />
                    </div>
                    {/* contest price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest price</span>
                        </label>
                        <input {...register("contestPrice")} required type="number" placeholder="Type here" className="input input-bordered " />
                    </div>
                    {/* prize money */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Prize money</span>
                        </label>
                        <input {...register("prizeMoney")} required type="number" placeholder="Type here" className="input input-bordered " />
                    </div>

                    {/* contest type */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest type</span>
                        </label>
                        <select {...register("contestType")} required defaultValue={'default'} className="select select-bordered cursor-pointer">
                            <option disabled value={'default'}>Pick one</option>
                            <option value={'Business contest'}>Business contest</option>
                            <option value={'Medical contest'}>Medical contest</option>
                            <option value={'Article writing'}>Article writing</option>
                            <option value={'Gaming contest'}>Gaming contest</option>
                        </select>
                    </div>
                    {/* contest image */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest image</span>
                        </label>
                        <input
                            {...register("image")}
                            required
                            type="file"
                            accept='image/*'
                            className="file-input file-input-bordered file-input-md file-input-info w-full" />
                    </div>

                    {/* contest deadline */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest Deadline</span>
                        </label>
                        <input {...register("deadline")} required min={new Date().toISOString().split('T')[0]}
                            type="date"
                            placeholder="Type here"
                            className="input input-bordered " />
                    </div>

                    {/* task */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest Task</span>
                        </label>
                        <textarea {...register("contestTask")} required className="textarea textarea-bordered h-24" placeholder="Task"></textarea>
                    </div>
                    {/* contest description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest Description</span>
                        </label>
                        <textarea {...register("description")} required className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                    </div>

                </div>
                <div className="text-center py-5">

                    <button type="submit" className="btn">Add contest{loading ? <AiOutlineLoading className=" animate-spin mx-auto text-lg font-extrabold" /> : ''}</button>

                </div>
            </form>

        </div>
    )
}

export default AddContest