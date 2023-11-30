import { useState } from "react";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";
import { AiOutlineLoading } from "react-icons/ai";
import useGlobal from "../../../Hooks/useGlobal";
import { useNavigate, useParams } from "react-router-dom";
import useOldContest from "../../../Hooks/useOldContest";
import uploadImage from "../../../Utils/uploadImage";
import Swal from "sweetalert2";
import useSecureAxios from "../../../Hooks/useSecureAxios";
import { Helmet } from "react-helmet-async";


const UpdateContest = () => {
    const [loading, setLoading] = useState(false);
    const { user } = useGlobal();
    const secureAxios = useSecureAxios();
    const navigate = useNavigate();

    const { id } = useParams();
    const { oldContest, refetch } = useOldContest(id);
    const { contestName: oldContestName, contestPrice: oldContestPrice, contestTask: oldContestTask, contestType: oldContestType, deadline: oldDeadline, description: oldDescription, photoUrl: oldUrl, prizeMoney: oldPrizeMoney, } = oldContest

    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = async (data) => {
        setLoading(true)
        Swal.fire({
            title: "Are you sure?",
            text: `You are going to update ${oldContestName}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const image = data.image[0];
                try {
                    const photoUrl = await uploadImage(image);
                    const updateIt = {
                        creatorEmail: user?.email,
                        creatorName: user?.displayName,
                        creatorImage: user?.photoURL,
                        contestName: data?.contestName || oldContestName,
                        contestPrice: data?.contestPrice || oldContestPrice,
                        contestTask: data?.contestTask || oldContestTask,
                        contestType: data?.contestType || oldContestType,
                        deadline: data?.deadline || oldDeadline,
                        description: data?.description || oldDescription,
                        photoUrl: photoUrl || oldUrl,
                        prizeMoney: data?.prizeMoney || oldPrizeMoney,
                        participateCount: 0,
                        status: 'pending'
                    }
                    const dbRes = await secureAxios.put(`/contests/${id}`, updateIt);
                    if (dbRes?.data?.modifiedCount) {
                        await refetch();
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `Update successful.`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(`/dashboard/creator/myCreations`)
                    }
                    setLoading(false)
                } catch (error) {
                    toast.error(error.message || 'Oops')
                    setLoading(false)
                }
            } else {
                Swal.fire({
                    title: "Cancelled!",
                    text: `You cancelled update for ${oldContestName}`,
                    icon: "error"
                });
                setLoading(false)
            }
        });


    }
    return (
        <div>
            <Helmet>
                <title>Contest Hub | Update contest</title>
            </Helmet>

            <h1 className="text-center font-medium text-lg md:text-2xl">Update {oldContestName}</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 px-5 gap-2 md:gap-x-5 py-3">
                    {/* name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest name</span>
                        </label>
                        <input defaultValue={oldContestName} {...register("contestName")} required type="text" placeholder="Type here" className="input input-bordered " />
                    </div>
                    {/* contest price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest price</span>
                        </label>
                        <input defaultValue={oldContestPrice} {...register("contestPrice")} required type="number" placeholder="Type here" className="input input-bordered " />
                    </div>
                    {/* prize money */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Prize money</span>
                        </label>
                        <input defaultValue={oldPrizeMoney} {...register("prizeMoney")} required type="number" placeholder="Type here" className="input input-bordered " />
                    </div>

                    {/* contest type */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest type</span>
                        </label>
                        <select {...register("contestType")} required defaultValue={oldContestType} className="select select-bordered cursor-pointer">
                            <option disabled value={oldContestType}>{oldContestType}</option>
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
                            required
                            {...register("image")}
                            type="file"
                            accept='image/*'
                            className="file-input file-input-bordered file-input-md file-input-info w-full" />
                    </div>

                    {/* contest deadline */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest Deadline</span>
                        </label>
                        <input defaultValue={oldDeadline} {...register("deadline")} required min={new Date().toISOString().split('T')[0]}
                            type="date"
                            placeholder="Type here"
                            className="input input-bordered " />
                    </div>

                    {/* task */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest Task</span>
                        </label>
                        <textarea defaultValue={oldContestTask} {...register("contestTask")} required className="textarea textarea-bordered h-24" placeholder="Task"></textarea>
                    </div>
                    {/* contest description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest Description</span>
                        </label>
                        <textarea defaultValue={oldDescription} {...register("description")} required className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                    </div>

                </div>
                <div className="text-center py-5">

                    <button type="submit" className="btn">Update contest{loading ? <AiOutlineLoading className=" animate-spin mx-auto text-lg font-extrabold" /> : ''}</button>

                </div>
            </form>

        </div>
    )
}

export default UpdateContest