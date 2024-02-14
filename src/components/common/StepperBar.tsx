import "@/assets/css/components/common/stepper-bar.css";

type Props = {
    steps: Steps[];
};

export default function StepperBar(props: Props) {
    return (
        <div className="stepper">
            <div className="stepper__items">
                {props.steps.map((step) => {
                    return (
                        <div key={step.id} className="stepper__item">
                            <div
                                className={`stepper__circle stepper__circle--${step.state}`}
                            >
                                {step.state !== "incompleted" && (
                                    <img
                                        src="/img/common/stepper/check-mark.svg"
                                        alt={step.state}
                                        className="stepper__icon"
                                    />
                                )}
                                {step.state === "incompleted" && step.id}
                            </div>
                            <span className="stepper__item-number">
                                Step {step.id}:
                            </span>
                            <span className="stepper__item-title">
                                {step.title}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
