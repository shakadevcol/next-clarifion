import "@/assets/css/components/modal/modal.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import creditCardSchema from "@/validations/creditCardSchema";
import creditCardType, {
    getTypeInfo,
    types as CardType,
} from "credit-card-type";

export default function Modal() {
    type Inputs = {
        cardNumber: string;
        owner: string;
        expirationMonth: number;
        expirationYear: number;
        cvc: string;
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(creditCardSchema),
    });

    function GetCardType(number: string) {
        // visa
        var re = new RegExp("^4");
        if (number.match(re) != null) return "Visa";

        // Mastercard
        // Updated for Mastercard 2017 BINs expansion
        if (
            /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(
                number
            )
        )
            return "Mastercard";

        // AMEX
        re = new RegExp("^3[47]");
        if (number.match(re) != null) return "AMEX";

        // Discover
        re = new RegExp(
            "^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)"
        );
        if (number.match(re) != null) return "Discover";

        // Diners
        re = new RegExp("^36");
        if (number.match(re) != null) return "Diners";

        // Diners - Carte Blanche
        re = new RegExp("^30[0-5]");
        if (number.match(re) != null) return "Diners - Carte Blanche";

        // JCB
        re = new RegExp("^35(2[89]|[3-8][0-9])");
        if (number.match(re) != null) return "JCB";

        // Visa Electron
        re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
        if (number.match(re) != null) return "Visa Electron";

        return "";
    }

    //let car = GetCardType("4222222222222");

    let car = creditCardType("4111111111111111");
    console.log(car);

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__header">
                    <h3 className="modal__header-title">
                        Credit card information
                    </h3>
                    <span className="modal__close">&times;</span>
                </div>

                <div className="modal__body">
                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <div className="form__group">
                            <label className="form__label" htmlFor="cardNumber">
                                Card number
                            </label>
                            <input
                                type="text"
                                className="form__input"
                                id="cardNumber"
                                {...register("cardNumber")}
                            />
                            <p className="form__error">
                                {errors.cardNumber?.message}
                            </p>
                        </div>
                        <div className="form__group">
                            <label className="form__label" htmlFor="owner">
                                Name of owner
                            </label>
                            <input
                                type="text"
                                className="form__input"
                                id="owner"
                                {...register("owner")}
                            />
                            <p className="form__error">
                                {errors.owner?.message}
                            </p>
                        </div>
                        <div className="form__group-inline">
                            <div className="form__group">
                                <label
                                    className="form__label"
                                    htmlFor="expirationMonth"
                                >
                                    Month
                                </label>
                                <input
                                    type="number"
                                    className="form__input"
                                    id="expirationMonth"
                                    {...register("expirationMonth", {
                                        valueAsNumber: true,
                                    })}
                                />
                                <p className="form__error">
                                    {errors.expirationMonth?.message}
                                </p>
                            </div>
                            <div className="form__group">
                                <label
                                    className="form__label"
                                    htmlFor="expirationYear"
                                >
                                    Year
                                </label>
                                <input
                                    type="number"
                                    className="form__input"
                                    id="expirationYear"
                                    {...register("expirationYear", {
                                        valueAsNumber: true,
                                    })}
                                    maxLength={2}
                                />
                                <p className="form__error">
                                    {errors.expirationYear?.message}
                                </p>
                            </div>
                        </div>

                        <div className="form__group">
                            <label className="form__label" htmlFor="cvc">
                                CVC/CVV
                            </label>
                            <input
                                type="password"
                                className="form__input"
                                id="cvc"
                                {...register("cvc")}
                                maxLength={3}
                            />
                            <p className="form__error">{errors.cvc?.message}</p>
                        </div>
                        <input
                            type="submit"
                            value="Validate card"
                            className="btn btn--primary product-button"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
