import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom"
import CheckoutForm from "./CheckoutForm";
import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../Hooks/useSecureAxios";
import Spinner from "../Components/Spinner";
import { Helmet } from "react-helmet-async";


const stripePromise = loadStripe(import.meta.env.VITE_stripe_payment_pk);
const Payment = () => {
    let { id } = useParams();
    const secureAxios = useSecureAxios();

    const { data: payContest, isPending } = useQuery({
        queryKey: ['paymentContest'],
        queryFn: async () => {
            const res = await secureAxios.get(`/singleContest/${id}`)
            return res?.data;
        }
    })


    if (isPending) return <Spinner />
    return (
        <div>

            <Helmet>
                <title>Contest Hub | Payment</title>
            </Helmet>

            <Elements stripe={stripePromise}>
                <CheckoutForm payContest={payContest} />
            </Elements>
        </div>
    )
}

export default Payment