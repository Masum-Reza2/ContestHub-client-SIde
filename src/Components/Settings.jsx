import { useForm } from "react-hook-form"
import useGlobal from "../Hooks/useGlobal"
import uploadImage from "../Utils/uploadImage";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useSecureAxios from "../Hooks/useSecureAxios";


const Settings = () => {
    const { user, updateUserProfile } = useGlobal();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const secureAxios = useSecureAxios();

    const {
        register,
        handleSubmit,
        reset,
    } = useForm()
    const onSubmit = async (data) => {
        setLoading(true)
        const image = data.image[0];
        try {
            const photoUrl = await uploadImage(image);
            const name = data?.name;
            await updateUserProfile(name, photoUrl);
            await Swal.fire({
                position: "center",
                icon: "success",
                title: "Profile updated!",
                showConfirmButton: false,
                timer: 1500
            });
            reset();
            navigate('/dashboard/user/profile/user')
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    const handlePromotion = async () => {

        Swal.fire({
            title: "Are you sure?",
            text: "Sending promotion request!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "confirm!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await secureAxios.put(`/promotionRequest/${user?.email}`)
                if (res?.data?.modifiedCount === 0) {
                    Swal.fire({
                        position: "center",
                        icon: "info",
                        title: "Already requested!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                if (res?.data?.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }

    return (
        <div>
            <h1 className="text-center font-bold text-lg md:text-xl mt-2">Settings</h1>
            <div className="min-h-[80vh] flex flex-col items-center justify-center px-5 space-y-3">
                <h1 className="text-center font-bold text-lg md:text-xl mt-2">Update profile</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your name.</span>
                        </label>
                        <input required type="text" {...register("name")} defaultValue={user?.displayName} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <label className="label">
                        <span className="label-text">Upload new profile.</span>
                    </label>
                    <input
                        required
                        {...register("image")}
                        type="file"
                        accept='image/*'
                        className="file-input file-input-bordered w-full max-w-xs" />
                    <div className="text-center py-5">
                        <button className="btn btn-sm">Submit {loading && <AiOutlineLoading className="text-black animate-spin mx-auto text-lg font-extrabold" />}</button>
                    </div>
                </form>
                <button onClick={handlePromotion} className="btn btn-block">Request for promotion</button>
            </div>
        </div>
    )
}

export default Settings