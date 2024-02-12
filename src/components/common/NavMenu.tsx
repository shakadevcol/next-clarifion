import "@/assets/css/components/common/navmenu.css";

export default function NavMenu() {
    return (
        <nav className="navmenu container mx-auto ">
            <div className="navmenu__logo">
                <img
                    src="/img/common/navmenu/clarifon.png"
                    alt="clarifon"
                    className="navmenu__logo-img"
                />
            </div>
            <div className="navmenu__sponsors">
                <img
                    src="/img/common/navmenu/sponsors.png"
                    alt="mcafee"
                    className="navmenu__sponsors-img"
                />
            </div>
        </nav>
    );
}
