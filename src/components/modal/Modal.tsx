import "@/assets/css/components/modal/modal.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import creditCardSchema from "@/validations/creditCardSchema";
import creditCardType, {
    getTypeInfo,
    types as CardType,
} from "credit-card-type";
import { useEffect, useState } from "react";

type Props = {
    showModal: boolean;
    handleCloseModal: () => void;
    handlePrepareTransaction: (cardInfo: {
        cardType: string;
        hiddenCardNumber: string;
    }) => void;
};

export default function Modal(props: Props) {
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
        reset,
    } = useForm<Inputs>({
        resolver: zodResolver(creditCardSchema),
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const cardType = creditCardType(data.cardNumber);
        const hiddenCardNumber = hideCreditCardNumber(data.cardNumber);

        props.handlePrepareTransaction({
            cardType: cardType[0].type,
            hiddenCardNumber: hiddenCardNumber,
        });
    };

    const hideCreditCardNumber = (card: string) => {
        let hideNum = [];

        for (let i = 0; i < card.length; i++) {
            if (i < card.length - 4) {
                hideNum.push("*");
            } else {
                hideNum.push(card[i]);
            }
        }
        return hideNum.join("");
    };

    useEffect(() => {
        if (props.showModal) {
            reset();
        }
    }, [props.showModal]);

    return (
        props.showModal && (
            <div className="modal">
                <div className="modal__content">
                    <div className="modal__header">
                        <h3 className="modal__header-title">
                            Credit card information
                        </h3>
                        <span
                            className="modal__close"
                            onClick={props.handleCloseModal}
                        >
                            &times;
                        </span>
                    </div>

                    <div className="modal__body">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="form"
                        >
                            <div className="form__group">
                                <label
                                    className="form__label"
                                    htmlFor="cardNumber"
                                >
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
                                <p className="form__error">
                                    {errors.cvc?.message}
                                </p>
                            </div>
                            <input
                                type="submit"
                                value="Validate card"
                                className="btn btn--secondary product-button"
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    );
}
