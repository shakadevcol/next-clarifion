import "@/assets/css/components/product/product-button.css";

type Props = {
    handleShowModal: () => void;
};
export default function ProductButton(props: Props) {
    return (
        <button
            onClick={props.handleShowModal}
            className="btn btn--primary product-button"
        >
            Pay with credit card
            <img
                src="/img/common/button/right-arrow.svg"
                alt="icon"
                className="btn__icon"
            />
        </button>
    );
}
