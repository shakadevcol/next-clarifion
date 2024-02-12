import "@/assets/css/components/common/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container mx-auto footer__container">
                <div className="footer__info">
                    <div className="footer__copyright">Copyright (c) 2023</div>
                    <div className="footer__vline"></div>
                    <div className="footer__contact">
                        Clarifionsupport@clarifion.com
                    </div>
                </div>
                <div className="footer__encryption">
                    <img
                        src="/img/common/footer/lock.svg"
                        alt="lock"
                        className="footer__encryption-image"
                    />

                    <span>Secure 256-bit SSL encryption.</span>
                </div>
            </div>
        </footer>
    );
}
